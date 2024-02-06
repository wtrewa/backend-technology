const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true,unique: true},
  password: { type: String, required: true },
  address: { type: [String], default: [] },
  cartProducts: { type: [{}], default: [] },
});


const userModel = mongoose.model('user',userSchema)


module.exports = {userModel}