const express = require("express");
const router = express.Router();
const spell = require("../models/spell");
const bodyParser = require("body-parser");
let jsonParser = bodyParser.json();

// GET all spells
router.get("/", async (req, res) => {
  let result = await spell.aggregate([
    {
      $lookup: {
        from: "spmagicschools",
        localField: "spMagicSchool",
        foreignField: "id",
        as: "spMagicSchool",
      },
    },
    {
      $unwind: "$spMagicSchool",
    },
  ]);

  res.json(result);
});

// GET spell by id
router.get("/:id", jsonParser, async (req, res) => {
  let result = await spell.aggregate([
    { $match: { id: parseInt(req.params.id, 10) } },
    {
      $lookup: {
        from: "spmagicschools",
        localField: "spMagicSchool",
        foreignField: "id",
        as: "spMagicSchool",
      },
    },
    {
      $unwind: "$spMagicSchool",
    },
  ]);
  if (result.length == 0) {
    res.sendStatus(404);
  }
  res.json(result[0]);
});

module.exports = router;
