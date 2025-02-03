import Marquee from "react-fast-marquee";

const ToolSuite = () => {
  const logos = [
   "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-20">
      {/* Heading */}
      <h1 className="text-center text-black text-2xl sm:text-5xl font-semibold mb-8">
        Trusted by 287 million creatives,<br/> entrepreneurs, and businesses
      </h1>

      {/* Logo Row */}
      <div className="w-full flex items-center justify-center">
        <Marquee play={true} speed={50} gradient={true} gradientColor="#F3F4F6" className="w-full">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-6"
              style={{ minWidth: "150px" }}
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-16 sm:h-20 object-contain"
              height={100}
              width={100}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ToolSuite;
