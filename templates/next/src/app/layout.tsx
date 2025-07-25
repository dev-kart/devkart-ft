import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import ClientBodyWrapper from "@/components/ClientBodyWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "A Next.js application with custom fonts and layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      cz-shortcut-listen="true"
      >
        <ClientBodyWrapper>{children}</ClientBodyWrapper>
      </body>
    </html>
  );
}