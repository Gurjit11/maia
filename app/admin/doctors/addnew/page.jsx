"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowLeft, BadgeCheck, BookText, CameraIcon, Check, Hospital, MoveLeftIcon, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { IoChevronDown, IoDocument } from "react-icons/io5";

const AddNewDoctor = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  return (
    <div className="w-full">
      <div className="p-6">
        <h1 className="text-[#1E293B] text-2xl font-bold">Add New Doctor</h1>
        <span className="text-black">
          Users &gt; Clinics &gt;{" "}
          <span className="text-muted-foreground">Add New doctor</span>
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
                <p className="text-lg font-semibold">Add Profile Picture</p>
                <p className="text-sm">Allowed Jpg,png of max size 5mb</p>
              </div>
            </div>

            <div className="flex gap-10 mt-6">
              <div className="text-[#2B4360] w-full">
                <p className="text-[#2B4360]">Name</p>
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
                <p className="text-[#2B4360]">Date of birth</p>
                <input
                  type="date"
                  placeholder="DOB"
                  className="focus:outline-none mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md"
                />
              </div>
              <div className="text-[#2B4360] w-full">
                <p className="text-[#2B4360]">Gender</p>
                <div className="flex items-center space-x-4 mt-1 py-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="form-radio text-[#2B4360]"
                    />
                    <span className="ml-2 text-[#2B4360]">Male</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="form-radio text-[#2B4360]"
                    />
                    <span className="ml-2 text-[#2B4360]">Female</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="text-[#2B4360] w-full">
                <p className="text-[#2B4360]">Address</p>
                <input
                  type="text"
                  placeholder="Address"
                  className="focus:outline-none mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md"
                />
              </div>
            </div>

            <div className="flex gap-10 mt-6">
              <div className="text-[#2B4360] w-full">
                <p>City</p>
                <DropdownMenu defaultValue="yourself" className="w-full">
                  <DropdownMenuTrigger className="w-full">
                    <div className="mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md">
                      <p className="text-[#2B4360]">City</p>
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
                      <p className="text-[#2B4360]">State</p>
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
            <p className="text-xl font-bold text-[#131D2A]">
              Qualification Details
            </p>

            <div className="grid grid-cols-2 gap-x-10 mt-6">
              <div className="text-[#2B4360] w-full">
                <p>Add Qualifications</p>
                <DropdownMenu defaultValue="yourself" className="w-full">
                  <DropdownMenuTrigger className="w-full">
                    <div className="mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md">
                      <p className="text-[#2B4360]">Qualifications</p>
                      <IoChevronDown className="w-5 h-5" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[23.5rem] p-5">
                    <div className="w-full">hello</div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>{" "}
              <div className="text-[#2B4360] w-full">
                <p>Years of Experience</p>
                <DropdownMenu defaultValue="yourself" className="w-full">
                  <DropdownMenuTrigger className="w-full">
                    <div className="mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md">
                      <p className="text-[#2B4360]">1 year</p>
                      <IoChevronDown className="w-5 h-5" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[23.5rem] p-5">
                    <div className="w-full">hello</div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>{" "}
              <div className="text-[#2B4360] w-full mt-6">
                <p>Add Speciality</p>
                <DropdownMenu defaultValue="yourself" className="w-full">
                  <DropdownMenuTrigger className="w-full">
                    <div className="mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md">
                      <p className="text-[#2B4360]">Speciality</p>
                      <IoChevronDown className="w-5 h-5" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[23.5rem] p-5">
                    <div className="w-full">hello</div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div>
              <div className="text-[#2B4360] mt-6 w-full">
                <p>About</p>
                <textarea
                  name=""
                  id=""
                  placeholder="Enter bio"
                  className="mt-1 w-full p-2 border border-gray-200 resize-none focus:outline-0 rounded-md"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-sm p-6 flex justify-between items-center">
            <div>
              <p className="text-2xl font-bold text-[#131D2A]">Link Clinic</p>
              <p className="text-muted-foreground">
                *Minimum 1 clinic is required to link
              </p>
            </div>

            <button className="font-semibold border inline-flex items-center border-[#2B4360] text-[#2B4360] py-3 px-4 rounded-md">
              <Hospital className="w-4 h-4 mr-3" />
              Add Clinic
            </button>
          </div>
<div >

          <button
            className="font-semibold inline-flex bg-[#2B4360] text-white py-3 px-4 rounded-md"
            >
            Create Profile
          </button>
            </div>
        </div>

        <div className="col-span-1 h-min bg-white relative rounded-lg overflow-hidden">
  <img src="/addnewdoctor.png" alt="" className="w-full h-full object-cover" />
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
