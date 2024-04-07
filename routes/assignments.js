const express = require('express');
const getDatabase = require('../getdb.js');
const { ObjectId } = require('mongodb');

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
router.post('/', async (req, res) => {
    const { course_id, name, due_date, description, components } = req.body;

    if (!course_id) {
        return res.status(400).json({ error: "course_id is required" });
    }

    let objectId;
    try {
        objectId = new ObjectId(course_id);
    } catch (error) {
        return res.status(400).json({ error: "Invalid course_id format" });
    }

    try {
        const assignmentsCol = (await getDatabase()).collection('assignments');
        const result = await assignmentsCol.insertOne({
            course_id: objectId,
            name,
            due_date,
            description,
            components
        });

        if (result.acknowledged && result.insertedId) {
            // Retrieve the newly created document if necessary
            const newAssignment = await assignmentsCol.findOne({ _id: result.insertedId });
            res.status(201).json(newAssignment);
        } else {
            throw new Error('Document was not inserted');
        }
    } catch (error) {
        console.error("Failed to create a new assignment:", error);
        res.status(500).json({ error: "Failed to create a new assignment" });
    }
});

// UPDATE an existing assignment
// UPDATE an existing assignment
router.put('/:id', async (req, res) => {
    const assignmentId = req.params.id;
    const assignmentData = req.body;
    try {
        const objectId = new ObjectId(assignmentId);
        const db = await getDatabase();
        const assignmentsCol = db.collection('assignments');
        const result = await assignmentsCol.updateOne({_id: objectId}, {$set: assignmentData});
        if (result.modifiedCount === 1) {
            res.json({ message: "Assignment updated successfully." });
        } else {
            res.status(404).json({ message: "Assignment not found" });
        }
    } catch (error) {
        console.error("Failed to update assignment:", error);
        res.status(500).json({ error: "Failed to update assignment" });
    }
});


// DELETE an assignment
router.delete('/:id', async (req, res) => {
    const assignmentId = req.params.id;
    try {
        const objectId = new ObjectId(assignmentId);
        const db = await getDatabase();
        const assignmentsCol = db.collection('assignments');
        const result = await assignmentsCol.deleteOne({_id: objectId});
        if (result.deletedCount === 1) {
            res.json({ message: "Assignment deleted successfully." });
        } else {
            res.status(404).json({ message: "Assignment not found" });
        }
    } catch (error) {
        console.error("Failed to delete assignment:", error);
        res.status(500).json({ error: "Failed to delete assignment" });
    }
});

module.exports = router;