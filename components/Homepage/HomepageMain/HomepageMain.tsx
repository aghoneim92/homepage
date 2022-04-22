import Link from "next/link";
import styled from "styled-components";
import CTALink from "../CTALink";
import Bio from "./Bio";
import Companies from "./Companies/Companies";
import Technologies from "./Technologies/Technologies";

const Main = styled.main`
  animation: appear4 1s;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  opacity: 0;
  transform: translateY(10px);
  @keyframes appear4 {
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

const CVLink = styled(CTALink)`
  margin: 0 auto 50px;
`;

export default function HomepageMain() {
  return (
    <Main>
      <Companies />
      <Bio />
      <Technologies />
      <Link href="/cv" passHref>
        <CVLink>View my CV</CVLink>
      </Link>
    </Main>
  );
}
