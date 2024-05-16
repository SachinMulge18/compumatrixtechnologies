import React from "react";
import { Avtar } from "../assets";
import {
  AmazonLogo,
  AmdLogo,
  CiscoLogo,
  DropcamLogo,
  LogitechLogo,
  SpotifyLogo,
} from "../assets/testonomialImages";

const Testimonial = () => {
  const testimonialLogos = [
    {
      name: "Amazon",
      logo: AmazonLogo,
    },
    {
      name: "AMD",
      logo: AmdLogo,
    },
    {
      name: "Cisco",
      logo: CiscoLogo,
    },
    {
      name: "Dropcam",
      logo: DropcamLogo,
    },
    {
      name: "Logitech",
      logo: LogitechLogo,
    },
    {
      name: "Spotify",
      logo: SpotifyLogo,
    },
  ];

  return (
    <>
      <section className="bg-[#1A1A1A]" id="pages">
        <div className="flex justify-center py-10 px-5 md:py-20 md:px-40">
          <div className="w-1/2 px-10">
            <h1 className="text-xl md:text-3xl font-medium text-white">
              What our customers are <br className="hidden md:block" /> saying
              us?
            </h1>
            <div className="flex gap-10 mt-5">
              <p className="text-xl text-white flex flex-col">
                10+ <span className="text-[15px] opacity-60">Happy People</span>
              </p>

              <p className="text-xl text-white flex flex-col">
                4.88{" "}
                <span className="text-[15px] opacity-60">Overall rating</span>
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <div className="">
              <span className="flex gap-5 items-center py-2">
                <img className="h-14 w-14" src={Avtar} alt="avtar" />
                <p className="text-white">
                  Cameron Williamson <br />
                  <span>Designer</span>
                </p>
              </span>
              <span className="text-white text-[10px] text-right leading-none 	 md:text-[12px] opacity-70">
                Searches for multiplexes, property comparisons, and the loan{" "}
                <br className="hidden md:block" />
                estimator. Works great. Lorem ipsum dolor sit amet, consectetur
                <br className="hidden md:block" />
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                <br className="hidden md:block" />
                dores.
              </span>
            </div>
          </div>
        </div>
        <div className="border-t-1 border-gray-100 bg-[#1A1A1A] py-16">
          <p className="text-center mb-10 text-white">
            Thousands of world’s leading companies trust Space
          </p>
          <div className="flex justify-center gap-2 md:gap-20 items-center">
            {testimonialLogos.map((curr, index) => (
              <span key={index} className="flex md:h-6 md:w-18 items-center">
                <img
                  src={curr.logo}
                  alt={curr.name}
                  className="w-[100%] h-[100%] object-cover"
                />
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
