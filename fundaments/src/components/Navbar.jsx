import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.logo}>MyApp</h1>
        <div className={styles.links}>
          <Link href="/" legacyBehavior>
            <a className={styles.link}>Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className={styles.link}>About</a>
          </Link>
          <Link href="/api/clients" legacyBehavior>
            <a className={styles.link}>Clients</a>
          </Link>
          <Link href="/calculate" legacyBehavior>
            <a className={styles.link}>Calculate</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
