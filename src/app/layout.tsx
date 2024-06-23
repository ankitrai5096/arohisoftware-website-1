import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arohi Software",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <title>Arohi Software</title>
        <link rel="icon" href="/favicon.ico" />
        <div className="w-full relative flex justify-center items-center">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
