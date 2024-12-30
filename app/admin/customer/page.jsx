"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCustomer, setSelectedCustomer] = useState(null); // Tracks the selected customer for the modal
  const [modalOpen, setModalOpen] = useState(false); // Tracks the modal visibility
  const itemsPerPage = 10;

  // Fetch customers from the API
  const fetchCustomers = async () => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://maia.projectx38.cloud/dashboard-apis/maia-dashboard/users/list",
      headers: {
        "login-token":
          "f48668d4ea1989d14a5692c5c4b7b296a2d651c4947526876dee65a7e191bacecdaff5bb1b21293df00fef97b96f1beb97ce695eb8ddb062ee48e912e5fddf83e7dc7008fcef956f29c78dae1f6486b433304398b040aa7f3312867c6d090ecbc5c5df4eaf8e21c8a0ecd3ac73b4469b59c892d51bf61fa9713f0cded76ded8a",
        "Content-Type": "application/json",
      },
      data: JSON.stringify({}),
    };

    try {
      const response = await axios.request(config);
      setCustomers(response.data.data); // Update the customers list
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Update Status Function
  const updateStatus = async (userId, newStatus) => {
    const payload = {
      userId: userId,
      newStatus: newStatus,
    };

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://maia.projectx38.cloud/dashboard-apis/maia-dashboard/users/updateStatus",
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
      fetchCustomers(); // Refresh customers after status update
      setModalOpen(false); // Close modal after success
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = customers.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(customers.length / itemsPerPage)) {
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
      fetchCustomers(); // Reset to original data
    } else {
      const filteredCustomers = customers.filter((customer) =>
        customer?.name?.toLowerCase().includes(search.toLowerCase())
      );
      setCustomers(filteredCustomers);
    }
  }, [search]);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Customers</h1>
          <span className="text-gray-500">Dashboard &gt; Customers</span>
        </div>
      </div>

      {/* Search */}
      <div className="flex justify-between items-center mb-4 mt-6">
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
            <th className="py-2 px-4 text-start border-b">#</th>
            <th className="py-2 px-4 text-start border-b">Name</th>
            <th className="py-2 px-4 text-start border-b">Mobile No</th>
            <th className="py-2 px-4 text-start border-b">Email</th>
            <th className="py-2 px-4 text-start border-b">Gender</th>
            <th className="py-2 px-4 text-start border-b">Status</th>
            <th className="py-2 px-4 text-start border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((customer, index) => (
            <tr key={customer.userId} className="text-start ">
              <td className="py-2 px-4 border-b">
                {indexOfFirstItem + index + 1}
              </td>
              <td className="py-2 px-4 border-b">{customer.name}</td>
              <td className="py-2 px-4 border-b">{customer.mobileNo}</td>
              <td className="py-2 px-4 border-b">{customer.email}</td>
              <td className="py-2 px-4 border-b">{customer.gender}</td>
              <td className="py-2 px-4 border-b">
                <span
                  className={`py-1 px-3 rounded-full text-xs ${
                    customer.status === "ACTIVE"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {customer.status}
                </span>
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-blue-200 px-2 py-1 rounded-md"
                  onClick={() => {
                    setSelectedCustomer(customer);
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
          Showing {currentPage} of {Math.ceil(customers.length / itemsPerPage)}{" "}
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
            disabled={
              currentPage === Math.ceil(customers.length / itemsPerPage)
            }
          >
            Next
            <AiOutlineRight />
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedCustomer && (
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
                  <strong className="text-gray-800">Name:</strong>{" "}
                  {selectedCustomer.name}
                </p>
                <p className="text-gray-600">
                  <strong className="text-gray-800">Mobile No:</strong>{" "}
                  {selectedCustomer.mobileNo}
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
                  value={selectedCustomer.status}
                  onChange={(e) =>
                    setSelectedCustomer({
                      ...selectedCustomer,
                      status: e.target.value,
                    })
                  }
                >
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="INACTIVE">INACTIVE</option>
                </select>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end mt-6 gap-3">
              <button
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                onClick={() =>
                  updateStatus(selectedCustomer.userId, selectedCustomer.status)
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

export default CustomersPage;
