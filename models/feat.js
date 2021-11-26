const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let feat = new Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    featName: {
      type: String,
    },
    prerequisite: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { collection: "feats" }
);

module.exports = mongoose.model("feats", feat);
