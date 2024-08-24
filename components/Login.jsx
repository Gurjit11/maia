"use client";
import { useState } from "react";
import Modal from "react-modal";
import Learnslider from "./loginmodals/Learnslider";
import Image from "next/image";
import contactusthanks from "../public/contactusthanks.png";
import { AiOutlineClose } from "react-icons/ai";

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
const LoginModal = ({ mobileNumber, setMobileNumber, onNext }) => {
  return (
    <div className="text-black sm:w-[60%] z-20 w-[80%] sm:flex rounded-3xl bg-white">
      <div className="sm:w-[450px] h-[200px] overflow-clip sm:p-10 p-5 bg-orange-100 sm:rounded-l-3xl rounded-3xl">
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
const OtpModal = ({ otp, setOtp, onVerify }) => {
  return (
    <div className="text-black sm:w-[60%] z-20 w-[80%] sm:flex rounded-3xl bg-white">
      <div className="sm:w-[450px] h-[200px] overflow-clip sm:p-10 p-5 bg-orange-100 sm:rounded-l-3xl rounded-3xl">
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

// create profile
const CreateProfile = ({ user, setUser, onCreateProfile }) => {
  return (
    <div className="text-black sm:w-[60%] z-20 w-[80%] sm:flex rounded-3xl bg-white">
      <div className="sm:w-[450px] h-[200px] overflow-clip sm:p-10 p-5 bg-orange-100 sm:rounded-l-3xl rounded-3xl">
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
                  type="text"
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
              Done
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const options = [
  "Egg Freezing",
  "IVF",
  "IUI",
  "Natural Conception",
  "Fertility Support",
  "Donor Eggs",
  "Embryo Freezing (Not TTC)",
  "Donor Sperm",
  "Surrogacy",
  "Sperm Freezing",
  "I don't know",
];

function ConsultationForm({ onComplete }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectOption = (option) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter((prevOption) => prevOption !== option)
        : [...prevSelectedOptions, option]
    );
    console.log(selectedOptions);
  };

  return (
    <div className="text-black sm:w-[50%] w-[80%] sm:flex rounded-3xl p-5 sm:p-10 bg-white">
      <div className="bg-white sm:p-4 ">
        <div className="sm:flex items-center">
          <h2 className="text-xl font-bold mr-3">Schedule Your Consultation</h2>
          <div className="m-1 w-max text-green-600 text-sm justify-center items-center bg-green-200 p-1 rounded-md font-medium font-['Poppins'] leading-none">
            Get your first consultation free
          </div>
        </div>
        <div className="my-4">
          <div className="text-gray-600 text-sm">30% Complete</div>
          <div className="w-full bg-gray-200 h-1 mb-4">
            <div className="bg-blue-600 h-1" style={{ width: `30%` }}></div>
          </div>
        </div>
        <div className="text-[#E29578] mb-3  text-xl sm:text-2xl">
          Which of these fertility paths are you interested in?
        </div>

        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleSelectOption(option)}
            className={`${
              selectedOptions.includes(option)
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            } px-2 py-1 rounded-md m-1`}
          >
            {option}
          </button>
        ))}

        <div className="flex justify-between mt-4">
          <button className="text-blue-600 border border-blue-600 px-5 py-2 rounded-lg">
            Previous
          </button>
          <button
            onClick={onComplete}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Next
          </button>
        </div>
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
        <Image src={contactusthanks} className="w-52 h-60 relative"></Image>
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

function Login({ setSidebar }) {
  const [step, setStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
  });
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setSidebar(false);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleVerify = () => {
    alert(`Mobile Number: ${mobileNumber}, OTP: ${otp}`);
    handleNext();
    // Perform final verification or next steps
    // closeModal();
  };
  const handleCreateProfile = () => {
    alert(`User: ${user.name}, email: ${user.email}`);
    handleNext();
    // Perform final verification or next steps
    // closeModal();
  };

  const handleComplete = () => {
    alert("Consultation form completed");
    handleNext();
  };

  return (
    <div className="text-black bg-white">
      <button onClick={openModal}>
        <div className="bg-slate-700 rounded-lg justify-center items-center gap-2 flex">
          <div className="p-3 px-6 text-center text-white text-base font-medium font-['Poppins'] leading-tight">
            Sign In
          </div>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        className="justify-center items-center flex bg-opacity-5 bg-black/70 w-full h-full z-20 text-black"
        contentLabel="Example Modal"
      >
        {step === 1 && (
          <LoginModal
            mobileNumber={mobileNumber}
            setMobileNumber={setMobileNumber}
            onNext={handleNext}
          />
        )}
        {step === 2 && (
          <OtpModal otp={otp} setOtp={setOtp} onVerify={handleVerify} />
        )}
        {step === 3 && (
          <CreateProfile
            user={user}
            setUser={setUser}
            onCreateProfile={handleCreateProfile}
          />
        )}
        {step === 4 && <ConsultationForm onComplete={handleComplete} />}
        {step === 5 && <SuccessModal closeModal={closeModal} />}
      </Modal>
    </div>
  );
}

export default Login;
