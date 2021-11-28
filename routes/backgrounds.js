const express = require("express");
const router = express.Router();
const background = require("../models/background");

router.get("/", async (req, res) => {
  let result = await background.aggregate([
    {
      $lookup: {
        from: "skills",
        localField: "skillprof",
        foreignField: "id",
        as: "skillprof",
      },
    },
  ]);
  res.json(result);
});

module.exports = router;
