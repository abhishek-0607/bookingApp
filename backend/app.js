const express = require("express");

const authRoute = require("./src/routes/authRoute");
const hotelsRoute = require("./src/routes/hotelsRoute");
const roomsRoute = require("./src/routes/roomsRoute");
const usersRoute = require("./src/routes/usersRoute");

const app = express();
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

module.exports = app;
