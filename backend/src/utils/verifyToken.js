const jwt = require("jsonwebtoken");
const createError = require("../utils/error");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "you are not authenticated!"));
  }
  jwt.verify(token, process.env.KEY, (err, user) => {
    if (err) {
      return next(createError(403, "token is now valid!"));
    }
    req.user = user;
    next();
  });
};
module.exports = verifyToken;
