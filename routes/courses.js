const express = require('express');

const router = express.Router();



// Get all courses
router.get('/', (req, res) => {
    res.json(courses);
});

// Get a specific course
router.get('/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(course => course.id === courseId);

    if (course) {
        res.json(course);
    } else {
        res.status(404).json({ message: 'Course not found' });
    }
});

// Create a new course
router.post('/', (req, res) => {
    const { name } = req.body;
    const newCourse = { id: courses.length + 1, name };
    courses.push(newCourse);
    res.status(201).json(newCourse);
});

// Update a course
router.put('/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const { name } = req.body;
    const course = courses.find(course => course.id === courseId);

    if (course) {
        course.name = name;
        res.json(course);
    } else {
        res.status(404).json({ message: 'Course not found' });
    }
});

// Delete a course
router.delete('/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const courseIndex = courses.findIndex(course => course.id === courseId);

    if (courseIndex !== -1) {
        courses.splice(courseIndex, 1);
        res.sendStatus(204);
    } else {
        res.status(404).json({ message: 'Course not found' });
    }
});

module.exports = router;