import type { Metadata } from "next";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "react-hot-toast";

const manrope = Manrope({ subsets: ["latin"] });

const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GA_ID;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const neueMontreal = localFont({
  src: "./fonts/NeueMontreal.woff",
  variable: "--font-neue-montreal",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Loyalty Ecosystem Reimagined | Monet",
  description: "Tired of loyalty points stuck in one brand? With Monet, you can convert your points from one brand to another, giving you the freedom to use them wherever you want. Be part of the loyalty revolution and join the waitlist for exclusive early access!",
  icons: "https://web-loyalty-static-images.s3.ap-south-1.amazonaws.com/monet-logo.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${neueMontreal.variable} ${manrope.className} bg-black   antialiased`}
      >
        <Navbar />
        <Toaster />
        {children}
      </body>
      <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID!} />
    </html>
  );
}
