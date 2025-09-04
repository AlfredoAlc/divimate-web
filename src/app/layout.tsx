import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const sfPro = localFont({
  src: [
    {
      path: "../../public/fonts/SF-Pro.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--sf-pro",
});

export const metadata: Metadata = {
  title: "Divimate | Shared Bill Tracker",
  description: "Group expense tracker app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sfPro.className}>{children}</body>
    </html>
  );
}
