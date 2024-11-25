"use client";
import Image from "next/image";
import adminlogin from "../../../public/adminlogin.png";
import icon from "../../../public/icon.png";
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiOutlineFullscreenExit,
} from "react-icons/ai";
import { FaDoorOpen } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    userName: "anikethandorel2@gmail.com",
    password: "test1234",
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="col-span-1 flex justify-center items-center px-4">
        <div className="flex flex-col justify-start items-start gap-2 w-full max-w-md">
          <div className="self-stretch  flex-col justify-start items-center  flex">
            <div className="justify-center w-full items-center gap-2 flex">
              <Image src={icon} alt="logo" height={80} />
            </div>
            <div className=" flex-col justify-start items-center gap-2 flex">
              <div className="self-stretch text-center text-slate-800 text-3xl font-semibold font-['Poppins'] leading-10">
                Sign In To Your Account.
              </div>
              <div className="self-stretch text-sm text-center text-slate-600 text-lg font-normal font-['Poppins'] leading-7">
                Please enter details to access your dashboard
              </div>
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-center gap-3 flex">
            {/* Email Input */}
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-slate-800 font-semibold font-['Poppins'] leading-tight"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-white rounded-lg border border-slate-300 text-base font-medium font-['Poppins'] leading-snug"
                placeholder="Admin@maiacare.com"
                value={formData.userName}
                onChange={(e) =>
                  setFormData({ ...formData, userName: e.target.value })
                }
              />
            </div>

            {/* Password Input */}
            <div className="w-full">
              <label
                htmlFor="password"
                className="block text-slate-800  font-semibold font-['Poppins'] leading-tight"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 bg-white rounded-lg border border-slate-300 text-base font-medium font-['Poppins'] leading-snug"
                placeholder="*****************"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="showPassword"
                  className="mr-2"
                  onChange={(e) => {
                    const passwordInput = document.getElementById("password");
                    if (e.target.checked) {
                      passwordInput.type = "text";
                    } else {
                      passwordInput.type = "password";
                    }
                  }}
                />
                <label
                  htmlFor="showPassword"
                  className="text-slate-800 text-sm font-semibold font-['Poppins']"
                >
                  Show Password
                </label>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="self-stretch flex justify-end items-center">
              <a
                href="#"
                className="text-slate-700 text-sm font-semibold font-['Poppins'] underline leading-tight"
              >
                Forgot Password
              </a>
            </div>
          </div>

          {/* Sign In Button */}
          <div className="self-stretch flex flex-col gap-6">
            <Link href={"/admin/dashboard"}>
              <button className="w-full px-5 py-3 bg-slate-700 rounded-lg text-white text-base font-semibold font-['Poppins']">
                Sign In <FaDoorOpen className="text-xl inline" />
              </button>
            </Link>
            <div className="self-stretch text-center text-slate-800 text-sm font-normal font-['Poppins'] leading-tight">
              Don&apos;t have an account?{" "}
              <a
                href="#"
                className="text-slate-700 text-sm font-semibold font-['Poppins'] underline"
              >
                Sign Up
              </a>
            </div>
          </div>

          {/* OR Section */}
          <div className="self-stretch justify-center items-center gap-3 flex">
            <div className="text-center text-slate-400 text-xs font-semibold font-['Poppins'] uppercase tracking-wide">
              OR
            </div>
          </div>

          {/* Social Sign-In Buttons */}
          <div className="self-stretch flex-col justify-start items-center ">
            <button className="w-full mb-3 px-4 py-2.5 bg-white rounded-lg border border-slate-300 flex justify-center items-center gap-3">
              <AiFillFacebook className="text-2xl" />
              <span className="text-slate-800 text-base font-medium font-['Poppins']">
                Sign In With Facebook
              </span>
            </button>
            <button className="w-full px-4 py-2.5 bg-white rounded-lg border border-slate-300 flex justify-center items-center gap-3">
              <AiFillGoogleCircle className="text-2xl" />
              <span className="text-slate-800 text-base font-medium font-['Poppins']">
                Sign In With Google
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden md:block col-span-1">
        <Image
          src={adminlogin}
          alt="Admin Login Image"
          className="h-screen w-auto object-cover"
        />
      </div>
    </div>
  );
};

export default AdminLogin;
