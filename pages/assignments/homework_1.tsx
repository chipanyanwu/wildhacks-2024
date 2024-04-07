// homework_01.tsx
import React from 'react';
import TopBar from '../../components/TopBar';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const Homework01 = () => {
  return (
    <>
      <TopBar />
      <div className={styles.container}>
        <h1>Homework 1: Basic Algebra</h1>
        <p>
          Solve for x: 2x + 5 = 15
        </p>
      </div>
      <div className={styles.buttonContainer}>
              <Link href="/gpt" className={styles.button} passHref>Get Help</Link>
        </div>
    </>
  );
};

export default Homework01;
