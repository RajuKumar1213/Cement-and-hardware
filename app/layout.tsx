import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for a clean, premium look
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maa Enterprises - Hardware and Cement Center",
  description: "Premium quality cement, hardware, and construction materials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-white flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">
            {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
