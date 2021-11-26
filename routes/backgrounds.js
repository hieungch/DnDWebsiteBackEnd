const express = require("express");
const router = express.Router();
const background = require("../models/background");

router.get("/", async (req, res) => {
  let result = await background.find();
  res.json(result);
});

module.exports = router;
