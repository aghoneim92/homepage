import Image from "next/image";
import styled from "styled-components";
import githubLogo from "./github-logo.png";

const Container = styled.footer`
  padding: 20px 30px;
  border-top: 1px solid var(--ghoneim-red);
  display: flex;
  align-items: center;
  @media print {
    display: none;
  }
`;

const GithubLink = styled.a`
  display: block;
  margin-left: auto;
`;

export default function Footer() {
  return (
    <Container>
      © 2022 Ahmed Ghoneim
      <GithubLink
        href="https://github.com/aghoneim92"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={githubLogo} alt="Github" width={32} height={32} />
      </GithubLink>
    </Container>
  );
}
