const User = require("../models/user");

const createUser = async (req, res, next) => {
  const user = new User(req.body);
  try {
    const newUser = await user.save();
    res.status(200).json(newUser);
  } catch (e) {
    // res.status(500).json({ status: "failed", message: e.message });
    next(e);
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (e) {
    res.status(500).json({ status: "failed", message: e.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("user hase been deleted");
  } catch (e) {
    res.status(500).json({ status: "failed", message: e.message });
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    // res.status(500).json({ status: "failed", message: e.message });
    next(e);
  }
};
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (e) {
    //   res.status(500).json({ status: "failed", message: e.message });
    next(e);
  }
};
module.exports = { createUser, updateUser, deleteUser, getUser, getUsers };
