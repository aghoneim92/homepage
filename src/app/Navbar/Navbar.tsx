"use client";

import classNames from "classnames";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400"] });

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
      <Link
        className={classNames(ubuntu.className, styles.link, styles.brand)}
        href="/"
      >
        AG
      </Link>
      <div className={styles.menu}>
        <Link
          className={classNames(styles.link, {
            [styles.active]: pathname === "/",
          })}
          href="/"
        >
          Home
        </Link>
        <Link
          className={classNames(styles.link, {
            [styles.active]: pathname === "/cv",
          })}
          href="/cv"
        >
          CV
        </Link>
        <Link
          className={classNames(styles.link, {
            [styles.active]: pathname === "/projects",
          })}
          href="/projects"
        >
          Projects
        </Link>
      </div>
      <a
        className={classNames(styles.link, styles.cta)}
        href="/Ahmed%20Ghoneim's%20CV.pdf"
      >
        Download CV
      </a>
    </nav>
  );
}
