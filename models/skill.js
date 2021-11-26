const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let skill = new Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    skillname: {
      type: String,
    },
    statModifier: {
      type: String,
    },
  },
  { collection: "skills" }
);

module.exports = mongoose.model("skills", skill);
