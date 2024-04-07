"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import TopBar from '../../components/TopBar';
import styles from '../../styles/Course.module.css'; // Ensure you have this CSS file
import { set } from 'mongoose';
const  splitTask  = require('../../openai.js');
import Newstyles from '../../styles/Home.module.css'; 


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
      // console.log(allAssignments);
      setAssignments(filteredAssignments);
    }
  }, [courseId, allAssignments]);

  const selectAssignment = async (assignment) => {
    setSelectedAssignment(assignment);
    setButtonOn(false);
    // const subTasks = await getSubTasksFromDescription(assignment.description);
    // console.log("Generated Sub-Tasks:", subTasks);
  };
  const [buttonOn, setButtonOn] = useState(false);
  const handleClick = () => {
    setButtonOn(true);
  }

  //THis function takes in input from the add new task button, sends to chat gpt and stores the response in the database
  const addNewTask = async (event) => {

    event.preventDefault();

    console.log("Adding new task is being called");
    const assignmentName = document.getElementById("assignmentName").value;
    const assignmentDueDate = document.getElementById("assignmentDueDate").value;
    const assignmentDescription = document.getElementById("assignmentDescription").value; // Ensure this ID matches your input field for description
    const course_id = courseId; // Ensure courseId is defined somewhere in your script
  
    try {
      // Assume splitTask returns a valid response with a choices array
      const gptResponse = await splitTask(assignmentDescription);
      const content = gptResponse.message.content;
      const components = content.split(/\d+\.\s/).filter(Boolean);
      console.log(components);
  
      // Create the task object
      const newTask = {
        course_id: course_id,
        name: assignmentName,
        due_date: assignmentDueDate,
        description: assignmentDescription,
        components: components
      };
      // console.log(newTask);
      // Perform the POST request
      const response = await fetch('http://localhost:3002/assignments/', { // Replace '/your-endpoint' with the actual path to your assignments API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // If needed, set authorization headers or others depending on your API requirements
        },
        body: JSON.stringify(newTask)
      });
  
      const result = await response.json();
      console.log(result);
  
      // Handle the response here. If successful, maybe clear the form or redirect the user.
      // window.location.reload();

      // const result = assignments[0];
      setAssignments([...assignments, result]);
      setSelectedAssignment(result);
  
    } catch (error) {
      console.error("Failed to add new task:", error);
      // Handle errors, such as by displaying a message to the user.
    }
  };



  return (
    <>
      <TopBar />
      <div className={styles.courseLayout}>
        <aside className={styles.sidebar}>
          <h2>{}</h2>
          <ul>
            {assignments.map((assignment) => (
              <li key={assignment._id} onClick={() => selectAssignment(assignment)}>
                <a className={Newstyles.assignmentList}>{assignment.name}</a>
              </li>

            // <li key={assignment._id} onClick={() => selectAssignment(assignment)}>
            //   <Link className={styles.assignmentLink} href={`/assignments/${assignment._id}`}>{assignment.name}</Link>
            // </li>
              
            ))}
          </ul>
          <div className="buttonContainer">
          <button onClick = {handleClick} className={Newstyles.assignmentLink}>Add New Assignment</button>
          </div>

        </aside>
        <main className={styles.mainContent}>
        {buttonOn ? (
            <form className={Newstyles.form}>
              <label htmlFor="assignmentName" className={Newstyles.label}>Assignment Name:</label>
              <input id="assignmentName" type="text" placeholder="Enter name" className={Newstyles.input} />
              <label htmlFor="assignmentDueDate" className={Newstyles.label}>Due Date:</label>
              <input id="assignmentDueDate" type="date" className={Newstyles.input} />
              <label htmlFor="assignmentDescription" className={Newstyles.label}>Description:</label>
              <textarea id="assignmentDescription" placeholder="Enter description" className={Newstyles.textarea}></textarea>
              <button type="submit" onClick={addNewTask} className={styles.button}>Submit</button>
            </form>
          ) :           
          selectedAssignment ? (
            <>
              <h2 className={Newstyles.title}>{selectedAssignment.name}</h2>
              <p className={Newstyles.paragraph}>Due: {new Date(selectedAssignment.due_date).toLocaleDateString()}</p>
              <p className={Newstyles.paragraph}>{selectedAssignment.description}</p>
              <h3>Components</h3>
              <ul className={Newstyles.paragraph}>
                {Object.entries(selectedAssignment.components).map(([key, value], index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </>
          ) :
          
          (
            <p className={Newstyles.title}>Select an assignment to view details.</p>
          )}
          
        </main>
      </div>
    </>
  );
};

export default Course;