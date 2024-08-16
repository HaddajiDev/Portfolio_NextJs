import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Analytics } from '@vercel/analytics/react';
import { url } from "inspector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HaddajiDev",
  description: "Ahmed Haddaji protfolio",  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://res.cloudinary.com/dqkvgv7mh/image/upload/v1723796041/zkhg2eb84wb8tmxvjay7.png" />
      </head>
      <body className={inter.className}>      
        <div className="marg">{children} <Analytics /></div>
        </body>
    </html>
  );
}
