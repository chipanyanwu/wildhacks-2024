import React from 'react';
import TopBar from '../../components/TopBar';
import GPT from '../gpt';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const Project01 = () => {
  return (
    <>
        <TopBar />
        <div>
        <h1>LeetCode Problem: Two Sum</h1>
        <p>
        Given an array of integers <code>nums</code> and an integer <code>target</code>, 
        return indices of the two numbers such that they add up to <code>target</code>.
        </p>
        <p>
        You may assume that each input would have <strong>exactly one solution</strong>, 
        and you may not use the same element twice.
        </p>
        <p>
        You can return the answer in any order.
        </p>
        <h2>Example:</h2>
        <p>
        Input: nums = [2,7,11,15], target = 9<br />
        Output: [0,1]<br />
        Output: Because nums[0] + nums[1] == 9, we return [0, 1].
        </p>
        </div>
        <div className={styles.buttonContainer}>
              <Link href="/gpt" className={styles.button} passHref>Get Help</Link>
        </div>
    </>


  );
};

export default Project01;
