"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import TopBar from '../../components/TopBar';
import styles from '../../styles/Course.module.css'; // Ensure you have this CSS file

const Course = () => {
  const router = useRouter();
  const { courseId } = router.query;
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  useEffect(() => {
    const fetchAssignments = async () => {
      const res = await fetch(`http://localhost:3002/assignments?course_id=${courseId}`);
      const data = await res.json();
      setAssignments(data);
    };

    if (courseId) {
      fetchAssignments();
    }
  }, [courseId]);

  const selectAssignment = (assignment) => {
    setSelectedAssignment(assignment);
  };

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
          ) : (
            <p>Select an assignment to view details.</p>
          )}
        </main>
      </div>
    </>
  );
};

export default Course;