import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { pxToEm } from "../utils/pxToRem";

const Container = styled.nav`
  display: grid;
  grid-template-columns: 25px 1fr 25px;
  height: 50px;
  align-items: center;
  @media (max-width: 425px) {
    font-size: 1.5rem;
  }
  @media print {
    display: none;
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
    </Container>
  );
}
