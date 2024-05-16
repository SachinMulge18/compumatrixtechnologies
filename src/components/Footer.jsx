import React from "react";
import vector from "../assets/Vector.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
  FaArrowCircleUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F9F9F9] py-8 flex flex-col gap-3 md:flex-row items-center justify-between px-2 md:px-10">
      <p className="text-sm md:text-lg">Copyright © 2024. JustHome</p>
      <div className="flex items-center gap-2">
        <img src={vector} alt="vector" className="h-8 w-6 bg-black" />
        <h1 className="text-2xl font-medium">JustHome</h1>
      </div>
      <div className="flex gap-3">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagramSquare />
        <FaLinkedin />
      </div>
      <div>
        <FaArrowCircleUp
          size={25}
          onClick={() => window.scrollTo(0, 0)}
          className="cursor-pointer"
        />
      </div>
    </footer>
  );
};

export default Footer;
