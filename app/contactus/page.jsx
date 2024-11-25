"use client";
import React, { useState } from "react";
import contactus from "../../public/contactus.png";
import { AiOutlineClose, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Image from "next/image";
import Modal from "react-modal";
import contactusthanks from "../../public/contactusthanks.png";

import { motion } from "framer-motion";

import axios from "axios";

const ContactUS = () => {
  // Define state variables
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [queries, setQueries] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setName("");
    setPhone("");
    setEmail("");
    setQueries("");

    setIsOpen(false);
  }

  // Handle form submission (dummy function for now)
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      name,
      contactNo: phone,
      email,
      message: queries,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://maia.projectx38.cloud/web-apis/maia/web/contactUs/submit",
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
        openModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const modalAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div>
      <motion.div
        className="md:px-20 py-5 sm:py-10"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        <div className="md:grid grid-cols-2">
          <motion.div
            className="grid-cols-1 md:hidden flex justify-center items-center p-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image src={contactus} alt="Contact Us" className="object-cover" />
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            className="col-span-1 w-full p-5 sm:p-10 flex-col justify-start items-start gap-2 inline-flex"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <div className="flex-col justify-start items-start gap-6 flex">
              <motion.div
                className="text-[#2b4360] text-2xl md:text-5xl font-normal font-['FONTSPRING DEMO - Argent CF'] leading-10"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Contact Us
              </motion.div>
              <motion.div
                className="justify-start mb-2 items-start gap-4 flex-co sm:flex"
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
              >
                <div className="justify-start items-start gap-1 flex">
                  <AiOutlinePhone className="w-4 sm:w-5 h-4 sm:h-5 text-[#e29578] rotate-90" />
                  <div className="text-[#e29578] text-xs sm:text-sm font-semibold font-['Poppins']">
                    +91 2343234643
                  </div>
                </div>
                <div className="justify-start items-start gap-1 flex">
                  <AiOutlineMail className="w-4 sm:w-5 h-4 sm:h-5 text-[#e29578]" />
                  <div className="text-[#e29578] text-xs sm:text-sm font-semibold font-['Poppins']">
                    enquiry@maia.care
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-2 flex">
              <motion.div
                className="w-full justify-start items-start gap-6 md:flex"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                <div className="w-full justify-start mb-2 md:mb-0 items-start gap-6 flex">
                  <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-[#2b4360] text-base font-medium font-['DM Sans']">
                      Name
                    </div>
                    <input
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="text-[#5f5f5f] w-full p-5 focus:outline-none text-sm border border-gray-300 rounded-sm font-normal font-['Poppins'] leading-none"
                    />
                  </div>
                </div>
                <div className="w-full justify-start items-start gap-6 flex">
                  <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-[#2b4360] text-base font-medium font-['DM Sans']">
                      Phone Number
                    </div>
                    <input
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="text-[#5f5f5f] w-full p-5 focus:outline-none text-sm border border-gray-300 rounded-sm font-normal font-['Poppins'] leading-none"
                    />
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="w-full justify-start items-start gap-6 inline-flex"
                variants={fadeInUp}
                transition={{ delay: 0.5 }}
              >
                <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                  <div className="text-[#2b4360] text-base font-medium font-['DM Sans']">
                    Email
                  </div>
                  <input
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-[#5f5f5f] w-full p-5 focus:outline-none text-sm border border-gray-300 rounded-sm font-normal font-['Poppins'] leading-none"
                  />
                </div>
              </motion.div>
              <motion.div
                className="w-full justify-start items-start gap-6 inline-flex"
                variants={fadeInUp}
                transition={{ delay: 0.6 }}
              >
                <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                  <div className="text-[#2b4360] text-base font-medium font-['DM Sans']">
                    Any Queries
                  </div>
                  <textarea
                    placeholder="Type any queries you have"
                    value={queries}
                    onChange={(e) => setQueries(e.target.value)}
                    rows={5}
                    className="text-[#5f5f5f] w-full p-5 focus:outline-none text-sm border border-gray-300 rounded-sm font-normal font-['Poppins'] leading-none"
                  ></textarea>
                </div>
              </motion.div>
            </div>
            <motion.button
              type="submit"
              className="mt-2 px-5 py-3 text-white font-semibold bg-[#2b4360] rounded-lg justify-center items-center gap-2 inline-flex"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
          </motion.form>
          {/* <div className="hidden grid-cols-1 md:flex justify-center items-center p-10">
            <Image src={contactus} alt="Contact Us" className="object-cover" />
          </div> */}
          <motion.div
            className="hidden grid-cols-1 md:flex justify-center items-center p-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image src={contactus} alt="Contact Us" className="object-cover" />
          </motion.div>
        </div>
      </motion.div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="justify-center items-center p-5 flex my-12 flex-col bg-opacity-5 bg-black/70 w-full h-full z-20 text-black"
        contentLabel="Appointment Modal"
      >
        <motion.div
          className="bg-white p-10 rounded-xl relative flex-col justify-start items-center gap-8 inline-flex"
          variants={modalAnimation}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <AiOutlineClose
            className="absolute top-5 right-5 cursor-pointer text-xl text-[#e29578]"
            onClick={closeModal}
          />
          <Image src={contactusthanks} className="w-52 h-60 relative" />
          <div className="flex-col justify-start items-center gap-4 flex">
            <div className="text-[#e29578] md:text-xl text-center font-bold font-['FONTSPRING DEMO - Argent CF'] leading-7">
              Thankyou for contacting us
            </div>
            <div className="text-[#5f5f5f] text-center text-xs sm:text-sm font-normal font-['Poppins'] leading-tight">
              We have received your message. We’ll get back to you soon!
            </div>
          </div>
        </motion.div>
      </Modal>
    </div>
  );
};

export default ContactUS;
