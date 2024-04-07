import Link from 'next/link';
import styles from './topbar.module.css';

const TopBar = () => {
  return (
    <nav className={styles.topbar}>
      <div className={styles.left}>
        <Link href="/">ClassCompass</Link>
      </div>
      <div className={styles.right}>
        <Link href="/about">About</Link>
      </div>
    </nav>

  );
}

export default TopBar;
