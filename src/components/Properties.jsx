import React from "react";
import { properties, workWithUs } from "../utils/constants";
const Properties = () => {
  const { propertyTitle, propertySubTitle } = properties[0];
  return (
    <>
      <section
        className="flex justify-center items-center  flex-col py-20 "
        id="listings"
      >
        <h1 className="text-2xl md:text-3xl font-medium">{propertyTitle}</h1>
        <p className="text-[12px] mb-8 mt-2">{propertySubTitle}</p>
        <div className="w-full flex flex-row flex-wrap justify-center gap-5">
          {properties[0].items.map((curr) => (
            <div
              className="h-72 w-56 py-5 px-5 rounded-xl shadow-sm cursor-pointer hover:translate-y-1 transition-ease-in-out duration-500"
              style={{
                backgroundImage: `url(${curr.cityImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <p className="text-white">{curr.cityName}</p>
              <span className="text-[12px] text-white">
                {curr.numberOfProperties} properties
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Properties;
