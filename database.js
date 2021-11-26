const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27018/DnD";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});
