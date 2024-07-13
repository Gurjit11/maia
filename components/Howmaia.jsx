"use client";

import learn from "../public/learn.png";
import care from "../public/care.png";
import community from "../public/community.png";
import Image from "next/image";
import Learnslider from "./loginmodals/Learnslider";

const carddata = [
  {
    title: "1. Learn about your fertility",
    description:
      "Learn about your fertility journey, regardless of age, location, stage in life. Learn about options and paths to take control of your fertility and body.",
    image: learn,
  },
  {
    title: "2. Connect with Community",
    description:
      "Connect with a community and the right care providers to get personalised support and answers.",
    image: community,
  },
  {
    title: "3. Find the right care",
    description:
      "Find the right care providers to help you through the physical, mental, emotional, financial and logistical aspects of taking charge of your fertility.",
    image: care,
  },
];

const Howmaia = () => {
  return (
    <div className="flex-col justify-center items-center p-5 sm:p-20 ">
      <div className="flex-col justify-center items-center ">
        <div className="text-[#2B4360] flex justify-center items-center font-bold text-2xl sm:text-3xl">
          How Maia Care Works ?
        </div>
        <div className="text-gray-500 flex justify-center items-center">
          STEPS
        </div>
      </div>
      <div className="flex justify-center w-full items-center gap-10">
        <div className="hidden sm:grid grid-cols-3 w-[80%] gap-3">
          {carddata.map((card, index) => (
            <div key={index} className="col-span-1 mt-3 flex-col ">
              <div className="flex justify-center items-center">
                <Image src={card.image} alt="icon" />
              </div>
              <div className="text-[#2B4360]  flex mt-3 justify-center items-center font-bold text-xl">
                {card.title}
              </div>
              <div className="text-gray-500 text-center flex mt-1 justify-center items-center">
                {card.description}
              </div>
            </div>
          ))}
        </div>
        <div className="sm:hidden w-[90%]">
          <Learnslider />
        </div>
      </div>
    </div>
  );
};

export default Howmaia;
