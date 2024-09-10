"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar, Clock } from "lucide-react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoChevronDown, IoClose } from "react-icons/io5";
import { PiBriefcase, PiCertificateThin } from "react-icons/pi";
import Modal from "react-modal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Step1 = ({ doctor, onNext }) => {
  return (
    <div>
      <div className="flex mt-5 gap-5">
        <div className="w-28 h-28">
          <img src={doctor?.photo} className="rounded-full" alt="doctor" />
        </div>

        <div className="flex-1 ">
          <div className="text-lg font-semibold text-[#2B4360]">
            {doctor?.name}
          </div>
          <div className="flex">
            <div className="flex gap-2 items-center text-[#2B4360]">
              <PiCertificateThin className="w-5 h-5 text-black" />
              {doctor?.title?.map((title, index) => (
                <p key={title}>
                  {title}
                  {index < doctor.title.length - 1 && ","}
                </p>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <PiBriefcase className="w-5 h-5" />
            <p className="text-[#2B4360]">{doctor?.experience_years} years</p>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center">
              <FaStar className="w-5 h-5 text-yellow-400" />
              <FaStar className="w-5 h-5 text-yellow-400" />
              <FaStar className="w-5 h-5 text-yellow-400" />
              <FaStar className="w-5 h-5 text-yellow-400" />
            </div>

            <p className="text-[#2B4360] underline">20+reviews</p>
          </div>
        </div>
      </div>

      <div className="text-[#2B4360] grid gap-2 mt-6">
        <p>Appointment is for</p>
        <RadioGroup defaultValue="yourself" className="flex">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yourself" id="yourself" />
            <Label htmlFor="yourself">Yourself</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="someone-else" id="someone-else" />
            <Label htmlFor="someone-else">Someone Else</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="text-[#2B4360] mt-4 w-full">
        <p>Reason for visting</p>
        <DropdownMenu defaultValue="yourself" className="w-full">
          <DropdownMenuTrigger className=" w-full">
            <div className="mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md">
              <p className="text-[#2B4360]">Select the reason for visiting</p>
              <IoChevronDown className="w-5 h-5 text-[#E29578]" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[23.5rem] p-5">
            <div className="w-full">hello</div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="text-[#2B4360] mt-4 w-full">
        <p>Select Clinic</p>
        <DropdownMenu defaultValue="yourself" className="w-full">
          <DropdownMenuTrigger className=" w-full">
            <div className="mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md">
              <p className="text-[#2B4360]">Select a preferred clinic</p>
              <IoChevronDown className="w-5 h-5 text-[#E29578]" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[23.5rem] p-5">
            <div className="w-full">hello</div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex gap-5">
        <div className="text-[#2B4360] mt-4 w-full">
          <p>Appointment Date</p>
          <div className="mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md">
            <p className="text-[#2B4360]">Pick a Date</p>

            <Calendar className="text-[#E29578] w-5 h-5" />
          </div>
        </div>
        <div className="text-[#2B4360] mt-4 w-full">
          <p>Appointment Date</p>
          <div className="mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md">
            <p className="text-[#2B4360]">Pick a time</p>

            <Clock className="text-[#E29578] w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="text-[#2B4360] mt-4 w-full">
        <p>Additional Notes</p>
        <textarea
          name=""
          id=""
          placeholder="Enter any additional details"
          className="mt-1 w-full p-2 border border-gray-200 resize-none focus:outline-0 rounded-md"
        ></textarea>
      </div>

      <button
        onClick={onNext}
        className="font-semibold w-full bg-[#2B4360] text-white mt-5 py-3 px-2 rounded-md"
      >
        Next
      </button>
    </div>
  );
};
const Step2 = ({ doctor, onNext }) => {
  const AgeSelector = () => {
    const [selectedAge, setSelectedAge] = useState(null);

    const ageRanges = [
      { label: "0-18", value: "0-18" },
      { label: "19-25", value: "19-25" },
      { label: "26-35", value: "26-35" },
      { label: "36-45", value: "36-45" },
      { label: "46+", value: "46+" },
    ];

    const handleAgeSelect = (value) => {
      setSelectedAge(value);
    };

    return (
      <div>
        <p className="text-[#2B4360]">Age</p>
        <div className="flex space-x-4 mt-1">
          {ageRanges.map((age) => (
            <button
              key={age.value}
              onClick={() => handleAgeSelect(age.value)}
              className={`px-2 py-1 rounded-md text-sm 
                          ${
                            selectedAge === age.value
                              ? "bg-gray-300 border-2 border-blue-500"
                              : "bg-gray-100 border border-gray-400"
                          } 
                          hover:bg-gray-200 focus:outline-none`}
            >
              {age.label}
            </button>
          ))}
        </div>
      </div>
    );
  };
  const GenderSelector = () => {
    const [selectedGender, setSelectedGender] = useState(null);

    const genders = [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Other", value: "other" },
    ];

    const handleGenderSelect = (value) => {
      setSelectedGender(value);
    };

    return (
      <div>
        <p className="text-[#2B4360]">Age</p>
        <div className="flex space-x-4 mt-1">
          {genders.map((gender) => (
            <button
              key={gender.value}
              onClick={() => handleGenderSelect(gender.value)}
              className={`px-2 py-1 rounded-md text-sm 
                          ${
                            selectedGender === gender.value
                              ? "bg-gray-300 border-2 border-blue-500"
                              : "bg-gray-100 border border-gray-400"
                          } 
                          hover:bg-gray-200 focus:outline-none`}
            >
              {gender.label}
            </button>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div>
      <p className="text-[#2B4360] text-lg font-semibold mt-5">
        Patient Details
      </p>
      <div className="grid gap-5 mt-3">
        <div className="text-[#2B4360]  w-full">
          <p className="text-[#2B4360]">Name</p>
          <input
            type="text"
            placeholder="Enter the patient's name"
            className="focus:outline-none mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md"
          />
        </div>

        <div className="text-[#2B4360]  w-full">
          <p className="text-[#2B4360]">Mobile Number</p>
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="focus:outline-none mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md"
          />
        </div>

        <AgeSelector />
        <GenderSelector />

        <button
          onClick={onNext}
          className="font-semibold w-full bg-[#2B4360] text-white mt-5 py-3 px-2 rounded-md"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

const Completed = ({ onNext, setIsOpen }) => {
  return (
    <div className="relative py-10 flex flex-col items-center justify-center">
      <div className="absolute top-0 right-2">
        <IoClose
          className="w-6 h-6 cursor-pointer"
          onClick={() => {
            setIsOpen(false);
          }}
        />
      </div>

      <div className="w-52 h-52 text-center ">
        <img src="/BookingCompleted.png" alt="Booking Completed" />
      </div>
      <div className="w-full mt-12 text-center flex flex-col items-center">
        <p className="text-2xl font-bold break-words text-[#E29578]">Appointment Submitted</p>
          <p className="text-sm mt-2 text-gray-500">The clinic will contact you shortly to confirm the appointment</p>
          <div className="flex w-full items-center justify-evenly gap-8 px-12">
          <button
        className="font-semibold w-full border border-[#2B4360] text-[#2B4360] mt-5 py-3 px-2 rounded-md"
      >
        View Details
      </button>
      <button
        onClick={onNext}
        className="font-semibold w-full bg-[#2B4360] text-white mt-5 py-3 px-2 rounded-md"
      >
        Okay
      </button>
          </div>
      </div>
    </div>
  );
};
function BookAppointment({ doctor }) {
  const [step, setStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  console.log(doctor);
  return (
    <div className="text-black bg-white">
      <button onClick={openModal}>
        <div className="bg-slate-700 rounded-lg justify-center items-center gap-2 flex">
          <div className="p-3 px-6 text-center text-white text-base font-medium font-['Poppins'] leading-tight">
            Book Appointment
          </div>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        preventScroll={true}
        onRequestClose={closeModal}
        // style={customStyles}
        className="justify-center  sm:p-0 items-center flex my-12 flex-col bg-opacity-5 bg-black/70 w-full h-full z-20 text-black"
        contentLabel="Appointment Modal"
      >
        <div className="text-black sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] z-20 w-[100%] sm:flex-col rounded-3xl bg-white p-6">
          {completed ? (
            <Completed setIsOpen={setIsOpen} onNext={()=> {
              setIsOpen(false)
              setStep(1)
              setCompleted(false);
            }}/>
          ) : (
            <>
              <div className="flex items-center justify-between w-full">
                <p className="text-[#E29578] font-semibold text-2xl">
                  Book Appointment
                </p>
                <IoClose
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Please enter the details below
              </p>

              <div className="flex items-center mt-5 ">
                <div className="flex-1 bg-gray-300 rounded   overflow-hidden mr-2">
                  <div className={`w-${step}/2 h-[0.4rem] bg-[#70AAA4]`}></div>
                </div>
                <p className="text-sm">{step} of 2</p>
              </div>
              {step === 1 && (
                <Step1 doctor={doctor} onNext={() => setStep(step + 1)} />
              )}
              {step === 2 && (
                <Step2 doctor={doctor} onNext={() => setCompleted(true)} />
              )}
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default BookAppointment;
