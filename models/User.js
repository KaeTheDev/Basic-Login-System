const mongoose = require("mongoose");

// Destructure Schema from mongoose
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
});

module.exports = mongoose.model("User", useSchema);