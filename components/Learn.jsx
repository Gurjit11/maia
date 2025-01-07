"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import learnabout from "../public/learnabout.png";
import bg2 from "../public/BG2.svg";
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
      "Intrauterine Insemination (IUI) is a fertility treatment that involves placing sperm directly into the uterus to increase the chances of fertilization. ",
    image:
      "https://alphabetasolution.co.in/wp-content/uploads/2024/10/blog-banner_04.jpg",
    tags: ["IUI"],
    link: "https://alphabetasolution.co.in/10-essential-tips-to-prepare-for-a-successful-iui-treatment-subheading/",
  },
  {
    title: "Advanced Fertility Techniques: Beyond IVF & IUI",
    description:
      "Two of the most commonly known methods are in vitro fertilization (IVF) and intrauterine insemination (IUI).  ",
    image:
      "https://alphabetasolution.co.in/wp-content/uploads/2024/10/blog-banner.png",
    tags: ["IUI", "IVF"],
    link: "https://alphabetasolution.co.in/advanced-fertility-techniques-beyond-ivf-iui/",
  },
  {
    title: "IVF vs IUI: Which Fertility Treatment is Right for You?",
    description:
      "Understanding the differences between these treatments can help you and your partner make an informed decision about the best path forward. ",
    image:
      "https://alphabetasolution.co.in/wp-content/uploads/2024/10/blog-banner_05.jpg",
    tags: ["IUI", "IVF"],
    link: "https://alphabetasolution.co.in/ivf-vs-iui-which-fertility-treatment-is-right-for-you/",
  },
  {
    title: "The Ultimate Guide to IVF: Process, Benefits, and Success Rates",
    description:
      "In vitro fertilization (IVF) is a fertility treatment that involves fertilizing an egg with sperm outside the body. ",
    image:
      "https://alphabetasolution.co.in/wp-content/uploads/2024/10/blog-banner_02.jpg",
    tags: ["IVF"],
    link: "https://alphabetasolution.co.in/the-ultimate-guide-to-ivf-process-benefits-and-success-rates/",
  },
  {
    title: "Top Ten Tips to Boost Female Egg Quality",
    description:
      "The quality of the eggs is one of the most important factors in determining the success of fertility treatments. ",
    image:
      "https://alphabetasolution.co.in/wp-content/uploads/2024/10/blog-banner_03.jpg",
    tags: ["Egg & Sperm Freezing"],
    link: "https://alphabetasolution.co.in/top-ten-tips-to-boost-female-egg-quality/",
  },
];

const Learn = () => {
  const { width } = useWindowSize();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: width < 768 ? 1 : width < 1280 ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0  w-full h-full">
        <Image
          src={bg2}
          alt="Background 1"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex-col relative  justify-center items-center sm:p-20 py-10 p-5">
        <div className="flex-col  justify-center items-center ">
          <div className="text-[#2B4360] font-serif flex justify-center items-center  text-2xl sm:text-5xl">
            Learn about Fertility
          </div>
          <div className="text-gray-600 my-2 sm:text-xl flex justify-center items-center">
            STAY UPDATED
          </div>
        </div>
        <div className="flex justify-center w-full items-center gap-10">
          <div className="w-[100%] sm:w-[90%] gap-10 sm:overflow-x-visible overflow-x-clip">
            <Slider {...settings}>
              {carddata.map((card, index) => (
                <div
                  key={index}
                  className="sm:p-3 p-1  rounded-md overflow-clip"
                >
                  <div className="col-span-1 shadow-md h-[500px] rounded-md bg-white mt-3 flex-col justify-between items-end relative">
                    <div className="flex h-[45%] rounded-t-md overflow-clip justify-center items-center">
                      <Image
                        width={550}
                        height={200}
                        src={card.image}
                        className="hover:scale-105 transition-transform duration-500 ease-in-out"
                        alt="icon"
                      />
                    </div>
                    <div className="absolute top-2 left-2 flex gap-2">
                      {card.tags.map((tag, tagIndex) => (
                        <div
                          key={tagIndex}
                          className="bg-white font-poppins text-slate-700 text-xs font-medium px-2 py-1 rounded"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                    <div className="flex h-[55%] gap-4 px-5 justify-center items-center">
                      <div className="flex-col justify-center items-center">
                        <div
                          className="text-[#2B4360] font-serif 
                       flex justify-center items-center text-center  text-xl"
                        >
                          {card.title}
                        </div>
                        <div className="text-gray-500 font-poppins text-center  px-3 my-2 flex mt-1 justify-center items-center">
                          {card.description}
                        </div>
                        <Link
                          href={card.link}
                          className="h-14 mt-6 justify-center items-center gap-2 flex"
                        >
                          <div className="text-center px-5 py-3.5 rounded-lg border border-slate-700 text-slate-700 text-base font-medium font-['Poppins']">
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
    </div>
  );
};
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="absolute right-[-50px] top-[45%] " onClick={onClick}>
      <IoIosArrowDroprightCircle className="text-[#2B4360] text-4xl cursor-pointer" />
    </div>
  );
};
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="absolute left-[-50px] top-[45%] " onClick={onClick}>
      <IoIosArrowDropleftCircle className="text-[#2B4360] text-4xl cursor-pointer" />
    </div>
  );
};

export default Learn;
