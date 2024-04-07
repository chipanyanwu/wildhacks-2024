import Link from 'next/link';
import TopBar from '../components/TopBar';
import { UserButton } from "@clerk/nextjs";
import styles from '../styles/Home.module.css';


const Home = () => {
  return (
    <>
      <TopBar />
        <div className={styles.welcomeContainer}>
          <h1 className={styles.welcomeTitle}>Welcome to <span style={{ color: '#3b8ee6' }}>ClassCompass</span></h1>
          <p className={styles.welcomeDescription}>
          A <strong>simple platform</strong> that gives you a <strong>step-by-step guide</strong> to get you started<br />
          with daunting <strong>class assignments</strong>!
        </p>
          <div className={styles.buttonContainer}>
          <Link href="/courses" className={styles.button} passHref>Courses</Link>
        </div>
      </div>
    </>
    
  );
}

export default Home;
