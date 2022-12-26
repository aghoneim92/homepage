import styled from "styled-components";
import Image from "next/image";
import portrait from "./portrait.png";

import styles from "./HomepageHeader.module.css";
import { pxToRem } from "../../../utils/pxToRem";
import CTALink from "../CTALink";

const Container = styled.header`
  display: flex;
  padding-top: 30px;
  @media (max-width: 425px) {
    padding-top: 20px;
  }
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Hi = styled.h1`
  font-size: ${pxToRem(30)};
  font-weight: normal;
  margin-bottom: 0;
`;

const TopAnimation = styled.div`
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
  text-align: center;
`;

const Title = styled.h1`
  text-align: center;
  margin: 0;
  font-size: ${pxToRem(50)};
  font-weight: normal;
`;

const Subtitle = styled.h2`
  font-size: ${pxToRem(30)};
  font-weight: normal;
  margin-top: 0;
`;

const ContactLink = styled(CTALink)`
  margin-top: 50px;
  opacity: 0;
  transform: translateY(10px);
  animation: appear2 1000ms;
  animation-delay: 200ms;
  animation-fill-mode: forwards;
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

export default function HomepageHeader() {
  return (
    <Container>
      <Hi>Hi, I&apos;m</Hi>
      <TopAnimation>
        <Title>Ahmed Ghoneim</Title>
        <Subtitle>Software Engineer</Subtitle>
      </TopAnimation>
      <div style={{ display: "flex" }}>
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
      </div>
      <ContactLink href="mailto:ahmedghoneim92@gmail.com">
        Contact Me
      </ContactLink>
    </Container>
  );
}
