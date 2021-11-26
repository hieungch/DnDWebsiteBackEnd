const express = require("express");
const router = express.Router();
const subrace = require("../models/subrace");

router.get("/", async (req, res) => {
  let result = await subrace.find();
  res.json(result);
});

module.exports = router;
