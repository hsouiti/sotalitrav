import React from "react";
import './globals.css'
import { Inter, Ubuntu } from 'next/font/google';
import Header from "../layouts/header";
import Footer from "../layouts/footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ubuntu.className}>
      <body>
        <div className="main">
          {/*  <Header /> */}
          {children}
          {/*  <Footer /> */}
        </div>

      </body>
    </html>
  );
}
