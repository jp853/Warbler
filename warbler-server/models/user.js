/*jshint esversion: 6 */
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  // All users should have an email, username, password
  email: {
    type: String,
    require: true,
    unique: true
  },

  username: {
    type: String,
    require: true,
    unique: true,
  },

  password: {
    type: String,
    require: true,
  },

  profileImageUrl: {
    type: String
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
