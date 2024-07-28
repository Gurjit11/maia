import Image from "next/image";
import logo from "../public/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-slate-700 w-full flex-col justify-center items-center p-10 gap-2 flex">
      <div className="  w-full sm:flex flex-co justify-start items-start">
        <div className="flex-col justify-start md:items-start items-center gap-4 flex">
          <div className=" justify-start items-start flex">
            <Image src={logo} />
            <div className=" text-white text-3xl font-medium font-['Poppins'] leading-9">
              MAIA.CARE
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="text-white text-nowrap text-base font-semibold font-['Inter']">
              Discover your fertility journey
            </div>
          </div>
        </div>
        <div className=" w-full sm:justify-around justify-start items-start sm:flex flex-co ">
          <div className="flex-col justify-center items-center gap-4 mt-3 flex">
            <div className="text-white text-base font-semibold font-['Poppins']">
              How it Works
            </div>
            <div className="text-white text-base font-semibold font-['Poppins']">
              Find Doctors
            </div>
            <div className="text-white text-base font-semibold font-['Poppins']">
              Find Clinics
            </div>
            <div className="text-white text-base font-semibold font-['Poppins']">
              Blogs
            </div>
          </div>
          <div className="flex-col justify-center sm:mt-1 mt-3 items-center gap-4 flex">
            <div className="text-white text-base font-semibold font-['Poppins']">
              Services
            </div>
            <div className="text-white text-base font-normal font-['Poppins']">
              Fertility Support
            </div>
            <div className="text-white text-base font-normal font-['Poppins']">
              IVF & IUI
            </div>
            <div className="text-white text-base font-normal font-['Poppins']">
              Egg & Sperm Freezing
            </div>
            <div className="text-white text-base font-normal font-['Poppins']">
              Consultation
            </div>
          </div>
          <div className="flex-col justify-center items-center gap-4 mt-3 flex">
            <div className="text-white text-base font-semibold font-['Poppins']">
              About Us
            </div>
            <div className="text-white text-base font-semibold font-['Poppins']">
              Contact Us
            </div>
          </div>
        </div>
        <div className="sm:flex-col flex justify-center items-center my-3 gap-4 ">
          <FaTwitter className="text-white text-2xl" />
          <FaInstagram className="text-white text-2xl" />
          <FaFacebook className="text-white text-2xl" />
          <FaLinkedin className="text-white text-2xl" />
        </div>
      </div>
      <div className="w-full h-6 px-24 sm:justify-start justify-center  items-center gap-0.5 flex">
        <FaRegCopyright className="text-white text-sm mb-1" />

        <div className="text-white text-sm font-normal font-['Poppins']">
          Maiacare2023
        </div>
      </div>
    </div>
  );
};

export default Footer;
