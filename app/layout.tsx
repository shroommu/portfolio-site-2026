import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

const blinker = localFont({
  src: "../public/assets/fonts/Blinker/Blinker-Regular.ttf",
  variable: "--font-blinker",
});

const shippori = localFont({
  src: "../public/assets/fonts/Shippori_Mincho/ShipporiMincho-Regular.ttf",
  variable: "--font-shippori",
});

export const metadata: Metadata = {
  title: { default: "Alex Kruckenberg", template: "Alex Kruckenberg | %s" },
  description: "Data Science Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${blinker.variable} ${shippori.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <AppHeader />
        <main className="w-[90%] md:w-2/3 min-h-full mx-auto bg-[var(--background)] md:drop-shadow-2xl rounded-md">
          {children}
        </main>
        <AppFooter />
      </body>
    </html>
  );
}
