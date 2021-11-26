const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let ability = new Schema(
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
    levelRequirement: {
      type: Number,
    },
    type: {
      type: String,
    },
  },
  { collection: "abilities" }
);

module.exports = mongoose.model("abilities", ability);
