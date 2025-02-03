"use client";
import VideoExperienceSection from "@/components/HomePage/VideoExperienceSection";
import { useEffect, useState } from "react";
import HeroSection from "../components/HomePage/HeroSection";
import HomeLayout from "../components/HomePage/Layout";
import ToolSuite from "@/components/HomePage/ToolSuite";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
export default function Home() {
  //prevent hydration issues
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // this forces a rerender
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <HomeLayout title="Catch Video Verse">
      <div>
        <HeroSection />
        <VideoExperienceSection />
        <ToolSuite />
      </div>
    </HomeLayout>
  );
}
