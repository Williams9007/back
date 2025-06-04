const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true }); // <-- This adds createdAt and updatedAt automatically

module.exports = mongoose.model('User', userSchema);
