"use client";
import AppointmentCard from "@/components/AppointmentCard";
import ConsultationCard from "@/components/ConsultationCard";
import { Edit, Mail, Phone } from "lucide-react";
import { BsGenderFemale } from "react-icons/bs";
import EditProfileModal from "@/components/EditProfileModal";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const [profileData, setProfileData] = useState({});

  let data = JSON.stringify({});

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://maia.projectx38.cloud/dashboard-apis/maia-dashboard/reviews/list",
    headers: {
      "login-token":
        "f48668d4ea1989d14a5692c5c4b7b296a2d651c4947526876dee65a7e191bacecdaff5bb1b21293df00fef97b96f1beb97ce695eb8ddb062ee48e912e5fddf83e7dc7008fcef956f29c78dae1f6486b433304398b040aa7f3312867c6d090ecbc5c5df4eaf8e21c8a0ecd3ac73b4469b59c892d51bf61fa9713f0cded76ded8a",
      "Content-Type": "application/json",
      Cookie:
        "x38_gadighoda_admin_login_unique=f48668d4ea1989d14a5692c5c4b7b29629e8b2f6a9e870fbf0451038467110d0967eb7e0d9aec0714d2890d5e279f980412b02e37441a232867cbbed5478a25b6db22230c03d7b1d567a32edcd6355d48fe270e204b3aaa0113f3c6c3284696b649fd126ad6ce51dff09a20a2280ef49eaf875c81c8ebcc77337259757f19cc9; x38_gadighoda_admin_user_details=j%3A%7B%22_id%22%3A%226698d1db58e489d6943d9e30%22%2C%22userId%22%3A%22df2af83e-b7ff-4d70-b417-29f14701f3c9%22%2C%22userName%22%3A%22anikethandore12%40gmail.com%22%2C%22password%22%3A%22test1234%22%2C%22status%22%3A%22ACTIVE%22%2C%22name%22%3A%22Aniket%20Handore%22%7D",
    },
    data: data,
  };
  useEffect(() => {
    axios
      .request(config)
      .then((response) => {
        setProfileData(response.data.data);
        console.log(JSON.stringify(response.data), 'status = "ACTIVE"');
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="md:px-12 lg:px-20 gap-6 px-4 flex flex-col-reverse lg:grid md:grid-cols-5 bg-[#F7F7F7] md:gap-8 lg:gap-12 md:py-8 lg:py-10 py-6">
      <div className="col-span-3 bg-white w-full rounded-lg p-4 md:p-6 shadow-md">
        <div className="flex flex-col gap-4 md:gap-5">
          <div>
            <p className="font-bold text-xl md:text-2xl text-[#154B6D]">
              My Profile
            </p>
            <div className="flex mt-6 md:mt-8 gap-4 md:gap-6 flex-col md:flex-row">
              <div className="h-16 w-16 md:h-20 md:w-20 mx-auto md:mx-0">
                <Image
                  src={profileData.photo}
                  alt=""
                  className="rounded-full"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-[#2B4360] text-xl md:text-2xl font-semibold text-center md:text-left">
                    {profileData.name}
                  </p>
                  <EditProfileModal
                    name="Archana Mehta"
                    email="archana232@gmail.com"
                    phone="123456789"
                    gender="female"
                  />
                </div>
                <div className="mt-3 md:mt-4 text-[#606060] flex flex-col md:flex-row">
                  <div className="flex items-center gap-1 mb-2 md:mb-0">
                    <BsGenderFemale className="w-3 h-3 md:w-6 md:h-6" />
                    <p className="text-sm">{profileData.gender}</p>
                  </div>
                  <div className="flex items-center gap-1 md:border-l border-gray-300 md:pl-2 md:ml-4">
                    <Phone className="w-3 h-3 md:w-6 md:h-6" />
                    <p className="text-sm">{profileData.mobile}</p>
                  </div>
                  <div className="flex items-center gap-1 md:border-l border-gray-300 md:pl-2 md:ml-4">
                    <Mail className="w-3 h-3 md:w-6 md:h-6" />
                    <p className="text-sm">{profileData.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <p className="text-md md:text-lg text-[#154B6D] font-bold">
              My Consultations
            </p>
            <div className="mt-3 md:mt-4 flex flex-col">
              <ConsultationCard
                date="29 December 2023"
                time="05:00PM"
                tags={[
                  "Just Starting",
                  "Family Building Later",
                  "IVF",
                  "Getting Emotional Support",
                  "PCOS",
                ]}
              />
            </div>
          </div>
          <hr />
          <div>
            <p className="text-md md:text-lg text-[#154B6D] font-bold">
              My Appointments
            </p>
            <div className="mt-3 md:mt-4 flex flex-col">
              <AppointmentCard
                photo={profileData.photo}
                name="Dr. Jake Wilson"
                date="11 December 2023"
                token={14}
                clinic="Lifewave Clinic"
                patientName="Archana"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-2 bg-[#F2EFED] w-full rounded-lg shadow-md p-4 md:p-6 h-min pb-8 md:pb-10">
        <p className="font-bold text-xl md:text-2xl text-[#154B6D]">
          My Journey
        </p>
        <div className="mt-6 md:mt-8 flex flex-col">
          <div className="flex items-start mb-3 md:mb-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16">
                <Image
                  src="/Journey1.png"
                  alt=""
                  className="rounded-full"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col justify-center items-center mt-2 md:mt-3 gap-2">
                <div className="bg-[#2B4360] w-1 h-1 rounded-full" />
                <div className="bg-[#2B4360] w-1 h-1 rounded-full" />
                <div className="bg-[#2B4360] w-1 h-1 rounded-full" />
                <div className="bg-[#2B4360] w-1 h-1 rounded-full" />
              </div>
            </div>
            <p className="text-[#2B4360] font-semibold text-sm md:text-md lg:text-lg ml-3 md:ml-4 lg:ml-6 mt-2 md:mt-4">
              Free Consultation
            </p>
          </div>

          <div className="flex items-start mb-3 md:mb-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16">
                <Image
                  src="/Journey2.png"
                  alt=""
                  className="rounded-full"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col justify-center items-center mt-2 md:mt-3 gap-2">
                <div className="bg-[#2B4360] w-1 h-1 rounded-full" />
                <div className="bg-[#2B4360] w-1 h-1 rounded-full" />
                <div className="bg-[#2B4360] w-1 h-1 rounded-full" />
                <div className="bg-[#2B4360] w-1 h-1 rounded-full" />
              </div>
            </div>
            <p className="text-[#2B4360] font-semibold text-sm md:text-md lg:text-lg ml-3 md:ml-4 lg:ml-6 mt-2 md:mt-4">
              Appointment Booked
            </p>
          </div>

          <div className="flex items-start mb-3 md:mb-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16">
                <Image
                  src="/Journey3.png"
                  alt=""
                  className="rounded-full"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col justify-center items-center mt-2 md:mt-3 gap-2">
                <div className="bg-[#2B4360] w-1 h-1 rounded-full" />
                <div className="bg-[#2B4360] w-1 h-1 rounded-full" />
                <div className="bg-[#2B4360] w-1 h-1 rounded-full" />
                <div className="bg-[#2B4360] w-1 h-1 rounded-full" />
              </div>
            </div>
            <p className="text-[#2B4360] font-semibold text-sm md:text-md lg:text-lg ml-3 md:ml-4 lg:ml-6 mt-2 md:mt-4">
              Consultation at Clinic
            </p>
          </div>

          <div className="flex items-start">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16">
                <Image
                  src="/Journey4.png"
                  alt=""
                  className="rounded-full"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <p className="text-[#2B4360] font-semibold text-sm md:text-md lg:text-lg ml-3 md:ml-4 lg:ml-6 mt-2 md:mt-4">
              Feedback
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
