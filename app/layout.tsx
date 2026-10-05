import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anemote.com"),
  title: "AnEmote",
  description: "AnEmote — site in development.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AnEmote",
    description: "AnEmote — site in development.",
    url: "https://anemote.com",
    siteName: "AnEmote",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
