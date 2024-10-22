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
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const treatments = {
  naturalFertilitySupport: {
    image: ivf,
    image2: ivfservices,
    title: "What is Natural Fertility Support?",
    description:
      "Natural fertility support focuses on enhancing reproductive health through holistic approaches, including dietary changes, lifestyle modifications, and alternative therapies.",
    faq: [
      {
        title: "Nutritional Counseling",
        description:
          "Personalized diet plans designed to optimize fertility and overall health.",
        image: iuitreatment,
      },
      {
        title: "Herbal Supplements",
        description:
          "Utilization of specific herbs to balance hormones and support reproductive function.",
        image: iuitreatment,
      },
      {
        title: "Acupuncture",
        description:
          "A therapy that helps improve blood flow to reproductive organs and reduce stress levels.",
        image: iuitreatment,
      },
      {
        title: "Stress Management",
        description:
          "Techniques such as yoga and meditation to alleviate stress that may affect fertility.",
        image: iuitreatment,
      },
      {
        title: "Fertility Tracking",
        description:
          "Monitoring ovulation and menstrual cycles to identify the best times for conception.",
        image: iuitreatment,
      },
      {
        title: "Lifestyle Coaching",
        description:
          "Guidance on exercise, sleep, and minimizing exposure to environmental toxins to improve fertility.",
        image: iuitreatment,
      },
    ],
  },

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
  iui: {
    image: ivf,
    image2: ivfservices,
    title: "What is iui?",
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
  eggAndSpermFreezing: {
    image: ivf,
    image2: ivfservices,
    title: "What is Egg and Sperm Freezing?",
    description:
      "Egg and sperm freezing is a process of cryopreservation that allows individuals to store their eggs or sperm for future use, providing flexibility in family planning.",
    faq: [
      {
        title: "Consultation and Screening",
        description:
          "Initial assessment and testing to evaluate health and fertility potential before the freezing process.",
        image: iuitreatment,
      },
      {
        title: "Ovarian Stimulation (for Egg Freezing)",
        description:
          "Hormonal treatment to stimulate the ovaries to produce multiple eggs for retrieval.",
        image: iuitreatment,
      },
      {
        title: "Egg Retrieval",
        description:
          "A minor surgical procedure to collect eggs from the ovaries for freezing.",
        image: iuitreatment,
      },
      {
        title: "Sperm Collection",
        description:
          "Gathering sperm for freezing, either through ejaculation or surgical extraction.",
        image: iuitreatment,
      },
      {
        title: "Cryopreservation",
        description:
          "The process of freezing eggs or sperm using liquid nitrogen for long-term storage.",
        image: iuitreatment,
      },
      {
        title: "Storage Monitoring",
        description:
          "Regular checks on the storage conditions and viability of frozen eggs and sperm.",
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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.6 });

  return (
    <div className="flex justify-center items-center">
      <div className="flex-col justify-center w-full items-center max-w-5xl py-10 p-2 sm:p-5">
        {/* Header */}
        <motion.div
          className="flex-col mb-10 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <div className="text-[#2B4360] text-center flex justify-center items-center font-bold text-2xl sm:text-3xl">
            Treatments and Services
          </div>
          <div className="text-gray-500 flex justify-center items-center">
            PROCESS
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex sm:w-full text-nowrap overflow-x-auto justify-around space-x-8 border-b-2"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button
            className={`pb-2 ml-4 text-lg font-semibold ${
              activeTab === "naturalFertilitySupport"
                ? "border-b-2 border-[#2B4360] text-[#2B4360]"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("naturalFertilitySupport")}
          >
            Fertility Support
          </button>
          <button
            className={`pb-2 text-lg font-semibold ${
              activeTab === "ivf"
                ? "border-b-2 border-[#2B4360] text-[#2B4360]"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("ivf")}
          >
            IVF Treatment
          </button>
          <button
            className={`pb-2 text-lg font-semibold ${
              activeTab === "iui"
                ? "border-b-2 border-[#2B4360] text-[#2B4360]"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("iui")}
          >
            IUI Treatment
          </button>
          <button
            className={`pb-2 text-lg font-semibold ${
              activeTab === "eggAndSpermFreezing"
                ? "border-b-2 border-[#2B4360] text-[#2B4360]"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("eggAndSpermFreezing")}
          >
            Egg & Sperm Freezing
          </button>
        </motion.div>

        {/* Content */}
        <motion.div
          className="mb-16 mt-6"
          key={activeTab}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
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
                <motion.div
                  key={index}
                  className="border h-min rounded-lg my-2 sm:my-0 shadow-sm bg-[#e6f3f2]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleExpand(index)}
                  >
                    <div className="flex font-semibold text-[#2B4360]">
                      <Image className="h-10" src={treatment.image} alt="" />
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
                  {/* Animate expanding and collapsing content */}
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="mt-2 p-2 text-sm sm:text-base text-gray-600">
                          {treatment.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
            <div className="col-span-1 hidden sm:block">
              <Image src={treatments[activeTab]?.image2} alt="IVF Services" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default TreatmentsAndServices;
