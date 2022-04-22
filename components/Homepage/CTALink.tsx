import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

const CTALink = styled.a`
  font-size: ${pxToRem(20)};
  padding: 10px;
  border: 2px solid var(--ghoneim-red);
  user-select: none;
  text-decoration: none;
  cursor: pointer;
  color: black;
  display: block;
  width: fit-content;
`;

export default CTALink;
