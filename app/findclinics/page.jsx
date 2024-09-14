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
import loc from "../../public/loc.png";
import time from "../../public/time.png";
import bed from "../../public/bed.png";
import ivf from "../../public/ivf.png";
import eggsperm from "../../public/eggsperm.png";
import fertilitysupport from "../../public/fertilitysupport.png";
import iuitreatment from "../../public/iuitreatment.png";
import eggfreezing from "../../public/eggfreezing.png";
import axios from "axios";
import Link from "next/link";

const FindClinics = () => {
  const [clinics, setClinics] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredClinics, setFilteredClinics] = useState([]);
  const [loading, setLoading] = useState(true);

  const getClinics = () => {
    let data = JSON.stringify({
      role: "CLINIC",
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
        setClinics(response.data.data);
        setFilteredClinics(response.data.data); // Initially show all Clinics
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getClinics();
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchText(query);
    const filtered = clinics.filter((clinic) => {
      return (
        clinic.name.toLowerCase().includes(query) ||
        clinic.specialization.some((spec) =>
          spec.toLowerCase().includes(query)
        ) ||
        clinic.services.some((service) => service.toLowerCase().includes(query))
      );
    });
    setFilteredClinics(filtered);
  };

  return (
    <div className="bg-[#F7F7F7] sm:p-20 p-3 pt-10">
      <div className=" md:flex flex-co justify-between mb-6">
        <div className=" w-full">
          <div className="sm:w-[70%] w-full h-14 px-4 py-3 bg-white text-black rounded-lg border border-[#dedede] justify-start items-center inline-flex">
            <input
              type="text"
              placeholder="Search Clinics, specialization , service etc"
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
      {loading ? (
        <div className="text-[#2b4360] text-xl font-medium font-['Poppins'] leading-relaxed">
          Loading...
        </div>
      ) : (
        <div className="text-[#2b4360] text-xl font-medium font-['Poppins'] leading-relaxed">
          Discover {clinics.length} IVF clinics in Mumbai.
        </div>
      )}
      <div className="flex-col min-h-[600px] justify-start items-start gap-7 ">
        {filteredClinics.map((clinic, index) => (
          <div
            key={index}
            className="sm:p-8 p-3 my-3 bg-white w-full h-full rounded-2xl shadow justify-start items-start gap-3 sm:gap-10 flex"
          >
            <div className="sm:w-32 w-20  flex justify-start items-start">
              <Image
                className="sm:w-24 sm:h-24 w-16 h-16 rounded-full object-fill overflow-clip"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6j5cDMUPKlIbeirb9aslDunJKdtSbBg6sQ&s"
                alt={`${clinic.name} photo`}
              />
            </div>
            <div className=" justify-between w-full flex-co sm:flex">
              <div className=" flex-col justify-start items-start sm:gap-4 inline-flex">
                <div className="text-[#2b4360] text-2xl font-bold font-['FONTSPRING DEMO - Argent CF'] leading-7">
                  {clinic.name}
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <Image src={loc} alt="icon" />
                      <div className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                        {/* {clinic.specialization.join(", ")} */}
                        Andheri, Mumbai
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
                  <Image src={bed} alt="icon" />
                  <div className="w-56">
                    <span className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                      32 Beds
                    </span>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <Image src={time} alt="icon" />
                  <div className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                    Open 24 X 7
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="w-20 h-8 relative">
                    <Image
                      className="w-8 h-8 left-0 top-0 absolute rounded-full border border-[#2b4360]"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8k0hViJWVJVa92YPHh41fxa-_1oq4k6eNmA&s"
                    />
                    <Image
                      className="w-8 h-8 left-[22.67px] top-0 absolute rounded-full border border-[#2b4360]"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8k0hViJWVJVa92YPHh41fxa-_1oq4k6eNmA&s"
                    />
                    <Image
                      className="w-8 h-8 left-[45.33px] top-0 absolute rounded-full border border-[#2b4360]"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8k0hViJWVJVa92YPHh41fxa-_1oq4k6eNmA&s"
                    />
                  </div>
                  <div className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                    72+ Doctors
                  </div>
                </div>
              </div>
              <div className=" mt-2 sm:flex-col  justify-start items-start gap-4 inline-flex">
                <button className=" sm:w-full h-14 px-6 py-4 bg-[#2b4360] rounded-lg justify-center items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 text-center text-white text-base font-medium font-['Poppins'] leading-tight">
                    Call Clinic
                  </div>
                </button>
                <Link
                  href={`/findclinics/${clinic._id}`}
                  className="sm:w-full h-14 px-6 py-4 rounded-lg border border-[#2b4360] justify-center items-center gap-2 inline-flex"
                >
                  <div className="grow shrink basis-0 text-center text-[#2b4360] text-base font-medium font-['Poppins'] leading-tight">
                    View Clinic
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

export default FindClinics;
