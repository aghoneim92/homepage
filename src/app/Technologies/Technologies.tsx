import Image from "next/image";
import styles from "./Technologies.module.css";
import commonStyles from "../Common.module.css";
import FirebaseLogo from "./firebase-logo.svg";
import GoLogo from "./go-logo.svg";
import JSLogo from "./javascript-logo.svg";
import NodeJSLogo from "./nodejs-logo.png";
import RailsLogo from "./rails-logo.svg";
import ReactLogo from "./react-logo.svg";
import ReactNativeLogo from "./react-native-logo.png";
import RubyLogo from "./ruby-logo.png";
import RustLogo from "./rust-logo-blk.svg";
import SpringFrameworkLogo from "./spring-logo.svg";
import TSLogo from "./ts-logo.svg";

export default function Technologies() {
  return (
    <div className={styles.container}>
      <h3 className={commonStyles.sectionTitle}>
        <div className={styles.logosContainer}>
          <div className={styles.logo}>
            <Image
              src={JSLogo}
              alt="JavaScript"
              title="JavaScript"
              width={50}
              height={50}
            />
          </div>
          <div className={styles.logo}>
            <Image
              src={TSLogo}
              alt="TypeScript"
              title="TypeScript"
              width={50}
              height={50}
            />
          </div>
          <div className={styles.logo}>
            <Image
              alt="React"
              title="React"
              src={ReactLogo}
              width={50}
              height={50}
            />
          </div>
          <div className={styles.logo}>
            <Image
              alt="Firebase"
              title="Firebase"
              src={FirebaseLogo}
              width={50}
              height={50}
            />
          </div>
          <div className={styles.logo}>
            <Image
              alt="Ruby"
              title="Ruby"
              src={RubyLogo}
              width={50}
              height={50}
            />
          </div>
          <div className={styles.logo}>
            <Image
              alt="Rust"
              title="Rust"
              src={RustLogo}
              width={50}
              height={50}
            />
          </div>
          <div className={styles.logo}>
            <Image
              alt="React Native"
              title="React Native"
              src={ReactNativeLogo}
              width={100}
              height={56}
            />
          </div>
          <div className={styles.logo}>
            <Image alt="Go" title="Go" src={GoLogo} width={100} height={100} />
          </div>
          <div className={styles.logo}>
            <Image
              className={styles.contain}
              alt="Ruby on Rails"
              title="Ruby on Rails"
              src={RailsLogo}
              width={150}
              height={56}
            />
          </div>
          <div className={styles.logo}>
            <Image
              className={styles.contain}
              alt="NodeJS"
              title="NodeJS"
              src={NodeJSLogo}
              width={100}
              height={56}
            />
          </div>
          <div className={styles.logo}>
            <Image
              className={styles.contain}
              alt="Spring Framework"
              title="Spring Framework"
              src={SpringFrameworkLogo}
              width={100}
              height={56}
            />
          </div>
        </div>
      </h3>
    </div>
  );
}
