import HeroSection from "./Components/HomePage/HeroSection";
import HomeLayout from "./Components/HomePage/Layout";
import Navbar from "./Components/Navbar";
export default function Home() {
  return (
    <HomeLayout title="Catch Video Verse">
      <HeroSection />
    </HomeLayout>
  );
}
