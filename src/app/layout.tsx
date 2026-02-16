import type { Metadata } from "next";
import { Cairo, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import localFont from "next/font/local";
import QueryProvider from "@/components/providers/QueryProvider";

const cairo = Cairo({
  subsets: ["latin"], 
  variable: "--font-cairo",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rent Hotel",
  description: "A simple hotel booking application built with Next.js 13 and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cairo.variable} ${geistMono.variable}`}
      >
        <QueryProvider>
          <NavBar />
          <main className="px-24 py-8">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
