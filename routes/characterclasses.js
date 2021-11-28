const express = require("express");
const router = express.Router();
const characterclass = require("../models/characterclass");

router.get("/", async (req, res) => {
  let result = await characterclass.aggregate([
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
    {
      $lookup: {
        from: "specialstats",
        localField: "specialStat",
        foreignField: "id",
        as: "specialStat",
      },
    },
    {
      // cant be used to unwind like others since there are many abilities
      $unwind: "$specialStat",
    },
  ]);
  res.json(result);
});

module.exports = router;
