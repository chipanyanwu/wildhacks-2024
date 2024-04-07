// homework_03.tsx
import React from 'react';
import TopBar from '../../components/TopBar';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const Homework03 = () => {
  return (
    <>
      <TopBar />
      <div className={styles.container}>
        <h1>Homework 3: Introduction to Trigonometry</h1>
        <p>
          Find the sine, cosine, and tangent of a 45° angle.
        </p>
      </div>
      <div className={styles.buttonContainer}>
              <Link href="/gpt" className={styles.button} passHref>Get Help</Link>
        </div>
    </>
  );
};

export default Homework03;
