"use client";

import Link from 'next/link';
import TopBar from '../components/TopBar';
import { UserButton } from "@clerk/nextjs";
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

const Home = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('http://localhost:3002/courses');
      console.log(response);
      const data = await response.json();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  return (
    <>
      <TopBar />
        <div className={styles.welcomeContainer}>
          <h1 className={styles.welcomeTitle}>Welcome to <span style={{ color: '#3b8ee6' }}>ClassCompass</span></h1>
          <p className={styles.welcomeDescription}>
          A <strong>simple platform</strong> that gives you a <strong>step-by-step guide</strong> to get you started<br />
          with daunting <strong>class assignments</strong>!
        </p>
        {/* <div className={styles.buttonContainer}>
          <Link href="/courses" className={styles.button} passHref>Courses</Link>
        </div> */}

        {/* <div className={styles.coursesContainer}>
          {courses.map((course: { _id: string, course_name: string }) => (
            <Link className={styles.courseCard} key={course._id} href={`/courses/${course._id}`} passHref>
              <h3>{course.course_name}</h3>
            </Link>
          ))}
        </div> */}

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
