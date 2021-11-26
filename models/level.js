const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let level = new Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    proficiencyBonus: {
      type: Number,
    },
    abilityImprovement: {
      type: Boolean,
    },
  },
  { collection: "levels" }
);

module.exports = mongoose.model("levels", level);
