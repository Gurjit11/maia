"use client";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowLeft,
  BadgeCheck,
  BookText,
  CameraIcon,
  Check,
  Hospital,
  MoveLeftIcon,
  Stethoscope,
  Upload,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { IoChevronDown, IoDocument } from "react-icons/io5";

const AddNewDoctor = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  return (
    <div className="w-full">
      <div className="p-6">
        <h1 className="text-[#1E293B] text-2xl font-bold">Add New Clinic</h1>
        <span className="text-black">
          Users &gt; Clinics &gt;{" "}
          <span className="text-muted-foreground">Add New Clinic</span>
        </span>
      </div>

      <div className="bg-gray-100 p-6 grid grid-cols-3 w-full gap-6">
        <div className="col-span-2 grid gap-6">
          <div className="bg-white rounded-md shadow-sm text-[#131D2A] p-6">
            <p className="text-xl font-bold text-[#131D2A]">Basic Details</p>

            <div className="flex items-center space-x-6 mt-6">
              <div className="w-28 h-28 relative">
                <img
                  src="https://pomerancedentalcare.com/wp-content/uploads/2024/06/placeholder-image-person-jpg-1.jpg"
                  alt=""
                  className="object-contain w-full h-full rounded-full"
                />
                <div className="absolute bottom-0 right-0 bg-[#2B4360] p-2 rounded-full">
                  <CameraIcon className="text-white w-4 h-4" />
                </div>
              </div>

              <div className="text-[#2B4360]">
                <p className="text-lg font-semibold">Add Clinic Logo</p>
                <p className="text-sm">Allowed Jpg,png of max size 5mb</p>
              </div>
            </div>

            <div className="flex gap-10 mt-6">
              <div className="text-[#2B4360] w-full">
                <p className="text-[#2B4360]">Clinic Name</p>
                <input
                  type="text"
                  placeholder="Name"
                  className="focus:outline-none mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md"
                />
              </div>

              <div className="text-[#2B4360] w-full">
                <p className="text-[#2B4360]">Email</p>
                <input
                  type="email"
                  placeholder="Email"
                  className="focus:outline-none mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md"
                />
              </div>
            </div>
            <div className="flex gap-10 mt-6">
              <div className="text-[#2B4360] w-full">
                <p className="text-[#2B4360]">Mobile Number</p>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="focus:outline-none mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md"
                />
              </div>

              <div className="text-[#2B4360] w-full">
                <p className="text-[#2B4360]">Secondary Number</p>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="focus:outline-none mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md"
                />
              </div>
            </div>

            <div className="flex gap-10 mt-6">
              <div className="text-[#2B4360] w-full">
                <p className="text-[#2B4360]">Address</p>
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="focus:outline-none mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md"
                />
              </div>
              <div className="text-[#2B4360] w-full">
                <p className="text-[#2B4360]">Map Link</p>
                <div className="flex items-center space-x-4  ">
                  <input
                    type="text"
                    placeholder="Enter Location Link"
                    className="focus:outline-none mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-10 mt-6">
              <div className="text-[#2B4360] w-full">
                <p>City</p>
                <DropdownMenu defaultValue="yourself" className="w-full">
                  <DropdownMenuTrigger className="w-full">
                    <div className="mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md">
                      <p className="text-[#2B4360]">Select City</p>
                      <IoChevronDown className="w-5 h-5" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[23.5rem] p-5">
                    <div className="w-full">hello</div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="text-[#2B4360] w-full">
                <p>State</p>
                <DropdownMenu defaultValue="yourself" className="w-full">
                  <DropdownMenuTrigger className="w-full">
                    <div className="mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md">
                      <p className="text-[#2B4360]">Select State</p>
                      <IoChevronDown className="w-5 h-5" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[23.5rem] p-5">
                    <div className="w-full">hello</div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="text-[#2B4360] w-full mt-6">
                <p>Number of beds</p>
                <DropdownMenu defaultValue="yourself" className="w-full">
                  <DropdownMenuTrigger className="w-full">
                    <div className="mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md">
                      <p className="text-[#2B4360]">45+</p>
                      <IoChevronDown className="w-5 h-5" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[23.5rem] p-5">
                    <div className="w-full">hello</div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-sm p-6">
            <div className="flex justify-between">
              <p className="text-xl font-bold text-[#131D2A]">
                Operational Hours and Days
              </p>

              <div className="flex items-center gap-2">
                <Checkbox />
                <p>Select custom Hours and Days?</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-10 mt-6">
              <p className="col-span-2 mb-2  font-semibold">Monday - Friday</p>
              <div className="text-[#2B4360] w-full">
                <p>Start Time</p>
                <input
                  type="time"
                  placeholder="Start time"
                  className="focus:outline-none mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md"
                />
              </div>
              <div className="text-[#2B4360] w-full">
                <p>End Time</p>
                <input
                  type="time"
                  placeholder="End time"
                  className="focus:outline-none mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md"
                />
              </div>
              <p className="col-span-2 mb-2  font-semibold mt-5">
                Saturday - Sunday
              </p>
              <div className="text-[#2B4360] w-full">
                <p>Start Time</p>
                <input
                  type="time"
                  placeholder="Start time"
                  className="focus:outline-none mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md"
                />
              </div>{" "}
              <div className="text-[#2B4360] w-full">
                <p>End Time</p>
                <input
                  type="time"
                  placeholder="End time"
                  className="focus:outline-none mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md shadow-sm p-6">
            <p className="text-xl font-bold text-[#131D2A]">Clinic Photos</p>

            <div className="flex items-center justify-start mt-6">
              <div className="flex items-center flex-col border p-6 rounded-lg border-gray-400 border-dashed">
                <div className="bg-[#EEF6FF] p-2 rounded-full">
                  <Upload className="w-5 h-5" />
                </div>
                <div className="mt-4 flex items-center flex-col">
                  <p><span className="text-[#2B4360] font-bold">Click here
                    </span> to upload your files or drag</p>
                  <p className="text-gray-400 text-sm">Supported Format: SVG, JPG, PNG (10mb each)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-sm p-6 flex justify-between items-center">
            <div>
              <p className="text-2xl font-bold text-[#131D2A]">Add Doctors</p>
              <p className="text-muted-foreground">
                *Minimum 1 doctor is required to link
              </p>
            </div>

            <button className="font-semibold border inline-flex items-center border-[#2B4360] text-[#2B4360] py-3 px-4 rounded-md">
              <Stethoscope className="w-4 h-4 mr-3" />
              Add Doctor
            </button>
          </div>
          <div>
            <button className="font-semibold inline-flex bg-[#2B4360] text-white py-3 px-4 rounded-md">
              Create Clinic
            </button>
          </div>
        </div>

        <div className="col-span-1 h-min bg-white relative rounded-lg overflow-hidden">
          <img
            src="/addnewclinic.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(43,67,96,0.12)] to-[#2B4360]">
            <div className="absolute bottom-10 left-10 text-white">
              <div className="grid gap-6">
                <div className="flex items-center text-lg">
                  <BookText className="mr-3 w-5 h-5" />
                  Fill the form
                </div>
                <div className="flex items-center text-lg">
                  <Check className="mr-3 w-5 h-5" />
                  Submit the verification
                </div>
                <div className="flex items-center text-lg">
                  <User className="mr-3 w-5 h-5" />
                  Relationship Manager Assigned
                </div>
                <div className="flex items-center text-lg">
                  <BadgeCheck className="mr-3 w-5 h-5" />
                  Once verified, enjoy services
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewDoctor;
