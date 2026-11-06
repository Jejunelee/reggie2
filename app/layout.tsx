import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const angleton = localFont({
  src: [
    {
      path: "../public/fonts/AngletonReg.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/AngletonItalic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-angleton",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iamreggieaspiras.com"),
  title: "Reggie's Kitchen - Exploring Filipino Food & Culture",
  description:
    "Explore the rich heritage of Filipino cuisine through recipes, stories, and culinary traditions with Reggie Aspiras.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${angleton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <CursorGlow />

        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}