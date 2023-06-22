const express = require("express");

const authRoute = require("./src/routes/authRoute");
const hotelsRoute = require("./src/routes/hotelsRoute");
const roomsRoute = require("./src/routes/roomsRoute");
const usersRoute = require("./src/routes/usersRoute");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyparser = require("body-parser");
require("dotenv").config();
const app = express();

//middlewares
// app.use((req, res, next) => {
//   console.log("I'm middleware");
//   next();
// });

const corsOptions = {
  origin: "https://booking-app-9lsz.onrender.com", // frontend URI (ReactJS)
};

app.use(cookieParser());
app.use(express.json());
app.use(bodyparser.json());
app.use(cors(corsOptions));

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

// error handling middleware
app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "something went wrong!!!";
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

module.exports = app;
