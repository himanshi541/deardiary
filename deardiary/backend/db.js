const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/mydatabase";
const connecttoMongo = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to mongo :)");
  } catch (error) {
    console.error("Error connecting to mongo:", error);
  }
};
module.exports = connecttoMongo;
