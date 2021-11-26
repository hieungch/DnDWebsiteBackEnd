const express = require("express");
const router = express.Router();
const specialstat = require("../models/specialstat");

router.get("/", async (req, res) => {
  let result = await specialstat.find();
  res.json(result);
});

module.exports = router;
