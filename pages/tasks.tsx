import List from "../components/List";
import styles from "../styles/todo.module.css";
import TopBar from "../components/TopBar";
import Link from 'next/link';
import Newstyles from '../styles/Home.module.css';

export default function Tasks() {
    const AssignmentList = ["project_1", "homework_1", "homework_2", "homework_3"];

    return (
      <>
        <TopBar />
        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <ul>
              {AssignmentList.map((assignment, index) => (
                <li key={index}>
                  <Link href={`/assignments/${encodeURIComponent(assignment)}`} className={Newstyles.assignmentLink} passHref>
                    {assignment}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          <main className={styles.maincontent}>
            {/* Content here */}
          </main>
        </div>
      </>
    );
}
