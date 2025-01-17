"use client";

import learn from "../public/learn.png";
import care from "../public/care.png";
import community from "../public/community.png";
import Image from "next/image";
import Learnslider from "./loginmodals/Learnslider";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.4 });

  return (
    <div className="flex-col justify-center items-center p-5 sm:p-15 sm:py-20 ">
      <div className="flex-col justify-center items-center ">
        <motion.div
          className="text-[#2B4360] flex font-serif justify-center items-center font-[500] text-2xl sm:text-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          How Maia Care Works ?
        </motion.div>
        <motion.div
          className="text-gray-500 flex justify-center sm:text-xl items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          STEPS
        </motion.div>
      </div>

      <motion.div
        className="flex justify-center w-full items-center gap-10"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="hidden sm:grid grid-cols-3 w-[80%] gap-3">
          {carddata.map((card, index) => (
            <motion.div
              key={index}
              className="col-span-1 mt-3 flex-col bg-white p-2 m-2 rounded-lg "
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.05)",
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex justify-center items-center">
                <Image src={card.image} alt="icon" />
              </div>
              <div className="text-[#2B4360] flex mt-3 justify-center items-center font-semibold text-xl">
                {card.title}
              </div>
              <div className="text-gray-500 text-center flex mt-1 justify-center items-center">
                {card.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* For mobile slider */}
        <div className="sm:hidden w-[90%]">
          <Learnslider />
        </div>
      </motion.div>
    </div>
  );
};

export default Howmaia;
