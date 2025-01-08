import React from "react";

const Heading = ({
  title,
  description,
  keywords,
}: {
  title: string;
  description: string;
  keywords: string;
}) => {
  const titleCapitalized = title.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  return (
    <>
      <title >{titleCapitalized.join(" ") }</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </>
  );
};

export default Heading;
