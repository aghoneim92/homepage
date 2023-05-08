import Image from "next/image";
import styles from "./page.module.css";
import shootEmUp from "./shootemup.png";
import ratlab from "./ratlab.png";

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <p>
        I&apos;ve worked on (and am currently working on) a number of projects.
        They&apos;re all open source.
      </p>
      <h2>Rubik&apos;s Cube</h2>
      <p>
        A computer graphics project I worked on in my final year at the
        University. I built it using OpenGL and C++.
      </p>
      <a href="https://github.com/aghoneim92/rubiks">Github link</a>
      <video width="100%" controls>
        <source src="/rubiks.mp4" type="video/mp4" />
      </video>
      <h1>ShootEmUp</h1>
      <p>
        A game we worked on in my final year at the University. We built it
        using pixi.js.
      </p>
      <a href="https://github.com/mazenmelouk/ShootEmUp">Github link</a>
      <br />
      <a href="https://mazenmelouk.github.io/ShootEmUp/">Try it out!</a>
      <br />
      <Image alt="ShootEmUp" src={shootEmUp} className={styles.image} />
      <h1>Ratlab</h1>
      <p>
        Ratlab is a (WIP) matrix application I built using WebAssembly. It
        supports matrix operations.
      </p>
      <a href="https://github.com/aghoneim92/ratlab">Github link</a>
      <br />
      <a href="https://ratlab-40a57.web.app/">Try it out!</a>
      <br />
      <Image
        alt="Ratlab"
        src={ratlab}
        width={434}
        height={1464}
        className={styles.image}
      />
      <p>More projects will be added soon, stay tuned!</p>
    </div>
  );
}
