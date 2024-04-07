"use client";

import Link from 'next/link';
import TopBar from '../components/TopBar';
import { UserButton } from "@clerk/nextjs";
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

const Home = () => {

  // const courses = [
  //   {
  //       "_id": "6611b9b5b1c0bc1660940c20",
  //       "course_name": "COMP_SCI 213"
  //   },
  //   {
  //       "_id": "6611b9b943f5f3a7a94a53b3",
  //       "course_name": "IEMS 315"
  //   },
  //   {
  //       "_id": "6611e85b35f278667f4c9aef",
  //       "course_name": "BIO_CHEM 301"
  //   },
  //   {
  //       "_id": "6611e8aa35f278667f4c9af0",
  //       "course_name": "COMP_SCI 150"
  //   },
  //   {
  //       "_id": "6611e8d335f278667f4c9af1",
  //       "course_name": "CIVE_ENV 203"
  //   }
  // ]


  // State to store the courses
  const [courses, setCourses] = useState([]);

  // Fetch courses from the API on component mount
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
