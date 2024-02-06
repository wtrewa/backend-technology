const mongoose = require("mongoose");
const uri = process.env.DB_URL;

const connection = async () => {
  //  await mongoose.connect()
  try {
    
    await mongoose.connect(`${uri}`);
    console.log("connection is build");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connection;
