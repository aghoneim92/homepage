import type { AppProps } from "next/app";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 0 50px;
  max-width: 1300px;
  margin: 0 auto;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Navbar />
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
