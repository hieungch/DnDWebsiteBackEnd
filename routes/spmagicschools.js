const express = require("express");
const router = express.Router();
const spellSchool = require("../models/spmagicschool");

router.get("/", async (req, res) => {
  let result = await spellSchool.find();
  res.json(result);
});

module.exports = router;
