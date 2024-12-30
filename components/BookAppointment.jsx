"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoChevronDown, IoClose } from "react-icons/io5";
import { PiBriefcase, PiCertificateThin } from "react-icons/pi";
import Modal from "react-modal";
import { Calendar } from "./ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import axios from "axios";

const Step1 = ({ doctor, onNext, setData }) => {
  const [selectedClinic, setSelectedClinic] = useState(
    "Select a preferred clinic"
  );
  const [additionalNotes, setAdditionalNotes] = useState();
  const [date, setDate] = useState();
  const [selectedReason, setSelectedReason] = useState(
    "Select the reason for visiting"
  );
  const [time, setTime] = useState("08:00");
  const handleSelect = (reason) => {
    setSelectedReason(reason);
  };
  const handleClinicSelect = (clinicName) => {
    setSelectedClinic(clinicName);
  };

  return (
    <div>
      <div className="flex mt-5 gap-5">
        <div className="w-28 h-28">
          <Image
            width={112}
            height={112}
            src={doctor?.profileImage}
            className="rounded-full"
            alt="doctor"
          />
        </div>

        <div className="flex-1 ">
          <div className="text-lg font-semibold text-[#2B4360]">
            {doctor?.doctorName}
          </div>
          <div className="flex">
            <div className="flex gap-2 items-center text-[#2B4360]">
              <PiCertificateThin className="w-5 h-5 text-black" />
              {doctor?.doctorDetails?.spectiality?.map((title, index) => (
                <p key={title.specialityId}>{title?.specialityKey}</p>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <PiBriefcase className="w-5 h-5" />
            <p className="text-[#2B4360]">{doctor?.experiance} years</p>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center">
              {doctor?.rating}
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`w-5 h-5 ${
                    index < doctor?.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <p className="text-[#2B4360] underline">
              {doctor?.reviewsStat?.totalReviews} reviews
            </p>
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
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full">
            <div className="mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md">
              <p className="text-[#2B4360]">{selectedReason}</p>
              <IoChevronDown className="w-5 h-5 text-[#E29578]" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full p-5">
            <DropdownMenuItem
              className="w-full"
              onSelect={() => handleSelect("Followup")}
            >
              Followup
            </DropdownMenuItem>
            <DropdownMenuItem
              className="w-full"
              onSelect={() => handleSelect("Some other reason")}
            >
              Some other reason
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="text-[#2B4360] mt-4 w-full">
        <p>Select Clinic</p>
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full">
            <div className="mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md">
              <p className="text-[#2B4360]">{selectedClinic}</p>
              <IoChevronDown className="w-5 h-5 text-[#E29578]" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full p-5">
            {doctor.clinics.map((clinic) => (
              <DropdownMenuItem
                key={clinic.clinicId}
                className="w-full"
                onSelect={() => handleClinicSelect(clinic.clinicId)}
              >
                {clinic.clinicName}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex gap-5">
        <Popover>
          <PopoverTrigger asChild>
            <div className="text-[#2B4360] mt-4 w-full">
              <p>Appointment Date</p>
              <div className="mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md">
                <p className="text-[#2B4360]">
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </p>

                <CalendarIcon className="text-[#E29578] w-5 h-5" />
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <div className="text-[#2B4360] mt-4 w-full">
          <p>Appointment Time</p>
          <div className="mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md">
            <input
              value={time}
              onChange={(e) => setTime(e.target.value)}
              type="time"
              className="w-full bg-transparent border-none focus:outline-none  text-[#2B4360] text-sm"
            />
          </div>
        </div>
      </div>

      <div className="text-[#2B4360] mt-4 w-full">
        <p>Additional Notes</p>
        <textarea
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
          placeholder="Enter any additional details"
          className="mt-1 w-full p-2 border border-gray-200 resize-none focus:outline-0 rounded-md"
        ></textarea>
      </div>

      <button
        onClick={() => {
          setData((prevData) => ({
            ...prevData,
            date: date,
            time: time,
            clinic: selectedClinic,
            reason: selectedReason,
            notes: additionalNotes,
          }));
          onNext();
        }}
        className="font-semibold w-full bg-[#2B4360] text-white mt-5 py-3 px-2 rounded-md"
      >
        Next
      </button>
    </div>
  );
};
const Step2 = ({ doctor, onNext, setData, data }) => {
  const AgeSelector = ({ setSelectedAge }) => {
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

  const GenderSelector = ({ setSelectedGender }) => {
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
        <p className="text-[#2B4360]">Gender</p>
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

  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = () => {
    setData((prevData) => {
      const updatedData = {
        ...prevData,
        name: name,
        mobile: mobile,
        selectedAge: selectedAge,
        selectedGender: selectedGender,
      };
      console.log(updatedData);

      const requestData = {
        appointmentFor: updatedData.name,
        appointmentReason: updatedData.reason,
        additionalDetails: updatedData.notes,
        doctorId: updatedData.doctor,
        clinicId: updatedData.clinic,
        appointmentDate: new Date(updatedData.date).toLocaleDateString(),
        appointmentTime: updatedData.time,
      };
      console.log(requestData);
      //    const requestData =  {
      //       "appointmentFor":"Someone Else",
      //      "appointmentReason":"Followup",
      //      "additionalDetails":"Some Additional Details",
      //      "doctorId":"testDoctoprId",
      //      "clinicId":"testClinic",
      //      "appointmentDate":"03/11/2024",
      //      "appointmentTime":"13:15"
      //  }
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://maia.projectx38.cloud/web-apis/maia/web/appointment/submit",
        headers: {
          "device-id": "97c2fe5e-0f68-4d72-b277-d5d2d4e628a8",
          "login-token":
            "f48668d4ea1989d14a5692c5c4b7b2964c1cd4333f27869b149f8f5b7db9c37a0731331d8bfdddaee2b39aa2da420282524c49da2bffa8bf95d5b6d4c956d1aea10ebcc18bb59d9fb0b68e8a0701262037f59784c56f5141e9446618ce41e97864da9a3c4729b6469712045d9d379f7e8996734fcfe58bf4029f8bb2c34d3b8831f3f79b575a4fe0b810e569ba76099e6b6e80a08bc2488350d7dc632a9d0feca6588711354f54e52adfebd6828012b69aaa1e903bfa9ac57a8c676e89d2853f30297fbab03b8b45c49af79cd819bd289ba7b7d3e50d799c01e27dcc02b1580a5ac3b6a6cc94dff860916be3340c958c75952faafd90bff74c677b74767d4d5dba21cd8ab57d8c0991e537ddaffb5f3cefea2c7f31e4d2dad2e1af34c8525d6295c8af0a9aefe466e3c4218ecac52d4265860495f0ece6361f315af2c82c97af5bc9e6aa356f19fcab74af5ecd4ba4c55fedeab1876372e9ff6cc8b1ebc0799988be785907c04772a8b96b2706b95151bdcb63ed2752734a64c6ea9691e0c335",
          "city-id": "NA",
          "Content-Type": "application/json",
        },
        data: JSON.stringify(requestData),
      };
      axios
        .request(config)
        .then((response) => {
          console.log(response.data);
          onNext();
        })
        .catch((error) => {
          console.log(error.data);
        });

      return updatedData;
    });
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter the patient's name"
            className="focus:outline-none mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md"
          />
        </div>

        <div className="text-[#2B4360]  w-full">
          <p className="text-[#2B4360]">Mobile Number</p>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter your mobile number"
            className="focus:outline-none mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md"
          />
        </div>

        <AgeSelector setSelectedAge={setSelectedAge} />
        <GenderSelector setSelectedGender={setSelectedGender} />

        <button
          onClick={() => {
            handleSubmit();
          }}
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
        <p className="text-2xl font-bold break-words text-[#E29578]">
          Appointment Submitted
        </p>
        <p className="text-sm mt-2 text-gray-500">
          The clinic will contact you shortly to confirm the appointment
        </p>
        <div className="flex w-full items-center justify-evenly gap-8 px-12">
          <button className="font-semibold w-full border border-[#2B4360] text-[#2B4360] mt-5 py-3 px-2 rounded-md">
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
  const [data, setData] = useState({});

  useEffect(() => {
    if (doctor?.doctorId) {
      setData((prevData) => ({
        ...prevData,
        doctor: doctor.doctorId,
      }));
    }
  }, [doctor]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setStep(1);
    setIsOpen(false);
  }

  return (
    <div className="text-black">
      <button onClick={openModal}>
        <div className="bg-slate-700 rounded-lg flex justify-center items-center gap-2">
          <div className="p-4 px-6 text-center text-white text-base font-medium font-['Poppins'] leading-tight">
            Book Appointment
          </div>
        </div>
      </button>

      <Modal
        isOpen={modalIsOpen}
        preventScroll={true}
        onRequestClose={closeModal}
        contentLabel="Appointment Modal"
        // 1) OVERLAY classes: the dark background and centering
        overlayClassName={`
        fixed inset-0 bg-black/70 z-50 
        flex items-center justify-center
      `}
        // 2) CONTENT classes: the actual modal "box"
        className={`
        relative rounded-3xl bg-white p-6 text-black focus:outline-none 
        w-full max-w-[90%] sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%]
        max-h-[90vh] overflow-y-auto
      `}
      >
        {completed ? (
          <Completed
            setIsOpen={setIsOpen}
            onNext={() => {
              setIsOpen(false);
              setStep(1);
              setCompleted(false);
            }}
          />
        ) : (
          <>
            <div className="flex items-center justify-between w-full">
              <p className="text-[#E29578] font-semibold text-2xl">
                Book Appointment
              </p>
              <IoClose
                className="w-5 h-5 cursor-pointer"
                onClick={closeModal}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Please enter the details below
            </p>

            <div className="flex items-center mt-5">
              <div className="flex-1 bg-gray-300 rounded overflow-hidden mr-2">
                {/* Progress bar simulation */}
                <div
                  className={`bg-[#70AAA4] h-[0.4rem]`}
                  style={{ width: `${(step / 2) * 100}%` }}
                />
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
      </Modal>
    </div>
  );
}

export default BookAppointment;
