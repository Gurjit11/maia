"use client";

import learn from "../public/learn.png";
import care from "../public/care.png";
import community from "../public/community.png";
import loc from "../public/loc.png";
import doctor from "../public/doctor.png";
import star from "../public/star.png";
import bed from "../public/bed.png";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

const Findclinics = () => {
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
    <div className="flex-col justify-center items-center p-20 ">
      <div className="flex-col justify-center items-center ">
        <div className="text-[#2B4360] flex justify-center items-center font-bold text-3xl">
          Explore best clinics nearby
        </div>
        <div className="text-gray-500 flex justify-center items-center">
          FIND CLINICS
        </div>
      </div>
      <div className="flex justify-center w-full items-center gap-10">
        <div className="w-[80%] gap-3">
          <Slider {...settings}>
            {carddata.map((card, index) => (
              <div key={index} className="p-3">
                <div className=" bg-stone-100 rounded-lg p-3  shadow">
                  <div className="flex">
                    <img
                      className=" rounded-full w-20 h-20 object-cover"
                      src="https://via.placeholder.com/80x80"
                    />
                    <div className="flex-col ml-3">
                      <div className=" text-slate-700 text-xl font-bold font-['FONTSPRING DEMO - Argent CF'] leading-normal">
                        Cloudnine Hospital
                      </div>
                      <div className=" justify-start items-center gap-2 flex">
                        <Image src={loc} alt="icon" />
                        <div className="text-slate-700 text-sm font-normal font-['Metropolis'] leading-none">
                          Malad (W), Mumbai
                        </div>
                      </div>
                      <div className=" justify-between items-center gap-2 flex">
                        <div className="justify-center items-center gap-2 flex">
                          <Image src={doctor} alt="icon" />

                          <div className="text-slate-700 text-sm font-normal font-['Metropolis'] leading-none">
                            5 Doctors{" "}
                          </div>
                        </div>
                        <div className=" justify-center items-center gap-2 inline-flex">
                          <Image src={bed} alt="icon" />
                          <div className="text-slate-700 text-sm font-normal font-['Metropolis'] leading-none">
                            32 Beds
                          </div>
                        </div>
                      </div>
                      <div className=" items-center gap-2 flex">
                        <Image src={star} alt="icon" />
                        <Image src={star} alt="icon" />

                        <Image src={star} alt="icon" />

                        <Image src={star} alt="icon" />
                      </div>
                    </div>
                  </div>
                  <div className=" bg-slate-700 mt-3 rounded-lg  p-3 justify-center items-center gap-2 flex">
                    <div className=" text-center text-white text-base font-medium font-['Poppins'] leading-tight">
                      View Clinic
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

export default Findclinics;
