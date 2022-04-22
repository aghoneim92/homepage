import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { pxToEm } from "../utils/pxToRem";
import CTALink from "./Homepage/CTALink";

const Container = styled.nav`
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  align-items: center;
  padding: 20px;
  @media (max-width: 425px) {
    font-size: 1.5rem;
  }
  @media print {
    display: none;
  }

  opacity: 0;
  animation: appearNavbar 1s;
  animation-delay: 200ms;
  animation-fill-mode: forwards;
  @keyframes appearNavbar {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Brand = styled.a`
  font-size: ${pxToEm(20)};
  font-weight: 900;
  font-family: Ubuntu, sans-serif;
  display: flex;
  align-items: center;
  letter-spacing: -1px;
  user-select: none;
  text-decoration: none;
  color: black;
`;

const NavLink = styled.a<{ active: boolean }>`
  font-size: ${pxToEm(20)};
  padding: 10px 0;
  border-bottom: ${(props) =>
    props.active ? "2px solid var(--ghoneim-red)" : "none"};
  font-weight: 900;
  user-select: none;
  text-decoration: none;
  color: black;
`;

const PDFLink = styled(CTALink)`
  font-size: ${pxToEm(20)};
`;

export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <Container>
      <Link href="/" passHref>
        <Brand>AG</Brand>
      </Link>
      <NavMenu>
        <Link href="/" passHref>
          <NavLink active={pathname === "/"}>Home</NavLink>
        </Link>
        <Link href="/cv" passHref>
          <NavLink active={pathname === "/cv"}>CV</NavLink>
        </Link>
      </NavMenu>
      <PDFLink href="/Ahmed%20Ghoneim's%20CV.pdf">Download CV</PDFLink>
    </Container>
  );
}
