const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const router = require("../routes");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(router);

app.get("/", (req, res) => {
  res.send("Keboard Warrior");
});

module.exports = app;
