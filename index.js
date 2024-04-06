const express = require('express');
const connectDB = require('./db.js');
const router = express.Router();

const app = express();
const PORT = 3000;

const coursesRoute = require('./routes/courses.js');
const assignmentsRoute = require('./routes/assignments.js');



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

app.use('/courses', coursesRoute);
app.use('/assignments', assignmentsRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


