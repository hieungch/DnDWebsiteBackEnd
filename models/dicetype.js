const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let dicetype = new Schema(
  {
    diceName: {
      type: String,
    },
    nbFace: {
      type: Number,
    },
    maxFacepoint: {
      type: Number,
    },
    minFacepoint: {
      type: Number,
    },
  },
  { collection: "dicetypes" }
);

module.exports = mongoose.model("dicetypes", dicetype);
