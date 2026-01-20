// Import libraries
const express = require('express');
const dotenv = require('dotenv');

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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});