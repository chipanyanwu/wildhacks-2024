import List from '../components/List';
import TopBar from '../components/TopBar';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


const Courses = () => {

  const CourseList = ["Web Development", 
                      "Data Science", 
                      "Artificial Intelligence", 
                      "Cloud Computing"];
    return (
      <>
        <TopBar />
        <div>
          <div className={styles.buttonContainer}>
          <Link href="/tasks" className={styles.button} passHref>Assignments</Link>
          </div>
          <List items={CourseList} />
        </div>
      </>
    );
  }

export default Courses;