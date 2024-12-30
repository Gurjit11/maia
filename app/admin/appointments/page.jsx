"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAppointment, setSelectedAppointment] = useState(null); // Tracks the selected appointment for the modal
  const [modalOpen, setModalOpen] = useState(false); // Tracks the modal visibility
  const itemsPerPage = 10;

  // Fetch appointments from the API
  const fetchAppointments = async () => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://maia.projectx38.cloud/dashboard-apis/maia-dashboard/appointments/list",
      headers: {
        "login-token":
          "f48668d4ea1989d14a5692c5c4b7b296a2d651c4947526876dee65a7e191bacecdaff5bb1b21293df00fef97b96f1beb97ce695eb8ddb062ee48e912e5fddf83e7dc7008fcef956f29c78dae1f6486b433304398b040aa7f3312867c6d090ecbc5c5df4eaf8e21c8a0ecd3ac73b4469b59c892d51bf61fa9713f0cded76ded8a",
        "Content-Type": "application/json",
      },
      data: JSON.stringify({}),
    };

    try {
      const response = await axios.request(config);
      setAppointments(response.data.data); // Update the appointments list
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // Update Status Function
  const updateStatus = async (appointmentId, newStatus) => {
    const payload = {
      appointmentId: appointmentId,
      newStatus: newStatus,
    };

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://maia.projectx38.cloud/dashboard-apis/maia-dashboard/appointments/updateStatus",
      headers: {
        "login-token":
          "f48668d4ea1989d14a5692c5c4b7b296a2d651c4947526876dee65a7e191bacecdaff5bb1b21293df00fef97b96f1beb97ce695eb8ddb062ee48e912e5fddf83e7dc7008fcef956f29c78dae1f6486b433304398b040aa7f3312867c6d090ecbc5c5df4eaf8e21c8a0ecd3ac73b4469b59c892d51bf61fa9713f0cded76ded8a",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(payload),
    };

    try {
      const response = await axios.request(config);
      console.log("Status updated successfully:", response.data);
      fetchAppointments(); // Refresh appointments after status update
      setModalOpen(false); // Close modal after success
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = appointments.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(appointments.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Search Filter
  useEffect(() => {
    if (search === "") {
      fetchAppointments(); // Reset to original data
    } else {
      const filteredAppointments = appointments.filter((appointment) =>
        appointment.patientName.toLowerCase().includes(search.toLowerCase())
      );
      setAppointments(filteredAppointments);
    }
  }, [search]);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Appointments</h1>
          <span className="text-gray-500">Dashboard &gt; Appointments</span>
        </div>
      </div>

      {/* Search */}
      <div className="flex justify-between items-center mb-4 mt-6">
        <input
          type="text"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search by Patient Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((appointment, index) => (
            <tr key={appointment.appointmentId} className="text-center">
              <td className="py-2 px-4 border-b">
                {indexOfFirstItem + index + 1}
              </td>
              <td className="py-2 px-4 border-b">{appointment.patientName}</td>
              <td className="py-2 px-4 border-b">{appointment.gender}</td>
              <td className="py-2 px-4 border-b">{appointment.mobileNo}</td>
              <td className="py-2 px-4 border-b">{appointment.email}</td>
              <td className="py-2 px-4 border-b">
                {appointment.appointmentDate}
              </td>
              <td className="py-2 px-4 border-b">
                {appointment.appointmentTime}
              </td>
              <td className="py-2 px-4 border-b">
                <span
                  className={`py-1 px-3 rounded-full text-xs ${
                    appointment.status === "PENDING"
                      ? "bg-yellow-100 text-yellow-600"
                      : appointment.status === "COMPLETED"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {appointment.status}
                </span>
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-blue-200 px-2 py-1 rounded-md"
                  onClick={() => {
                    setSelectedAppointment(appointment);
                    setModalOpen(true);
                  }}
                >
                  ✏️ Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-700">
          Showing {currentPage} of{" "}
          {Math.ceil(appointments.length / itemsPerPage)} Entries
        </span>
        <div className="flex items-center space-x-1">
          <button
            className="px-3 py-2 border border-slate-400 flex text-base justify-center text-slate-800 items-center gap-2 rounded-md"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <AiOutlineLeft />
            Previous
          </button>
          <div className="px-3 py-2 border bg-slate-700 text-white rounded-md">
            {currentPage}
          </div>
          <button
            className="px-3 py-2 border border-slate-400 flex text-base justify-center text-slate-800 items-center gap-2 rounded-md"
            onClick={handleNextPage}
            disabled={
              currentPage === Math.ceil(appointments.length / itemsPerPage)
            }
          >
            Next
            <AiOutlineRight />
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96 shadow-xl transform transition-transform duration-300">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-4 mb-6">
              <h2 className="text-2xl font-semibold text-gray-700">
                Update Status
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setModalOpen(false)}
              >
                <AiOutlineClose className="text-2xl" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">
                  <strong className="text-gray-800">Patient Name:</strong>{" "}
                  {selectedAppointment.patientName}
                </p>
                <p className="text-gray-600">
                  <strong className="text-gray-800">Appointment Date:</strong>{" "}
                  {selectedAppointment.appointmentDate}
                </p>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Select New Status
                </label>
                <select
                  id="status"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  value={selectedAppointment.status}
                  onChange={(e) =>
                    setSelectedAppointment({
                      ...selectedAppointment,
                      status: e.target.value,
                    })
                  }
                >
                  <option value="PENDING">PENDING</option>
                  <option value="COMPLETED">COMPLETED</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end mt-6 gap-3">
              <button
                className="bg-red-200 text-red-700 px-4 py-2 rounded-md hover:bg-red-300 transition"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition"
                onClick={() =>
                  updateStatus(selectedQuery.queryId, selectedQuery.status)
                }
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentsPage;
