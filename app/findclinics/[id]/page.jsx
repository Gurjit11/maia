"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import about from "../../../public/about.png";
import location from "../../../public/location2.png";
import star from "../../../public/star.png";
import bag from "../../../public/bag.png";
import review from "../../../public/review.png";
import ivf from "../../../public/ivf.png";
import eggsperm from "../../../public/eggsperm.png";
import fertilitysupport from "../../../public/fertilitysupport.png";
import iuitreatment from "../../../public/iuitreatment.png";
import eggfreezing from "../../../public/eggfreezing.png";
import clinic from "../../../public/clinic.png";
import ellipse from "../../../public/Ellipse.png";
import arrow from "../../../public/arrow.png";
import loc from "../../../public/loc.png";
import time from "../../../public/time.png";
import bed from "../../../public/bed.png";
import doctors from "../../../public/doctor.png";
import { AiOutlineCalendar, AiOutlineWhatsApp } from "react-icons/ai";
import { FaDirections } from "react-icons/fa";
import Learn from "@/components/Learn";
import Learnslider from "@/components/loginmodals/Learnslider";
import { FaPhotoFilm } from "react-icons/fa6";
import FAQ from "./FAQ";

const ClinicPage = ({ params }) => {
  const { id } = params;
  console.log(id);
  const [doctor, setDoctor] = useState({});

  const images = [
    "https://via.placeholder.com/60x60",
    "https://via.placeholder.com/60x60",
    "https://via.placeholder.com/60x60",
    "https://via.placeholder.com/60x60",
    "https://via.placeholder.com/60x60",
    "https://via.placeholder.com/60x60",
    "https://via.placeholder.com/60x60",
    "https://via.placeholder.com/60x60",
  ];

  const getClinic = () => {
    let data = JSON.stringify({
      id: id,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://maia-2.onrender.com/getClinic",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        setDoctor(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getClinic();
  }, []);

  return (
    <div className="sm:grid grid-cols-3 bg-gray-50">
      <div className="col-span-2 flex-col p-3 sm:py-20 sm:pl-20">
        <div className=" flex-col bg-gray-100 p-5 rounded-2xl justify-start items-start gap-8 flex">
          <div className="justify-center items-start gap-6 flex-co sm:flex ">
            <div className=" justify-start items-start gap-3 sm:gap-6 flex">
              <div className="sm:w-28 mt-3 sm:h-28 w-16 h-1w-16 relative">
                <Image
                  className="sm:w-28 sm:h-28 w-16 h-1w-16 left-0 top-0 absolute rounded-full"
                  src={doctor.photo}
                />
                <div className="w-8 h-8 px-0.5 py-0.5 left-[88px] top-[88px] absolute justify-center items-center inline-flex">
                  <div className="w-7 h-7 relative"></div>
                </div>
              </div>
              <div className="sm:w-96 flex-col justify-start items-start gap-2 inline-flex">
                <div className="text-[#2b4360] text-3xl font-bold font-['FONTSPRING DEMO - Argent CF'] leading-loose">
                  {doctor.name}
                </div>
                <div className=" flex-col justify-start items-start gap-1 flex">
                  <div className=" justify-start items-center gap-2 inline-flex">
                    <Image src={location} alt="icon" />{" "}
                    <div className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                      Andheri, Mumbai
                    </div>
                  </div>
                  <div className="justify-start items-center gap-2 inline-flex">
                    <Image src={doctors} alt="icon" />
                    <div className="">
                      <span className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                        3 Doctors
                      </span>
                    </div>
                    <Image src={bed} alt="icon" />
                    <div className="">
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
                    <div className="justify-start items-center gap-5 flex">
                      <div className="justify-start items-center gap-2 flex">
                        <Image src={star} alt="icon" />{" "}
                        <div className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                          4.5
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 flex">
                        <Image src={review} alt="icon" />{" "}
                        <div className="text-[#2b4360] text-base font-normal font-['Poppins'] underline leading-tight">
                          512 Reviews
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col sm:mt-0 mt-3 justify-start items-start gap-4 inline-flex">
              <div className="w-full h-14 px-2 py-4 bg-[#2b4360] rounded-lg justify-center items-center gap-2 inline-flex">
                <AiOutlineCalendar className="text-xl" />{" "}
                <div className="text-white text-base font-medium font-['Poppins']">
                  Book Appointment
                </div>
              </div>
              <div className=" h-14 px-2 py-4 bg-white rounded-lg border border-[#49c858] justify-center items-center gap-2 inline-flex">
                <AiOutlineWhatsApp className="text-xl text-[#47c757]" />{" "}
                <div className="text-[#47c757] text-base font-medium font-['Poppins']">
                  Book Via Whatsapp
                </div>
              </div>
            </div>
          </div>
          <div className="hidden  w-full gap-4 sm:flex">
            <div className="p-2 bg-white rounded-lg justify-center items-center gap-1 flex">
              <div className="rounded-lg justify-center items-center gap-1 flex">
                <div className="w-8 h-8 relative">
                  <div className="w-8 h-8  bg-slate-200 rounded-full">
                    <Image src={fertilitysupport} alt={"icon"} />
                  </div>
                </div>
              </div>
              <div className="text-[#2b4360] text-xs font-normal font-['Poppins'] leading-none">
                Fertility Support
              </div>
            </div>
            <div className="p-2 bg-white rounded-lg justify-center items-center gap-1 flex">
              <div className="rounded-lg justify-center items-center gap-1 flex">
                <div className="w-8 h-8 relative">
                  <div className="w-8 h-8  bg-amber-100 rounded-full">
                    <Image src={eggfreezing} alt={"icon"} />
                  </div>
                </div>
              </div>
              <div className="text-center text-[#2b4360] text-xs font-normal font-['Poppins'] leading-none">
                Egg Freezing
              </div>
            </div>
            <div className="p-2 bg-white rounded-lg justify-center items-center gap-1 flex">
              <div className="rounded-lg justify-center items-center gap-1 flex">
                <div className="w-8 h-8 relative">
                  <div className="w-8 h-8  bg-red-100 rounded-full">
                    <Image src={ivf} alt={"icon"} />
                  </div>
                </div>
              </div>
              <div className="text-center text-[#2b4360] text-xs font-normal font-['Poppins'] leading-none">
                IVF Treatment
              </div>
            </div>
            <div className="p-2 bg-white rounded-lg justify-center items-center gap-1 flex">
              <div className="rounded-lg justify-center items-center gap-1 flex">
                <div className="w-8 h-8 relative">
                  <div className="w-8 h-8  bg-green-100 rounded-full">
                    <Image src={iuitreatment} alt={"icon"} />
                  </div>
                </div>
              </div>
              <div className="text-center text-[#2b4360] text-xs font-normal font-['Poppins'] leading-none">
                IUI Treatment
              </div>
            </div>
            <div className="p-2 bg-white rounded-lg justify-center items-center gap-1 flex">
              <div className="rounded-lg justify-center items-center gap-1 flex">
                <div className="w-8 h-8 relative">
                  <div className="w-8 h-8  bg-orange-100 rounded-full">
                    <Image src={eggsperm} alt={"icon"} />
                  </div>
                </div>
              </div>
              <div className="text-center text-[#2b4360] text-xs font-normal font-['Poppins'] leading-none">
                Sperm Freezing
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 py-8 bg-white rounded-2xl shadow flex-col justify-center items-start gap-8 flex">
          <div className=" px-4 md:px-8 flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-center gap-1 inline-flex">
              <FaDirections className="text-[#2b4360] text-xl" />
              <div className="text-[#2b4360] underline text-lg font-medium font-['Poppins'] leading-snug">
                Get Directions
              </div>
            </div>
            <div className="">
              <span className="text-[#2b4360] text-sm font-normal font-['Poppins'] leading-none">
                {doctor?.addresses && doctor?.addresses[0].city}
              </span>
              {/* <span className="text-[#2b4360] text-sm font-bold font-['Poppins'] underline leading-none">
                Read More
                <br />
              </span> */}
            </div>
          </div>
          <div className="px-4 md:px-8 flex flex-col justify-start items-start gap-4">
            <div className="flex justify-start items-start gap-2">
              <FaPhotoFilm className="text-[#2b4360] text-xl" />
              <div className="text-[#2b4360] text-lg font-medium leading-snug">
                Photos
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              {images.slice(0, 8).map((src, index) => (
                <Image
                  key={index}
                  className="w-14 h-14 rounded-lg shadow"
                  src={src}
                  alt={`Photo ${index + 1}`}
                />
              ))}
              <div className="w-14 h-14 relative">
                <Image
                  className="w-14 h-14 rounded-lg shadow"
                  src="https://via.placeholder.com/60x60"
                  alt="More Photos"
                />
                <div className="w-14 h-14 absolute top-0 left-0 bg-[#120303]/60 rounded-lg" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-medium">
                  +7
                </div>
              </div>
            </div>
          </div>
        </div>
        <FAQ />
        <div className="p-5 sm:p-8 bg-white rounded-2xl shadow flex-col justify-start items-start gap-4 inline-flex">
          <div className="justify-start items-center gap-2 inline-flex">
            <Image src={review} alt="icon" />{" "}
            <div className=" text-[#2b4360] text-lg font-medium font-['Poppins'] leading-snug">
              Reviews
            </div>
          </div>

          <div className="flex-col justify-start items-start gap-4 flex">
            <div className=" justify-between items-center inline-flex">
              <div className="justify-start items-center gap-2 flex">
                <div className="justify-start items-center gap-2 flex">
                  <Image
                    className="w-8 h-8 rounded-full"
                    src="https://via.placeholder.com/32x32"
                  />
                  <div className="text-[#2b4360]  sm:text-lg font-semibold font-['Poppins'] leading-snug">
                    Samriddhi Singh{" "}
                  </div>
                </div>
                <div className="w-6 h-6 px-px py-0.5 justify-center items-center flex">
                  <div className="w-5 h-5 relative"></div>
                </div>
              </div>
              <div className="text-[#2b4360] text-xs sm:text-sm font-normal font-['Poppins'] leading-normal">
                9 months ago
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="text-[#5f5f5f] text-sm font-normal font-['Poppins'] leading-none">
                  Visited For High-Risk Pregnancy Care
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="text-[#5f5f5f] text-sm font-normal font-['Poppins'] leading-none">
                    Happy with :
                  </div>
                  <div className="self-stretch px-2 py-1 bg-[#e6f3f2] rounded border border-[#70aaa4] justify-center items-center gap-2 flex">
                    <div className="text-[#2b4360] text-sm font-normal font-['Poppins'] leading-none">
                      IVF
                    </div>
                  </div>
                  <div className="self-stretch px-2 py-1 bg-[#e6f3f2] rounded border border-[#70aaa4] justify-center items-center gap-2 flex">
                    <div className="text-[#2b4360] text-sm font-normal font-['Poppins'] leading-none">
                      Egg Freezing
                    </div>
                  </div>
                </div>
              </div>
              <div className=" text-[#5f5f5f] text-xs font-normal font-['Poppins'] leading-none">
                Dr. Kort practices the exact opposite of a &quot;one size fits
                all&quot; approach to medicine. He took my fears seriously -
                primarily about the hormone injections - and worked with me to
                create a schedule that I was comfortable with, but that also got
                great results. He&apos;s one of the kindest and most
                knowledgeable doctors I&apos;ve ever had.
              </div>
            </div>
          </div>
          <div className="h-[0.1px] bg-gray-300 w-full"></div>

          <div className="flex-col justify-start items-start gap-4 flex">
            <div className=" justify-between items-center inline-flex">
              <div className="justify-start items-center gap-2 flex">
                <div className="justify-start items-center gap-2 flex">
                  <Image
                    className="w-8 h-8 rounded-full"
                    src="https://via.placeholder.com/32x32"
                  />
                  <div className="text-[#2b4360]  sm:text-lg font-semibold font-['Poppins'] leading-snug">
                    Samriddhi Singh{" "}
                  </div>
                </div>
                <div className="w-6 h-6 px-px py-0.5 justify-center items-center flex">
                  <div className="w-5 h-5 relative"></div>
                </div>
              </div>
              <div className="text-[#2b4360] text-xs sm:text-sm font-normal font-['Poppins'] leading-normal">
                9 months ago
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="text-[#5f5f5f] text-sm font-normal font-['Poppins'] leading-none">
                  Visited For High-Risk Pregnancy Care
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="text-[#5f5f5f] text-sm font-normal font-['Poppins'] leading-none">
                    Happy with :
                  </div>
                  <div className="self-stretch px-2 py-1 bg-[#e6f3f2] rounded border border-[#70aaa4] justify-center items-center gap-2 flex">
                    <div className="text-[#2b4360] text-sm font-normal font-['Poppins'] leading-none">
                      IVF
                    </div>
                  </div>
                  <div className="self-stretch px-2 py-1 bg-[#e6f3f2] rounded border border-[#70aaa4] justify-center items-center gap-2 flex">
                    <div className="text-[#2b4360] text-sm font-normal font-['Poppins'] leading-none">
                      Egg Freezing
                    </div>
                  </div>
                </div>
              </div>
              <div className=" text-[#5f5f5f] text-xs font-normal font-['Poppins'] leading-none">
                Dr. Kort practices the exact opposite of a &quot;one size fits
                all&quot; approach to medicine. He took my fears seriously -
                primarily about the hormone injections - and worked with me to
                create a schedule that I was comfortable with, but that also got
                great results. He&apos;s one of the kindest and most
                knowledgeable doctors I&apos;ve ever had.
              </div>
            </div>
          </div>
          <div className="text-[#2b4360] text-sm font-semibold font-['Metropolis'] underline leading-none">
            Show All Reviews (32)
          </div>
        </div>
      </div>
      <div className="col-span-1 sm:pt-20 p-3 pb-10  sm:pr-10">
        <div className="text-[#2b4360] ml-3 font-semibold text-xl">
          Top Verified Clinics
        </div>
        <div className=" sm:flex-col flex overflow-x-auto sm:gap-0 gap-6">
          <div className=" my-2  px-6 py-4 bg-stone-100 rounded-lg shadow justify-start items-start gap-24 flex">
            <div className="justify-start items-center gap-4 w-full md:flex flex-co">
              <Image src={ellipse} alt={"icon"} />

              <div className="w-full flex-col justify-start items-start gap-2 flex">
                <div className="flex justify-between items-center w-full  text-slate-700 text-xl font-bold font-['FONTSPRING DEMO - Argent CF'] leading-normal">
                  <div>Dr. Hemlata Agarwal</div>
                  <div>
                    <Image src={arrow} alt={"icon"} />
                  </div>
                </div>
                <div className="h-28 flex-col justify-start items-start gap-1 flex">
                  <div className=" justify-start items-center gap-2 inline-flex">
                    <Image src={loc} alt={"icon"} />
                    <div className="text-slate-700 text-sm font-normal font-['Poppins'] leading-none">
                      Malad (W), Mumbai
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <Image src={bag} alt={"icon"} />

                    <div className="text-slate-700 text-sm font-normal font-['Poppins'] leading-none">
                      Experience: 27 Years
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <Image src={star} alt={"icon"} />
                    <Image src={star} alt={"icon"} />
                    <Image src={star} alt={"icon"} />
                    <Image src={star} alt={"icon"} />
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
            </div>
          </div>
          <div className=" my-2  px-6 py-4 bg-stone-100 rounded-lg shadow justify-start items-start gap-24 flex">
            <div className="justify-start items-center gap-4 w-full sm:flex flex-co">
              <Image src={ellipse} alt={"icon"} />

              <div className="w-full flex-col justify-start items-start gap-2 flex">
                <div className="flex justify-between items-center w-full  text-slate-700 text-xl font-bold font-['FONTSPRING DEMO - Argent CF'] leading-normal">
                  <div>Dr. Hemlata Agarwal</div>
                  <div>
                    <Image src={arrow} alt={"icon"} />
                  </div>
                </div>
                <div className="h-28 flex-col justify-start items-start gap-1 flex">
                  <div className=" justify-start items-center gap-2 inline-flex">
                    <Image src={loc} alt={"icon"} />
                    <div className="text-slate-700 text-sm font-normal font-['Poppins'] leading-none">
                      Malad (W), Mumbai
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <Image src={bag} alt={"icon"} />

                    <div className="text-slate-700 text-sm font-normal font-['Poppins'] leading-none">
                      Experience: 27 Years
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <Image src={star} alt={"icon"} />
                    <Image src={star} alt={"icon"} />
                    <Image src={star} alt={"icon"} />
                    <Image src={star} alt={"icon"} />
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
            </div>
          </div>
          <div className=" my-2  px-6 py-4 bg-stone-100 rounded-lg shadow justify-start items-start gap-24 flex">
            <div className="justify-start items-center gap-4 w-full sm:flex flex-co">
              <Image src={ellipse} alt={"icon"} />

              <div className="w-full flex-col justify-start items-start gap-2 flex">
                <div className="flex justify-between items-center w-full  text-slate-700 text-xl font-bold font-['FONTSPRING DEMO - Argent CF'] leading-normal">
                  <div>Dr. Hemlata Agarwal</div>
                  <div>
                    <Image src={arrow} alt={"icon"} />
                  </div>
                </div>
                <div className="h-28 flex-col justify-start items-start gap-1 flex">
                  <div className=" justify-start items-center gap-2 inline-flex">
                    <Image src={loc} alt={"icon"} />
                    <div className="text-slate-700 text-sm font-normal font-['Poppins'] leading-none">
                      Malad (W), Mumbai
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <Image src={bag} alt={"icon"} />

                    <div className="text-slate-700 text-sm font-normal font-['Poppins'] leading-none">
                      Experience: 27 Years
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <Image src={star} alt={"icon"} />
                    <Image src={star} alt={"icon"} />
                    <Image src={star} alt={"icon"} />
                    <Image src={star} alt={"icon"} />
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
            </div>
          </div>
        </div>
        <div className="text-[#2b4360] mt-3 ml-3 font-semibold text-xl">
          Learn from Popular Topics
        </div>
        <div className="px-10">
          <Learnslider />
        </div>
      </div>
    </div>
  );
};

export default ClinicPage;
