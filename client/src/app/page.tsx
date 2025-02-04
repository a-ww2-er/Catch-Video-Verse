"use client";
import VideoExperienceSection from "@/components/HomePage/VideoExperienceSection";
import { useEffect, useState } from "react";
import HeroSection from "../components/HomePage/HeroSection";
import HomeLayout from "../components/HomePage/Layout";
import ToolSuite from "@/components/HomePage/ToolSuite";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import HomeDashboard from "@/components/HomeDashboard/HomeDashboard";
export default function Home() {
  //prevent hydration issues
  const [hydrated, setHydrated] = useState(false);
  const user = localStorage.getItem("user");
  useEffect(() => {
    // this forces a rerender
    setHydrated(true);
  }, []);
  const router = useRouter();
  if (!hydrated) {
    return null;
  }
  // useEffect(() => {
  //   if (user) {
  //     // window.location.href = "/dashboard"
  //     router.push("");
  //   }
  // }, [user]);
  // const { data: session } = useSession
  if (user) {
    return <HomeDashboard />;
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
