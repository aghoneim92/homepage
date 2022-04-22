import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 30px;
`;

const ImageContainer = styled.div`
  margin-top: 20px;
`;

const ProjectsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ahmed Ghoneim&apos;s Projects</title>
        <meta name="description" content="Ahmed Ghoneim - Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>Projects</h1>
        <p>
          I&apos;ve worked on (and am currently working on) a number of
          projects. They&apos;re all open source.
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
        <ImageContainer>
          <Image
            alt="ShootEmUp"
            src="https://github.com/mazenmelouk/ShootEmUp/raw/master/Screenshot.png"
            width={2552}
            height={1331}
            layout="responsive"
          />
        </ImageContainer>
        <h1>Ratlab</h1>
        <p>
          Ratlab is a (WIP) matrix application I built using WebAssembly. It
          supports matrix operations.
        </p>
        <a href="https://github.com/aghoneim92/ratlab">Github link</a>
        <br />
        <a href="https://ratlab-40a57.web.app/">Try it out!</a>
        <ImageContainer>
          <Image
            alt="Ratlab"
            src="https://github.com/aghoneim92/ratlab/raw/master/ratlab.png"
            width={434}
            height={1464}
            layout="fixed"
          />
        </ImageContainer>
        <p>More projects will be added soon, stay tuned!</p>
      </Container>
    </>
  );
};

export default ProjectsPage;
