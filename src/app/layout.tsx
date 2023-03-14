import React from "react";
import { Inter, Ubuntu } from 'next/font/google';

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
      <body>{children}</body>
    </html>
  );
}
