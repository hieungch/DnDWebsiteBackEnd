require("./database");
const ability = require("./models/ability");
const abilityData = require("./data/abilities.json");
const background = require("./models/background");
const backgroundData = require("./data/backgrounds.json");
const characterClass = require("./models/characterclass");
const characterClassData = require("./data/characterclasses.json");
const characterSheet = require("./models/charactersheet");
const characterSheetData = require("./data/charactersheets.json");
const diceType = require("./models/dicetype");
const diceTypeData = require("./data/dicetypes.json");
const feat = require("./models/feat");
const featData = require("./data/feats.json");
const level = require("./models/level");
const levelData = require("./data/levels.json");
const race = require("./models/race");
const raceData = require("./data/races.json");
const skill = require("./models/skill");
const skillData = require("./data/skills.json");
const specialStat = require("./models/specialstat");
const specialStatData = require("./data/specialstats.json");
const subrace = require("./models/subrace");
const subRaceData = require("./data/subraces.json");

async function reset() {
  await ability.deleteMany({});
  await ability.insertMany(abilityData);
  await background.deleteMany({});
  await background.insertMany(backgroundData);
  await characterClass.deleteMany({});
  await characterClass.insertMany(characterClassData);
  await characterSheet.deleteMany({});
  await characterSheet.insertMany(characterSheetData);
  await diceType.deleteMany({});
  await diceType.insertMany(diceTypeData);
  await feat.deleteMany({});
  await feat.insertMany(featData);
  await level.deleteMany({});
  await level.insertMany(levelData);
  await race.deleteMany({});
  await race.insertMany(raceData);
  await skill.deleteMany({});
  await skill.insertMany(skillData);
  await specialStat.deleteMany({});
  await specialStat.insertMany(specialStatData);
  await subrace.deleteMany({});
  await subrace.insertMany(subRaceData);
}

reset()
  .then(() => {
    console.log("OK,job done!");
  })
  .finally(() => {
    process.exit();
  });
