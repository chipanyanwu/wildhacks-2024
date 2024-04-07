
import List from "../components/List";
import styles from "../styles/todo.module.css"
import TopBar from "../components/TopBar";
import Chat from "../app/chat";
import GPT from "./gpt";
import Link from 'next/link';
import Newstyles from '../styles/Home.module.css';


export default function Tasks() {
    const AssigmentList = ["Project 1", 
                        "Homework 1", 
                        "Homework 2", 
                        "Homework 3"];

    return (
      <>
      <TopBar />
      <div className={styles.container}>
        <aside className={styles.sidebar}>
        <div className={Newstyles.buttonContainer}>
          <Link href="/gpt" className={Newstyles.button} passHref>GetHelp</Link>
          </div>
          <List items={AssigmentList}/>
        </aside>
        <main className={styles.maincontent}>
        </main>
      </div>
      </>
    );
  }