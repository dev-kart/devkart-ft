"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function ClientBodyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      storageKey="theme"
    >
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
