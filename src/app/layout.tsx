"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Components/shared/Header/Navbar";
import { ThemeContext, ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/provider/ThemeProvider";
import NextAuthProvider from "@/provider/NextAuthProvider";
import GlobalState from "@/context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <NextAuthProvider>
              <GlobalState>
                <div className="container">
                  <div className="wrapper">
                    <Navbar />
                    {children}
                  </div>
                </div>
              </GlobalState>
            </NextAuthProvider>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
