import React from "react";
import Heading from "../Heading";
import Navbar from "../Navbar";

type Props = {
  children: React.ReactElement;
  title: string;
  description?: string;
  keywords?: string;
};

const HomeLayout = ({ children, title, description, keywords }: Props) => {
  return (
    <>
      {" "}
      <Heading
        title={title}
        description={description || "Catch Video Verse"}
        keywords={
          keywords ||
          "Catch Video Verse, Video Verse, share videos, watch videos, content creators, viewers, streaming, monitize"
        }
      />
      <div className="scroll-smooth snap-mandatory snap-y h-screen overflow-auto w-full">
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between  bg-gradient-to-b from-[#FFFFFF] via-[#EEEEEE] to-[#DCDCDC]">
          {children}
        </main>
      </div>
    </>
  );
};

export default HomeLayout;
