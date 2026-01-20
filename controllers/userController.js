const User = require("../models/User");

// Register User
const registerUser = async(req, res) => {

    try {
        const { username, email, password } = req.body;

        // Check if all required fields are provided
        if(!username || !email || !password) {
            return res.status(400).json({ message: "Please provide all fields" });
        }

        // Check if a user with the given email already exists
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create new user (password will be hashed by pre-save hook)
        const newUser = new User({ username, email, password });
        await newUser.save();

        // Exclude password from response
        const { password: _, ...userWithPassword } = newUser.toObject();

        // Send success response
        return res.status(201).json(userWithPassword);
    } catch(error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ message: "Server error" });
    }
};

module.exports = { registerUser };