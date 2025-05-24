import styles from "./Bio.module.css";
import commonStyles from "../Common.module.css";

export default function Bio() {
  return (
    <div className={styles.container}>
      <h3 className={commonStyles.sectionTitle}>Bio</h3>
      <h2 className={styles.subtitle}>
        I wear all kinds of hats. I&apos;m a fullstack developer, a Rustacean,
        an embedded systems enthusiast, graphics programming beginner, OS
        Development wannabe, and so much more.
      </h2>
    </div>
  );
}
