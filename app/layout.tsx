import type { Metadata, Viewport } from "next";
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
  description:
    "The Data Science and Web Development Portfolio of Alex Kruckenberg",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ededed" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${blinker.variable} ${shippori.variable}`}>
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        <a
          href="#main-content"
          className="absolute -top-full left-2 z-50 px-4 py-2 underline bg-[var(--background)] text-[var(--theme-color-link)] rounded-md focus:top-2"
        >
          Skip to main content
        </a>
        <AppHeader />
        <main
          id="main-content"
          tabIndex={-1}
          className="w-[90%] md:w-2/3 min-h-full mx-auto mb-8 bg-[var(--background)] md:drop-shadow-2xl rounded-md"
        >
          {children}
        </main>
        <AppFooter />
      </body>
    </html>
  );
}
