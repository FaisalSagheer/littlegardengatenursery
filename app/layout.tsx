import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactLenis from "lenis/react";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fredoka",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Little Garden Gate Nursery",
  description: "A warm, unhurried nursery for ages 1–5.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <ReactLenis root>
          <main className="flex-1">{children}</main>
        </ReactLenis>
        <Footer />
      </body>
    </html>
  );
}
