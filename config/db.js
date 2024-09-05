const Mongoose = require("mongoose");
const { MONGO_URL } = require("./ServerConfig");

const connectDb = async () => {
  try {
    const conn = await Mongoose.connect(MONGO_URL);
    console.log(`MongoDb is connected to the ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    console.log("Somethin is wrong in the database connection");
  }
};

module.exports = connectDb;
