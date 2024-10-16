"use client";
import Link from "next/link";
import { useState } from "react";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Ashok Kumar",
      date: "23, Mar 2023",
      mobile: "9092038491",
      email: "ashok.kumar@gmail.com",
      status: "Verified",
      profilePic: "/path/to/profile-pic.jpg",
    },
    {
      id: 2,
      name: "Ramesh Bigodiya",
      date: "23, Mar 2023",
      mobile: "9092038491",
      email: "ashok.kumar@gmail.com",
      status: "Signed Up, Dashboard",
      profilePic: "/path/to/profile-pic2.jpg",
    },
    // Add more doctors as needed
  ]);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Doctors</h1>
          <span className="text-gray-500">Users &gt; Doctors</span>
        </div>
        <Link href="/admin/doctors/addnew">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          + Add New Doctor
        </button>
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="flex justify-between items-center mt-6 mb-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
            <span className="mr-2">98 Doctors</span>
          </div>
          <input
            type="text"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search Doctors"
          />
        </div>

        <div className="flex space-x-3 items-center">
          <div className="flex items-center space-x-1">
            <label className="text-gray-500">Sort by:</label>
            <select className="border px-2 py-1 rounded-md">
              <option value="all">All Time</option>
              <option value="recent">Recently Added</option>
            </select>
          </div>
          <button className="bg-gray-200 p-2 rounded-md">⚙️</button>
        </div>
      </div>

      {/* Table */}
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="py-2 px-4 border-b">#</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Member Since</th>
            <th className="py-2 px-4 border-b">Mobile No</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={doctor.id} className="text-center">
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b flex items-center justify-center space-x-2">
                <img
                  src={doctor.profilePic}
                  alt={doctor.name}
                  className="w-8 h-8 rounded-full"
                />
                <span>{doctor.name}</span>
              </td>
              <td className="py-2 px-4 border-b">{doctor.date}</td>
              <td className="py-2 px-4 border-b">{doctor.mobile}</td>
              <td className="py-2 px-4 border-b">{doctor.email}</td>
              <td className="py-2 px-4 border-b">
                <span
                  className={`py-1 px-3 rounded-full text-xs ${
                    doctor.status.includes("Verified")
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {doctor.status}
                </span>
              </td>
              <td className="py-2 px-4 border-b">
                <button className="bg-gray-200 p-2 rounded-md mr-2">✏️</button>
                <button className="bg-red-200 p-2 rounded-md">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span>Showing 1 of 3 Entries</span>
        <div className="flex items-center space-x-3">
          <button className="px-3 py-1 border rounded-md">Previous</button>
          <span className="px-3 py-1">1</span>
          <button className="px-3 py-1 border rounded-md">Next</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
