import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image?: string;
  title: string;
  text: string;
  buttonUrl: string;
  col?: boolean;
  imageHeight?: string;
};

const InfoCards = ({
  image,
  title,
  text,
  buttonUrl,
  col,
  imageHeight,
}: Props) => {
  return (
    <div
      className={`bg-green-50 rounded-2xl w-full h-full  ${
        col ? "flex flex-col" : "flex flex-row justify-between"
      }`}
    >
      <section className="w-full rounded-2xl bg-green-100">
        <Image
          src={image || "https://picsum.photos/600"}
          className={`object-cover w-[100%] h-[90vh] rounded-[15px]  `}
          style={{ height: imageHeight }}
          width={1000}
          height={800}
          alt={title}
        />
      </section>
      <section className=" gap-10 p-14 w-full flex items-start flex-col justify-center">
        <section className="space-y-4">
          <h1 className="text-4xl font-medium tracking-tighter">{title}</h1>
          <p className="text-xl tracking-tight">{text}</p>
        </section>
        <Link
          className="bg-green-500 cursor-pointer flex items-center px-7 py-2 rounded-lg gap-4"
          href={buttonUrl}
        >
          <ArrowRight color="white" />
        </Link>
      </section>
    </div>
  );
};

export default InfoCards;
