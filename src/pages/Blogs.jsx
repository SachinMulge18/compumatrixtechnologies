import React from "react";
import { blogs } from "../utils/constants";
import { TiArrowRight } from "react-icons/ti";
import { FaApple, FaGooglePlay } from "react-icons/fa";

import { blogs5 } from "../assets/blogsImages";

const Blogs = () => {
  return (
    <section className="flex justify-center items-center flex-col mt-24" id="blog">
      <h1 className="text-3xl font-medium">Recent Articles & News</h1>
      <p className="text-[12px] mb-8 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex w-full gap-5 justify-center flex-wrap">
        {blogs.map((curr, index) => (
          <div
            key={index}
            className="border-1 h-72 w-60 rounded-xl overflow-hidden cursor-pointer hover:translate-y-1"
          >
            <div className=" h-36 w-full">
              <img
                src={curr.image}
                alt={curr.title}
                className="h-[100%] w-[100%] object-cover"
              />
            </div>
            <div className="p-5 flex flex-col gap-3">
              <span className="flex text-[11px] justify-between">
                <p>{curr.category}</p> {curr.date}
              </span>
              <h1 className="text-[13px] font-medium text-center">
                {curr.title}
              </h1>
              <p className="text-[12px] text-center flex items-center justify-center">
                Read More <TiArrowRight size={20} />
              </p>
            </div>
          </div>
        ))}
      </div>
      {/*  */}
      <div className="flex justify-center items-center  w-full md:w-[70%] h-[20em] bg-[#1F4B43] border-3 my-16 rounded-xl overflow-hidden">
        <div className="w-3/5 py-5 px-5">
          <button className="bg-opacity-30 bg-gray-50 px-3 py-1 rounded-xl text-sm my-2 ">
            Start Today
          </button>
          <h1 className="text-xl text-white">Download the App</h1>
          <p className="text-[12px] text-white opacity-60 my-1">
            Take classes on the go with the just home app. Stream or download{" "}
            <br /> to watch on the plane, the subway, or wherever you learn
            best.
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:gap-5">
            <div className="bg-[#FFFFFF] h-12 w-40 rounded-xl flex justify-center items-center gap-2">
              <FaApple size={28} className="mx-3 border-r-2 py-1" />
              <span className="text-[10px] font-medium">
                Download on the Apple Store
              </span>
            </div>
            <div className="bg-[#FFFFFF] h-12 w-40 rounded-xl flex items-center">
              <FaGooglePlay size={28} className="mx-3 border-r-2 py-1" />
              <span className="text-[10px] font-medium">
                Get in on <br />
                Google Play
              </span>
            </div>
          </div>
        </div>
        <div className="w-2/5 h-[20em]">
          <img
            src={blogs5}
            alt="blogsimge"
            className="h-[100%] w-[100%] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
