import { NextPage } from "next";
import Head from "next/head";
import CV from "../components/CV/CV";

const CVPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ahmed Ghoneim&apos;s CV</title>
        <meta
          name="description"
          content="Ahmed Ghoneim - Software Engineer - CV"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CV />
    </>
  );
};

export default CVPage;
