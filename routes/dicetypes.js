const express = require("express");
const router = express.Router();
const dicetype = require("../models/dicetype");

router.get("/", async (req, res) => {
  let result = await dicetype.find();
  res.json(result);
});

module.exports = router;
