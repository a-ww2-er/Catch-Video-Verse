import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className=" w-full min-h-screen  bg-gradient-to-b from-[#FFFFFF] via-[#EEEEEE] to-[#DCDCDC] flex flex-col gap-4 items-center mt-16 justify-center">
      <h1 className="font-bold text-[5.5rem] tracking-tight">
        Do more with video
      </h1>
      <span className="text-xl">
        Meet the complete video platform that can transform the way you do
        business
      </span>
      <div className="flex gap-2">
        <span className="bg-green-500 cursor-pointer flex items-center px-5 py-3 rounded-lg gap-4">
          {" "}
          <p className="text-white text-lg font-medium">See Plans</p>
          <p className="bg-gray-300 p-2 px-3 rounded-lg">
            <ArrowRight size={18} />
          </p>
        </span>
        <span className="bg-gray-200 cursor-pointer flex items-center px-5 py-3 rounded-lg gap-4">
          {" "}
          <p className="text-black text-lg font-medium">Join for free</p>
          <p className="bg-white p-2 px-3 rounded-lg">
            <ArrowRight size={18} />
          </p>
        </span>
      </div>
      <div className="mb-8">
        <Image
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
