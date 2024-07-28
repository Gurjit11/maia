"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  AiFillFilter,
  AiOutlineSearch,
  AiOutlineSortAscending,
} from "react-icons/ai";
import about from "../../public/about.png";
import review from "../../public/review.png";
import money from "../../public/money.png";
import star from "../../public/star.png";
import bag from "../../public/bag.png";
import clinic from "../../public/clinic.png";
import ivf from "../../public/ivf.png";
import eggsperm from "../../public/eggsperm.png";
import fertilitysupport from "../../public/fertilitysupport.png";
import iuitreatment from "../../public/iuitreatment.png";
import eggfreezing from "../../public/eggfreezing.png";
import axios from "axios";
import Link from "next/link";

const FindDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const getDoctors = () => {
    let data = JSON.stringify({
      role: "DOCTOR",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://maia-2.onrender.com/getAll",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setDoctors(response.data.data);
        setFilteredDoctors(response.data.data); // Initially show all doctors
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDoctors();
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchText(query);
    const filtered = doctors.filter((doctor) => {
      return (
        doctor.name.toLowerCase().includes(query) ||
        doctor.specialization.some((spec) =>
          spec.toLowerCase().includes(query)
        ) ||
        doctor.services.some((service) => service.toLowerCase().includes(query))
      );
    });
    setFilteredDoctors(filtered);
  };

  return (
    <div className="bg-[#F7F7F7] sm:p-20 p-3 pt-10">
      <div className=" md:flex flex-co justify-between mb-6">
        <div className=" w-full">
          <div className="sm:w-[70%] w-full h-14 px-4 py-3 bg-white text-black rounded-lg border border-[#dedede] justify-start items-center inline-flex">
            <input
              type="text"
              placeholder="Search doctors, specialization , service etc"
              value={searchText}
              onChange={handleSearchChange}
              required
              className="search_input w-full peer focus:outline-none p-3"
            />
            <AiOutlineSearch className="w-6 h-6 text-[#ED8081] px-0.5 py-0.5 justify-center items-center flex" />
          </div>
        </div>
        <div className="flex sm:mt-0 mt-2 gap-5">
          <div className="h-14 p-4 bg-white rounded-lg border border-[#dedede] justify-start items-start gap-1 inline-flex">
            <AiFillFilter className="text-[#154B6D] w-6 h-6  justify-center items-center flex" />
            <div className="text-[#2b4360] text-lg font-normal font-['Metropolis'] leading-relaxed">
              Filter
            </div>
          </div>
          <div className="h-14 p-4 bg-white rounded-lg border border-[#dedede] justify-start items-start gap-1 flex">
            <AiOutlineSortAscending className="text-[#154B6D] w-6 h-6  justify-center items-center flex" />
            <div className="text-[#2b4360] text-lg text-nowrap font-normal font-['Metropolis'] leading-relaxed">
              Sort By
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#2b4360] text-xl font-medium font-['Poppins'] leading-relaxed">
        Discover {doctors.length} IVF doctors in Mumbai.
      </div>
      <div className="flex-col min-h-[600px] justify-start items-start gap-7 ">
        {filteredDoctors.map((doctor, index) => (
          <div
            key={index}
            className="sm:p-8 p-3 my-3 bg-white w-full rounded-2xl shadow justify-start items-center gap-3 sm:gap-10 flex"
          >
            <div className="w-32 h-full flex justify-start items-start">
              <img
                className="w-24 h-24 rounded-full"
                src={doctor.photo}
                alt={`${doctor.name} photo`}
              />
            </div>
            <div className=" justify-between w-full flex-co sm:flex">
              <div className=" flex-col justify-start items-start sm:gap-4 inline-flex">
                <div className="text-[#2b4360] text-2xl font-bold font-['FONTSPRING DEMO - Argent CF'] leading-7">
                  {doctor.name}
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <Image src={about} alt="icon" />
                      <div className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                        {doctor.specialization.join(", ")}
                      </div>
                    </div>
                    <div className="justify-start items-start gap-4 inline-flex">
                      <div className="justify-start items-center gap-2 flex">
                        <Image src={review} alt="icon" />
                        <div className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                          512 Reviews
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 flex">
                        <Image src={star} alt="icon" />
                        <div className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                          4.5
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-64 justify-start items-start gap-2 inline-flex">
                    <div className="rounded-lg justify-center items-center gap-1 flex">
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8  bg-slate-200 rounded-full">
                          <Image src={fertilitysupport} alt={"icon"} />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg justify-center items-center gap-1 flex">
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8  bg-amber-100 rounded-full">
                          <Image src={eggfreezing} alt={"icon"} />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg justify-center items-center gap-1 flex">
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8  bg-red-100 rounded-full">
                          <Image src={ivf} alt={"icon"} />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg justify-center items-center gap-1 flex">
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8  bg-green-100 rounded-full">
                          <Image src={iuitreatment} alt={"icon"} />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg justify-center items-center gap-1 flex">
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8  bg-orange-100 rounded-full">
                          <Image src={eggsperm} alt={"icon"} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-64 sm:mt-10 flex-col justify-start items-start gap-2 inline-flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <Image src={money} alt="icon" />
                  <div className="w-56">
                    <span className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                      Fees:{" "}
                    </span>
                    <span className="text-[#00b15c] text-base font-semibold font-['Poppins'] leading-tight">
                      ₹₹₹
                    </span>
                    <span className="text-[#ababab] text-base font-semibold font-['Poppins'] leading-tight">
                      ₹₹
                    </span>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <Image src={clinic} alt="icon" />
                  <div className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                    Starline Hospital
                  </div>
                  <div className="text-[#e29578] text-base font-semibold font-['Poppins'] underline leading-tight">
                    +2 More
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <Image src={bag} alt="icon" />
                  <div className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                    {doctor.experience_years} Years
                  </div>
                </div>
              </div>
              <div className="w-48 mt-2 sm:flex-col  justify-start items-start gap-4 inline-flex">
                <button className="h-14 px-6 py-4 bg-[#2b4360] rounded-lg justify-center items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 text-center text-white text-base font-medium font-['Poppins'] leading-tight">
                    Book Appointment
                  </div>
                </button>
                <Link
                  href={`/finddoctors/${doctor._id}`}
                  className="w-48 h-14 px-6 py-4 rounded-lg border border-[#2b4360] justify-center items-center gap-2 inline-flex"
                >
                  <div className="grow shrink basis-0 text-center text-[#2b4360] text-base font-medium font-['Poppins'] leading-tight">
                    View Profile
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindDoctors;
