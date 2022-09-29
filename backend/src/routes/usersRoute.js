const express = require("express");
const router = express.Router();
const {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require("../controllers/UsersController");
const verifyToken = require("../utils/verifyToken");

router.get("/check", verifyToken, (req, res, next) => {
  res.send("hello user,you are logged in");
});

//CREATE
router.post("/", createUser);

//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET
router.get("/:id", getUser);

//GET ALL
router.get("/", getUsers);

module.exports = router;
