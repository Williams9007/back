const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// No need to import bcrypt here, since password hashing happens in server.js
module.exports = mongoose.model('User', UserSchema);