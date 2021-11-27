const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let characterclass = new Schema(
  {
    id: {
      type: Number,
    },
    className: {
      type: String,
    },
    profArmor: {
      type: String,
    },
    profWeapon: {
      type: String,
    },
    proftools: {
      type: String,
    },
    profSavingThrow: {
      type: Array,
    },
    hitDiceType: {
      type: String,
    },
    profSkill: {
      type: Array,
    },
    specialStat: {
      type: Number,
    },
    ability: {
      type: Array,
    },
  },
  { collection: "characterclasses" }
);

module.exports = mongoose.model("characterclasses", characterclass);
