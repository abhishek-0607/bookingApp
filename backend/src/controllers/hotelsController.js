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
  const { min, max, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min || 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (e) {
    //   res.status(500).json({ status: "failed", message: e.message });
    next(e);
  }
};
const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (e) {
    //   res.status(500).json({ status: "failed", message: e.message });
    next(e);
  }
};
const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartment", count: apartmentCount },
      { type: "resort", count: resortCount },
      { type: "villa", count: villaCount },
      { type: "cabin", count: cabinCount },
    ]);
  } catch (e) {
    //   res.status(500).json({ status: "failed", message: e.message });
    next(e);
  }
};
module.exports = {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
  countByCity,
  countByType,
};
