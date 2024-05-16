import React from "react";
import { Discoverpage, Discoversubimage } from "../assets";

const Discover = () => {
  const dataArray = [
    {
      title: "$18M",
      subtitle: "Owned from properties transactions",
    },
    {
      title: "15K",
      subtitle: "Properties for Sell",
    },
    {
      title: "26K",
      subtitle: "Properties for Sell",
    },
    {
      title: "890",
      subtitle: "Daily completed transactions.",
    },
  ];
  return (
    <section className="flex flex-col" id="members">
      <div
        className="h-[35em] relative"
        style={{
          backgroundImage: `url(${Discoverpage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute  text-white inset-0 z-10 flex items-center justify-center flex-col">
          <h1 className="text-center text-5xl">
            Discover a place you'll <br /> love to live
          </h1>
          <p className="text-center text-[12px] opacity-70 my-5">
            Pellentesque egestas elementum egestas faucibus sem. Velit nunc{" "}
            <br />
            egestas ut morbi. Leo diam diam
          </p>
          <button className="bg-[#E7C873] text-black text-sm font-medium px-4 py-2 rounded-lg">
            View All Property
          </button>
        </div>
      </div>
      {/* 2nd */}
      <div className="flex md:flex-row md:justify-between flex-col-reverse gap-2 w-[70%] mx-auto py-24">
        <div className="md:w-1/2 w-full">
          <h1 className="text-[#1A1A1A] text-2xl  md:text-4xl font-medium mb-5">
            We Use Real Estate to Show <br className="hidden md:block" /> Our
            Appreciation of The <br className="hidden md:block" /> World
          </h1>
          <p className="text-sm text-black font-medium opacity-60">
            Pellentesque egestas elementum egestas faucibus sem. Velit nunc
            egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium.
            Mi mauris nulla ac dictum ut mauris non.
          </p>
          <div className="flex flex-wrap mt-10 gap-5">
            {dataArray.map((curr, index) => (
              <span className="w-48 h-24" key={index}>
                <h1 className="text-3xl font-medium">{curr.title}</h1>
                <span className="text-sm">{curr.subtitle}</span>
              </span>
            ))}
          </div>
          <button className="bg-[#E7C873] px-4 py-2 rounded-xl mt-5">
            Learn More
          </button>
        </div>
        <div className="h-full md:w-1/2 flex justify-end">
          <div className="w-[27em] h-[30em]">
            <img
              src={Discoversubimage}
              alt="discoversubimage"
              className="h-[100%] w-[100%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
