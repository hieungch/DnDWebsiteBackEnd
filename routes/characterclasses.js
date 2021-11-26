const express = require("express");
const router = express.Router();
const characterclass = require("../models/characterclass");

router.get("/", async (req, res) => {
  let result = await characterclass.find();
  res.json(result);
});

module.exports = router;
