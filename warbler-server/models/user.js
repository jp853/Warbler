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

// Hash the password
userSchema.pre("save", async function(next) {
  try {
    if(!this.isModified("password")) {
      return next();
    }
    let hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    return next();
  } catch(err) {
    return next(err);
  }
});


// Check to see user has put in correct password
userSchema.method.comparePassword = async function(candidatePassword, next) {
  try {
    let isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (err) {
    return next(err);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
