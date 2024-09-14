import AppointmentCard from "@/components/AppointmentCard";
import ConsultationCard from "@/components/ConsultationCard";
import { Edit, Mail, Phone } from "lucide-react";
import { BsGenderFemale } from "react-icons/bs";
import EditProfileModal from "@/components/EditProfileModal";

const Profile = () => {
  const profileData = {
    name: "Archana Mehta",
    photo:
      "https://i.pinImage.com/736x/13/e5/85/13e585664a1df5f548812b47a11f0889.jpg",
    gender: "Female",
    mobile: "987234234",
    email: "archana123@gmail.com",
  };

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
                <Image src={profileData.photo} alt="" className="rounded-full" />
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
        <p className="font-bold text-xl md:text-2xl text-[#154B6D]">My Journey</p>
        <div className="mt-6 md:mt-8 flex flex-col">
          <div className="flex items-start mb-3 md:mb-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16">
              <Image src="/Journey1.png" alt="" className="rounded-full" />
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
                <Image src="/Journey2.png" alt="" className="rounded-full" />
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
                <Image src="/Journey3.png" alt="" className="rounded-full" />
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
                <Image src="/Journey4.png" alt="" className="rounded-full" />
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
