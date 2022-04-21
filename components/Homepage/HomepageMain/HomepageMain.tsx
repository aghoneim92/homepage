import styled from "styled-components";
import Companies from "./Companies/Companies";
import Technologies from "./Technologies/Technologies";

const Main = styled.main``;

export default function HomepageMain() {
  return (
    <Main>
      <Companies />
      <Technologies />
    </Main>
  );
}
