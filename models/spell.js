const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let spell = new Schema(
  {
    id: {
      type: Number,
    },
    spLevel: {
      type: Number,
    },
    spMagicSchool: {
      type: Number,
    },
    spName: {
      type: String,
    },
    castTime: {
      type: String,
    },
    spComponent: {
      type: String,
    },
    range: {
      type: String,
    },
    spDuration: {
      type: String,
    },
    spDescription: {
      type: String,
    },
    damageType: {
      type: String,
    },
    spScaling: {
      type: String,
    },
  },
  { collection: "spells" }
);

module.exports = mongoose.model("spells", spell);
