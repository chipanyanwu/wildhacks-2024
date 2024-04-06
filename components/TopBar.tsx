import Link from 'next/link';
import styles from './topbar.module.css';
import Image from 'next/image'; // Import Next.js Image component for the logo

const TopBar = () => {
  return (
    <nav className={styles.topbar}>
      <div className={styles.left}>
        <Link href="/">Todo </Link>
      </div>
      <div className={styles.right}>
        <Link href="/about">About</Link>
        <Link href="/userAccount">
          <Image src="/account.svg" alt="Account" width={40} height={40} />
        </Link>
      </div>
    </nav>

  );
}

export default TopBar;
