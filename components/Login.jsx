"use client";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import Learnslider from "./loginmodals/Learnslider";
import Image from "next/image";
import contactusthanks from "../public/contactusthanks.png";
import { AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import axios from "axios";
import { useAuth } from "@/contexts/AuthContext";
import { FaUser, FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "black",
    opacity: "0.5",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#main");

// Login Modal Component
const LoginModal = ({ mobileNumber, setMobileNumber, onNext, closeModal }) => {
  return (
    <div className="text-black relative sm:w-[60%] z-20 w-[80%] sm:flex rounded-3xl bg-white">
      <AiOutlineClose
        className="absolute top-5 right-5 cursor-pointer text-xl text-[#e29578] "
        onClick={closeModal}
      />
      <div className="sm:w-[450px] h-[220px] sm:h-auto overflow-clip sm:p-10 p-5 bg-orange-100 sm:rounded-l-3xl rounded-3xl">
        <Learnslider />
      </div>
      <div className="sm:p-10 p-5 sm:w-[50%]">
        <div className="flex-col  justify-start items-start gap-4 sm:gap-14  flex w-full">
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-slate-700 text-xl sm:text-3xl font-semibold font-['Poppins'] leading-9">
              Login
            </div>
            <div className="text-zinc-600 text-xs sm:text-base font-normal font-['Poppins'] leading-tight">
              Maia Care, Powering you with parenthood
            </div>
          </div>
          <div className="flex-col justify-start items-start w-full gap-2 flex">
            <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">
              Mobile Number
            </div>
            <div className=" h-14 px-4 py-3 rounded border  w-full border-neutral-200 justify-start items-center inline-flex">
              <div className="text-zinc-600 w-full text-sm font-normal font-['Poppins'] leading-none">
                <input
                  type="text"
                  placeholder="Enter your Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  required
                  className="search_input w-full peer p-3"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-center items-center gap-6 w-full mt-3 flex">
          <button
            onClick={onNext}
            className="w-full px-3.5 py-4 bg-slate-700 rounded-lg justify-center items-center gap-2 inline-flex"
          >
            <div className="text-white text-base font-semibold font-['Poppins'] leading-tight">
              Send OTP
            </div>
          </button>
          <div className="flex-col justify-start items-center gap-4 flex">
            <div className=" text-center">
              <span className="text-zinc-600 text-xs font-normal font-['Poppins'] leading-none">
                By logging in you are agreeing to our{" "}
              </span>
              <span className="text-zinc-600 text-xs font-normal font-['Poppins'] underline leading-none">
                Terms and Conditions{" "}
              </span>
              <span className="text-zinc-600 text-xs font-normal font-['Poppins'] leading-none">
                &{" "}
              </span>
              <span className="text-zinc-600 text-xs font-normal font-['Poppins'] underline leading-none">
                Privacy Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// OTP Modal Component
const OtpModal = ({ otp, setOtp, onVerify, closeModal }) => {
  return (
    <div className="text-black relative sm:w-[60%] z-20 w-[80%] sm:flex rounded-3xl bg-white">
      <AiOutlineClose
        className="absolute top-5 right-5 cursor-pointer text-xl text-[#e29578] "
        onClick={closeModal}
      />
      <div className="sm:w-[450px] h-[220px] sm:h-auto overflow-clip sm:p-10 p-5 bg-orange-100 sm:rounded-l-3xl rounded-3xl">
        <Learnslider />
      </div>
      <div className="sm:p-10 p-5 sm:w-[50%]">
        <div className="flex-col  justify-start items-start gap-4 sm:gap-14 flex w-full">
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-slate-700 text-xl sm:text-3xl font-semibold font-['Poppins'] leading-9">
              Verify OTP
            </div>
            <div className="text-zinc-600 text-sm sm:text-base font-normal font-['Poppins'] leading-tight">
              Provide the OTP sent to your mobile number
            </div>
          </div>
          <div className="flex-col justify-start items-start w-full gap-2 flex">
            <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">
              One Time Password
            </div>
            <div className=" h-14 px-4 py-3 rounded border  w-full border-neutral-200 justify-start items-center inline-flex">
              <div className="text-zinc-600 w-full text-sm font-normal font-['Poppins'] leading-none">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className="search_input w-full peer p-3"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-center items-center gap-6 w-full mt-3 flex">
          <button
            onClick={onVerify}
            className="w-full px-3.5 py-4 bg-slate-700 rounded-lg justify-center items-center gap-2 inline-flex"
          >
            <div className="text-white text-base font-semibold font-['Poppins'] leading-tight">
              Verify OTP
            </div>
          </button>
          <div className="flex-col justify-start items-center gap-4 flex">
            <div className=" text-center">
              <span className="text-zinc-600 text-xs font-normal font-['Poppins'] leading-none">
                By logging in you are agreeing to our{" "}
              </span>
              <span className="text-zinc-600 text-xs font-normal font-['Poppins'] underline leading-none">
                Terms and Conditions{" "}
              </span>
              <span className="text-zinc-600 text-xs font-normal font-['Poppins'] leading-none">
                &{" "}
              </span>
              <span className="text-zinc-600 text-xs font-normal font-['Poppins'] underline leading-none">
                Privacy Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Create Profile Modal Component
const CreateProfile = ({ user, setUser, onCreateProfile }) => {
  return (
    <div className="text-black sm:w-[60%] z-20 w-[80%] sm:flex rounded-3xl bg-white">
      <div className="sm:w-[450px] h-[220px] sm:h-auto overflow-clip sm:p-10 p-5 bg-orange-100 sm:rounded-l-3xl rounded-3xl">
        <Learnslider />
      </div>
      <div className="sm:p-10 p-5 sm:w-[50%]">
        <div className="flex-col  justify-start items-start gap-4 flex w-full">
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-slate-700 text-xl sm:text-3xl font-semibold font-['Poppins'] leading-9">
              Create your Profile
            </div>
            <div className="text-zinc-600 text-base font-normal font-['Poppins'] leading-tight">
              New to Maia Care?
            </div>
          </div>
          <div className="flex-col justify-start items-start w-full gap-2 flex">
            <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">
              Name
            </div>
            <div className=" h-14 px-4 py-3 rounded border  w-full border-neutral-200 justify-start items-center inline-flex">
              <div className="text-zinc-600 w-full text-sm font-normal font-['Poppins'] leading-none">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  required
                  className="search_input w-full peer p-3"
                />
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start w-full gap-2 flex">
            <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">
              Email
            </div>
            <div className=" h-14 px-4 py-3 rounded border  w-full border-neutral-200 justify-start items-center inline-flex">
              <div className="text-zinc-600 w-full text-sm font-normal font-['Poppins'] leading-none">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  required
                  className="search_input w-full peer p-3"
                />
              </div>
            </div>
          </div>
          <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">
            Gender
          </div>
          <div className="flex gap-6 justify-center items-center">
            <label className="flex items-center">
              <input
                className="mt-1 mr-2 scale-150"
                type="radio"
                value="male"
                checked={user.gender === "male"}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                className="mt-1 mr-2 scale-150"
                type="radio"
                value="female"
                checked={user.gender === "female"}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              />
              Female
            </label>
            <label className="flex items-center">
              <input
                className="mt-1 mr-2 scale-150"
                type="radio"
                value="other"
                checked={user.gender === "other"}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              />
              Other
            </label>
          </div>
        </div>
        <div className="flex-col justify-center items-center gap-6 w-full mt-3 flex">
          <button
            onClick={onCreateProfile}
            className="w-full px-3.5 py-4 bg-slate-700 rounded-lg justify-center items-center gap-2 inline-flex"
          >
            <div className="text-white text-base font-semibold font-['Poppins'] leading-tight">
              Continue
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

// const options = [
//   "Egg Freezing",
//   "IVF",
//   "IUI",
//   "Natural Conception",
//   "Fertility Support",
//   "Donor Eggs",
//   "Embryo Freezing (Not TTC)",
//   "Donor Sperm",
//   "Surrogacy",
//   "Sperm Freezing",
//   "I don't know",
// ];

// function ConsultationForm({ onComplete }) {
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   const handleSelectOption = (option) => {
//     setSelectedOptions((prevSelectedOptions) =>
//       prevSelectedOptions.includes(option)
//         ? prevSelectedOptions.filter((prevOption) => prevOption !== option)
//         : [...prevSelectedOptions, option]
//     );
//     console.log(selectedOptions);
//   };

//   return (
//     <div className="text-black sm:w-[50%] w-[80%] sm:flex rounded-3xl p-5 sm:p-10 bg-white">
//       <div className="bg-white sm:p-4 ">
//         <div className="sm:flex items-center">
//           <h2 className="text-xl font-bold mr-3">Schedule Your Consultation</h2>
//           <div className="m-1 w-max text-green-600 text-sm justify-center items-center bg-green-200 p-1 rounded-md font-medium font-['Poppins'] leading-none">
//             Get your first consultation free
//           </div>
//         </div>
//         <div className="my-4">
//           <div className="text-gray-600 text-sm">30% Complete</div>
//           <div className="w-full bg-gray-200 h-1 mb-4">
//             <div className="bg-blue-600 h-1" style={{ width: `30%` }}></div>
//           </div>
//         </div>
//         <div className="text-[#E29578] mb-3  text-xl sm:text-2xl">
//           Which of these fertility paths are you interested in?
//         </div>

//         {options.map((option) => (
//           <button
//             key={option}
//             onClick={() => handleSelectOption(option)}
//             className={`${
//               selectedOptions.includes(option)
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-200 text-gray-600"
//             } px-2 py-1 rounded-md m-1`}
//           >
//             {option}
//           </button>
//         ))}

//         <div className="flex justify-between mt-4">
//           <button className="text-blue-600 border border-blue-600 px-5 py-2 rounded-lg">
//             Previous
//           </button>
//           <button
//             onClick={onComplete}
//             className="bg-blue-600 text-white px-5 py-2 rounded-lg"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

const options = {
  cities: [
    "Mumbai",
    "Delhi",
    "Pune",
    "Jharkhand",
    "Chattisgarh",
    "Madhya Pradesh",
    "Nashik",
    "Solhapur",
  ],
  ages: ["0-18", "19-25", "26-35", "36-45", "46+"],
  fertilityPaths: [
    "Egg Freezing",
    "IVF",
    "IUI",
    "Natural Conception",
    "Fertility Support",
    "Donor Eggs",
    "Embryo Freezing",
    "Donor Sperm",
    "Surrogacy",
    "Sperm Freezing",
    "I don't know",
  ],
  supportInterests: [
    "Getting emotional support",
    "Supporting colleagues",
    "Insurance coverage",
    "Managing work & family building",
    "Get nutrition help",
    "Financial support",
    "Holistic treatment support",
    "Fitness support",
    "Not yet decided",
  ],
  topicInterests: [
    "Miscarriage",
    "Endometriosis",
    "Fibroids",
    "PCOS",
    "Diminished ovarian reserve",
    "Male factor",
    "Cancer",
    "Other",
  ],
};

function ConsultationForm({ onComplete }) {
  const [step, setStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({
    city: "",
    age: "",
    experience: "",
    familyBuilding: "",
    fertilityPaths: "",
    haveDoctor: "",
    supportInterest: "",
    topicInterest: "",
    otherTopics: "",
    preferredDate: "",
    preferredTime: "",
    phoneNumber: "",
  });

  const handleOptionSelect = (field, option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [field]: option,
    }));
  };

  // const handleMultiSelect = (field, option) => {
  //   setSelectedOptions((prevState) => ({
  //     ...prevState,
  //     [field]: prevState[field].includes(option)
  //       ? prevState[field].filter((item) => item !== option)
  //       : [...prevState[field], option],
  //   }));
  // };

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const previousStep = () => setStep((prevStep) => prevStep - 1);

  return (
    <div className="text-black sm:w-[50%] w-[80%] sm:flex rounded-3xl p-5 sm:p-10 bg-white">
      <div className="bg-white sm:p-4 w-full">
        {/* Progress bar */}
        <div className="my-4">
          <div className="text-gray-600 text-sm">
            {(step - 1) * 10}% Completed
          </div>
          <div className="w-full bg-gray-200 h-1 mb-4">
            <div
              className="bg-blue-600 h-1"
              style={{ width: `${(step - 1) * 10}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: City */}
        {step === 1 && (
          <div className="mb-4">
            <label className="block text-lg mb-2">
              Which city are you currently living in?
            </label>
            <input
              type="text"
              placeholder="Search your city"
              className="border p-2 w-full mb-2"
              value={selectedOptions.city}
              onChange={(e) => handleOptionSelect("city", e.target.value)}
            />
            <div className="flex flex-wrap gap-2">
              {options.cities.map((city) => (
                <button
                  key={city}
                  onClick={() => handleOptionSelect("city", city)}
                  className={`${
                    selectedOptions.city === city
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  } px-2 py-1 rounded-md`}
                >
                  {city}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                disabled
                className="text-gray-400 border border-gray-400 px-5 py-2 rounded-lg"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Age */}
        {step === 2 && (
          <div className="mb-4 w-full">
            <label className="block text-lg mb-2">
              What is your current age?
            </label>
            <div className="flex gap-2">
              {options.ages.map((age) => (
                <button
                  key={age}
                  onClick={() => handleOptionSelect("age", age)}
                  className={`${
                    selectedOptions.age === age
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  } px-2 py-1 rounded-md`}
                >
                  {age}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={previousStep}
                className="text-blue-600 border border-blue-600 px-5 py-2 rounded-lg"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Experience */}
        {step === 3 && (
          <div className="mb-4">
            <label className="block text-lg mb-2">
              Are you just starting with fertility or more experienced?
            </label>
            <div className="flex gap-2">
              {["Just Starting", "Experienced"].map((exp) => (
                <button
                  key={exp}
                  onClick={() => handleOptionSelect("experience", exp)}
                  className={`${
                    selectedOptions.experience === exp
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  } px-2 py-1 rounded-md`}
                >
                  {exp}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={previousStep}
                className="text-blue-600 border border-blue-600 px-5 py-2 rounded-lg"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Family Building */}
        {step === 4 && (
          <div className="mb-4">
            <label className="block text-lg mb-2">
              Are you interested in building a family now or later?
            </label>
            <div className="flex gap-2">
              {["Family building now", "Family building later"].map(
                (option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionSelect("familyBuilding", option)}
                    className={`${
                      selectedOptions.familyBuilding === option
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    } px-2 py-1 rounded-md`}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={previousStep}
                className="text-blue-600 border border-blue-600 px-5 py-2 rounded-lg"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Fertility Paths */}
        {step === 5 && (
          <div className="mb-4">
            <label className="block text-lg mb-2">
              Which fertility paths are you interested in?
            </label>
            <div className="flex flex-wrap gap-2">
              {options.fertilityPaths.map((path) => (
                <button
                  key={path}
                  onClick={() => handleOptionSelect("fertilityPaths", path)}
                  className={`${
                    selectedOptions.fertilityPaths === path
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  } px-2 py-1 rounded-md`}
                >
                  {path}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={previousStep}
                className="text-blue-600 border border-blue-600 px-5 py-2 rounded-lg"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 6: Doctor */}
        {step === 6 && (
          <div className="mb-4">
            <label className="block text-lg mb-2">
              Do you currently have a doctor for the same?
            </label>
            <div className="flex gap-2">
              {["Yes", "No"].map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionSelect("haveDoctor", option)}
                  className={`${
                    selectedOptions.haveDoctor === option
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  } px-2 py-1 rounded-md`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={previousStep}
                className="text-blue-600 border border-blue-600 px-5 py-2 rounded-lg"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 7: Support Interest */}
        {step === 7 && (
          <div className="mb-4">
            <label className="block text-lg mb-2">
              What support is of most interest to you?
            </label>
            <div className="flex flex-wrap gap-2">
              {options.supportInterests.map((support) => (
                <button
                  key={support}
                  onClick={() => handleOptionSelect("supportInterest", support)}
                  className={`${
                    selectedOptions.supportInterest === support
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  } px-2 py-1 rounded-md`}
                >
                  {support}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={previousStep}
                className="text-blue-600 border border-blue-600 px-5 py-2 rounded-lg"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 8: Topic Interest */}
        {step === 8 && (
          <div className="mb-4">
            <label className="block text-lg mb-2">
              Which of the following topics are you interested in?
            </label>
            <div className="flex flex-wrap gap-2">
              {options.topicInterests.map((topic) => (
                <button
                  key={topic}
                  onClick={() => handleOptionSelect("topicInterest", topic)}
                  className={`${
                    selectedOptions.topicInterest === topic
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  } px-2 py-1 rounded-md`}
                >
                  {topic}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={previousStep}
                className="text-blue-600 border border-blue-600 px-5 py-2 rounded-lg"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 9: Other Topics (New Step) */}
        {step === 9 && (
          <div className="mb-4 w-full">
            <label className="block text-lg mb-2">
              Any other topics you want to talk about?
            </label>
            <input
              type="text"
              placeholder="Topics that interest you"
              className="border p-2 w-full"
              value={selectedOptions.otherTopics}
              onChange={(e) =>
                handleOptionSelect("otherTopics", e.target.value)
              }
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={previousStep}
                className="text-blue-600 border border-blue-600 px-5 py-2 rounded-lg w-full sm:w-auto"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg w-full sm:w-auto"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {step === 10 && (
          <div className="mb-4">
            <label className="block text-lg mb-2">
              Please enter your mobile number
            </label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="border p-2 w-full"
              value={selectedOptions.phoneNumber}
              onChange={(e) =>
                handleOptionSelect("phoneNumber", e.target.value)
              }
              required
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={previousStep}
                className="text-blue-600 border border-blue-600 px-5 py-2 rounded-lg"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {/* Step 11: Preferred Date and Time */}
        {step === 11 && (
          <div>
            <div className="mb-4">
              <label className="block text-lg mb-2">
                What is your preferred date for the consultation?
              </label>
              <input
                type="date"
                className="border p-2 w-full"
                value={selectedOptions.preferredDate}
                onChange={(e) =>
                  handleOptionSelect("preferredDate", e.target.value)
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2">
                What is your preferred time for the consultation?
              </label>
              <input
                type="time"
                className="border p-2 w-full"
                value={selectedOptions.preferredTime}
                onChange={(e) =>
                  handleOptionSelect("preferredTime", e.target.value)
                }
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={previousStep}
                className="text-blue-600 border border-blue-600 px-5 py-2 rounded-lg"
              >
                Previous
              </button>
              <button
                onClick={() => onComplete(selectedOptions)}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const SuccessModal = ({ closeModal }) => {
  return (
    <div className="bg-white p-10 m-5 rounded-xl relative flex-col justify-start items-center gap-8 inline-flex">
      <AiOutlineClose
        className="absolute top-5 right-5 cursor-pointer text-xl text-[#e29578] "
        onClick={closeModal}
      />
      <div className="flex-col justify-start items-center gap-4 flex">
        <Image
          alt="aa"
          src={contactusthanks}
          className="w-52 h-60 relative"
        ></Image>
        <div className="flex-col justify-start items-end flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="flex-col justify-start items-center gap-14 flex">
              <div className="flex-col justify-start items-center gap-2 flex">
                <div className="text-[#e29578] md:text-xl text-center font-bold font-['FONTSPRING DEMO - Argent CF'] leading-7">
                  Profile Created Successfully
                </div>
                <div className="text-[#5f5f5f] text-center text-xs sm:text-sm font-normal font-['Poppins'] leading-tight">
                  Thank you for creating your profile. You can now access all
                  our services.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SuccessLoginModal = ({ closeModal }) => {
  return (
    <div className="bg-white p-10 m-5 rounded-xl relative flex-col justify-start items-center gap-8 inline-flex">
      <AiOutlineClose
        className="absolute top-5 right-5 cursor-pointer text-xl text-[#e29578] "
        onClick={closeModal}
      />
      <div className="flex-col justify-start items-center gap-4 flex">
        <Image
          alt="aa"
          src={contactusthanks}
          className="w-52 h-60 relative"
        ></Image>
        <div className="flex-col justify-start items-end flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="flex-col justify-start items-center gap-14 flex">
              <div className="flex-col justify-start items-center gap-2 flex">
                <div className="text-[#e29578] md:text-xl text-center font-bold font-['FONTSPRING DEMO - Argent CF'] leading-7">
                  LoggedIn Successfully
                </div>
                <div className="text-[#5f5f5f] text-center text-xs sm:text-sm font-normal font-['Poppins'] leading-tight">
                  Thank you for logging in. You can now access all our services.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Login({ setSidebar }) {
  const {
    loginToken,
    saveToken,
    removeToken,
    userState,
    saveUser,
    removeUser,
  } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalState, setModalState] = useState("login"); // States: "login", "otp", "createProfile"
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState({ name: "", email: "", gender: "" });
  const [authtoken, setAuthToken] = useState("");
  const [flow, setFlow] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  console.log("User state:", userState);
  const openModal = () => {
    console.log("Opening modal");
    setIsModalOpen(true);
    setSidebar(false);
  };
  const closeModal = () => {
    setModalState("login");
    setIsModalOpen(false);
  };

  const sendOtp = async () => {
    try {
      let data = JSON.stringify({
        mobileNo: mobileNumber,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://maia.projectx38.cloud/web-apis/maia/web/user/getOtp",
        headers: {
          "device-id": "97c2fe5e-0f68-4d72-b277-d5d2d4e628a8",
          "login-token": "NA",
          "city-id": "NA",
          "Content-Type": "application/json",
        },
        data: data,
      };
      const response = await axios.request(config);
      setAuthToken(response.data.data.authToken);
      setFlow(response.data.data.flow);
      console.log("OTP sent successfully:", response.data.data);
      if (response.data.success) setModalState("otp"); // Move to the OTP modal state
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP. Please try again.");
    }
  };

  const verifyOtp = async () => {
    try {
      let data = JSON.stringify({
        mobileNo: mobileNumber,
        otp: otp,
        authToken: authtoken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://maia.projectx38.cloud/web-apis/maia/web/user/verifyOtp",
        headers: {
          "device-id": "97c2fe5e-0f68-4d72-b277-d5d2d4e628a8",
          "login-token": "NA",
          "city-id": "NA",
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      saveToken(response.data.data.loginToken);
      console.log("OTP verified successfully:", response.data);
      if (response.data.success) {
        if (flow == "SIGNUP") setModalState("createProfile");
        // Move to the Create Profile modal state
        else if (flow == "SIGNIN") {
          saveUser({
            email: response.data.data.loggedIn.userDetails.email,
            gender: response.data.data.loggedIn.userDetails.gender,
            name: response.data.data.loggedIn.userDetails.name,
            mobileNo: response.data.data.loggedIn.userDetails.mobileNo,
          });
          setModalState("successLogin");
        } // Move to the Create Profile modal state
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("OTP verification failed. Please try again.");
    }
  };

  const createProfile = async () => {
    try {
      let data = JSON.stringify({
        name: user.name,
        email: user.email,
        gender: user.gender,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://maia.projectx38.cloud/web-apis/maia/web/user/completeRegistration",
        headers: {
          "device-id": "97c2fe5e-0f68-4d72-b277-d5d2d4e628a8",
          "login-token": loginToken,
          "city-id": "NA",
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      console.log("Profile created successfully:", response.data);
      if (response.data.success)
        saveUser({
          email: user.email,
          gender: user.gender,
          name: user.name,
          mobileNo: mobileNumber,
        });
      if (response.data.success) setModalState("success");
      // alert("Profile created successfully!");
    } catch (error) {
      console.error("Error creating profile:", error);
      alert("Failed to create profile. Please try again.");
    }
  };

  const handleComplete = async (seldata) => {
    const data = JSON.stringify({
      city: seldata.city,
      age: seldata.age,
      experience: seldata.experience,
      familyBuilding: seldata.familyBuilding,
      fertilityPaths: seldata.fertilityPaths,
      haveDoctor: seldata.haveDoctor,
      supportIntrest: seldata.supportInterest,
      topicIntrest: seldata.topicInterest,
      otherTopics: seldata.otherTopics,
      preferredDate: seldata.preferredDate,
      preferredTime: seldata.preferredTime,
      phoneNumber: seldata.phoneNumber,
    });
    try {
      console.log("Consultation form data:", data);
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://maia.projectx38.cloud/web-apis/maia/web/consultation/submit",
        headers: {
          "device-id": "97c2fe5e-0f68-4d72-b277-d5d2d4e628a8",
          "login-token": loginToken,
          "city-id": "NA",
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      console.log("Consultation form submitted successfully:", response.data);
      if (response.data.success) setModalState("success");
      // alert("Consultation form submitted successfully!");
    } catch (error) {
      console.error("Error submitting consultation form:", error);
      alert("Failed to submit consultation form. Please try again.");
    }
  };
  // In AuthContext.js
  const logout = () => {
    removeToken();
    removeUser();
  };
  return (
    <div className="text-black bg-white">
      {loginToken ? (
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className=" text-white rounded-lg px-2 py-1 mb-2 flex items-center gap-2 hover:bg-slate-200 transition"
          >
            <FaUserCircle className="text-slate-700" />
            <span className="font-medium text-slate-700">
              {userState?.name || "User"}
            </span>
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-2 w-48 border bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-4 py-3 border-b">
                <p className="text-gray-900 font-medium">{userState?.name}</p>
                <p className="text-gray-500 text-sm">{userState?.email}</p>
              </div>
              <Link href="/profile">
                <div className="block px-4 py-2 text-gray-900 hover:bg-gray-100 transition">
                  Profile
                </div>
              </Link>
              <button
                onClick={logout}
                className="w-full text-left font-semibold px-4 py-2 text-red-700 hover:bg-red-100  transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <button onClick={openModal}>
          <div className="bg-slate-700 rounded-lg justify-center items-center gap-2 flex">
            <div className="p-3 px-6 text-center text-white text-base font-medium font-['Poppins'] leading-tight">
              Sign In
            </div>
          </div>
        </button>
      )}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        className="justify-center items-center flex bg-opacity-5 bg-black/70 w-full h-full z-20 text-black"
        contentLabel="Example Modal"
      >
        <button className="absolute top-2 right-2" onClick={closeModal}>
          <AiOutlineClose className="text-white" />
        </button>
        {modalState === "login" && (
          <LoginModal
            mobileNumber={mobileNumber}
            setMobileNumber={setMobileNumber}
            onNext={sendOtp}
            closeModal={closeModal}
          />
        )}
        {modalState === "otp" && (
          <OtpModal
            otp={otp}
            setOtp={setOtp}
            onVerify={verifyOtp}
            closeModal={closeModal}
          />
        )}
        {modalState === "createProfile" && (
          <CreateProfile
            user={user}
            setUser={setUser}
            onCreateProfile={createProfile}
          />
        )}
        {modalState === "consultation" && (
          <ConsultationForm onComplete={handleComplete} />
        )}
        {modalState === "success" && <SuccessModal closeModal={closeModal} />}
        {modalState === "successLogin" && (
          <SuccessLoginModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}

export default Login;
