import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";

const Contact = () => {
  return (
    <section id="contact" className="flex justify-center items-center flex-col gap-2 py-10 md:py-20">
      <span className="h-14 w-14 flex justify-center items-center rounded-full bg-[#E7C873]">
        <FaTelegramPlane size={30} />
      </span>
      <h1 className="text-3xl font-medium">Stay Up to Date</h1>
      <span className="text-[12px] mb-8 mt-2">
        Subscribe to our newsletter to receive our weekly feed.
      </span>

      <div className="border-2 w-[50%] md:w-[30%] flex justify-between px-3 py-2 rounded-xl">
        <input type="text" placeholder="Yout e-mail" />{" "}
        <button className="flex items-center">
          Send <TiArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Contact;
