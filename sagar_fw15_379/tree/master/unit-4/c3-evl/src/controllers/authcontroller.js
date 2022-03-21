const User = require("../models/user.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const res = require("express/lib/response");
// const { verify } = require("jsonwebtoken");
require("dotenv").config();

const genrateToken = (user) => {
  return jwt.sign({ user }, process.env.secret_key);
};

const verifyPassword = (user, password) => {
  return new Promise((res, rej) => {
    return bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
      if (err) {
        return rej(err);
      }
      return res(result);
    });
  });
};

const register = async (req, res) => {
  try {
    let user = await User.find({ email: req.body.email });
    if (user) {
      res.send("email already exist");
    }
    user = await User.create(req.body);
    const token = genrateToken(user);
    res.send(token);
  } catch (e) {
    res.send(err);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email });
    if (!user) {
      res.send("incorrect email and password");
    }
    const match = await verifyPassword(user, req.body.verifyPassword);
    if (!match) {
      res.send("email and password is wrong");
    }
    const token = generateToken(user);
    res.send(token);
  } catch (e) {
    res.send(e.message);
  }
};

module.exports = { register, login };
