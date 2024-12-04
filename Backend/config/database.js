const mongoose = require("mongoose");
const Config = require(".");
const url = Config.MONGO_URL;

const database = async () => {
  try {
    await mongoose.connect(url);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = database;