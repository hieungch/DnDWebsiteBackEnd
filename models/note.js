const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let note = new Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    noteTitle: {
      type: String,
    },
    noteDescription: {
      type: String,
    },
  },
  { collection: "notes" }
);

module.exports = mongoose.model("notes", note);
