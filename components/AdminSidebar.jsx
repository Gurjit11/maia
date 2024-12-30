"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname
import icon from "../public/icon.png";
import logo from "../public/logo.png";
import Image from "next/image";
import {
  AiOutlineCalendar,
  AiOutlineContacts,
  AiOutlineDoubleLeft,
  AiOutlineLeft,
  AiOutlinePieChart,
  AiOutlineSetting,
  AiOutlineWechat,
} from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHospital, FaUser } from "react-icons/fa";

export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path
  const [isCollapsed, setIsCollapsed] = useState(false); // State for collapsible sidebar

  // Helper function to check if the current route is active
  const isActiveRoute = (route) => pathname === route;

  return (
    <div
      className={`h-screen p-3 border-r-2 transition-width duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsCollapsed(!isCollapsed)} // Toggle the collapsed state
        >
          <Image
            src={!isCollapsed ? icon : logo}
            alt="logo"
            className={`transition-transform duration-300 ${
              isCollapsed ? "scale-90" : "scale-125"
            }`}
            height={60}
          />
          {!isCollapsed && (
            <AiOutlineDoubleLeft className="text-xl text-gray-400" />
          )}
        </div>

        {/* Sidebar Links */}
        <div className="mt-6 flex-1 flex flex-col gap-2">
          <SidebarItem
            icon={<AiOutlinePieChart className="text-xl" />}
            label="Dashboard"
            isActive={isActiveRoute("/admin/dashboard")}
            onClick={() => router.push("/admin/dashboard")}
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<AiOutlineCalendar className="text-xl" />}
            label="Appointments"
            isActive={isActiveRoute("/admin/appointments")}
            onClick={() => router.push("/admin/appointments")}
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<FaUserDoctor className="text-xl" />}
            label="Doctors"
            isActive={isActiveRoute("/admin/doctors")}
            onClick={() => router.push("/admin/doctors")}
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<FaHospital className="text-xl" />}
            label="Clinics"
            // badge="10"
            isActive={isActiveRoute("/admin/clinics")}
            onClick={() => router.push("/admin/clinics")}
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<FaUser className="text-xl" />}
            label="Customer"
            // badge="2"
            isActive={isActiveRoute("/admin/customer")}
            onClick={() => router.push("/admin/customer")}
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<AiOutlineWechat className="text-xl" />}
            label="Reviews"
            isActive={isActiveRoute("/admin/reviews")}
            onClick={() => router.push("/admin/reviews")}
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<AiOutlineContacts className="text-xl" />}
            label="Contacts"
            isActive={isActiveRoute("/admin/contacts")}
            onClick={() => router.push("/admin/contacts")}
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<AiOutlineSetting className="text-xl" />}
            label="Settings"
            isActive={isActiveRoute("/admin/settings")}
            onClick={() => router.push("/admin/settings")}
            isCollapsed={isCollapsed}
          />
        </div>
      </div>
    </div>
  );
}

// Sidebar Item Component
function SidebarItem({ icon, label, badge, isActive, onClick, isCollapsed }) {
  return (
    <div
      className={`flex items-center gap-2 py-2 rounded-full cursor-pointer transition-colors ${
        isActive ? "bg-slate-700 text-white" : "bg-slate-50 text-black"
      }
      ${isCollapsed ? "px-2" : "px-3"}
      `}
      onClick={onClick}
    >
      <div className="text-xl">{icon}</div>
      {!isCollapsed && (
        <>
          <span className="text-base font-bold font-['Plus Jakarta Sans'] leading-snug">
            {label}
          </span>
          {badge && (
            <div className="px-2.5 py-1 text-black bg-indigo-50 rounded-full border border-indigo-300 text-sm font-semibold">
              {badge}
            </div>
          )}
        </>
      )}
    </div>
  );
}
