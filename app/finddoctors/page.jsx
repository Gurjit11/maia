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

import DoctorFilters from "@/components/DoctorFilters";
import { motion } from "framer-motion";
import BookAppointment from "@/components/BookAppointment";

const FindDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0); // Track the current page
  const [totalPages, setTotalPages] = useState(2); // Track total pages

  const getDoctors = (pageNo = 0) => {
    setLoading(true);
    let data = JSON.stringify({
      filters: {},
      pageNo: pageNo,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://maia.projectx38.cloud/web-apis/maia/web/doctors/get",
      headers: {
        "Content-Type": "application/json",
        "device-id": "97c2fe5e-0f68-4d72-b277-d5d2d4e628a8",
        "login-token":
          "f48668d4ea1989d14a5692c5c4b7b2964c1cd4333f27869b149f8f5b7db9c37a0731331d8bfdddaee2b39aa2da420282524c49da2bffa8bf95d5b6d4c956d1aea10ebcc18bb59d9fb0b68e8a0701262037f59784c56f5141e9446618ce41e97864da9a3c4729b6469712045d9d379f7e8996734fcfe58bf4029f8bb2c34d3b8831f3f79b575a4fe0b810e569ba76099e6b6e80a08bc2488350d7dc632a9d0feca6588711354f54e52adfebd6828012b69aaa1e903bfa9ac57a8c676e89d2853f30297fbab03b8b45c49af79cd819bd289ba7b7d3e50d799c01e27dcc02b1580a5ac3b6a6cc94dff860916be3340c958c75952faafd90bff74c677b74767d4d5dba21cd8ab57d8c0991e537ddaffb5f3cefea2c7f31e4d2dad2e1af34c8525d6295c8af0a9aefe466e3c4218ecac52d4265860495f0ece6361f315af2c82c97af5bc9e6aa356f19fcab74af5ecd4ba4c55fedeab1876372e9ff6cc8b1ebc0799988be785907c04772a8b96b2706b95151bdcb63ed2752734a64c6ea9691e0c335",
        "city-id": "NA",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        setDoctors(response.data.data);
        // setTotalPages(response.data.totalPages || 1); // Assume the API sends total pages
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    getDoctors(currentPage);
  }, [currentPage]);
  console.log(doctors);

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

  console.log(filteredDoctors);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
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
          <DoctorFilters />
          <div className="h-14 p-4 bg-white rounded-lg border border-[#dedede] justify-start items-start gap-1 flex">
            <AiOutlineSortAscending className="text-[#154B6D] w-6 h-6  justify-center items-center flex" />
            <div className="text-[#2b4360] text-lg text-nowrap font-normal font-['Metropolis'] leading-relaxed">
              Sort By
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="text-[#2b4360] text-xl font-medium font-['Poppins'] leading-relaxed">
          Loading...
        </div>
      ) : (
        <div className="text-[#2b4360] text-xl font-medium font-['Poppins'] leading-relaxed">
          Discover {doctors?.length} IVF doctors in Mumbai.
        </div>
      )}
      <div className="flex-col min-h-[600px] justify-start items-start gap-7 ">
        {doctors?.map((doctor, index) => (
          <motion.div
            key={index}
            className="sm:p-8 p-3 my-3 bg-white w-full h-full rounded-2xl shadow justify-start items-start gap-3 sm:gap-10 flex"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="sm:w-32 w-20  flex justify-start items-start">
              <Image
                className="sm:w-24 sm:h-24 w-16 h-16 rounded-full object-fill overflow-clip"
                src={doctor.profileImage}
                width={80}
                height={80}
                alt={`${doctor.doctorName} photo`}
              />
            </div>
            <div className=" justify-between w-full flex-co sm:flex">
              <div className=" flex-col justify-start items-start sm:gap-4 inline-flex">
                <div className="text-[#2b4360] text-2xl font-bold font-['FONTSPRING DEMO - Argent CF'] leading-7">
                  {doctor.doctorName}
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <Image src={about} alt="icon" />

                      {doctor.tags.map((tag, index) => (
                        <div
                          key={index}
                          className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight"
                        >
                          {tag.serviceName}
                        </div>
                      ))}
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
                          <Image src={ivf} alt="icon" />
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
                    {doctor.experiance} Years
                  </div>
                </div>
              </div>
              <div className=" mt-2 sm:flex-col  justify-start items-start gap-4 inline-flex">
                <BookAppointment doctor={doctor} />
                <Link
                  href={`/finddoctors/${doctor.doctorId}`}
                  className="sm:w-full h-12 px-6 py-4 rounded-lg border border-[#2b4360] justify-center items-center gap-2 inline-flex"
                >
                  <div className="grow shrink basis-0 text-center text-[#2b4360] text-base font-medium font-['Poppins'] leading-tight">
                    View Profile
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
        {/* Pagination Controls */}
        {!loading && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              className="px-4 py-2 bg-gray-200 text-[#2b4360] rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handlePrevPage}
              disabled={currentPage === 0}
            >
              Previous
            </button>
            <span className="text-[#2b4360] font-semibold">
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              className="px-4 py-2 bg-gray-200 text-[#2b4360] rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleNextPage}
              disabled={currentPage >= totalPages - 1}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindDoctors;
