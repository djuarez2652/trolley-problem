import { Inter } from "next/font/google";
import "./globals.css";
require('dotenv').config()

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trolley Dilemma Explorer",
  description: "Questions related to the well-known Trolley Dilemma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
