const mongoose = require("mongoose");

// Destructure Schema from mongoose
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
});

module.exports = mongoose.model("User", useSchema);