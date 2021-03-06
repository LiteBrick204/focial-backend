const mongoose = require("mongoose");
const { USER_COLLECTION } = require("../utils/constants").collections;

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: String,
    lastName: String,
    gender: String,
    age: Number,
    bio: String,
    phone: String,
    username: {
      type: String,
      unique: true,
    },
    location: Object,
    latitude: Number,
    longitude: Number,
    photoUrl: String,
    coverPic: String,
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(USER_COLLECTION, userSchema);
