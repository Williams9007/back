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
const bcrypt = require('bcryptjs');

module.exports = mongoose.model('User', UserSchema);
const User = require('./models/User');

