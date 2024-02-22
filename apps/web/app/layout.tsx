import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"

import { cn } from "../lib/utils"
import { Navbar } from "@/components/Navbar";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Auto Deploy",
  description: "To deploy to azure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
