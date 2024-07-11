"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import learnabout from "../public/learnabout.png";
import Image from "next/image";
import Slider from "react-slick";
import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const carddata = [
  {
    title: "Women’s fertility Journey",
    description:
      "The most complex fertility treatment, this course will help you do it right the first time.",
    image: learnabout,
    tags: ["fertility"],
  },
  {
    title: "What causes infertility in Women",
    description:
      "You took sex ed, but now you need to understand fertility. Data to answer your questions about natural conception and diagnosing.",
    image: learnabout,
    tags: ["infertility"],
  },
  {
    title: "IVF Process",
    description:
      "Breaking down every important topic relating to mental health & fertility. We cover data around anxiety, depression, and stress as they.",
    image: learnabout,
    tags: ["ivf", "mental health"],
  },
];

const Learn = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="flex-col bg-orange-100 justify-center items-center p-20 ">
      <div className="flex-col justify-center items-center ">
        <div className="text-[#2B4360] flex justify-center items-center font-bold text-3xl">
          Learn about Fertility
        </div>
        <div className="text-gray-500 flex justify-center items-center">
          STAY UPDATED
        </div>
      </div>
      <div className="flex justify-center w-full items-center gap-10">
        <div className=" w-[80%] gap-10">
          <Slider {...settings}>
            {carddata.map((card, index) => (
              <div key={index} className="p-3">
                <div className="col-span-1 h-[420px]  rounded-md bg-white mt-3 flex-col justify-between items-end ">
                  <div className="flex justify-center items-center">
                    <Image src={card.image} alt="icon" />
                  </div>
                  <div className="flex-col h-full justify-center items-center">
                    <div className="text-[#2B4360]  flex mt-3 justify-center items-center font-bold text-xl">
                      {card.title}
                    </div>
                    <div className="text-gray-500 text-center text-sm px-3 my-2 flex mt-1 justify-center items-center">
                      {card.description}
                    </div>

                    <div className="h-14  justify-center items-center gap-2 flex">
                      <div className="text-center px-6 py-4 rounded-lg border border-slate-700 text-slate-700 text-base font-medium font-['Poppins'] ">
                        Learn More
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
  );
};
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="absolute right-[-50px] top-[50%] " onClick={onClick}>
      <IoIosArrowDroprightCircle className="text-slate-700 text-2xl cursor-pointer" />
    </div>
  );
};
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="absolute left-[-50px] top-[50%] " onClick={onClick}>
      <IoIosArrowDropleftCircle className="text-slate-700 text-2xl cursor-pointer" />
    </div>
  );
};
export default Learn;
