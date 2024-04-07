import List from '../components/List';
import TopBar from '../components/TopBar';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Chat from '../app/chat';


const GPT = () => {

    return (
      <>
        <TopBar />
        <div className={styles.welcomeContainer}>
        <h1 className={styles.title}>Detailed Breakdown</h1>
            <Chat />
        </div>
      </>
    );
  }

export default GPT;