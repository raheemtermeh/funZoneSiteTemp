"use client";

import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { GameTutorials } from "./components/GameTutorials";
import { AppGuides } from "./components/AppGuides";
import { TeamSection } from "./components/TeamSection";
import { InvestmentSection } from "./components/InvestmentSection";
import { StoryTour } from "./components/StoryTour";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Set dark mode and RTL
    document.documentElement.classList.add("dark");
    document.documentElement.dir = "rtl";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground text-right antialiased">
      <Navbar />
      <main>
        <Hero />
        <GameTutorials />
        <AppGuides />
        <TeamSection />
        <InvestmentSection />
        <StoryTour />
      </main>
      <Footer />
    </div>
  );
}