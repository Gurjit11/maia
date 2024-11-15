"use client";
import icon from "../public/icon.png";
import newicon from "../public/logo/newlogo.png";

import clinic from "../public/clinic.png";
import doctor from "../public/doctor.png";
import Image from "next/image";
import Login from "./Login";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  AiOutlineCaretDown,
  AiOutlineClose,
  AiOutlineDown,
  AiOutlineMenu,
} from "react-icons/ai";
import location from "../public/location.png";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const { city, saveCity } = useAuth();
  const [cityData, setCityData] = useState([]);
  const axios = require("axios");
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null); // For detecting clicks outside the modal
  const [selectedCity, setSelectedCity] = useState(city); // Initially, set to user's city

  useEffect(() => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://maia.projectx38.cloud/web-apis/maia/web/home/cities",
      headers: {
        "device-id": "97c2fe5e-0f68-4d72-b277-d5d2d4e628a8",
        "login-token": "NA",
        "city-id": "NA",
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.data));
        setCityData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false); // Close modal when clicking outside of it
      }
    };

    // Add event listener to detect clicks outside modal
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div className="flex top-0 sticky z-10 sm:hidden items-center w-full bg-white">
        <div
          onClick={() => setSidebar(!sidebar)}
          className="text-xl text-black ml-2 bg-white p-2 cursor-pointer md:hidden"
        >
          {sidebar ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <Link
          href={"/"}
          className="ml-3 justify-start overflow-y-clip items-center gap-1 flex"
        >
          <Image src={newicon} alt="logo" className="scale-125 " height={60} />
        </Link>
        <div className="p-3 px-5 rounded-md border border-red-200 justify-start items-start gap-1 flex">
          <div
            className="text-blue-900 cursor-pointer flex justify-center items-center text-base font-semibold "
            onClick={handleOpenModal}
          >
            Select City
            {/* <Image src={location} width={20} alt="icon" /> */}
            <AiOutlineCaretDown className="ml-2" />
          </div>
        </div>

        {showModal && (
          <div>
            <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
              {/* Modal container */}
              <div
                ref={modalRef}
                className="bg-white p-4 sm:p-6 rounded-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] max-w-2xl"
              >
                {/* Search input */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search your cities"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                {/* Cities grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
                  {cityData.map((city) => (
                    <div
                      key={city.CityId}
                      onClick={() => handleCitySelect(city)}
                      className={`text-center cursor-pointer border-2 p-2 rounded-lg transition-colors ${
                        selectedCity && selectedCity.CityId === city.CityId
                          ? "bg-orange-200 border-orange-500"
                          : "border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      <Image
                        src={city.cityIcon}
                        alt={city.CityId}
                        className="w-20 h-20 mx-auto mb-2" // Adjusted size for mobile
                        width={80}
                        height={80} // Adjusted size for mobile
                      />
                      {/* Ensure city name is visible and responsive */}
                      <p className="text-sm sm:text-lg font-medium truncate">
                        {city.cityId}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* sidebar */}
      <div
        className={
          sidebar
            ? "md:hidden fixed left-0 top-10 flex flex-col items-center justify-between w-full h-[95%] bg-white ease-in duration-300 z-10 p-4"
            : "fixed left-[-100%] top-10 flex flex-col h-[95%] items-center justify-between ease-in duration-300 z-10"
        }
      >
        <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
          <Login setSidebar={setSidebar} />
          <div className="flex-col justify-start items-start gap-4 flex">
            <Link
              href={"/finddoctors"}
              className="justify-start cursor-pointer items-start gap-14 inline-flex"
            >
              <div className="justify-start items-center gap-2 flex">
                {/* <Image src={doctor} /> */}

                <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                  Find Doctor{" "}
                </div>
              </div>
            </Link>
            <Link
              href={"/findclinics"}
              className="justify-start items-center gap-2 inline-flex"
            >
              {/* <Image src={clinic} /> */}

              <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                Find Clinics{" "}
              </div>
            </Link>
            <Link
              href={"/findclinics"}
              className="justify-start items-center gap-2 inline-flex"
            >
              <Image src={clinic} />

              <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                Contact Us{" "}
              </div>
            </Link>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="justify-center items-center gap-2 inline-flex">
              <div className="text-zinc-600 text-sm font-normal font-['Poppins'] leading-none">
                Services
              </div>
            </div>
            <div className="h-32 flex-col justify-start items-start gap-4 flex">
              <Link
                href={"/fertilitysupport"}
                className="justify-center items-center gap-4 inline-flex"
              >
                <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                  Fertility Support
                </div>
              </Link>
              <div className="justify-center items-center gap-4 inline-flex">
                <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                  IVF & IUI
                </div>
              </div>
              <div className="justify-center items-center gap-4 inline-flex">
                <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                  Egg & Sperm Freezing
                </div>
              </div>
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                  Consultation
                </div>
                <div className="w-9 h-6 relative">
                  <div className="w-9 h-6 left-0 top-0 absolute bg-green-100 rounded" />
                  <div className="left-[4px] top-[4px] absolute text-green-600 text-sm font-medium font-['Poppins'] leading-none">
                    Free
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
              Blogs
            </div>
            <Link
              href={"/contactus"}
              className="justify-center items-center gap-4 flex"
            >
              <div className="text-gray-900 text-base font-normal font-['Poppins'] leading-tight">
                Contact Us
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* sidebar end */}
      <div className="hidden sm:block w-full z-10 p-2 bg-white top-0 sm:sticky shadow">
        <div className=" justify-between px-6 items-center flex">
          <div className=" justify-start items-center gap-4 flex">
            <Link
              href={"/"}
              className="justify-start overflow-y-clip items-center gap-1 flex"
            >
              <Image
                src={newicon}
                alt="logo"
                className="scale-125 "
                height={60}
              />
            </Link>
            <div className="p-3 px-5 rounded-md border border-red-200 justify-start items-start gap-1 flex">
              <div
                className="text-blue-900 cursor-pointer flex justify-center items-center text-base font-semibold "
                onClick={handleOpenModal}
              >
                Select City
                {/* <Image src={location} width={20} alt="icon" /> */}
                <AiOutlineCaretDown className="ml-2" />
              </div>
            </div>

            {showModal && (
              <div>
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
                  {/* Modal container */}
                  <div
                    ref={modalRef}
                    className="bg-white p-4 sm:p-6 rounded-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] max-w-2xl"
                  >
                    {/* Search input */}
                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Search your cities"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>

                    {/* Cities grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
                      {cityData.map((city) => (
                        <div
                          key={city.CityId}
                          onClick={() => handleCitySelect(city)}
                          className={`text-center cursor-pointer border-2 p-2 rounded-lg transition-colors ${
                            selectedCity && selectedCity.CityId === city.CityId
                              ? "bg-orange-200 border-orange-500"
                              : "border-gray-200 hover:bg-gray-100"
                          }`}
                        >
                          <Image
                            src={city.cityIcon}
                            alt={city.CityId}
                            className="w-20 h-20 mx-auto mb-2" // Adjusted size for mobile
                            width={80}
                            height={80} // Adjusted size for mobile
                          />
                          {/* Ensure city name is visible and responsive */}
                          <p className="text-sm sm:text-lg font-medium truncate">
                            {city.cityId}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className=" justify-start items-center gap-14 flex">
            <div className="justify-start items-start gap-14 flex">
              <Link
                href={"/finddoctors"}
                className="justify-start items-center gap-2 flex"
              >
                {/* <Image src={doctor} /> */}
                <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                  Find Doctor{" "}
                </div>
              </Link>
              <Link
                href={"/findclinics"}
                className="justify-start items-center gap-2 flex"
              >
                {/* <Image src={clinic} /> */}

                <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                  Find Clinics{" "}
                </div>
              </Link>
              <div className="justify-start items-center gap-2 flex">
                <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                  Consultation
                </div>
                <div className="w-9 h-6 relative">
                  <div className="w-9 h-6 left-0 top-0 absolute bg-green-100 rounded" />
                  <div className="left-[4px] top-[4px] absolute text-green-600 text-sm font-medium font-['Poppins'] leading-none">
                    Free
                  </div>
                </div>
              </div>
              <Link
                href={"https://alphabetasolution.co.in/"}
                className="justify-start items-center gap-2 flex"
              >
                <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                  Blogs{" "}
                </div>
              </Link>
              <Link
                href={"/contactus"}
                className="justify-start items-center gap-2 flex"
              >
                <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                  Contact Us{" "}
                </div>
              </Link>
            </div>
            <Login setSidebar={setSidebar} />
          </div>
        </div>
        {/* <div className=" justify-around items-center flex px-10">
          <Link
            href={"/fertilitysupport"}
            className="justify-center items-center gap-4 flex"
          >
            <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
              Fertility Support
            </div>
          </Link>
          <div className="justify-center items-center gap-4 flex">
            <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
              IVF & IUI
            </div>
          </div>
          <div className="justify-center items-center gap-4 flex">
            <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
              Egg & Sperm Freezing
            </div>
          </div>
          <div className="justify-start items-center gap-2 flex">
            <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
              Consultation
            </div>
            <div className=" bg-green-200 rounded-md p-1">
              <div className=" text-green-600 text-sm font-medium font-['Poppins'] leading-none">
                Free
              </div>
            </div>
          </div>
          <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
            Blogs
          </div>
          <Link
            href={"/contactus"}
            className="justify-center items-center gap-4 flex"
          >
            <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
              Contact Us
            </div>
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
