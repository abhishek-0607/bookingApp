const Hotel = require("../models/hotel");

const createHotel = async (req, res, next) => {
  const hotel = new Hotel(req.body);
  try {
    const newHotel = await hotel.save();
    res.status(200).json(newHotel);
  } catch (e) {
    // res.status(500).json({ status: "failed", message: e.message });
    next(e);
  }
};

const updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
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
const deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("hotel hase been deleted");
  } catch (e) {
    res.status(500).json({ status: "failed", message: e.message });
  }
};

const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (e) {
    // res.status(500).json({ status: "failed", message: e.message });
    next(e);
  }
};
const getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json({ hotels });
  } catch (e) {
    //   res.status(500).json({ status: "failed", message: e.message });
    next(e);
  }
};
module.exports = { createHotel, updateHotel, deleteHotel, getHotel, getHotels };
