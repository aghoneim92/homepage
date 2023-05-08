import Image from "next/image";
import styles from "./Footer.module.css";
import githubLogo from "./github-logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © 2023 Ahmed Ghoneim
      <a
        href="https://github.com/aghoneim92"
        target="_blank"
        rel="noreferrer"
        className={styles.githubLink}
      >
        <Image src={githubLogo} alt="Github" width={32} height={32} />
      </a>
    </footer>
  );
}
