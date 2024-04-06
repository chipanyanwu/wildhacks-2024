const express = require('express');
const connectDB = require('./db.js');
const router = express.Router();

async function getDatabase() {
    try {
        const client = await connectDB();
        return client.db('WildHacks2024').collection('productivity');
    } catch (error) {
        console.error("Failed to connect to the database:", error);
        throw error; // Rethrow the error after logging it, or handle it as needed
    }
}

getDatabase();