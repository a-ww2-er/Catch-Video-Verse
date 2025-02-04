import { MainContent } from "./MainContent";
import { Navbar } from "./Navbar";
import { Sidebar } from "./SideBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
