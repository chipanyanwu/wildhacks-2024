// homework_02.tsx
import React from 'react';
import TopBar from '../../components/TopBar';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const Homework02 = () => {
  return (
    <>
      <TopBar />
      <div className={styles.container}>
        <h1>Homework 2: Geometry Basics</h1>
        <p>
          Calculate the area of a circle with a radius of 4 units.
        </p>
      </div>
      <div className={styles.buttonContainer}>
              <Link href="/gpt" className={styles.button} passHref>Get Help</Link>
        </div>
    </>
  );
};

export default Homework02;
