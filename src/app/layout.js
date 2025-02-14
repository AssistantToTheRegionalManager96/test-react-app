import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import BootstrapClient from "./bootstrapClient";
import Banner from "./components/banner/banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "React POC",
  description: "Proof of Concept app using React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="sticky-top">
          <Banner />
        </div>

        <div className="container">
          <div className="row">
          {children}
          <BootstrapClient />
          </div>
        </div>

        </body>


    </html>
  );
}
