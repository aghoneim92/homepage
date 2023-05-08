import Navbar from "./Navbar/Navbar";
import "./globals.css";
import { Red_Hat_Display } from "next/font/google";
import styles from "./layout.module.css";
import Footer from "./Footer/Footer";
import Head from "next/head";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmed Ghoneim's Homepage",
  description: "Ahmed Ghoneim - Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="title" content="Ahmed Ghoneim's Homepage" />
        <meta name="description" content="Ahmed Ghoneim - Software Engineer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ahmedghoneim.site/" />
        <meta property="og:title" content="Ahmed Ghoneim's Homepage" />
        <meta
          property="og:description"
          content="Ahmed Ghoneim - Software Engineer"
        />
        <meta
          property="og:image"
          content="https://ahmedghoneim.site/meta-homepage.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ahmedghoneim.site/" />
        <meta property="twitter:title" content="Ahmed Ghoneim's Homepage" />
        <meta
          property="twitter:description"
          content="Ahmed Ghoneim - Software Engineer"
        />
        <meta
          property="twitter:image"
          content="https://ahmedghoneim.site/meta-homepage.png"
        />
        <meta property="twitter:image:width" content="1200" />
        <meta property="twitter:image:height" content="628" />
      </Head>
      <body className={redHatDisplay.className}>
        <div className={styles.container}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
