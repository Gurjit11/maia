"use client";
import React from "react";
import Image from "next/image";
import priyanka from "../public/priyanka.png";
import shahrukh from "../public/shahrukh.png";
import jennifer from "../public/jennifer.png";
import quotation from "../public/quotation.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowSize from "@/hooks/useWindowSize";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  // axios
  //   .request(config)
  //   .then((response) => {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  const cardData = [
    {
      img: priyanka,
      alt: "Priyanka Chopra",
      quote:
        "It's the best thing you'll give yourself because you're taking the power from your biological clock, and you can work until however long you want. Your eggs will still be the same age as when you froze them.",
      name: "Priyanka Chopra, Dax Shephard Armchair Expert Podcast",
    },
    {
      img: shahrukh,
      alt: "Shahrukh Khan",
      quote:
        "Shahrukh and Gauri Khan choose IVF to add a blessing into their family. “Amidst all the noise that has going around, the sweetest is the one made our newborn baby, AbRam.”",
      name: "Shahrukh Khan's press statement at Jul 10,2013",
    },
    {
      img: jennifer,
      alt: "Jennifer Aniston",
      quote: "Freeze your eggs. Do yourself a favor",
      name: "Jennifer Aniston, Danielle Pergamengt's Allure Article",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className=" bg-white justify-start items-center w-full flex">
      <div
        className={`bg-[url('../public/mobileintersect.png')] bg-cover w-full sm:bg-contain sm:bg-[url('../public/intersects.png')] bg-no-repeat `}
      >
        <div className="sm:grid py-5 w-full sm:py-14 grid-cols-2">
          <div className="sm:hidden overflow-clip col-span-1  justify-center items-center flex">
            {/* <div className="justify-center items-center flex-col">
              <Image
                src={priyanka}
                className="w-[60%] sm:ml-32 ml-20"
                alt="Priyanka Chopra"
              />
              <div className="mx-3 p-2 w-[90%] bg-slate-200 rounded-xl border border-gray-200 backdrop-blur-lg flex-col justify-end items-end gap-2 flex">
                <div className="justify-start items-start gap-4 flex">
                  <Image
                    src={quotation}
                    className="w-10"
                    alt="Priyanka Chopra"
                  />
                  <div className="text-slate-700 text-xs sm:text-sm font-normal leading-normal font-halant">
                    It's the best thing you'll give yourself because
                    you're taking the power from your biological clock, and
                    you can work until however long you want. Your eggs will
                    still be the same age as when you froze them.
                  </div>
                </div>
                <div className="flex-col text-xs sm:text-sm font-semibold justify-start items-start gap-2 flex">
                  <div className="text-center flex">
                    <span className="text-slate-700   leading-tight">- </span>
                    <span className="text-slate-700  underline leading-tight font-poppins">
                      Priyanka Chopra, Dax Shephard Armchair Expert Podcast
                    </span>
                  </div>
                </div>
              </div>
            </div> */}
            <Slider {...settings} className="w-full">
              {cardData.map((card, index) => (
                <div key={index} className="flex justify-center items-center">
                  <div className="p-4 rounded-lg">
                    <Image
                      src={card.img}
                      className="w-[60%] mx-auto"
                      alt={card.alt}
                    />
                    <div className="mx-3 p-2 bg-slate-200 rounded-xl border border-gray-200 backdrop-blur-lg flex-col justify-start items-start gap-2 flex mt-4">
                      <div className="justify-start items-start gap-4 flex w-full">
                        <Image src={quotation} className="w-10" alt="Quote" />
                        <div className="text-slate-700 text-xs sm:text-sm font-light leading-normal">
                          {card.quote}
                        </div>
                      </div>
                      <div className="flex-col text-xs sm:text-sm font-semibold justify-end items-end gap-2 flex w-full">
                        <div className="text-right flex w-full justify-end">
                          <span className="text-slate-700 leading-tight">
                            -
                          </span>
                          <span className="text-slate-700 underline leading-tight font-poppins">
                            {card.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-span-1 flex-col justify-center gap-6 flex">
            <motion.div
              className="flex-col sm:p-20 p-5 gap-2 flex"
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex-col gap-4 flex">
                <motion.div
                  className="sm:text-start text-center text-slate-700 sm:text-6xl text-2xl font-normal font-serif"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.2 }}
                >
                  Discover Your Fertility Journey
                </motion.div>
                <motion.div
                  className="sm:text-start text-center text-slate-700 sm:text-3xl  font-poppins"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  Search with purpose
                </motion.div>
              </div>
              <motion.div
                className="justify-start items-center gap-2 flex"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div className="w-[100%] gap-1 flex">
                  <div className="bg-white w-[90%]  text-black rounded border border-neutral-200 justify-start items-center flex">
                    <div className="bg-white text-black rounded border border-neutral-200 justify-start items-center flex w-full">
                      <input
                        type="text"
                        placeholder="Search your queries"
                        required
                        className="search_input outline-none rounded-sm w-full peer p-3"
                      />
                      <AiOutlineSearch className="text-[#E29578] text-3xl mr-3" />
                    </div>
                  </div>
                  <div className="px-6 py-3 bg-[#E29578] rounded-lg justify-center items-center gap-2 flex">
                    <div className="text-center text-white text-base font-medium font-['Poppins']">
                      Search
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                className="justify-start text-xs sm:text-sm items-start gap-1 flex"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="text-slate-700 text-xs sm:text-sm font-light font-poppins">
                  Eg.
                </div>
                <motion.div className="text-slate-700 text-xs sm:text-sm font-light font-poppins">
                  <div className="text-slate-700 text-xs sm:text-sm font-light font-poppins">
                    Is IVF safe?, What is Egg Freezing?
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <div className="hidden col-span-1 w-full overflow-clip pb-1.5 justify-center items-center sm:flex">
            <Slider {...settings} className="w-full">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="p-4 flex justify-center items-center"
                >
                  <div className=" p-4 rounded-lg  w-[90%]">
                    <Image
                      src={card.img}
                      className="w-[60%] mx-auto"
                      alt={card.alt}
                    />
                    <div className="mx-3 p-2 bg-[#E6F3F2] rounded-xl border border-gray-200 backdrop-blur-lg flex-col justify-end items-end gap-2 flex mt-4">
                      <div className="justify-start items-start gap-4 flex">
                        <Image src={quotation} className="w-10" alt="Quote" />
                        <div className="text-[#2B4360] text-xs sm:text-sm font-serif leading-normal">
                          {card.quote}
                        </div>
                      </div>
                      <div className="flex-col text-xs sm:text-sm font-semibold justify-start items-start gap-2 flex">
                        <div className="text-center flex">
                          <span className="text-[#2B4360] leading-tight">
                            -
                          </span>
                          <span className="text-[#2B4360] underline leading-tight font-['Poppins']">
                            {card.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
