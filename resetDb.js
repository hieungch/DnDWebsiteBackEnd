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
const note = require("./models/note");
const noteData = require("./data/notes.json");
const spSchool = require("./models/spmagicschool");
const spSchoolData = require("./data/spmagicschools.json");
const spell = require("./models/spell");
const spellData = require("./data/spells.json");

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
  await note.deleteMany({});
  await note.insertMany(noteData);
  await spSchool.deleteMany({});
  await spSchool.insertMany(spSchoolData);
  await spell.deleteMany({});
  await spell.insertMany(spellData);
}

reset()
  .then(() => {
    console.log("OK,job done!");
  })
  .finally(() => {
    process.exit();
  });
