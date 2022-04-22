import type { NextPage } from "next";
import Head from "next/head";
import HomepageHeader from "../components/Homepage/HomepageHeader/HomepageHeader";
import HomepageMain from "../components/Homepage/HomepageMain/HomepageMain";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ahmed Ghoneim&apos;s Homepage</title>
        <meta name="description" content="Ahmed Ghoneim - Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomepageHeader />
      <HomepageMain />
    </>
  );
};

export default Home;
