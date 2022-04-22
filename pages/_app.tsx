import type { AppProps } from "next/app";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 0 50px;
  @media print {
    padding: 0 15px;
  }
  max-width: 1300px;
  margin: 0 auto;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Wrapper>
  );
}

export default MyApp;
