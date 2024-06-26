const express = require('express');
const connectDB = require('./db.js');
const cors = require('cors');
const router = express.Router();

const app = express();
const PORT = 3002;

app.use(express.json());
const coursesRoute = require('./routes/courses.js');
const assignmentsRoute = require('./routes/assignments.js');



async function getDatabase() {
    try {
        const client = await connectDB();
        return client.db('productivity').collection('productivity');
    } catch (error) {
        console.error("Failed to connect to the database:", error);
        throw error; // Rethrow the error after logging it, or handle it as needed
    }
}

getDatabase();

app.use(cors());
app.use('/courses', coursesRoute);
app.use('/assignments', assignmentsRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


