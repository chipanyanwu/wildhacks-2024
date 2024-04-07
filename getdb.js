const connectDB = require('./db.js');

async function getDatabase() {
    try {
        const client = await connectDB();
        return client.db('productivity');
    } catch (error) {
        console.error("Failed to connect to the database:", error);
        throw error; // Rethrow the error after logging it, or handle it as needed
    }
}
module.exports = getDatabase;