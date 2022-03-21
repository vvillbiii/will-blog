import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Will Bowles</a>
      </Link>
      <Link href="/now">
        <a>Now</a>
      </Link>
      <Link href="/blog">
        <a>Essays</a>
      </Link>
    </nav>
  );
};

export default Navbar;
