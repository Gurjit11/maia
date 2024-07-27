"use client";
import icon from "../public/icon.png";
import clinic from "../public/clinic.png";
import doctor from "../public/doctor.png";
import Image from "next/image";
import Login from "./Login";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div className="flex sm:hidden items-center w-full bg-white">
        <div
          onClick={() => setSidebar(!sidebar)}
          className="text-xl text-black ml-2 bg-white p-2 cursor-pointer md:hidden"
        >
          {sidebar ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div className="ml-3 justify-start overflow-y-clip items-center gap-1 flex">
          <Image src={icon} alt="logo" className="scale-125 " height={60} />
        </div>
      </div>
      {/* sidebar */}
      <div
        className={
          sidebar
            ? "md:hidden fixed left-0 top-10 flex flex-col items-center justify-between w-full h-[95%] bg-white ease-in duration-300 z-10 p-4"
            : "fixed left-[-100%] top-10 flex flex-col h-[95%] items-center justify-between ease-in duration-300 z-10"
        }
      >
        <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
          <Login setSidebar={setSidebar} />
          <div className="flex-col justify-start items-start gap-4 flex">
            <Link
              href={"/finddoctors"}
              className="justify-start cursor-pointer items-start gap-14 inline-flex"
            >
              <div className="justify-start items-center gap-2 flex">
                <Image src={doctor} />

                <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                  Find Doctor{" "}
                </div>
              </div>
            </Link>
            <div className="justify-start items-center gap-2 inline-flex">
              <Image src={clinic} />

              <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                Find Clinics{" "}
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="justify-center items-center gap-2 inline-flex">
              <div className="text-zinc-600 text-sm font-normal font-['Poppins'] leading-none">
                Services
              </div>
            </div>
            <div className="h-32 flex-col justify-start items-start gap-4 flex">
              <div className="justify-center items-center gap-4 inline-flex">
                <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                  Fertility Support
                </div>
              </div>
              <div className="justify-center items-center gap-4 inline-flex">
                <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                  IVF & IUI
                </div>
              </div>
              <div className="justify-center items-center gap-4 inline-flex">
                <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                  Egg & Sperm Freezing
                </div>
              </div>
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                  Consultation
                </div>
                <div className="w-9 h-6 relative">
                  <div className="w-9 h-6 left-0 top-0 absolute bg-green-100 rounded" />
                  <div className="left-[4px] top-[4px] absolute text-green-600 text-sm font-medium font-['Poppins'] leading-none">
                    Free
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
              Blogs
            </div>
            <div className="text-gray-900 text-base font-normal font-['Poppins'] leading-tight">
              Contact Us
            </div>
          </div>
        </div>
      </div>
      {/* sidebar end */}
      <div className="hidden sm:block w-full p-2 bg-white shadow">
        <div className=" justify-between px-6 items-center flex">
          <div className=" justify-start items-center gap-8 flex">
            <div className="justify-start overflow-y-clip items-center gap-1 flex">
              <Image src={icon} alt="logo" className="scale-125 " height={60} />
            </div>
            {/* <div className=" bg-white rounded-lg border border-orange-200 justify-center items-center gap-2 flex">
            <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">
              Select City
            </div>
            <div className="w-4 h-4 px-0.5 pt-1.5 pb-1 justify-center items-center flex" />
          </div> */}
          </div>
          <div className=" justify-start items-center gap-14 flex">
            <div className="justify-start items-start gap-14 flex">
              <Link
                href={"/finddoctors"}
                className="justify-start items-center gap-2 flex"
              >
                <Image src={doctor} />
                <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                  Find Doctor{" "}
                </div>
              </Link>
              <div className="justify-start items-center gap-2 flex">
                <Image src={clinic} />

                <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                  Find Clinics{" "}
                </div>
              </div>
            </div>
            <Login setSidebar={setSidebar} />
          </div>
        </div>
        <div className=" justify-around items-center flex px-10">
          <div className="justify-center items-center gap-4 flex">
            <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
              Fertility Support
            </div>
          </div>
          <div className="justify-center items-center gap-4 flex">
            <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
              IVF & IUI
            </div>
          </div>
          <div className="justify-center items-center gap-4 flex">
            <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
              Egg & Sperm Freezing
            </div>
          </div>
          <div className="justify-start items-center gap-2 flex">
            <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
              Consultation
            </div>
            <div className=" bg-green-200 rounded-md p-1">
              <div className=" text-green-600 text-sm font-medium font-['Poppins'] leading-none">
                Free
              </div>
            </div>
          </div>
          <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
            Blogs
          </div>
          <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
            Contact Us
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
