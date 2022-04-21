import styled from "styled-components";
import Image from "next/image";
import portrait from "./portrait.png";

import styles from "../../../styles/Home.module.css";
import { pxToRem } from "../../../utils/pxToRem";

const Header = styled.header`
  display: flex;
  padding-top: 60px;
  width: 100%;
`;

const LeftSide = styled.div`
  display: flex;
  margin-right: 50px;
  width: 500px;
`;

const Hi = styled.h1`
  font-size: ${pxToRem(30)};
  font-weight: normal;
  margin-bottom: 0;
`;

const Title = styled.h1`
  margin-top: 0;
  font-size: ${pxToRem(50)};
  font-weight: normal;
  animation: appear 1000ms;
  animation-delay: 200ms;
  animation-fill-mode: forwards;
  opacity: 0;
  transform: translateY(-10px);
  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Subtitle = styled.h2`
  margin-top: 0;
  font-size: ${pxToRem(20)};
  font-weight: normal;
  animation: appear2 1000ms;
  animation-delay: 200ms;
  animation-fill-mode: forwards;
  opacity: 0;
  transform: translateY(10px);
  @keyframes appear2 {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ContactLink = styled.a`
  font-size: ${pxToRem(20)};
  padding: 10px;
  border: 2px solid var(--ghoneim-red);
  user-select: none;
  text-decoration: none;
  cursor: pointer;
  color: black;
  margin-top: 50px;
  display: block;
  width: fit-content;
  opacity: 0;
  transform: translateY(10px);
  animation: appear2 1000ms;
  animation-delay: 200ms;
  animation-fill-mode: forwards;
`;

const RightSide = styled.div`
  margin-left: 50px;
  max-width: 150px;
`;

const RightSideTitle = styled(Title)`
  margin-top: 0.67em;
  margin-bottom: 0;
  font-size: ${pxToRem(50)};
  font-weight: normal;
`;

export default function HomepageHeader() {
  return (
    <Header>
      <LeftSide>
        <div>
          <Hi>Hi, I&apos;m</Hi>
          <Title>
            Ahmed Ghoneim.
            <br />
            Software Engineer
          </Title>
          <Subtitle>
            I wear all kinds of hats. I&apos;m a fullstack developer, a
            Rustacean, an embedded systems enthusiast, graphics programming
            beginner, OS Development wannabe, and so much more.
          </Subtitle>
          <ContactLink href="mailto:ahmedghoneim92@gmail.com">
            Contact Me
          </ContactLink>
        </div>
      </LeftSide>
      <RightSide>
        <Image
          className={styles.image}
          alt="Portrait"
          src={portrait}
          loading="eager"
          priority
          layout="fixed"
          height={400}
          width={238}
          objectFit="contain"
          objectPosition="center"
        />
        {/* <RightSideTitle>8</RightSideTitle>
        <Subtitle>Years of experience</Subtitle>
        <RightSideTitle>5</RightSideTitle>
        <Subtitle>Companies</Subtitle>
        <RightSideTitle>Senior</RightSideTitle>
        <Subtitle>Position</Subtitle> */}
      </RightSide>
    </Header>
  );
}
