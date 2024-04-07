
import List from "../components/List";
import styles from "../styles/todo.module.css"
import TopBar from "../components/TopBar";
import Chat from "../app/chat";
import GPT from "./gpt";
import Link from 'next/link';
import Newstyles from '../styles/Home.module.css';


export default function Tasks() {
  const CourseList = ["Web Development",
  "Data Science",
  "Artificial Intelligence",
  "Cloud Computing"];

    return (
      <>
      <TopBar />
      <div className={styles.container}>
        <aside className={styles.sidebar}>
        <div className={Newstyles.buttonContainer}>
          <Link href="/tasks" className={Newstyles.button} passHref>Assignments</Link>
          </div>
          <List items={CourseList}/>
        </aside>
        <main className={styles.maincontent}>
        </main>
      </div>
      </>
    );
  }