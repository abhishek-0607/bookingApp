const express = require("express");
const Hotel = require("../models/hotel");
const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
  const hotel = new Hotel(req.body);
  try {
    const newHotel = await hotel.save();
    res.status(200).json(newHotel);
  } catch (e) {
    res.status(500).json(err);
  }
});
//UPDATE
router.put("/:id", async (req, res) => {
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
    res.status(500).json(err);
  }
});
//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("hotel hase been deleted");
  } catch (e) {
    res.status(500).json(err);
  }
});
//GET
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (e) {
    res.status(500).json(err);
  }
});
//GET ALL
router.get("/", async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotel);
  } catch (e) {
    res.status(500).json(err);
  }
});

module.exports = router;
