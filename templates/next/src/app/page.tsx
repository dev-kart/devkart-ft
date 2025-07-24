"use client";

import { useEffect } from "react";
import HeroSection from "@/components/Sections/Hero";

const HomePage = () => {

  useEffect(() => {
    console.log(
      "%c✨ Welcome to my app",
      "font-size: 24px; font-weight: bold; background: linear-gradient(90deg, #8b5cf6, #00e5ff); color: white; padding: 8px 16px; border-radius: 4px;"
    );
    console.log(
      "%c👋 Hello, curious developer!",
      "font-size: 18px; font-weight: bold; color: #8b5cf6;"
    );
    console.log(
      "%cLooking for opportunities to collaborate? Let's connect!\nEmail: contact@devkart.me",
      "font-size: 14px; color: #00e5ff;"
    );
  }, []);


  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">

      <main className="overflow-x-hidden">
        <HeroSection />
      </main>
    </div>
  );
};

export default HomePage;
