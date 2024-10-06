"use client";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname
import icon from "../public/icon.png";
import Image from "next/image";
import {
  AiOutlineCalendar,
  AiOutlinePieChart,
  AiOutlineSetting,
  AiOutlineWechat,
} from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHospital, FaUser } from "react-icons/fa";

export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  // Helper function to check if the current route is active
  const isActiveRoute = (route) => pathname === route;

  return (
    <div className="h-screen p-3 border-r-2">
      <div className="w-52 flex-col justify-start items-start gap-8 inline-flex">
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="justify-center w-full items-center gap-2 flex">
            <Image src={icon} alt="logo" className="scale-125 " height={60} />
          </div>
        </div>
        <div className="self-stretch h-96 flex-col hover:cursor-pointer justify-start items-start gap-2 flex">
          <div
            className={`self-stretch px-3 py-2.5 rounded-full justify-start items-center gap-2 inline-flex ${
              isActiveRoute("/admin/dashboard")
                ? "bg-slate-700 text-white"
                : "bg-slate-50"
            }`}
            onClick={() => router.push("/admin/dashboard")}
          >
            <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
              <AiOutlinePieChart className="text-xl" />
              <div className="grow shrink basis-0 text-base font-bold font-['Plus Jakarta Sans'] leading-snug">
                Dashboard
              </div>
            </div>
          </div>
          <div
            className={`self-stretch px-3 py-2.5 rounded-full justify-start items-center gap-2 inline-flex ${
              isActiveRoute("/admin/appointments")
                ? "bg-slate-700 text-white"
                : "bg-slate-50"
            }`}
            onClick={() => router.push("/admin/appointments")}
          >
            <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
              <AiOutlineCalendar className="text-xl" />
              <div className="grow shrink basis-0 text-base font-bold font-['Plus Jakarta Sans'] leading-snug">
                Appointments
              </div>
            </div>
          </div>
          <div
            className={`self-stretch px-3 py-2.5 rounded-full justify-start items-center gap-2 inline-flex ${
              isActiveRoute("/admin/doctors")
                ? "bg-slate-700 text-white"
                : "bg-slate-50"
            }`}
            onClick={() => router.push("/admin/doctors")}
          >
            <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
              <FaUserDoctor className="text-xl" />
              <div className="grow shrink basis-0 text-base font-bold font-['Plus Jakarta Sans'] leading-snug">
                Doctors
              </div>
            </div>
          </div>
          <div
            className={`self-stretch px-3 py-2.5 rounded-full justify-start items-center gap-2 inline-flex ${
              isActiveRoute("/admin/clinics")
                ? "bg-slate-700 text-white"
                : "bg-slate-50"
            }`}
            onClick={() => router.push("/admin/clinics")}
          >
            <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
              <FaHospital className="text-xl" />
              <div className="grow shrink basis-0 text-base font-bold font-['Plus Jakarta Sans'] leading-snug">
                Clinics
              </div>
            </div>
            <div className="px-2.5 py-1 bg-indigo-50 rounded-full border border-indigo-300 justify-center items-center gap-1.5 flex">
              <div className="justify-center items-center gap-1 flex">
                <div className="text-center text-slate-700 text-sm font-semibold font-['Plus Jakarta Sans'] leading-tight">
                  10
                </div>
              </div>
            </div>
          </div>
          <div
            className={`self-stretch px-3 py-2.5 rounded-full justify-start items-center gap-2 inline-flex ${
              isActiveRoute("/admin/customer")
                ? "bg-slate-700 text-white"
                : "bg-slate-50"
            }`}
            onClick={() => router.push("/admin/customer")}
          >
            <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
              <FaUser className="text-xl" />
              <div className="grow shrink basis-0 text-base font-bold font-['Plus Jakarta Sans'] leading-snug">
                Customer
              </div>
            </div>
            <div className="px-2.5 py-1 bg-indigo-50 rounded-full border border-slate-400 justify-center items-center gap-1.5 flex">
              <div className="justify-center items-center gap-1 flex">
                <div className="text-center text-indigo-600 text-sm font-semibold font-['Plus Jakarta Sans'] leading-tight">
                  2
                </div>
              </div>
            </div>
          </div>
          <div
            className={`self-stretch px-3 py-2.5 rounded-full justify-start items-center gap-2 inline-flex ${
              isActiveRoute("/admin/reviews")
                ? "bg-slate-700 text-white"
                : "bg-slate-50"
            }`}
            onClick={() => router.push("/admin/reviews")}
          >
            <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
              <AiOutlineWechat className="text-xl" />
              <div className="grow shrink basis-0 text-base font-bold font-['Plus Jakarta Sans'] leading-snug">
                Reviews
              </div>
            </div>
          </div>
          <div
            className={`self-stretch px-3 py-2.5 rounded-full justify-start items-center gap-2 inline-flex ${
              isActiveRoute("/admin/settings")
                ? "bg-slate-700 text-white"
                : "bg-slate-50"
            }`}
            onClick={() => router.push("/admin/settings")}
          >
            <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
              <AiOutlineSetting className="text-xl" />
              <div className="grow shrink basis-0 text-base font-bold font-['Plus Jakarta Sans'] leading-snug">
                Settings
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
