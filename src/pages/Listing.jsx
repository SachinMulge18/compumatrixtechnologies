import React from "react";
import { featuredProperties } from "../utils/constants";
import { CiLocationOn } from "react-icons/ci";
import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";

const Listing = () => {
  return (
    <section className="flex flex-col gap-3 items-center py-6" id="members">
      <h1 className=" text-2xl md:text-3xl font-medium">Featured Properties</h1>
      <p className="text-sm text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <ul className="flex gap-5 text-black text-sm items-center font-medium my-3">
        <li className="bg-[#FFF8F6] px-3 py-1 rounded-xl border-1 items-center">
          All Properties
        </li>
        <li>Villa</li>
        <li>Apartments</li>
        <li>Office</li>
      </ul>
      <div className="flex flex-wrap gap-5 w-[70%] justify-center py-5">
        {featuredProperties.map((curr) => (
          <div
            className="h-72 w-72 cursor-pointer relative hover:translate-y-1"
            style={{
              backgroundImage: `url(${curr.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="bg-[#1F4B43] absolute top-4 left-4 px-2 py-1 rounded-xl text-[10px] text-white">
              FOR SALE
            </span>
            <div className="absolute flex flex-col gap-2 bottom-4  w-full px-4">
              <h1 className=" text-[15px] text-white">{curr.title}</h1>
              <p className="flex items-center gap-1 text-sm text-white">
                <CiLocationOn size={20} />
                <span className="text-[12px]">{curr.location}</span>
              </p>
              <div className="flex justify-between ">
                <div className="flex gap-2">
                  <p className="flex items-center gap-3 border-r-1 pr-3 text-sm text-white">
                    <FaBed /> <span>4</span>
                  </p>
                  <p className="flex items-center gap-3 border-r-1 pr-3 text-sm text-white">
                    <FaShower /> <span>1</span>
                  </p>
                </div>
                <p className="text-white">{curr.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="bg-[#E7C873] px-4 py-1 rounded-xl text-sm">
        See All Listing
      </button>
    </section>
  );
};

export default Listing;
