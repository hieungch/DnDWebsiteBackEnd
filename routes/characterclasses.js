const express = require("express");
const router = express.Router();
const characterclass = require("../models/characterclass");

router.get("/", async (req, res) => {
  let result = await characterclass.aggregate([
    {
      $lookup: {
        from: "specialstats",
        localField: "specialStat",
        foreignField: "id",
        as: "specialStat",
      },
    },
    {
      $unwind: "$specialStat",
    },
    {
      $lookup: {
        from: "abilities",
        localField: "ability",
        foreignField: "id",
        as: "ability",
      },
    },
    {
      $lookup: {
        from: "skills",
        localField: "profSkill",
        foreignField: "id",
        as: "profSkill",
      },
    },
  ]);
  res.json(result);
});

module.exports = router;
