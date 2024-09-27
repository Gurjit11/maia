"use client";
import React, { useState } from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import ivf from "../public/ivf.png";
import iuitreatment from "../public/iuitreatment.png";
import ivfservices from "../public/ivfservices.png";
import Image from "next/image";

const treatments = {
  ivf: {
    image: ivf,
    image2: ivfservices,
    title: "What is IVF?",
    description:
      "A medical process where an egg from a woman and sperm from a man are combined outside the body in a lab to create an embryo. The embryo is then implanted in the uterus to achieve pregnancy.",
    faq: [
      {
        title: "ICSI",
        description:
          "Intracytoplasmic Sperm Injection (ICSI) process details...",
        image: iuitreatment,
      },
      {
        title: "Hysteroscopy",
        description:
          "Hysteroscopy is a procedure for checking the inside of the uterus.",
        image: iuitreatment,
      },
      {
        title: "Laparoscopy",
        description:
          "Laparoscopy is a minimally invasive surgery for diagnosing pelvic conditions.",
        image: iuitreatment,
      },
      {
        title: "Laser Assisted Hatching",
        description: "Laser-assisted hatching to improve implantation rates.",
        image: iuitreatment,
      },
      {
        title: "Blastocyst & embryo transfer",
        description: "Blastocyst and embryo transfer description...",
        image: iuitreatment,
      },
    ],
  },
  // Add other treatment types if needed like IUI, Egg & Sperm Freezing, etc.
};

const TreatmentsAndServices = () => {
  const [activeTab, setActiveTab] = useState("ivf");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex-col justify-center w-full  items-center max-w-5xl py-10 p-2 sm:p-5 ">
        <div className="flex-col mb-10 justify-center items-center ">
          <div className="text-[#2B4360] text-center flex justify-center items-center font-bold text-2xl sm:text-3xl">
            Treatments and Services
          </div>
          <div className="text-gray-500 flex justify-center items-center">
            PROCESS
          </div>
        </div>
        {/* Tabs */}
        <div className="flex sm:w-full text-nowrap overflow-x-auto justify-around space-x-8 border-b-2">
          <button
            className={`pb-2 ml-4 text-lg font-semibold ${
              activeTab === "fertility"
                ? "border-b-2 border-[#2B4360] text-[#2B4360]"
                : "text-gray-400 "
            }`}
            onClick={() => setActiveTab("fertility")}
          >
            Fertility Support
          </button>
          <button
            className={`pb-2  text-lg font-semibold ${
              activeTab === "ivf"
                ? "border-b-2 border-[#2B4360] text-[#2B4360]"
                : "text-gray-400 "
            }`}
            onClick={() => setActiveTab("ivf")}
          >
            IVF Treatment
          </button>
          <button
            className={`pb-2  text-lg font-semibold ${
              activeTab === "iui"
                ? "border-b-2 border-[#2B4360] text-[#2B4360]"
                : "text-gray-400 "
            }`}
            onClick={() => setActiveTab("iui")}
          >
            IUI Treatment
          </button>
          <button
            className={`pb-2  text-lg font-semibold ${
              activeTab === "freezing"
                ? "border-b-2 border-[#2B4360] text-[#2B4360]"
                : "text-gray-400 "
            }`}
            onClick={() => setActiveTab("freezing")}
          >
            Egg & Sperm Freezing
          </button>
        </div>

        {/* Content */}
        <div className="mb-16 mt-6">
          <div className="flex">
            <div className="pr-2 sm:pr-4">
              <Image
                className="bg-slate-100 p-3 rounded-xl w-64 sm:w-32 object-fill"
                src={treatments[activeTab]?.image}
                alt={activeTab}
              />
            </div>
            <div className="mb-6">
              <h2 className="text-base sm:text-2xl font-semibold text-[#2B4360]">
                {treatments[activeTab]?.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                {treatments[activeTab]?.description}
              </p>
            </div>
          </div>
          <div className="sm:grid grid-cols-4 gap-10">
            {/* Cards */}
            <div className="col-span-3 sm:grid h-min grid-cols-2 gap-4">
              {treatments[activeTab]?.faq.map((treatment, index) => (
                <div
                  key={index}
                  className=" border h-min rounded-lg my-2 sm:my-0 shadow-sm bg-[#e6f3f2]"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleExpand(index)}
                  >
                    <div className=" flex font-semibold text-[#2B4360]">
                      <Image className="h-10" src={treatment.image} alt={""} />
                      <span className="p-2 text-sm sm:text-base">
                        {treatment.title}
                      </span>
                    </div>
                    <button className="text-[#2B4360] p-2">
                      {expandedIndex === index ? (
                        <AiOutlineUp />
                      ) : (
                        <AiOutlineDown />
                      )}
                    </button>
                  </div>
                  {expandedIndex === index && (
                    <p className="mt-2 p-2 text-sm sm:text-base text-gray-600">
                      {treatment.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="col-span-1 hidden sm:block">
              <Image src={treatments[activeTab]?.image2} alt="IVF Services" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentsAndServices;
