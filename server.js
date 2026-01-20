// Import libraries
const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require("./routes/userRoutes");

// Import DB connection
const connectDB = require('./config/db');

// Load env variables
dotenv.config();

// Connect to database
connectDB();

// Create Express app
const app = express();

app.get('/', (req, res) => {
  res.send('Server is running! 🚀');
});

// Use the user routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});