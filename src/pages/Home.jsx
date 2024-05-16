import React from "react";
import { Herobaner } from "../assets";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="relative h-screen"
        style={{
          backgroundImage: `url(${Herobaner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute  text-white inset-0 z-10 flex gap-5 items-center justify-center flex-col">
          <p>2 beds 2 Baths 180 sqft</p>
          <h1 className="text-5xl text-center">
            Office Space at <br /> Northwest
          </h1>
          <p>
            $250<span className="text-sm opacity-50">/month</span>
          </p>
          <button className="bg-[#E7C873] text-black py-3 px-5 rounded-xl text-sm font-medium">
            View Details
          </button>
        </div>
        <div className="absolute w-full md:w-[60%] bottom-[-30px] left-1/2  transform -translate-x-1/2">
          <div className="py-2 px-4 bg-[#1A1A1A] rounded-xl flex justify-between">
            <span>
              <p className="text-[12px] text-white opacity-60 ">keyword</p>
              <p className="text-white my-2">Enter Keyword</p>
            </span>
            <span>
              <p className="text-[12px] text-white opacity-60 ">status</p>
              <p className="text-white my-2">All Status</p>
            </span>
            <span>
              <p className="text-[12px] text-white opacity-60 ">type</p>
              <p className="text-white my-2">All Type</p>
            </span>
            <span className="flex justify-between items-center gap-2">
              <button className="text-[12px] h-[3.5em] px-5 rounded-xl bg-transparent border-1 text-white opacity-60 ">
                Filter
              </button>
              <button className="text-[12px] text-black font-medium px-3 h-[3.5em] rounded-xl bg-[#E7C873]">
                Search
              </button>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
