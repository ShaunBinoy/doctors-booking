import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ******** Left Side ********* */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil odio
            voluptate tempora voluptatem, possimus iure architecto et nostrum?
            Hic voluptate veritatis debitis voluptatum quasi, saepe pariatur
            aspernatur laborum magnam voluptatibus!
          </p>
        </div>
        {/* ******** Center Side ********* */}
        <div>
          <p className="text-x font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* ******** Right Side ********* */}
        <div>
          <p className="text-x font-medium mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 87140 77950</li>
            <li>test123@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* ******* Copyright Text ********* */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Company - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
