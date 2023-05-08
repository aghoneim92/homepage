import Image from "next/image";
import styles from "./Header.module.css";
import portrait from "./portrait.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.hi}>Hi, I&apos;m</h1>
      <div className={styles.topAnimation}>
        <h1 className={styles.title}>Ahmed Ghoneim</h1>
        <h2 className={styles.subtitle}>Software Engineer</h2>
      </div>
      <div style={{ display: "flex" }}>
        <Image
          className={styles.image}
          alt="Portrait"
          src={portrait}
          loading="eager"
          priority
          height={400}
          width={238}
        />
      </div>
      <a className={styles.contactLink} href="mailto:ahmedghoneim92@gmail.com">
        Contact Me
      </a>
    </header>
  );
}
