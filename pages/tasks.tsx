
import List from "../components/List";
import styles from "../styles/todo.module.css"
import TopBar from "../components/TopBar";

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
          <List items={AssigmentList}/>
        </aside>


        <main className={styles.maincontent}>
          <h1 className={styles.title}>Todo</h1>
        </main>
      </div>
      </>
    );
  }