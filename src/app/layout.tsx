import Navbar from "./Navbar/Navbar";
import "./globals.css";
import { Red_Hat_Display } from "next/font/google";
import styles from "./layout.module.css";
import Footer from "./Footer/Footer";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmed Ghoneim's Homepage",
  description: "Ahmed Ghoneim - Software Engineer",
  openGraph: {
    type: "website",
    url: "https://ahmedghoneim.site/",
    title: "Ahmed Ghoneim's Homepage",
    description: "Ahmed Ghoneim - Software Engineer",
    images: [
      {
        url: "https://ahmedghoneim.site/meta-homepage.png",
        width: 1200,
        height: 628,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://ahmedghoneim.site/",
    title: "Ahmed Ghoneim's Homepage",
    description: "Ahmed Ghoneim - Software Engineer",
    images: [
      {
        url: "https://ahmedghoneim.site/meta-homepage.png",
        width: 1200,
        height: 628,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
