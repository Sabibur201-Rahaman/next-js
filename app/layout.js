"use client"
import { Inter } from "next/font/google";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      <ProgressBar
      height="20px"
      color="#fffd00"
      options={{ showSpinner: false }}

/>
      </body>
    </html>
  );
}
