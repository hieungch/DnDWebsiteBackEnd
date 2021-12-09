const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let splevel = new Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    magicSchoolName: {
      type: String,
    },
  },
  { collection: "spmagicschools" }
);

module.exports = mongoose.model("spmagicschools", splevel);
