const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let background = new Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    languages: {
      type: String,
    },
    equipment: {
      type: String,
    },
    toolprof: {
      type: String,
    },
    skillprof: {
      type: Array,
    },
  },
  { collection: "backgrounds" }
);

module.exports = mongoose.model("backgrounds", background);
