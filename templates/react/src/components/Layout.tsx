import React from "react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div
      className={cn("min-h-screen bg-background text-foreground", className)}
    >
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center px-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">My React App</h1>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Add navigation items here */}
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <p className="text-center text-sm text-muted-foreground">
          Built with React, Vite, Tailwind CSS, and ShadCN UI
        </p>
      </div>
    </footer>
  );
}
