import Link from "next/link";
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
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: center;
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

const NavLink = styled.a`
  font-size: ${pxToEm(20)};
  padding: 10px 0;
  border-bottom: 2px solid var(--ghoneim-red);
  font-weight: 900;
  user-select: none;
  text-decoration: none;
  color: black;
`;

export default function Navbar() {
  return (
    <Container>
      <Link href="/" passHref>
        <Brand>AG</Brand>
      </Link>
      <NavMenu>
        <Link href="/" passHref>
          <NavLink>Home</NavLink>
        </Link>
      </NavMenu>
    </Container>
  );
}
