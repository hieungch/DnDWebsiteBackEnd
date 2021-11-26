const express = require("express");
const router = express.Router();
const ability = require("../models/ability");

router.get("/", async (req, res) => {
  let result = await ability.find();
  res.json(result);
});

module.exports = router;
