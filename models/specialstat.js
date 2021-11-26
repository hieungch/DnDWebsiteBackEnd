const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let specialstat = new Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    specialStatName: {
      type: String,
    },
  },
  { collection: "specialstats" }
);

module.exports = mongoose.model("specialstats", specialstat);
