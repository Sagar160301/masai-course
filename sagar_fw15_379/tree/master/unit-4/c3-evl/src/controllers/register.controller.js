const User = require("../models/user.model");

const express = require("express");
const { body, validationResult } = require("express-validator");
const res = require("express/lib/response");

const router = express.Router();

router.post(
  "/",
  body("email").isEmail().withMessage("enter valid email"),
  body("password")
    .not()
    .isEmpty()
    .withMessage("not be empty")
    .custom((value) => {
      if (value.length < 8) {
        res.send("min length is 8");
      }
      return true;
    }),
  body("profilePic").custom((value) => {
    if (value.length < 1) {
      res.send("minimum 1 required");
    }
  }),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      return next();
    } catch (e) {
      res.send(e.message);
    }
  }
);

module.exports = router;
