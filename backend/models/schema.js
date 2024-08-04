const mongoose = require("mongoose");

const User = new mongoose.Schema({
  userAddress: {
    type: String,
    required: true,
  },
  encryptionkey: {
    type: Buffer,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model("users ", User);
module.exports = UserModel;
