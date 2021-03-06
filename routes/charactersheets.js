const express = require("express");
const router = express.Router();
const character = require("../models/charactersheet");
const magicSchool = require("../models/spmagicschool");

const bodyParser = require("body-parser");
let jsonParser = bodyParser.json();

//GET all character sheets
router.get("/", async (req, res) => {
  let allSchool = await magicSchool.find({});
  let result = await character.aggregate([
    {
      $lookup: {
        from: "characterclasses",
        localField: "characterClass",
        foreignField: "id",
        as: "characterClass",
      },
    },
    {
      // Without this the character class will still be in a array
      $unwind: "$characterClass",
    },
    {
      $lookup: {
        from: "specialstats",
        localField: "characterClass.specialStat",
        foreignField: "id",
        as: "characterClass.specialStat",
      },
    },
    {
      $unwind: "$characterClass.specialStat",
    },
    {
      $lookup: {
        from: "abilities",
        localField: "characterClass.ability",
        foreignField: "id",
        as: "characterClass.ability",
      },
    },
    {
      $lookup: {
        from: "backgrounds",
        localField: "background",
        foreignField: "id",
        as: "background",
      },
    },
    {
      $unwind: "$background",
    },
    {
      $lookup: {
        from: "subraces",
        localField: "race",
        foreignField: "id",
        as: "race",
      },
    },
    {
      $unwind: "$race",
    },
    {
      $lookup: {
        from: "races",
        localField: "race.mainRace",
        foreignField: "id",
        as: "race.mainRace",
      },
    },
    {
      $unwind: "$race.mainRace",
    },
    {
      $lookup: {
        from: "abilities",
        localField: "race.subRacialAbilities",
        foreignField: "id",
        as: "race.subRacialAbilities",
      },
    },
    {
      $lookup: {
        from: "notes",
        localField: "charNotes",
        foreignField: "id",
        as: "charNotes",
      },
    },
    {
      $lookup: {
        from: "feats",
        localField: "feats",
        foreignField: "id",
        as: "feats",
      },
    },
    {
      $lookup: {
        from: "spells",
        localField: "charSpells",
        foreignField: "id",
        as: "charSpells",
      },
    },
  ]);

  result.forEach((element) => {
    element.charSpells.forEach((spell) => {
      spell.spMagicSchool = allSchool.find((x) => x.id == spell.spMagicSchool);
    });
  });

  res.json(result);
});

// show a char
router.get("/:id", jsonParser, async (req, res) => {
  let allSchool = await magicSchool.find({});
  let result = await character.aggregate([
    { $match: { id: parseInt(req.params.id, 10) } },
    {
      $lookup: {
        from: "characterclasses",
        localField: "characterClass",
        foreignField: "id",
        as: "characterClass",
      },
    },
    {
      // Without this the character class will still be in a array
      $unwind: "$characterClass",
    },
    {
      $lookup: {
        from: "specialstats",
        localField: "characterClass.specialStat",
        foreignField: "id",
        as: "characterClass.specialStat",
      },
    },
    {
      $unwind: "$characterClass.specialStat",
    },
    {
      $lookup: {
        from: "abilities",
        localField: "characterClass.ability",
        foreignField: "id",
        as: "characterClass.ability",
      },
    },
    {
      $lookup: {
        from: "backgrounds",
        localField: "background",
        foreignField: "id",
        as: "background",
      },
    },
    {
      $unwind: "$background",
    },
    {
      $lookup: {
        from: "subraces",
        localField: "race",
        foreignField: "id",
        as: "race",
      },
    },
    {
      $unwind: "$race",
    },
    {
      $lookup: {
        from: "races",
        localField: "race.mainRace",
        foreignField: "id",
        as: "race.mainRace",
      },
    },
    {
      $unwind: "$race.mainRace",
    },
    {
      $lookup: {
        from: "abilities",
        localField: "race.subRacialAbilities",
        foreignField: "id",
        as: "race.subRacialAbilities",
      },
    },
    {
      $lookup: {
        from: "notes",
        localField: "charNotes",
        foreignField: "id",
        as: "charNotes",
      },
    },
    {
      $lookup: {
        from: "feats",
        localField: "feats",
        foreignField: "id",
        as: "feats",
      },
    },
    {
      $lookup: {
        from: "spells",
        localField: "charSpells",
        foreignField: "id",
        as: "charSpells",
      },
    },
  ]);
  if (result.length == 0) {
    res.sendStatus(404);
  }

  result[0].charSpells.forEach((spell) => {
    spell.spMagicSchool = allSchool.find((x) => x.id == spell.spMagicSchool);
  });

  res.json(result[0]);
});

// create new character
router.post("/", jsonParser, async (req, res) => {
  let c = await character.find().sort({ id: -1 }).limit(1);

  let maxid = c[0].id;
  // console.log("maxid=", maxid, typeof maxid);
  let characterSheet = {
    id: maxid + 1,
    name: req.body.name,
    level: 1,
    inspiration: 0,
    strength: req.body.strength,
    dexterity: req.body.dexterity,
    constitution: req.body.constitution,
    intelligent: req.body.intelligent,
    wisdom: req.body.wisdom,
    charisma: req.body.charisma,
    background: req.body.background,
    race: req.body.race,
    characterClass: req.body.characterClass,
    hp: req.body.maxHp,
    maxHp: req.body.maxHp,
    skillProficency: req.body.skillProficency,
    feats: [],
    charNotes: [],
    charSpells: [],
  };
  console.log("new Charsheet=", characterSheet);
  await character.insertMany(characterSheet);
  /// 200 mean success
  res.sendStatus(200);
});
module.exports = router;

// Update character sheet
router.put("/:id", jsonParser, async (req, res) => {
  let upChar;
  try {
    upChar = await character.findOne({ id: parseInt(req.params.id, 10) });
    if (upChar == null) {
      return res.sendStatus(404);
    }
    upChar.name = req.body.name;
    upChar.level = req.body.level;
    upChar.inspiration = req.body.inspiration;
    upChar.strength = req.body.strength;
    upChar.dexterity = req.body.dexterity;
    upChar.constitution = req.body.constitution;
    upChar.intelligent = req.body.intelligent;
    upChar.wisdom = req.body.wisdom;
    upChar.charisma = req.body.charisma;
    upChar.background = req.body.background;
    upChar.race = req.body.race;
    upChar.characterClass = req.body.characterClass;
    upChar.hp = req.body.hp;
    upChar.maxHp = req.body.maxHp;
    upChar.skillProficency = req.body.skillProficency;
    upChar.feats = req.body.feats;
    upChar.charNotes = req.body.charNotes;
    upChar.charSpells = req.body.charSpells;
    await upChar.save();
    console.log("NewCharsheets=", upChar);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

//Delete character sheet
router.delete("/:id", jsonParser, async (req, res) => {
  let characterSheet;
  try {
    characterSheet = await character.findOne({
      id: parseInt(req.params.id, 10),
    });
    if (characterSheet == null) {
      return res.sendStatus(404);
    }
    await characterSheet.remove();
  } catch (err) {
    console.log(err);
  }
});
