const User = require("../models/user");

const register = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    return res.status(200).send("User has been registered.");
  } catch (e) {
    next(e);
  }
};

module.exports = { register };
