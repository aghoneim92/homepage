import Link from "next/link";
import Bio from "../Bio/Bio";
import Companies from "../Companies/Companies";
import styles from "./Main.module.css";
import Technologies from "../Technologies/Technologies";

export default function Main() {
  return (
    <main>
      <Companies />
      <Bio />
      <Technologies />
      <Link href="/cv" className={styles.link}>
        View my CV
      </Link>
    </main>
  );
}
