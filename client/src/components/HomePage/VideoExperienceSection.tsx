import React from "react";
import InfoCard from "./InfoCard";

const VideoExperienceSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-14">
      <section className="flex flex-col justify-center items-center gap-2 py-10">
        <p className="text-xl text-gray-500">
          Home of the best video experiences on the internet
        </p>
        <h1 className="font-semibold text-7xl w-[80%] text-center">
          Your AI-powered video platform
        </h1>
      </section>
      <div className="grid grid-cols-2 gap-10">
        <div className="w-full col-span-2">
          <InfoCard
            buttonUrl="/"
            title="Hosting and Player"
            text="Host your videos with our HD, ad-free player. Wherever you embed or share them, your custom player design and branding will go with it."
          />
        </div>
        <div className="w-full">
          <InfoCard
            buttonUrl="/"
            image="https://picsum.photos/500"
            col
            imageHeight="50vh"
            title="Creation and Editing"
            text="Host your videos with our HD, ad-free player. Wherever you embed or share them, your custom player design and branding will go with it."
          />
        </div>
        <div className="w-full">
          <InfoCard
            buttonUrl="/"
            image="https://picsum.photos/500/?random=2"
            imageHeight="50vh"
            col={true}
            title="Livestreams and Events"
            text="Host your videos with our HD, ad-free player. Wherever you embed or share them, your custom player design and branding will go with it."
          />
        </div>
      </div>
    </div>
  );
};

export default VideoExperienceSection;
