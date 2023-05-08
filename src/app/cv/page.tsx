import styles from "./page.module.css";
import workExperience from "./workExperience";

export default function CV() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.name}>Ahmed Ghoneim</h1>
          <h2 className={styles.title}>Software Engineer</h2>
        </div>
        <div className={styles.contactInfo}>
          <a href="tel:+201226282852">+201226282852</a>
          <br />
          <a href="mailto:ahmedghoneim92@gmail.com">ahmedghoneim92@gmail.com</a>
          <br />
          <a href="https://ahmedghoneim.site" target="_blank" rel="noreferrer">
            https://ahmedghoneim.site
          </a>
          <br />
        </div>
      </header>
      <main className={styles.main}>
        <div>
          <h2>Work Experience</h2>
          {workExperience.map(
            ({ company, responsibilities, position, from, to }, index) => (
              <div key={index}>
                <p className={styles.companyName}>{company}</p>
                <p className={styles.position}>
                  {position}
                  <br />
                  {from} - {to}
                </p>
                {responsibilities}
              </div>
            )
          )}
        </div>
        <div>
          <h2>Education</h2>
          <div className={styles.bsc}>BSc. Computer Engineering</div>
          Alexandria University
          <br />
          2009 - 2014
          <br />
          GPA 3.59
          <br />
          <br />
        </div>
        <div>
          <h2>Skills</h2>
          <ul className={styles.skills}>
            <li>Working effectively in a team</li>
            <li>Quick to learn new technologies</li>
            <li>Rapid prototyping of ideas</li>
            <li>Following best practices</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
