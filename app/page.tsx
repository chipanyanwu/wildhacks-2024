"use client";

import Link from 'next/link';
import TopBar from '../components/TopBar';
import { UserButton } from "@clerk/nextjs";
import styles from '../styles/Home.module.css';
import { FormEvent, useEffect, useState } from 'react';

const Home = () => {

  const [courses, setCourses] = useState([]);
  const [newCourseName, setNewCourseName] = useState(""); // Step 1

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const response = await fetch('http://localhost:3002/courses');
    console.log(response);
    const data = await response.json();
    setCourses(data);
  };

  const handleAddCourse = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    const response = await fetch('http://localhost:3002/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ course_name: newCourseName }),
    });
    if (response.ok) {
      setNewCourseName(""); // Reset input field
      await fetchCourses(); // Re-fetch courses or update state directly
    }
  };

  return (
    <>
      <TopBar />
        <div className={styles.welcomeContainer}>
          <h1 className={styles.welcomeTitle}>Welcome to <span style={{ color: '#3b8ee6' }}>ClassCompass</span></h1>
          <p className={styles.welcomeDescription}>
          A <strong>simple platform</strong> that gives you a <strong>step-by-step guide</strong> to get you started<br />
          with daunting <strong>class assignments</strong>!
        </p>
        {/* <form onSubmit={(event) => handleAddCourse(event)}>
          <input
            value={newCourseName}
            onChange={(e) => setNewCourseName(e.target.value)}
            placeholder="New course name"
          />
          <button type="submit">Add Course</button>
        </form> */}

        <div className={styles.coursesContainer}>
          {courses.map((course: { _id: string, course_name: string }) => (
            <Link className={styles.courseCard} key={course._id} href={`/courses/${course._id}`} passHref>
              <h3>{course.course_name}</h3>
            </Link>
          ))}
        </div>  
      </div>
    </>
  );
}

export default Home;
