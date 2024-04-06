require('dotenv').config();
const { MongoClient } = require('mongodb');

var db_url = process.env.DATABASE_URL;
var mongoose = require('mongoose');


async function connectDB() {
    const client = new MongoClient(process.env.DATABASE_URL);
    await client.connect();
    console.log("Database connected");
    return client; // Return the client object
}

module.exports = connectDB;