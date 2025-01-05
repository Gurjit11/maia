import Image from "next/image";
import logo from "../public/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#2B4360] w-full flex-col justify-center items-center p-10 px-20 gap-2 flex">
      <div className="  w-full sm:flex flex-co justify-start items-start">
        <div className="flex-col justify-start md:items-start items-center gap-4 flex">
          <div className=" justify-start items-center flex">
            <Image src={logo} />
            <div className=" text-white text-3xl font-medium font-['Poppins'] leading-9">
              MAIA.CARE
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="text-white text-nowrap text-base font-semibold font-poppins">
              Discover your fertility journey
            </div>
          </div>
        </div>
        <div className=" w-full sm:justify-around justify-start items-start sm:flex flex-co ">
          <div className="flex-col justify-start items-start gap-4 mt-3 flex">
            <div className="text-white text-start text-base font-semibold font-poppins">
              How it Works
            </div>
            <div className="text-white text-start text-base font-semibold font-poppins">
              Find Doctors
            </div>
            <div className="text-white text-base font-semibold font-poppins">
              Find Clinics
            </div>
            <div className="text-white text-base font-semibold font-poppins">
              Blogs
            </div>
          </div>
          <div className="flex-col justify-center sm:mt-1 mt-3 items-start gap-4 flex">
            <div className="text-white text-base font-semibold font-poppins">
              Services
            </div>
            <div className="text-white text-base font-normal font-poppins">
              Fertility Support
            </div>
            <div className="text-white text-base font-normal font-poppins">
              IVF & IUI
            </div>
            <div className="text-white text-base font-normal font-poppins">
              Egg & Sperm Freezing
            </div>
            <div className="text-white text-base font-normal font-poppins">
              Consultation
            </div>
          </div>
          <div className="flex-col justify-center items-start gap-4 mt-3 flex">
            <div className="text-white text-base font-semibold font-poppins">
              About Us
            </div>
            <div className="text-white text-base font-semibold font-poppins">
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
      <div className="w-full h-6  sm:justify-start justify-center  items-center gap-0.5 flex">
        <FaRegCopyright className="text-white text-xl" />

        <div className="text-white text-sm mb-0.5 ml-1 font-normal font-poppins">
          Maiacare2023
        </div>
      </div>
    </div>
  );
};

export default Footer;
