const bcrypt = require("bcrypt");
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

// Pre-save hook to hash password 
userSchema.pre("save", async function(){
  if(this.isNew || this.isModified("password")) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
  }
});

module.exports = mongoose.model("User", userSchema);