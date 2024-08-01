// src/components/FAQ.js

import React, { useState } from "react";
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiFillQuestionCircle,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is IVF a surgery?",
      answer:
        "No, IVF (In Vitro Fertilization) is not considered a surgery. It involves a series of procedures to assist with the conception of a child.",
    },
    {
      question: "Is IVF a surgery?",
      answer:
        "No, IVF (In Vitro Fertilization) is not considered a surgery. It involves a series of procedures to assist with the conception of a child.",
    },
    {
      question: "When is the ideal time to do the IVF procedure?",
      answer:
        "The ideal time to start an IVF procedure varies depending on individual circumstances. It is best to consult with a fertility specialist to determine the optimal timing for you.",
    },
  ];

  return (
    <div className="w-full  p-8 mx-auto bg-white rounded-2xl mb-5 shadow">
      <div className=" justify-start items-start gap-2 inline-flex">
        <AiFillQuestionCircle className="text-[#2b4360] text-xl" />

        <div className="text-[#2b4360] text-lg font-medium font-['Poppins'] leading-snug">
          FAQ
        </div>
      </div>
      {faqs.map((faq, index) => (
        <div key={index} className="mt-4">
          <button
            className="w-full text-black p-2 text-left border-b-[0.1px] border-gray-200 rounded-md focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between">
              <span>{faq.question}</span>
              <span>
                {openIndex === index ? (
                  <AiOutlineMinusCircle className="text-[#2b4360] text-xl" />
                ) : (
                  <AiOutlinePlusCircle className="text-[#2b4360] text-xl" />
                )}
              </span>
            </div>
          </button>
          {openIndex === index && (
            <div className="mt-2 p-2 text-gray-700 bg-gray-100 rounded-md">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
