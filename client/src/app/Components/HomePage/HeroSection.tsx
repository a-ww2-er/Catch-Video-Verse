import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-4 items-center mt-16 justify-center">
      <h1 className="font-bold text-[5.5rem] tracking-tight">
        Do more with video
      </h1>
      <span className="text-xl">
        Meet the complete video platform that can transform the way you do
        business
      </span>
      <div>
        <Image
          className="w-full h-[100vh]"
          src={"/macbook.png"}
          width={600}
          height={400}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default HeroSection;
