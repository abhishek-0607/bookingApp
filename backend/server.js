const app = require("./app");
const connect = require("./src/configs/db");
require("dotenv").config();
const port = process.env.PORT || 5000;

const mongoose = require("mongoose");
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!!!");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDB Connected!");
});

app.listen(port, () => {
  connect();
  console.log(`listening to PORT ${port}`);
});
