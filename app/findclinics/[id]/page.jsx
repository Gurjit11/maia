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
  const [showAllReviews, setShowAllReviews] = useState(false); // Track review toggle

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
      clinicId: id,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://maia.projectx38.cloud/web-apis/maia/web/clinics/details",
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
        setDoctor(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(doctor);

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
                <img
                  className="sm:w-28 sm:h-28 w-16 h-1w-16 left-0 top-0 absolute rounded-full"
                  src={doctor?.clinicDetails?.logoImage}
                  alt={doctor?.clinicDetails?.clinicName}
                />
                <div className="w-8 h-8 px-0.5 py-0.5 left-[88px] top-[88px] absolute justify-center items-center inline-flex">
                  <div className="w-7 h-7 relative"></div>
                </div>
              </div>
              <div className="sm:w-96 flex-col justify-start items-start gap-2 inline-flex">
                <div className="text-[#2b4360] text-3xl font-bold font-['FONTSPRING DEMO - Argent CF'] leading-loose">
                  {doctor?.clinicDetails?.clinicName}
                </div>
                <div className=" flex-col justify-start items-start gap-1 flex">
                  <div className=" justify-start items-center gap-2 inline-flex">
                    <Image src={location} alt="icon" />{" "}
                    <div className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                      {doctor.address?.addressName}
                    </div>
                  </div>
                  <div className="justify-start items-center gap-2 inline-flex">
                    <Image src={doctors} alt="icon" />
                    <div className="">
                      <span className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                        {doctor?.clinitStats?.totalDoctors} Doctors
                      </span>
                    </div>
                    <Image src={bed} alt="icon" />
                    <div className="">
                      <span className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                        {doctor?.clinitStats?.totalBeds} Beds
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
                          {doctor?.reviewsStat?.avgRating}
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 flex">
                        <Image src={review} alt="icon" />{" "}
                        <div className="text-[#2b4360] text-base font-normal font-['Poppins'] underline leading-tight">
                          {doctor?.reviewsStat?.totalReviews} Reviews
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col sm:mt-0 mt-3 justify-start items-start gap-4 inline-flex">
              <div className="w-full h-14 px-2 py-4 bg-[#2b4360] cursor-pointer rounded-lg justify-center items-center gap-2 inline-flex">
                <AiOutlineCalendar className="text-xl text-white" />{" "}
                <div className="text-white text-base font-medium font-['Poppins']">
                  Book Appointment
                </div>
              </div>
              <div className=" h-14 px-2 py-4 cursor-pointer bg-white rounded-lg border border-[#49c858] justify-center items-center gap-2 inline-flex">
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
                <img
                  key={index}
                  className="w-14 h-14 rounded-lg shadow"
                  src={src}
                  alt={`Photo ${index + 1}`}
                />
              ))}
              <div className="w-14 h-14 relative">
                <img
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
            <Image src={review} alt="icon" />
            <div className="text-[#2b4360] text-lg font-medium font-['Poppins'] leading-snug">
              Reviews ({doctor?.reviewsStat?.totalReviews || 0})
            </div>
          </div>

          {doctor?.reviewsStat?.reviews.length > 0 ? (
            doctor.reviewsStat.reviews
              .slice(0, showAllReviews ? doctor.reviewsStat.reviews.length : 2) // Show 2 reviews by default or all when toggled
              .map((review, index) => (
                <div
                  key={index}
                  className="flex-col justify-start items-start gap-4 flex w-full"
                >
                  <div className="justify-between items-center inline-flex w-full">
                    <div className="justify-start items-center gap-2 flex">
                      <Image
                        className="w-10 h-10 rounded-full"
                        src={
                          review?.reviewedBy?.profileImage ===
                          "URL_to_profile_path"
                            ? "https://via.placeholder.com/40"
                            : review?.reviewedBy?.profileImage
                        }
                        alt="Reviewer profile"
                        width={40}
                        height={40}
                      />
                      <div className="text-[#2b4360] sm:text-lg font-semibold font-['Poppins'] leading-snug">
                        {review?.reviewedBy?.name}
                      </div>
                      {review?.reviewedBy?.verified && (
                        <span className="text-[#00b15c] text-xs font-semibold ml-2">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="text-[#2b4360] text-xs sm:text-sm font-normal font-['Poppins'] leading-normal">
                      {new Date(review?.createdAt?.ISODate).toLocaleDateString(
                        "en-GB",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </div>
                  </div>

                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-[#5f5f5f] text-sm font-normal font-['Poppins'] leading-none">
                      {review?.visitInfo?.visitedFor}
                    </div>
                    <div className="justify-start items-center gap-2 inline-flex">
                      <span className="text-[#5f5f5f] text-sm font-normal font-['Poppins'] leading-none">
                        Happy with:
                      </span>
                      {review?.visitInfo?.happyWithTags?.map((tag, index) => (
                        <div
                          key={index}
                          className="self-stretch px-2 py-1 bg-[#e6f3f2] rounded border border-[#70aaa4] justify-center items-center flex"
                        >
                          <div className="text-[#2b4360] text-sm font-normal font-['Poppins'] leading-none">
                            {tag}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-[#5f5f5f] text-sm font-normal font-['Poppins'] leading-normal">
                      {review?.reviewText}
                    </div>
                  </div>
                  <div className="h-[0.1px] bg-gray-300 w-full"></div>
                </div>
              ))
          ) : (
            <div className="text-[#5f5f5f] text-sm font-normal font-['Poppins'] leading-normal">
              No reviews available.
            </div>
          )}

          {/* Show All / Show Less Button */}
          {doctor?.reviewsStat?.reviews.length > 2 && (
            <div
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="text-[#2b4360] text-sm font-semibold font-['Poppins'] underline cursor-pointer leading-none"
            >
              {showAllReviews
                ? "Show Less"
                : `Show All Reviews (${doctor?.reviewsStat?.totalReviews})`}
            </div>
          )}
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
