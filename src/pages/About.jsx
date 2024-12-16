import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            odio exercitationem, quae voluptates architecto, alias cupiditate
            commodi tempora pariatur dolorem eaque rerum ullam. Expedita
            architecto minus doloremque est animi? Optio!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem illo iure veritatis nisi possimus totam ut quaerat
            quia sint consectetur, quam molestiae. Facilis sapiente impedit
            ipsam debitis perspiciatis corporis at.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nobis
            quas fugit, suscipit at ut alias, distinctio natus ipsa tempora
            consequatur corporis molestiae blanditiis dolores, laborum minima.
            Obcaecati, enim quidem?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
