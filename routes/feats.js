const express = require("express");
const router = express.Router();
const feat = require("../models/feat");

router.get("/", async (req, res) => {
  let result = await feat.find();
  res.json(result);
});

module.exports = router;
