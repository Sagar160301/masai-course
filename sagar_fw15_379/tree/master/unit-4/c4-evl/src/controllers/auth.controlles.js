const User = require("../models/user.models");
var jwt = require("jsonwebtoken");
// const { reject } = require("bcrypt/promises");
require("dotenv").config();

const matchPassword = (hash, log) => {
  return newPromise((resolve, reject) => {
    return bcrypt.compare(log, hash, function (err, result) {
      // result == true
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
};
const generateToken = (user) => {
  return jwt.sign({ user }, process.env.key);
};
const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).lean().exec();
    console.log(user);
    if (!user) {
      user = await User.create(req.body);
      console.log(user);
      const token = generateToken(user);
      res.send(token);
    } else {
      res.send("user is already exist");
    }
  } catch (error) {
    res.send({ message: error.message });
  }
};
const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.send("user not exist");
    }
    console.log(user);
    mainPass = user.password;
    logPass = req.body.password;
    const match = await matchPassword(mainPass, logPass);
    console.log("match");
    if (!match) {
      res.send("email and password not match");
    }
    const token = generateToken(user);
    res.send(token);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { register, login };
