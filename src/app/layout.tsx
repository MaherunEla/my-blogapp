"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Components/shared/Header/Navbar";
import { ThemeContext, ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/provider/ThemeProvider";
import NextAuthProvider from "@/provider/NextAuthProvider";
import GlobalState from "@/context";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();
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
                <QueryClientProvider client={queryClient}>
                  <div className="container">
                    <div className="wrapper">
                      <Navbar />
                      {children}
                    </div>
                  </div>
                </QueryClientProvider>
              </GlobalState>
            </NextAuthProvider>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
