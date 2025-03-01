const express = require('express');
const mongoose = require('./dbconnect');  // Connect to MongoDB
const routes = require('./routes');
const app = express();

app.use(express.json()); // Middleware to parse JSON
app.use('/api', routes); // Load routes

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

