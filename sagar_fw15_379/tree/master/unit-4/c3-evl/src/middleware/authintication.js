const bcrypt = require("bcrypt");
const { verify } = require("jsonwebtoken");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (token) => {
  return new Promise((res, rej) => {
    return jwt.verify(token, process.env.secret_key, function (err, decoded) {
      if (err) {
        return rej(err);
      }
      return res(decoded);
    });
  });
};

const authentication = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      res.send("token not found");
    }
    if (!req.headers.authorization.startsWtih("Bearer ")) {
      res.send("token not found");
    }
    const token = req.headers.authorization.split(" ")[1];

    const decoded = await verifyToken(token);
    // req.userId=
  } catch (e) {
    res.send(e.message);
  }
};
