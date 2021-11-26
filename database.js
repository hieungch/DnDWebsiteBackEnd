const mongoose = require("mongoose");
const config = require("./config.json");

mongoose.connect(config.databseConnectionString, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});
