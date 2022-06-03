import Link from "next/link";
import styles from "./navbar.module.css";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

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
      <button
        aria-label="light mode or dark mode icon"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? (
          <MoonIcon className="h-5 w-5 text-indigo-500" />
        ) : (
          <SunIcon className="h-5 w-5 text-indigo-500" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
