// 1️⃣ Import libraries
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // DB connection
const userRoutes = require('./routes/userRoutes'); // User routes

// 2️⃣ Load environment variables
dotenv.config();

// 3️⃣ Connect to MongoDB
connectDB();

// 4️⃣ Create Express app
const app = express();

// 5️⃣ Middleware
app.use(express.json()); // Parse JSON bodies

// 6️⃣ Test route to confirm server is running
app.get('/', (req, res) => {
  res.send('Server is running! 🚀');
});

// 7️⃣ Mount user routes
// All routes inside userRoutes.js will be prefixed with /api/users
app.use('/api/users', userRoutes);

// 8️⃣ Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});