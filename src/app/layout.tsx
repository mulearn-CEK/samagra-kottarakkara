import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavBar from "./components/NavBar";

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
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        
        <footer className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold mb-6 text-gradient-white">Focus Areas</h3>
                <ul className="space-y-3">
                  <li><Link href="/education" className="text-gray-400 hover:text-white transition-colors">Education</Link></li>
                  <li><Link href="/healthcare" className="text-gray-400 hover:text-white transition-colors">Healthcare</Link></li>
                  <li><Link href="/agriculture" className="text-gray-400 hover:text-white transition-colors">Agriculture</Link></li>
                  <li><Link href="/tourism" className="text-gray-400 hover:text-white transition-colors">Tourism</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold mb-6 text-gradient-white">Explore</h3>
                <ul className="space-y-3">
                  <li><Link href="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
                  <li><Link href="/news" className="text-gray-400 hover:text-white transition-colors">News</Link></li>
                  <li><Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
                  <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold mb-6 text-gradient-white">Resources</h3>
                <ul className="space-y-3">
                  <li><Link href="/docs" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
                  <li><Link href="/api" className="text-gray-400 hover:text-white transition-colors">API</Link></li>
                  <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors">Support</Link></li>
                  <li><Link href="/community" className="text-gray-400 hover:text-white transition-colors">Community</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold mb-6 text-gradient-white">Contact</h3>
                <ul className="space-y-3">
                  <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About us</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact us</Link></li>
                  <li><Link href="/newsletter" className="text-gray-400 hover:text-white transition-colors">Newsletter</Link></li>
                  <li><Link href="/social" className="text-gray-400 hover:text-white transition-colors">Social Media</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-500 text-sm">
                With ❤️ from μlearn CEK
                <br />
                © {new Date().getFullYear()} Samagra Kottarakkara. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
