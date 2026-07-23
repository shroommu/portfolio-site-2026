import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
      <body className="min-h-full flex flex-col">
        <main className="xs:max-w-full md:max-w-2/3 mx-auto">{children}</main>
      </body>
    </html>
  );
}
