const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const ruleRoutes = require('./routes/ruleRoutes');
const cors=require('cors');
// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();
app.use(cors())
// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/rules', ruleRoutes);

// Start server
const PORT=process.env.PORT1 || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});