import Image from "next/image";
import styled from "styled-components";
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

const Container = styled.div`
  padding: 30px 50px;
  opacity: 0;
  animation: appear3 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  @keyframes appear3 {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const LogosContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const Logo = styled.div`
  flex-shrink: 0;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 25px;
  margin-top: 0;
  margin-bottom: 20px;
`;

export default function Technologies() {
  return (
    <Container>
      <Title>Techologies I love</Title>
      <LogosContainer>
        <Logo>
          <Image
            src={JSLogo}
            alt="JavaScript"
            title="JavaScript"
            layout="fixed"
            width={50}
            height={50}
          />
        </Logo>
        <Logo>
          <Image
            src={TSLogo}
            alt="TypeScript"
            title="TypeScript"
            layout="fixed"
            width={50}
            height={50}
          />
        </Logo>
        <Logo>
          <Image
            alt="React"
            title="React"
            src={ReactLogo}
            layout="fixed"
            width={50}
            height={50}
          />
        </Logo>
        <Logo>
          <Image
            alt="Firebase"
            title="Firebase"
            src={FirebaseLogo}
            layout="fixed"
            width={50}
            height={50}
          />
        </Logo>
        <Logo>
          <Image
            alt="Ruby"
            title="Ruby"
            src={RubyLogo}
            layout="fixed"
            width={50}
            height={50}
          />
        </Logo>
        <Logo>
          <Image
            alt="Rust"
            title="Rust"
            src={RustLogo}
            layout="fixed"
            width={50}
            height={50}
          />
        </Logo>
        <Logo>
          <Image
            alt="React Native"
            title="React Native"
            src={ReactNativeLogo}
            layout="fixed"
            width={100}
            height={56}
          />
        </Logo>
        <Logo>
          <Image
            alt="Go"
            title="Go"
            src={GoLogo}
            layout="fixed"
            width={100}
            height={100}
          />
        </Logo>
        <Logo>
          <Image
            alt="Ruby on Rails"
            title="Ruby on Rails"
            src={RailsLogo}
            layout="fixed"
            width={150}
            height={56}
            objectFit="contain"
          />
        </Logo>
        <Logo>
          <Image
            alt="NodeJS"
            title="NodeJS"
            src={NodeJSLogo}
            layout="fixed"
            width={100}
            height={56}
            objectFit="contain"
          />
        </Logo>
        <Logo>
          <Image
            alt="Spring Framework"
            title="Spring Framework"
            src={SpringFrameworkLogo}
            layout="fixed"
            width={100}
            height={56}
            objectFit="contain"
          />
        </Logo>
      </LogosContainer>
    </Container>
  );
}
