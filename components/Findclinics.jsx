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
import axios from "axios";
import { useState, useEffect } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import useWindowSize from "@/hooks/useWindowSize";
import Link from "next/link";

// const topClinic = [
//   {
//     title: "1. Learn about your fertility",
//     description:
//       "Learn about your fertility journey, regardless of age, location, stage in life. Learn about options and paths to take control of your fertility and body.",
//     image: learn,
//   },
//   {
//     title: "2. Connect with Community",
//     description:
//       "Connect with a community and the right care providers to get personalised support and answers.",
//     image: community,
//   },
//   {
//     title: "3. Find the right care",
//     description:
//       "Find the right care providers to help you through the physical, mental, emotional, financial and logistical aspects of taking charge of your fertility.",
//     image: care,
//   },
// ];

const Findclinics = () => {
  const [topClinics, setTopClinics] = useState([]);

  const { width } = useWindowSize();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: width < 640 ? 1 : width < 1280 ? 2 : 3,
    slidesToScroll: 1,
    // autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const getTopClinics = () => {
    // let data = JSON.stringify({
    //   id: id,
    // });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://maia.projectx38.cloud/web-apis/maia/web/home/data",
      headers: {
        "device-id": "97c2fe5e-0f68-4d72-b277-d5d2d4e628a8",
        "login-token": "NA",
        "city-id": "NA",
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        setTopClinics(response.data.data.topClinics);
        console.log(topClinics);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTopClinics();
  }, []);
  return (
    <div className="flex-col justify-center items-center sm:p-20 py-10 p-5 ">
      <div className="flex-col justify-center mb-10 items-center ">
        <div className="text-[#2B4360] flex font-[500] justify-center items-center font-serif text-2xl sm:text-5xl">
          Explore best clinics nearby
        </div>
        <div className="text-gray-600 my-2 flex sm:text-xl justify-center items-center">
          FIND CLINICS
        </div>
      </div>
      <div className="flex justify-center w-full items-center gap-10">
        <div className="w-[100%] sm:w-[90%] sm:overflow-x-visible overflow-x-clip gap-3">
          <Slider {...settings}>
            {topClinics.map((clinic) => (
              <div key={clinic.clinicId} className="sm:p-3 p-1">
                <div className=" bg-[#F7F5F3] rounded-lg py-6 px-7 shadow">
                  <div className="flex">
                    <div className="flex justify-center items-center gap-2">
                      <Image
                        className=" rounded-full w-10 h-10 sm:w-20 sm:h-20 object-cover"
                        src={clinic.clinicImage}
                        alt="clinic image"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="flex-col sm:ml-3 font-poppins ml-1">
                      <div className=" text-[#2B4360] sm:text-xl mb-2 font-bold font-serif leading-normal">
                        {clinic.clinicName}
                      </div>
                      <div className="flex ml-1 justify-start items-center gap-2 ">
                        <Image src={loc} alt="icon" />
                        <div className="text-[#2B4360] text-xs sm:text-sm  leading-none">
                          {clinic.address}
                        </div>
                      </div>
                      <div className=" justify-between items-start  mt-1 sm:flex flex-col sm:flex-row gap-4">
                        <div className="justify-center items-center gap-2 inline-flex">
                          <Image src={doctor} alt="icon" />

                          <div className="text-[#2B4360] text-xs sm:text-sm  leading-none">
                            {clinic.doctors} Doctors
                          </div>
                        </div>
                        <div className="ml-2 sm:ml-0 justify-center items-center gap-2 inline-flex">
                          <Image src={bed} alt="icon" />
                          <div className="text-[#2B4360] text-xs sm:text-sm  leading-none">
                            {clinic.beds} Beds
                          </div>
                        </div>
                      </div>
                      <div className="my-1 items-center gap-2 flex">
                        <div className="justify-center items-center gap-2 inline-flex">
                          {[...Array(Math.round(clinic.rating))].map(
                            (_, index) => (
                              <Image key={index} src={star} alt="star icon" />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link href={`/findclinics/${clinic.clinicId}`}>
                    <div className=" bg-[#2B4360] mt-3 rounded-lg  p-4 justify-center items-center gap-2 flex">
                      <div className=" text-center text-white text-base font-medium font-['Poppins'] leading-tight">
                        View Clinic
                      </div>
                    </div>
                  </Link>
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

export default Findclinics;
