import Navbar from "./Navbar/Navbar";
import "./globals.css";
import { Red_Hat_Display } from "next/font/google";
import styles from "./layout.module.css";
import Footer from "./Footer/Footer";

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
