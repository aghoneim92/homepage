import styled from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

const Title = styled.h3`
  text-align: center;
  font-size: 25px;
  margin-top: 0;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: ${pxToRem(20)};
  font-weight: normal;
  max-width: 700px;
  margin: 20px auto;
`;

export default function Bio() {
  return (
    <div>
      <Title>Bio</Title>
      <Subtitle>
        I wear all kinds of hats. I&apos;m a fullstack developer, a Rustacean,
        an embedded systems enthusiast, graphics programming beginner, OS
        Development wannabe, and so much more.
      </Subtitle>
    </div>
  );
}
