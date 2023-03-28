const User = require("../models/user");
const bcrypt = require("bcryptjs");
const createError = require("../utils/error");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    return res.status(200).send("User has been registered.");
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return next(createError(404, "username not found!!!"));
    }

    const isPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isPassword) {
      return next(createError(400, "wrong username or password!"));
    }
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.KEY,
      {
        expiresIn: "2h", // expires in 24 hours
      }
    );
    const { password, isAdmin, ...otherDetails } = user._doc;
    return res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...otherDetails });
  } catch (e) {
    next(e);
  }
};

module.exports = { register, login };
