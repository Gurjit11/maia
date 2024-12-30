"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { ArrowLeft, BadgeCheck, BookText, CameraIcon, Check, Hospital, MoveLeftIcon, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { IoChevronDown, IoDocument } from "react-icons/io5";

const AddNewDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [secondaryNumber, setSecondaryNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [experience, setExperience] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [about, setAbout] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [url,setUrl] = useState("");
  const handleCreateProfile = () => {
    console.log(profilePicture);

    const formData = new FormData();
    formData.append('file', profilePicture);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://maia.projectx38.cloud/dashboard-apis/maia-dashboard/user/uploadFile",
      headers: {
        "device-id": "97c2fe5e-0f68-4d72-b277-d5d2d4e628a8",
        "login-token":
          "f48668d4ea1989d14a5692c5c4b7b2964c1cd4333f27869b149f8f5b7db9c37a0731331d8bfdddaee2b39aa2da420282524c49da2bffa8bf95d5b6d4c956d1aea10ebcc18bb59d9fb0b68e8a0701262037f59784c56f5141e9446618ce41e97864da9a3c4729b6469712045d9d379f7e8996734fcfe58bf4029f8bb2c34d3b8831f3f79b575a4fe0b810e569ba76099e6b6e80a08bc2488350d7dc632a9d0feca6588711354f54e52adfebd6828012b69aaa1e903bfa9ac57a8c676e89d2853f30297fbab03b8b45c49af79cd819bd289ba7b7d3e50d799c01e27dcc02b1580a5ac3b6a6cc94dff860916be3340c958c75952faafd90bff74c677b74767d4d5dba21cd8ab57d8c0991e537ddaffb5f3cefea2c7f31e4d2dad2e1af34c8525d6295c8af0a9aefe466e3c4218ecac52d4265860495f0ece6361f315af2c82c97af5bc9e6aa356f19fcab74af5ecd4ba4c55fedeab1876372e9ff6cc8b1ebc0799988be785907c04772a8b96b2706b95151bdcb63ed2752734a64c6ea9691e0c335",
        "city-id": "NA",
      },
      data: formData,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        const profileImageUrl = response.data.data.url;

        const doctorProfile = {
          doctorName: name,
          contactEmail: email,
          contactNumber: mobileNumber,
          contactNumber: secondaryNumber,
          // dob,
          gender,
          // address,
          // city,
          // state,
          education: qualifications,
          experiance: experience,
          spectiality: speciality,
          about,
          profileImage: profileImageUrl,
          feesStructure: 1500,
        };

        // Send POST request to create doctor profile
        axios.post('https://maia.projectx38.cloud/dashboard-apis/maia-dashboard/doctors/add', doctorProfile, {
          headers: {
            "device-id": "97c2fe5e-0f68-4d72-b277-d5d2d4e628a8",
            "login-token":
              "f48668d4ea1989d14a5692c5c4b7b296a2d651c4947526876dee65a7e191bacecdaff5bb1b21293df00fef97b96f1beb97ce695eb8ddb062ee48e912e5fddf83e7dc7008fcef956f29c78dae1f6486b433304398b040aa7f3312867c6d090ecbc5c5df4eaf8e21c8a0ecd3ac73b4469b59c892d51bf61fa9713f0cded76ded8a",
            "city-id": "NA",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log('Doctor profile created successfully:', response.data);
          //set everthing to empty
          setName("");
          setEmail("");
          setMobileNumber("");
          setSecondaryNumber("");
          setDob("");
          setGender("");
          setAddress("");
          setCity("");
          setState("");
          setQualifications("");
          setExperience("");
          setSpeciality("");
          setAbout("");
          
        })
        .catch((error) => {
          console.error('Error creating doctor profile:', error);
        });
      })
      .catch((error) => {
        console.log('Error uploading file:', error);
      });
  };

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

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
                  src={
                    profilePicture
                      ? URL.createObjectURL(profilePicture)
                      : "https://pomerancedentalcare.com/wp-content/uploads/2024/06/placeholder-image-person-jpg-1.jpg"
                  }
                  alt="Profile"
                  className="object-contain w-full h-full rounded-full"
                />
                <div className="absolute bottom-0 right-0 bg-[#2B4360] p-2 rounded-full">
                  <label htmlFor="profilePictureInput">
                    <CameraIcon className="text-white w-4 h-4 cursor-pointer" />
                  </label>
                  <input
                    type="file"
                    id="profilePictureInput"
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                    className="hidden"
                  />
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="focus:outline-none mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md"
                />
              </div>

              <div className="text-[#2B4360] w-full">
                <p className="text-[#2B4360]">Email</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="Mobile Number"
                  className="focus:outline-none mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md"
                />
              </div>

              <div className="text-[#2B4360] w-full">
                <p className="text-[#2B4360]">Secondary Number</p>
                <input
                  type="tel"
                  value={secondaryNumber}
                  onChange={(e) => setSecondaryNumber(e.target.value)}
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
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
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
                      value="Male"
                      checked={gender === "Male"}
                      onChange={(e) => setGender(e.target.value)}
                      className="form-radio text-[#2B4360]"
                    />
                    <span className="ml-2 text-[#2B4360]">Male</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={gender === "Female"}
                      onChange={(e) => setGender(e.target.value)}
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
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
                      <p className="text-[#2B4360]">{city || "City"}</p>
                      <IoChevronDown className="w-5 h-5" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[23.5rem] p-5">
                    <div className="w-full">
                      <button onClick={() => setCity("City 1")}>City 1</button>
                      <button onClick={() => setCity("City 2")}>City 2</button>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="text-[#2B4360] w-full">
                <p>State</p>
                <DropdownMenu defaultValue="yourself" className="w-full">
                  <DropdownMenuTrigger className="w-full">
                    <div className="mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md">
                      <p className="text-[#2B4360]">{state || "State"}</p>
                      <IoChevronDown className="w-5 h-5" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[23.5rem] p-5">
                    <div className="w-full">
                      <button onClick={() => setState("State 1")}>State 1</button>
                      <button onClick={() => setState("State 2")}>State 2</button>
                    </div>
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
                      <p className="text-[#2B4360]">{qualifications || "Qualifications"}</p>
                      <IoChevronDown className="w-5 h-5" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[23.5rem] p-5">
                    <div className="w-full">
                      <button onClick={() => setQualifications("Qualification 1")}>Qualification 1</button>
                      <button onClick={() => setQualifications("Qualification 2")}>Qualification 2</button>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>{" "}
              <div className="text-[#2B4360] w-full">
                <p>Years of Experience</p>
                <DropdownMenu defaultValue="yourself" className="w-full">
                  <DropdownMenuTrigger className="w-full">
                    <div className="mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md">
                      <p className="text-[#2B4360]">{experience || "1 year"}</p>
                      <IoChevronDown className="w-5 h-5" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[23.5rem] p-5">
                    <div className="w-full">
                      <button onClick={() => setExperience(1)}>1 year</button>
                      <button onClick={() => setExperience(2)}>2 years</button>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>{" "}
              <div className="text-[#2B4360] w-full mt-6">
                <p>Add Speciality</p>
                <DropdownMenu defaultValue="yourself" className="w-full">
                  <DropdownMenuTrigger className="w-full">
                    <div className="mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md">
                      <p className="text-[#2B4360]">{speciality || "Speciality"}</p>
                      <IoChevronDown className="w-5 h-5" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[23.5rem] p-5">
                    <div className="w-full">
                      <button onClick={() => setSpeciality("Speciality 1")}>Speciality 1</button>
                      <button onClick={() => setSpeciality("Speciality 2")}>Speciality 2</button>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div>
              <div className="text-[#2B4360] mt-6 w-full">
                <p>About</p>
                <textarea
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
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
          <div>
            <button
              onClick={handleCreateProfile}
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