"use client";
import { useState } from "react";
import Modal from "react-modal";
import Learnslider from "./loginmodals/Learnslider";

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
      <div className="sm:w-[450px] sm:p-10 p-5 bg-orange-100 sm:rounded-l-3xl rounded-3xl">
        <Learnslider />
      </div>
      <div className="sm:p-10 p-5 sm:w-[50%]">
        <div className="flex-col  justify-start items-start gap-14 flex w-full">
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-slate-700 text-3xl font-semibold font-['Poppins'] leading-9">
              Login
            </div>
            <div className="text-zinc-600 text-base font-normal font-['Poppins'] leading-tight">
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
    <div className="text-black sm:w-[60%] w-[80%] sm:flex rounded-3xl bg-white">
      <div className="sm:w-[450px] sm:p-10 p-5 bg-orange-100 sm:rounded-l-3xl rounded-3xl">
        <Learnslider />
      </div>
      <div className="sm:p-10 p-5 sm:w-[50%]">
        <div className="flex-col  justify-start items-start gap-14 flex w-full">
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-slate-700 text-3xl font-semibold font-['Poppins'] leading-9">
              Verify OTP
            </div>
            <div className="text-zinc-600 text-base font-normal font-['Poppins'] leading-tight">
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
    <div className="text-black sm:w-[60%] w-[80%] sm:flex rounded-3xl bg-white">
      <div className="sm:w-[450px]  sm:p-10 p-5 bg-orange-100 sm:rounded-l-3xl rounded-3xl">
        <Learnslider />
      </div>
      <div className="sm:p-10 p-5 sm:w-[70%]">
        <div className="flex-col  justify-start items-start gap-4 flex w-full">
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-slate-700 text-3xl font-semibold font-['Poppins'] leading-9">
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
    closeModal();
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
      </Modal>
    </div>
  );
}

export default Login;
