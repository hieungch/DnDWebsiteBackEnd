const express = require("express");
const router = express.Router();
const race = require("../models/race");

router.get("/", async (req, res) => {
  let result = await race.find();
  res.json(result);
});

module.exports = router;
