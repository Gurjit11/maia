"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const getAppointments = async () => {
    let data = JSON.stringify({
      name: "Samriddhi Singh",
      verified: true,
      profileImage: "URL_to_profile_image",
      reviewedFor: "DOCTOR",
      reviewedForResourceId: "edf64510-d59c-4a55-b61f-6bf9dabce2c1",
      visitedFor: "High-Risk Pregnancy Care",
      happyWithTags: ["IVF", "Egg Freezing"],
      reviewText:
        "Dr. Kort practices the exact opposite of a 'one size fits all' approach to medicine. He took my fears seriously - primarily about the hormone injections - and worked with me to create a schedule that I was comfortable with, but that also got great results. He's one of the kindest and most knowledgeable doctors I've ever had.",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://maia.projectx38.cloud/dashboard-apis/maia-dashboard/appointments/list",
      headers: {
        "Content-Type": "application/json",
        "device-id": "97c2fe5e-0f68-4d72-b277-d5d2d4e628a8",
        "login-token":
          "f48668d4ea1989d14a5692c5c4b7b296a2d651c4947526876dee65a7e191bacecdaff5bb1b21293df00fef97b96f1beb97ce695eb8ddb062ee48e912e5fddf83e7dc7008fcef956f29c78dae1f6486b433304398b040aa7f3312867c6d090ecbc5c5df4eaf8e21c8a0ecd3ac73b4469b59c892d51bf61fa9713f0cded76ded8a",
        "city-id": "NA",
        Cookie:
          "x38_gadighoda_admin_login_unique=f48668d4ea1989d14a5692c5c4b7b29629e8b2f6a9e870fbf0451038467110d0967eb7e0d9aec0714d2890d5e279f980412b02e37441a232867cbbed5478a25b6db22230c03d7b1d567a32edcd6355d48fe270e204b3aaa0113f3c6c3284696b649fd126ad6ce51dff09a20a2280ef49eaf875c81c8ebcc77337259757f19cc9; x38_gadighoda_admin_user_details=j%3A%7B%22_id%22%3A%226698d1db58e489d6943d9e30%22%2C%22userId%22%3A%22df2af83e-b7ff-4d70-b417-29f14701f3c9%22%2C%22userName%22%3A%22anikethandore12%40gmail.com%22%2C%22password%22%3A%22test1234%22%2C%22status%22%3A%22ACTIVE%22%2C%22name%22%3A%22Aniket%20Handore%22%7D",
      },
    };

    try {
      const response = await axios.request(config);
      const appointments = response.data.data;

      // Fetch user details for each appointment
      const userDetailsPromises = appointments.map((appointment) =>
        axios.post(
          "https://maia.projectx38.cloud/dashboard-apis/maia-dashboard/customers/details",
          { customerId: appointment.userId },
          {
            headers: {
              "Content-Type": "application/json",
              "device-id": "97c2fe5e-0f68-4d72-b277-d5d2d4e628a8",
              "login-token":
                "f48668d4ea1989d14a5692c5c4b7b296a2d651c4947526876dee65a7e191bacecdaff5bb1b21293df00fef97b96f1beb97ce695eb8ddb062ee48e912e5fddf83e7dc7008fcef956f29c78dae1f6486b433304398b040aa7f3312867c6d090ecbc5c5df4eaf8e21c8a0ecd3ac73b4469b59c892d51bf61fa9713f0cded76ded8a",
              "city-id": "NA",
            },
          }
        )
      );

      const userDetailsResponses = await Promise.all(userDetailsPromises);
      const userDetails = userDetailsResponses.map((res) => res.data.data);

      // Combine appointments with user details
      const appointmentsWithUserDetails = appointments.map(
        (appointment, index) => ({
          ...appointment,
          userDetails: userDetails[index],
        })
      );

      setAppointments(appointmentsWithUserDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);
  console.log(appointments);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Appointments</h1>
          <span className="text-gray-500">Appointments</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex justify-between items-center mt-6 mb-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
            <span className="mr-2">{appointments?.length} Appointments</span>
          </div>
          <input
            type="text"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search Appointments"
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
            <th className="py-2 px-4 border-b">Visit Number</th>
            <th className="py-2 px-4 border-b">Patient Name</th>
            <th className="py-2 px-4 border-b">Gender</th>
            <th className="py-2 px-4 border-b">Mobile No</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Date of Visit</th>
            <th className="py-2 px-4 border-b">Time of Visit</th>

            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments?.map((appointment, index) => (
            <tr key={appointment?.clinicId} className="text-center">
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">
                <div className="flex items-center  justify-center gap-2">
                  {appointment?.userDetails?.name}
                </div>
              </td>
              <td className="py-2 px-4 border-b">
                {appointment?.userDetails?.gender}
              </td>
              <td className="py-2 px-4 border-b">
                {appointment?.userDetails?.mobileNo}
              </td>
              <td className="py-2 px-4 border-b">
                {appointment?.userDetails?.email}
              </td>

              <td className="py-2 px-4 border-b">
                {new Date(appointment?.appointmentDate).toLocaleDateString(
                  "en-US",
                  {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }
                )}{" "}
              </td>
              <td className="py-2 px-4 border-b">
                {new Date(
                  `1970-01-01T${appointment?.appointmentTime}Z`
                ).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}{" "}
              </td>

              <td className="py-2 px-4 border-b">
                <span
                  className={`py-1 px-3 rounded-full text-xs ${
                    appointment?.status === "ACTIVE"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {appointment?.status}
                </span>
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

export default AppointmentList;
