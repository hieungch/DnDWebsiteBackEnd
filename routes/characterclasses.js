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
    // {
    //   // Without this the character class will still be in a array
    //   // cant be used to unwind like others since there are many abilities
    //   $unwind: "$ability",
    // },
  ]);
  res.json(result);
});

module.exports = router;
