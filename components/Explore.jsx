"use client";
import Image from "next/image";
import location from "../public/location.png";
import loc from "../public/loc.png";
import bag from "../public/bag.png";
import ivf from "../public/ivf.png";
import eggsperm from "../public/eggsperm.png";
import fertilitysupport from "../public/fertilitysupport.png";
import iuitreatment from "../public/iuitreatment.png";
import star from "../public/star.png";
import eggfreezing from "../public/eggfreezing.png";
import arrow from "../public/arrow.png";
import ellipse from "../public/Ellipse.png";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Explore = () => {
  const leftTextRef = useRef(null);
  const isLeftTextInView = useInView(leftTextRef, {
    once: true,
    threshold: 0.4,
  });
  const [homeData, setHomeData] = useState({});
  const [topDoctors, setTopDoctors] = useState([]);

  const getHomeData = () => {
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
        setHomeData(response.data);
        setTopDoctors(response.data.data.topDoctors);
        // setTopClinics(response.data.data.topClinics);
        console.log(topDoctors);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getHomeData();
  }, []);

  return (
    <div>
      <div className="sm:grid grid-cols-2 p-3 md:p-20">
        {/* Left Side Text */}
        <motion.div
          ref={leftTextRef}
          className="col-span-1 flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={isLeftTextInView ? { opacity: 1, x: 0 } : {}} // Animate only when in view
          transition={{ duration: 0.8 }}
        >
          <motion.div className="flex-col justify-start items-start sm:gap-6 inline-flex">
            <motion.div
              className="justify-start items-center gap-4 inline-flex"
              initial={{ opacity: 0, x: -50 }}
              animate={isLeftTextInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-slate-700 text-base font-medium ">
                Doctors nearby{" "}
              </div>
              <div className="p-2 rounded border border-red-400 justify-start items-start gap-1 flex">
                <div className="text-red-400 text-base font-semibold ">
                  Mumbai
                </div>
                <Image src={location} width={20} alt="icon" />
              </div>
            </motion.div>

            <div
              className="flex-col justify-start items-start sm:gap-10 flex"
              initial={{ opacity: 0, x: -50 }}
              animate={isLeftTextInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex-col justify-end items-start sm:gap-10 flex">
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className="text-slate-700 sm:text-5xl text-2xl font-bold font-['FONTSPRING DEMO - Argent CF'] leading-10">
                    Explore doctors you can count on
                  </div>
                  <div className="text-zinc-600 sm:text-2xl font-normal font-['Poppins'] leading-7 tracking-widest">
                    FIND SPECIALISTS
                  </div>
                </div>
              </div>
              <Link href="/finddoctors">
                <motion.div className=" px-6 py-4 rounded-lg border border-slate-700 justify-center items-center gap-2 inline-flex">
                  <div className=" text-center text-slate-700 text-base font-medium  leading-tight">
                      <div className="text-center text-slate-700 text-base font-medium leading-tight">
                        Find top Doctors
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <div className="col-span-1 sm:flex-col flex overflow-x-auto overflow-y-clip sm:gap-0 gap-10">
          {topDoctors.slice(1, 4).map((doctor, index) => (
            <motion.div
              className="sm:w-[70%] my-5 px-6 py-4 bg-stone-100 rounded-lg shadow justify-start items-start gap-24 flex"
              key={doctor.doctorId}
              initial={{ opacity: 0, y: 50 }} // Start with 0 opacity and move from below
              animate={{ opacity: 1, y: 0 }} // Fade in and move to natural position
              transition={{ duration: 0.6, delay: index * 0.2 }} // Delayed based on the index for cascading effect
            >
              <div className="justify-start items-center gap-4 w-full md:flex flex-co">
                <Image src={ellipse} alt={"icon"} />

                <div className="w-full flex-col justify-start items-start gap-2 flex">
                  <div className="flex justify-between items-center w-full text-slate-700 text-xl font-bold font-['FONTSPRING DEMO - Argent CF'] leading-normal">
                    <div>{doctor.doctorName}</div>
                    <div>
                      <Image src={arrow} alt={"icon"} />
                    </div>
                  </div>
                  <div className="h-28 flex-col justify-start items-start gap-1 flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <Image src={loc} alt={"icon"} />
                      <div className="text-slate-700 text-sm font-normal font-['Poppins'] leading-none">
                        {doctor.address}
                      </div>
                    </div>
                    <div className="justify-center items-center gap-2 inline-flex">
                      <Image src={bag} alt={"icon"} />

                      <div className="text-slate-700 text-sm font-normal font-['Poppins'] leading-none">
                        Experience: {doctor.experience || "N/A"} Years
                      </div>
                    </div>
                    <div className="justify-center items-center gap-2 inline-flex">
                      {[...Array(Math.round(doctor.rating))].map((_, idx) => (
                        <Image key={idx} src={star} alt="star icon" />
                      ))}
                    </div>

                    <div className="w-64 justify-start items-start gap-2 inline-flex">
                      <div className="rounded-lg justify-center items-center gap-1 flex">
                        <div className="w-8 h-8 relative">
                          <div className="w-8 h-8 bg-slate-200 rounded-full">
                            <Image src={fertilitysupport} alt={"icon"} />
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg justify-center items-center gap-1 flex">
                        <div className="w-8 h-8 relative">
                          <div className="w-8 h-8 bg-amber-100 rounded-full">
                            <Image src={eggfreezing} alt={"icon"} />
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg justify-center items-center gap-1 flex">
                        <div className="w-8 h-8 relative">
                          <div className="w-8 h-8 bg-red-100 rounded-full">
                            <Image src={ivf} alt={"icon"} />
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg justify-center items-center gap-1 flex">
                        <div className="w-8 h-8 relative">
                          <div className="w-8 h-8 bg-green-100 rounded-full">
                            <Image src={iuitreatment} alt={"icon"} />
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg justify-center items-center gap-1 flex">
                        <div className="w-8 h-8 relative">
                          <div className="w-8 h-8 bg-orange-100 rounded-full">
                            <Image src={eggsperm} alt={"icon"} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
