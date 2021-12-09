const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let characterSheet = new Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: true,
    },
    name: {
      type: String,
    },
    level: {
      type: Number,
    },
    inspiration: {
      type: Number,
    },
    strength: {
      type: Number,
    },
    dexterity: {
      type: Number,
    },
    constitution: {
      type: Number,
    },
    intelligent: {
      type: Number,
    },
    wisdom: {
      type: Number,
    },
    charisma: {
      type: Number,
    },
    background: {
      type: Number,
    },
    race: {
      type: Number,
    },
    characterClass: {
      type: Number,
    },
    hp: {
      type: Number,
    },
    maxHp: {
      type: Number,
    },
    skillProficency: {
      type: Array,
    },
    feats: {
      type: Array,
    },
    charNotes: {
      type: Array,
    },
    charSpells: {
      type: Array,
    },
  },
  { collection: "charactersheets" }
);

// auto increment is for automatically increment the id

module.exports = mongoose.model("charactersheets", characterSheet);
