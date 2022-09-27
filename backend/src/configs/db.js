const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.URL;

const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to mongoDB");
  } catch (e) {
    throw e;
  }
};

module.exports = connect;
