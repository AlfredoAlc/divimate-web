import type { Metadata } from "next";

import localFont from "next/font/local";

import "./globals.css";

import { LocomotiveProvider } from "@/contexts/LocomotiveProvider";

const sfPro = localFont({
  src: [
    {
      path: "../../public/fonts/SF-Pro.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--sf-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DiviMate | Split Bills & Track Shared Expenses Easily",
  description:
    "DiviMate makes splitting bills simple. Track shared expenses with friends, roommates, or travel groups. Multi-currency & offline support.",
  applicationName: "DiviMate",
  twitter: {
    card: "summary_large_image",
    site: "@divimate",
    creator: "@divimate",
    images:
      "https://zncefmelteykgexwewvi.supabase.co/storage/v1/object/public/marketing/twitter.png",
  },
  facebook: { appId: "61579293178791" },
  appLinks: {
    android: {
      package: "com.alws.divimate",
      url: "https://play.google.com/store/apps/details?id=com.alws.divimate",
      app_name: "DiviMate",
    },
  },
  category: "Finance App",
  keywords: [
    "expense tracker",
    "split bills app",
    "shared expenses",
    "roommate expense tracker",
    "travel expense tracker",
    "group bill splitter",
  ],
  openGraph: {
    title: "DiviMate | Split Bills & Track Shared Expenses",
    description:
      "Easily track group expenses and split bills with DiviMate. Perfect for friends, roommates, and travel. Multi-currency & offline support.",
    //url: "https://yourdomain.com",
    siteName: "DiviMate",
    images: [
      {
        url: "https://zncefmelteykgexwewvi.supabase.co/storage/v1/object/public/marketing/open-graph.png",
        width: 1200,
        height: 630,
        alt: "DiviMate | Group bill splitter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sfPro.className}>
        <LocomotiveProvider>{children}</LocomotiveProvider>
      </body>
    </html>
  );
}
