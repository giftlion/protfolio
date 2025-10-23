import React from "react";
import { Footer, Layout, Navbar, ThemeSwitch } from "nextra-theme-blog";
import { Banner, Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import FloatingNavbar from "../components/Navbar";
import './globals.css'
import "nextra-theme-blog/style.css";

export const metadata = {
  title: "Netanel - Full Stack Developer",
  description: "Personal blog and portfolio of Netanel, a passionate full stack developer",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        <FloatingNavbar />
        {children}
      </body>
    </html>
  );
}
