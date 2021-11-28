const express = require("express");
const router = express.Router();
const subrace = require("../models/subrace");

router.get("/", async (req, res) => {
  let result = await subrace.aggregate([
    {
      $lookup: {
        from: "races",
        localField: "mainRace",
        foreignField: "id",
        as: "mainRace",
      },
    },
    {
      $unwind: "$mainRace",
    },
    {
      $lookup: {
        from: "abilities",
        localField: "subRacialAbilities",
        foreignField: "id",
        as: "subRacialAbilities",
      },
    },
  ]);
  res.json(result);
});

module.exports = router;
