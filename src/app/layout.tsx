import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import { AuthProvider } from "./context/AuthContext";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samagra Kottarakkara",
  description: "Official website of Samagra Kottarakkara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ml">
      <body className={inter.className}>
        <LanguageProvider>
          <AuthProvider>
            <NavBar />
            {children}
            <Footer />
            <Analytics />
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
