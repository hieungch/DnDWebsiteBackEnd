const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let race = new Schema(
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
    alignment: {
      type: String,
    },
    size: {
      type: String,
    },
    speed: {
      type: Number,
    },
    languages: {
      type: String,
    },
  },
  { collection: "races" }
);

module.exports = mongoose.model("races", race);
