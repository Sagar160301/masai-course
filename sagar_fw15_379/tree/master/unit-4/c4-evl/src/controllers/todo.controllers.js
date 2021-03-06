const Todo = require("../models/toto.model");

const express = require("express");
const authenticate = require("../middlewares/authenticate");
const authorise = require("../middlewares/authorise");

const router = express.Router();

router.get("", authenticate, async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user._id }).lean().exec();
    res.send(todos);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", authenticate, async (req, res) => {
  try {
    req.body.userId = req.user._id;
    const todo = await Todo.create(req.body);
    res.send(todo);
  } catch (error) {
    res.send({ message: error.message });
  }
});

router.get("/:id", authenticate, authorise, async (req, res) => {
  try {
    const todos = await Todo.findById(req.params.id).lean().exec();
    res.send(todos);
  } catch (error) {
    res.status(401).send(error);
  }
});

router.patch("/:id", authenticate, authorise, async (req, res) => {
  try {
    const todos = await Todo.findByIdAndUpdate(req.body, { new: true })
      .lean()
      .exec();
    res.send(todos);
  } catch (error) {
    res.status(401).send(error);
  }
});
router.delete("/:id", authenticate, authorise, async (req, res) => {
  try {
    const todos = await Todo.findByIdAndDelete(req.body).lean().exec();
    res.send(todos);
  } catch (error) {
    res.status(401).send(error);
  }
});
module.exports = router;
