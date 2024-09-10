"use client";
import React, { useState } from "react";
import contactus from "../../public/contactus.png";
import { AiOutlineClose, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Image from "next/image";
import Modal from "react-modal";
import contactusthanks from "../../public/contactusthanks.png";

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
    setIsOpen(false);
  }

  // Handle form submission (dummy function for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log({
      name,
      phone,
      email,
      queries,
    });
    openModal();
  };
  return (
    <div>
      <div className="md:px-20 py-5 sm:py-10">
        <div className=" md:grid grid-cols-2">
          <div className="grid-cols-1 md:hidden flex justify-center items-center p-5">
            <Image src={contactus} alt="Contact Us" className="object-cover " />
          </div>
          <form
            onSubmit={handleSubmit}
            className="col-span-1 w-full p-5 sm:p-10 flex-col justify-start items-start gap-2 inline-flex"
          >
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className=" text-[#2b4360] text-2xl md:text-5xl font-normal font-['FONTSPRING DEMO - Argent CF'] leading-10">
                Contact Us
              </div>
              <div className="justify-start mb-2 items-start gap-4 flex-co sm:flex">
                <div className="justify-start items-start gap-1 flex">
                  <AiOutlinePhone className="w-4 sm:w-5 h-4 sm:h-5 text-[#e29578] rotate-90" />
                  <div className="text-[#e29578] text-xs sm:text-sm font-semibold font-['Poppins']">
                    +91 2343234643
                  </div>
                </div>
                <div className="justify-start items-start gap-1 flex">
                  <AiOutlineMail className="w-4 sm:w-5 h-4 sm:h-5 text-[#e29578] " />

                  <div className="text-[#e29578] text-xs sm:text-sm font-semibold font-['Poppins']">
                    enquiry@maia.care
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-2 flex">
              <div className="w-full  justify-start  items-start gap-6 md:flex">
                <div className="w-full justify-start mb-2 md:mb-0 items-start gap-6 flex">
                  <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-[#2b4360] text-base font-medium font-['DM Sans']">
                      Name
                    </div>

                    <input
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="text-[#5f5f5f] w-full p-5 focus:outline-none text-sm border border-gray-300 rounded-sm  font-normal font-['Poppins'] leading-none"
                    ></input>
                  </div>
                </div>
                <div className=" w-full  justify-start items-start gap-6 flex">
                  <div className=" w-full flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-[#2b4360] text-base font-medium font-['DM Sans']">
                      Phone Number
                    </div>

                    <input
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="text-[#5f5f5f] w-full  p-5 focus:outline-none text-sm border border-gray-300 rounded-sm  font-normal font-['Poppins'] leading-none"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="w-full justify-start items-start gap-6 inline-flex">
                <div className=" w-full  justify-start items-start gap-6 flex">
                  <div className=" w-full flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-[#2b4360] text-base font-medium font-['DM Sans']">
                      Email
                    </div>

                    <input
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-[#5f5f5f] w-full  p-5 focus:outline-none text-sm border border-gray-300 rounded-sm  font-normal font-['Poppins'] leading-none"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="w-full justify-start items-start gap-6 inline-flex">
                <div className=" w-full  justify-start items-start gap-6 flex">
                  <div className=" w-full flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-[#2b4360] text-base font-medium font-['DM Sans']">
                      Any Queries
                    </div>

                    <textarea
                      placeholder="Type any queries you have"
                      value={queries}
                      onChange={(e) => setQueries(e.target.value)}
                      rows={5}
                      className="text-[#5f5f5f] w-full  p-5 focus:outline-none text-sm border border-gray-300 rounded-sm  font-normal font-['Poppins'] leading-none"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mt-2 px-5 py-3 text-white font-semibold bg-[#2b4360] rounded-lg justify-center items-center gap-2 inline-flex"
            >
              Send
            </button>
          </form>
          <div className="hidden grid-cols-1 md:flex justify-center items-center p-10">
            <Image src={contactus} alt="Contact Us" className="object-cover " />
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        className="justify-center items-center p-5 flex my-12 flex-col bg-opacity-5 bg-black/70 w-full h-full z-20 text-black"
        contentLabel="Appointment Modal"
      >
        <div className="bg-white p-10 rounded-xl relative flex-col justify-start items-center gap-8 inline-flex">
          <AiOutlineClose
            className="absolute top-5 right-5 cursor-pointer text-xl text-[#e29578] "
            onClick={closeModal}
          />
          <div className="flex-col justify-start items-center gap-4 flex">
            <Image src={contactusthanks} className="w-52 h-60 relative"></Image>
            <div className="flex-col justify-start items-end flex">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="flex-col justify-start items-center gap-14 flex">
                  <div className="flex-col justify-start items-center gap-2 flex">
                    <div className="text-[#e29578] md:text-xl text-center font-bold font-['FONTSPRING DEMO - Argent CF'] leading-7">
                      Thankyou for contacting us
                    </div>
                    <div className="text-[#5f5f5f] text-center text-xs sm:text-sm font-normal font-['Poppins'] leading-tight">
                      We have received your message. We’ll get back to you soon
                      !
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ContactUS;
