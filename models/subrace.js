const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let subrace = new Schema(
  {
    name: {
      type: String,
    },
    mainRace: {
      type: Number,
    },
    subRacialAbilities: {
      type: Array,
    },
    abilityScoreIncrease: {
      type: Array,
    },
  },
  { collection: "subraces" }
);

module.exports = mongoose.model("subraces", subrace);
