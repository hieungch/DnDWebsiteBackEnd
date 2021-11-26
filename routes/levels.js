const express = require("express");
const router = express.Router();
const level = require("../models/level");

router.get("/", async (req, res) => {
  let result = await level.find();
  res.json(result);
});

module.exports = router;
