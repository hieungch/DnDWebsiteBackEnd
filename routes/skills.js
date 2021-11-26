const express = require("express");
const router = express.Router();
const skill = require("../models/skill");

router.get("/", async (req, res) => {
  let result = await skill.find();
  res.json(result);
});

router.post("/", async (req, res) => {
  let body = req.body;
  res.json(result);
});

module.exports = router;
