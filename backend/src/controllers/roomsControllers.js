const Room = require("../models/room");
const Hotel = require("../models/hotel");
const createError = require("../utils/error");

const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (e) {
      next(e);
    }
    res.status(200).json(savedRoom);
  } catch (e) {
    next(e);
  }
};

const updateRoom = async (req, res) => {
  try {
    const updatedHotel = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (e) {
    res.status(500).json({ status: "failed", message: e.message });
  }
};
const updateRoomAvailability = async (req, res) => {
  try {
    await Room.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates,
        },
      }
    );
    res.status(200).json("Room has been updated!");
  } catch (e) {
    res.status(500).json({ status: "failed", message: e.message });
  }
};

const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;

  try {
    await Room.findByIdAndDelete(req.params.id);

    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (e) {
      next(e);
    }

    res.status(200).json("Room hase been deleted");
  } catch (e) {
    res.status(500).json({ status: "failed", message: e.message });
  }
};

const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (e) {
    // res.status(500).json({ status: "failed", message: e.message });
    next(e);
  }
};
const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({ rooms });
  } catch (e) {
    //   res.status(500).json({ status: "failed", message: e.message });
    next(e);
  }
};
module.exports = {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoomAvailability,
};
