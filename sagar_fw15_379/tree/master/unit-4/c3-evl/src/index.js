const express = require("express");

const app = express();

app.use(express.json());

const loginController = require("./controllers/login.controller");
const registerController = require("./controllers/register.controller");

const { register, login } = require("./controllers/authcontroller");

app.use("/register", registerController, register);
app.use("/login", loginController, login);
module.exports = app;
