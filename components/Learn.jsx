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
import useWindowSize from "@/hooks/useWindowSize";
import Link from "next/link";

const carddata = [
  {
    title:
      "10 Essential Tips to Prepare for a Successful IUI Treatment Subheading",
    description:
      "The most complex fertility treatment, this course will help you do it right the first time.",
    image:
      "https://alphabetasolution.co.in/wp-content/uploads/2024/10/blog-banner_04.jpg",
    tags: ["IUI"],
    link: "https://alphabetasolution.co.in/10-essential-tips-to-prepare-for-a-successful-iui-treatment-subheading/",
  },
  {
    title: "Advanced Fertility Techniques: Beyond IVF & IUI",
    description:
      "You took sex ed, but now you need to understand fertility. Data to answer your questions about natural conception and diagnosing.",
    image:
      "https://alphabetasolution.co.in/wp-content/uploads/2024/10/blog-banner.png",
    tags: ["IUI", "IVF"],
    link: "https://alphabetasolution.co.in/advanced-fertility-techniques-beyond-ivf-iui/",
  },
  {
    title: "IVF vs IUI: Which Fertility Treatment is Right for You?",
    description:
      "Breaking down every important topic relating to mental health & fertility. We cover data around anxiety, depression, and stress as they.",
    image:
      "https://alphabetasolution.co.in/wp-content/uploads/2024/10/blog-banner_05.jpg",
    tags: ["IUI", "IVF"],
    link: "https://alphabetasolution.co.in/ivf-vs-iui-which-fertility-treatment-is-right-for-you/",
  },
];

const Learn = () => {
  const { width } = useWindowSize();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: width > 400 ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="flex-col bg-orange-100 justify-center items-center sm:p-20 py-10 p-5">
      <div className="flex-col justify-center items-center ">
        <div className="text-[#2B4360] flex justify-center items-center font-bold text-2xl sm:text-3xl">
          Learn about Fertility
        </div>
        <div className="text-gray-500 flex justify-center items-center">
          STAY UPDATED
        </div>
      </div>
      <div className="flex justify-center w-full items-center gap-10">
        <div className="w-[100%] sm:w-[80%] gap-10 sm:overflow-x-visible overflow-x-clip">
          <Slider {...settings}>
            {carddata.map((card, index) => (
              <div key={index} className="sm:p-3 p-1 rounded-md overflow-clip">
                <div className="col-span-1 h-[550px] rounded-md bg-white mt-3 flex-col justify-between items-end relative">
                  <div className="flex rounded-t-md overflow-clip justify-center items-center">
                    <Image
                      width={550}
                      height={250}
                      src={card.image}
                      alt="icon"
                    />
                  </div>
                  <div className="absolute top-2 left-2 flex gap-2">
                    {card.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="bg-white text-slate-700 text-xs font-medium px-2 py-1 rounded"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className="flex h-[300px] gap-4 px-5 justify-center items-center">
                    <div className="flex-col justify-center items-center">
                      <div className="text-[#2B4360] flex justify-center items-center text-center font-bold text-xl">
                        {card.title}
                      </div>
                      <div className="text-gray-500 text-center text-sm px-3 my-2 flex mt-1 justify-center items-center">
                        {card.description}
                      </div>
                      <Link
                        href={card.link}
                        className="h-14 mt-6 justify-center items-center gap-2 flex"
                      >
                        <div className="text-center px-6 py-4 rounded-lg border border-slate-700 text-slate-700 text-base font-medium font-['Poppins']">
                          Learn More
                        </div>
                      </Link>
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
