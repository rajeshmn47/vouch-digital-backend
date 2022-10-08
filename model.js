const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  website: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdat: {
    type: Date,
    default: Date.now,
  },
  updatedat: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
