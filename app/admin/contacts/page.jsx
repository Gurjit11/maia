"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineClose,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

const ContactConnectUs = () => {
  const [activeTab, setActiveTab] = useState("contact"); // Tracks the active tab
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedQuery, setSelectedQuery] = useState(null); // Tracks the selected query for the modal
  const [modalOpen, setModalOpen] = useState(false); // Tracks the modal visibility
  const itemsPerPage = 10;

  // Fetch data based on the active tab
  const fetchData = async () => {
    const url =
      activeTab === "contact"
        ? "https://maia.projectx38.cloud/dashboard-apis/maia-dashboard/contactUs/list"
        : "https://maia.projectx38.cloud/dashboard-apis/maia-dashboard/connectWithUs/list";

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: url,
      headers: {
        "login-token":
          "f48668d4ea1989d14a5692c5c4b7b296a2d651c4947526876dee65a7e191bacecdaff5bb1b21293df00fef97b96f1beb97ce695eb8ddb062ee48e912e5fddf83e7dc7008fcef956f29c78dae1f6486b433304398b040aa7f3312867c6d090ecbc5c5df4eaf8e21c8a0ecd3ac73b4469b59c892d51bf61fa9713f0cded76ded8a",
        "Content-Type": "application/json",
      },
      data: JSON.stringify({}),
    };

    try {
      const response = await axios.request(config);
      setData(response.data.data); // Update the data based on API response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    setCurrentPage(1); // Reset to first page when tab changes
  }, [activeTab]);

  // Update Status Function
  const updateStatus = async (queryId, newStatus) => {
    const url =
      activeTab === "contact"
        ? "https://maia.projectx38.cloud/dashboard-apis/maia-dashboard/contactUs/updateStatus"
        : "https://maia.projectx38.cloud/dashboard-apis/maia-dashboard/connectWithUs/updateStatus";

    const payload = {
      queryId: queryId,
      newStatus: newStatus,
      extra: "CLOSED/OPEN/PENDING for update status",
    };

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: url,
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
      fetchData(); // Refresh data after status update
      setModalOpen(false); // Close modal after success
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
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
      fetchData(); // Reset to original data
    } else {
      const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setData(filteredData);
    }
  }, [search]);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {activeTab === "contact" ? "Contact Us" : "Connect With Us"}
          </h1>
          <span className="text-gray-500">
            Dashboard &gt;{" "}
            {activeTab === "contact" ? "Contact Us" : "Connect With Us"}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border border-gray-300 w-fit rounded-md mt-6 mb-4">
        <button
          className={`px-4 py-2 rounded-md transition-colors duration-300 ${
            activeTab === "contact" ? "bg-black text-white" : ""
          }`}
          onClick={() => setActiveTab("contact")}
        >
          Contact Us
        </button>
        <button
          className={`px-4 py-2 rounded-md transition-colors duration-300 ${
            activeTab === "connect" ? "bg-black text-white" : ""
          }`}
          onClick={() => setActiveTab("connect")}
        >
          Connect With Us
        </button>
      </div>

      {/* Search */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search by Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="py-2 text-start px-4 border-b">#</th>
            <th className="py-2 text-start px-4 border-b">Name</th>
            <th className="py-2 text-start px-4 border-b">Contact No</th>
            {activeTab === "contact" && (
              <th className="py-2 text-start px-4 border-b">Email</th>
            )}
            {activeTab === "contact" && (
              <th className="py-2 text-start px-4 border-b">Message</th>
            )}
            <th className="py-2 text-start px-4 border-b">Status</th>
            <th className="py-2 text-start px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={item.queryId} className="text-start">
              <td className="py-2 px-4 border-b">
                {indexOfFirstItem + index + 1}
              </td>
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.contactNo}</td>
              {activeTab === "contact" && (
                <td className="py-2 px-4 border-b">{item.email}</td>
              )}
              {activeTab === "contact" && (
                <td className="py-2 px-4 border-b">{item.message}</td>
              )}
              <td className="py-2 px-4 border-b">
                <span
                  className={`py-1 px-3 rounded-full text-xs ${
                    item.status === "OPEN"
                      ? "bg-blue-200 text-blue-800"
                      : item.status === "CLOSED"
                      ? "bg-red-200 text-red-800"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-blue-200 px-2 py-1 rounded-md"
                  onClick={() => {
                    setSelectedQuery(item);
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
          Showing {currentPage} of {Math.ceil(data.length / itemsPerPage)}{" "}
          Entries
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
            disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
          >
            Next
            <AiOutlineRight />
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedQuery && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96 shadow-xl transform transition-transform duration-300">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-4 mb-6">
              <h2 className="text-2xl font-semibold text-gray-700">
                Update Status
              </h2>
              <button
                className="text-gray-500 text-2xl hover:text-gray-700 focus:outline-none"
                onClick={() => setModalOpen(false)}
              >
                <AiOutlineClose />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-4">
              <div>
                <p className="text-gray-900">
                  <strong className="text-gray-800">Name:</strong>{" "}
                  {selectedQuery.name}
                </p>
                <p className="text-gray-900">
                  <strong className="text-gray-800">Contact No:</strong>{" "}
                  {selectedQuery.contactNo}
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
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none"
                  value={selectedQuery.status}
                  onChange={(e) =>
                    setSelectedQuery({
                      ...selectedQuery,
                      status: e.target.value,
                    })
                  }
                >
                  <option value="OPEN">OPEN</option>
                  <option value="CLOSED">CLOSED</option>
                  <option value="PENDING">PENDING</option>
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

export default ContactConnectUs;
