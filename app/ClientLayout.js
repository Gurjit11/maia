"use client"; // This is a client component

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname(); // Get the current path

  // Check if the current route is /admin or its subroutes
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />} {/* Exclude Navbar on /admin routes */}
      <div>{children}</div>
      {!isAdminRoute && <Footer />} {/* Exclude Footer on /admin routes */}
    </>
  );
}
