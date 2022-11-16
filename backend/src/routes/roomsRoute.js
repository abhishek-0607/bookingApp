const express = require("express");
const {
  createRoom,
  deleteRoom,
  updateRoom,
  getRoom,
  getRooms,
  updateRoomAvailability,
} = require("../controllers/roomsControllers");
const router = express.Router();

const { verifyAdmin } = require("../utils/verifyToken");

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//GET
router.get("/:id", getRoom);

//GET ALL
router.get("/", getRooms);

module.exports = router;
