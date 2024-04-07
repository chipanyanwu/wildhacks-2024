"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import TopBar from '../../components/TopBar';
import styles from '../../styles/Course.module.css'; // Ensure you have this CSS file

const Course = () => {
  const router = useRouter();
  const { courseId } = router.query;
  const [allAssignments, setAllAssignments] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  // const getSubTasksFromDescription = require('../openai.js');

  useEffect(() => {
    const fetchAssignments = async () => {
      // Fetch all assignments
      const res = await fetch(`http://localhost:3002/assignments`);
      const data = await res.json();
      setAllAssignments(data);
    };

    fetchAssignments();
  }, []);


  useEffect(() => {
    // Filter assignments by courseId after all assignments have been fetched
    if(courseId) {
      const filteredAssignments = allAssignments.filter(assignment => assignment.course_id === courseId);
      console.log(allAssignments);
      setAssignments(filteredAssignments);
    }
  }, [courseId, allAssignments]);

  const selectAssignment = async (assignment) => {
    setSelectedAssignment(assignment);
    // const subTasks = await getSubTasksFromDescription(assignment.description);
    // console.log("Generated Sub-Tasks:", subTasks);
  };
  const [buttonOn, setButtonOn] = useState(false);
  const handleClick = () => {
    setButtonOn(true);
    
  }

  return (
    <>
      <TopBar />
      <div className={styles.courseLayout}>
        <aside className={styles.sidebar}>
          <ul>
            {assignments.map((assignment) => (
              <li key={assignment._id} onClick={() => selectAssignment(assignment)}>
                <a className={styles.assignmentLink}>{assignment.name}</a>
              </li>
              
            ))}
          </ul>
          <button onClick = {handleClick}>Add New Assignment</button>
        </aside>
        <main className={styles.mainContent}>
          {selectedAssignment ? (
            <>
              <h2>{selectedAssignment.name}</h2>
              <p>Due: {new Date(selectedAssignment.due_date).toLocaleDateString()}</p>
              <p>{selectedAssignment.description}</p>
              <h3>Components</h3>
              <ul>
                {Object.entries(selectedAssignment.components).map(([key, value], index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </>
          ) :buttonOn? (
            <form>
              <label htmlFor="assignmentName">Assignment Name:</label>
              <input id="assignmentName" type="text" placeholder="Enter name" />
              <label htmlFor="assignmentDueDate">Due Date:</label>
              <input id="assignmentDueDate" type="date" />
              <label htmlFor="assignmentDescription">Description:</label>
              <textarea id="assignmentDescription" placeholder="Enter description"></textarea>
              <button type="submit">Submit</button>
            </form>
          ):
          
          (
            <p>Select an assignment to view details.</p>
          )}
          
        </main>
      </div>
    </>
  );
};

export default Course;