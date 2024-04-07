import Head from 'next/head';
import Navbar from '../components/TopBar'; // Assuming you have a Navbar component
import styles from '../styles/Home.module.css'

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us - ClassCompass</title>
        <meta name="description" content="Learn more about the ClassCompass project and the team behind it." />
      </Head>
      <Navbar />
      <main className={styles.mainContent}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.paragraph}>
          Welcome to <span style={{ color: '#3b8ee6' }}><strong>ClassCompass</strong></span> This project is developed as part of WildHacks Hackathon 2024, where teams of talented students come together to create innovative solutions to real-world problems.
        </p>
        <p className={styles.paragraph}>
          We are a team of Northwestern University students who share a passion for computer science, data science, and engineering. Meet our team members:
        </p>
        <ul>
          <li className={styles.listItem}>Desmond Nebah - CS with a minor in Data Science</li>
          <li className={styles.listItem}>Amiin Muse - CS with a minor in Data Science</li>
          <li className={styles.listItem}>Herbert Botwe - CS with a minor in Science</li>
          <li className={styles.listItem}>Shingie Tande - Industrial Engineering with a minor in CS</li>
        </ul>
        <p className={styles.paragraph}>
          We are all set to graduate in June 2025 and are excited to leverage our diverse skill sets to build helpful solutions.
        </p>
        <p className={styles.paragraph}>
          ClassCompass aims to provide students with a structured platform to manage their coursework and assignments effectively. We believe that our tool can significantly enhance the learning experience by providing a clear, step-by-step approach to tackling educational challenges.
        </p>
        <p className={styles.paragraph}>
          Thank you for taking the time to learn more about our project. We are eager to make a positive impact and welcome any feedback or inquiries you may have about ClassCompass.
        </p>
      </main>
    </div>
  );
};

export default About;
