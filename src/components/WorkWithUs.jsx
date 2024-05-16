import React from "react";
import { workWithUs } from "../utils/constants";
const WorkWithUs = () => {
  const { title, subTitle } = workWithUs[0];
  return (
    <>
      <div className="w-full flex flex-col items-center py-10">
        <h1 className="text-2xl md:text-3xl font-medium">{title}</h1>
        <p className="text-[12px] mb-8 mt-2">{subTitle}</p>
        <div className="flex justify-center flex-wrap gap-5 w-full">
          {workWithUs[0].items.map((curr, index) => (
            <div className="flex items-center gap-2 flex-col" key={index}>
              <img
                src={curr.image}
                alt={curr.imageName}
                className="text-black h-12 w-12"
              />
              <h1 className=" text-sm font-medium">{curr.imageTitle}</h1>
              <span className="text-[12px] text-wrap text-center">
                {curr.imageSubTitle}
              </span>
            </div>
          ))}
        </div>
        <div className=" flex justify-between items-center py-2 px-2 md:py-12 md:px-16 bg-[#1F4B43] md:w-[70%] my-28 rounded-xl">
          <div>
            <p className="text-white texl-sm md:text-2xl">
              Sign in to streamline your search
            </p>
            <span className="text-[12px] opacity-60 text-white">
              Save properties, create alerts and keep track of the enquiries you
              send to agents.
            </span>
          </div>
          <button className="bg-[#E7C873] py-2 px-5 text-sm rounded-xl ">
            Sign in or create an account
          </button>
        </div>
      </div>
    </>
  );
};

export default WorkWithUs;
