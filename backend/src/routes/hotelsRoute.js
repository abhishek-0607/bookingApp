const express = require("express");
const router = express.Router();
const {
  createHotel,
  updateHotel,
  deleteHotel,
  gethotel,
  getHotels,
} = require("../controllers/hotelsController");

const createError = require("../utils/error");

//CREATE
router.post("/", createHotel);
//UPDATE
router.put("/:id", updateHotel);
//DELETE
router.delete("/:id", deleteHotel);
//GET
router.get("/:id", gethotel);
//GET ALL
router.get("/", getHotels);

module.exports = router;
