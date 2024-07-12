"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import learn from "../../public/learn.png";
import care from "../../public/care.png";
import community from "../../public/community.png";
import Image from "next/image";
import Slider from "react-slick";
import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

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

const Learnslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings}>
      {carddata.map((card, index) => (
        <div key={index} className=" mt-3 flex-col ">
          <div className="flex justify-center items-center">
            <Image src={card.image} alt="icon" />
          </div>
          <div className="text-[#2B4360]  flex mt-3 justify-center items-center font-bold ">
            {card.title}
          </div>
          <div className="text-gray-500 text-center text-sm flex mt-1 justify-center items-center">
            {card.description}
          </div>
        </div>
      ))}
    </Slider>
  );
};
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="absolute right-[-50px] top-[50%] " onClick={onClick}>
      {/* <IoIosArrowDroprightCircle className="text-slate-700 text-2xl cursor-pointer" /> */}
    </div>
  );
};
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="absolute left-[-50px] top-[50%] " onClick={onClick}>
      {/* <IoIosArrowDropleftCircle className="text-slate-700 text-2xl cursor-pointer" /> */}
    </div>
  );
};
export default Learnslider;
