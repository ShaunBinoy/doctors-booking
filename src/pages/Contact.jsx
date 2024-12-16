import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>CONTACT US</p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p>Our Office</p>
          <p> 12345 Thrissur</p>
          <p> 541237890</p>
          <p> Carees @ Kunnmulam</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa
          </p>
          <button className="bg-primary text-white font-light px-4 py-2 rounded-full hover:bg-gray-900 transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
