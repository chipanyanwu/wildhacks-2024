const express = require('express');
const getDatabase = require('../getdb.js');

const router = express.Router();

// async function getDatabase() {
//     try {
//         const client = await connectDB();
//         return client.db('productivity').collection('assignments');
//     } catch (error) {
//         console.error("Failed to connect to the database:", error);
//         throw error; // Rethrow the error after logging it, or handle it as needed
//     }
// }

//getDatabase();

// GET all assignments
router.get('/', async (req, res) => {
    // Logic to fetch all assignments from the database
    // ...
    const db = await getDatabase()
    const assignmentscol = db.collection('assignments');
    const assignments = await assignmentscol.find({}).toArray();
    // console.log(assignments);

    res.json(assignments);
});

// GET a specific assignment by ID
router.get('/:id', (req, res) => {
    const assignmentId = req.params.id;
    // Logic to fetch the assignment with the given ID from the database
    // ...
    res.send(`Get assignment with ID ${assignmentId}`);
});

// CREATE a new assignment
router.post('/', (req, res) => {
    const assignmentData = req.body;
    // Logic to create a new assignment in the database
    // ...
    res.send('Create a new assignment');
});

// UPDATE an existing assignment
router.put('/:id', (req, res) => {
    const assignmentId = req.params.id;
    const assignmentData = req.body;
    // Logic to update the assignment with the given ID in the database
    // ...
    res.send(`Update assignment with ID ${assignmentId}`);
});

// DELETE an assignment
router.delete('/:id', (req, res) => {
    const assignmentId = req.params.id;
    // Logic to delete the assignment with the given ID from the database
    // ...
    res.send(`Delete assignment with ID ${assignmentId}`);
});

module.exports = router;