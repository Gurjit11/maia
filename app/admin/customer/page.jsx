"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const CustomersList = () => {
  const [customers, setCustomers] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const [sort, setSort] = useState("all")
  const [ originalCustomers,setoriginalCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const getCustomers = async () => {
    let data = JSON.stringify({
      filters: {},
      pageNo: 0,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://maia.projectx38.cloud/dashboard-apis/maia-dashboard/customers/list",
      headers: {
        "Content-Type": "application/json",
        "login-token":
          "f48668d4ea1989d14a5692c5c4b7b296a2d651c4947526876dee65a7e191bacecdaff5bb1b21293df00fef97b96f1beb97ce695eb8ddb062ee48e912e5fddf83e7dc7008fcef956f29c78dae1f6486b433304398b040aa7f3312867c6d090ecbc5c5df4eaf8e21c8a0ecd3ac73b4469b59c892d51bf61fa9713f0cded76ded8a",
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      const customersData = response.data.data;
      console.log(customersData);
      setCustomers(customersData);
      setoriginalCustomers(customersData);
      // Fetch details for each customer
      // const detailsPromises = customersData.map((customer) =>
      //   // axios.post(
      //   //   "https://maia.projectx38.cloud/dashboard-apis/maia-dashboard/customers/details",
      //   //   { customerId: customer._id },
      //   //   {
      //   //     headers: {
      //   //       "Content-Type": "application/json",
      //   //       "login-token":
      //   //         "f48668d4ea1989d14a5692c5c4b7b296a2d651c4947526876dee65a7e191bacecdaff5bb1b21293df00fef97b96f1beb97ce695eb8ddb062ee48e912e5fddf83e7dc7008fcef956f29c78dae1f6486b433304398b040aa7f3312867c6d090ecbc5c5df4eaf8e21c8a0ecd3ac73b4469b59c892d51bf61fa9713f0cded76ded8a",
      //   //     },
      //   //   }
      //   // )
      //   console.log(customer._id)
      // );

      // const detailsResponses = await Promise.all(detailsPromises);
      // const detailedCustomers = detailsResponses.map((res) => res.data.data);

      // // Update customers with detailed information
      // console.log(detailedCustomers);
      // setCustomers(detailedCustomers);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (sort === "all") {
      setCustomers(originalCustomers);
    } else {
      const sortedCustomers = [...customers].sort((a, b) => {
        if (sort === "recent") {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
        return 0;
      });
      setCustomers(sortedCustomers);
    }
  }, [sort, originalCustomers]);



  useEffect(() => { 
    if (search === "") {
      setCustomers(originalCustomers);
    } else {
      const filteredCustomers = customers.filter((customer) =>
        customer?.name?.toLowerCase().includes(search?.toLowerCase() || "")
      );
      setCustomers(filteredCustomers);  
    }
  }, [search]);
  const handleEditClick = (customer) => {
    setSelectedCustomer(customer);
    setNewStatus(customer.status); // Pre-fill with current status
    setIsEditModalOpen(true);
  };

  const handleUpdateStatus = async () => {
    try {
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://maia.projectx38.cloud/dashboard-apis/maia-dashboard/customers/updateStatus",
        headers: {
          "Content-Type": "application/json",
          "login-token":
            "f48668d4ea1989d14a5692c5c4b7b296a2d651c4947526876dee65a7e191bacecdaff5bb1b21293df00fef97b96f1beb97ce695eb8ddb062ee48e912e5fddf83e7dc7008fcef956f29c78dae1f6486b433304398b040aa7f3312867c6d090ecbc5c5df4eaf8e21c8a0ecd3ac73b4469b59c892d51bf61fa9713f0cded76ded8a",
        },
        data: JSON.stringify({
          customerId: selectedCustomer._id,
          newStatus: newStatus,
        }),
      };

      await axios.request(config);
      console.log("Status updated successfully");
      setIsEditModalOpen(false);
      getCustomers(); // Refresh the customer list
    } catch (error) {
      console.error("Error updating customer status:", error);
    }
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div className="p-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Customers</h1>
          <span className="text-gray-500">Users &gt; Customers</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex justify-between items-center mt-6 mb-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
            <span className="mr-2">{customers.length} Customers</span>
          </div>
          <input
            type="text"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search Customers"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex space-x-3 items-center">
          <div className="flex items-center space-x-1">
            <label className="text-gray-500">Sort by:</label>
            <select className="border px-2 py-1 rounded-md" value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="all">All Time</option>
              <option value="recent">Recently Added</option>
            </select>
          </div>
          <button className="bg-gray-200 p-2 rounded-md">⚙️</button>
        </div>
      </div>

      {/* Table */}
      <table className="min-w-full bg-white border border-gray-200 mt-6">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="py-2 px-4 border-b">#</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Mobile No</th>
            <th className="py-2 px-4 border-b">Gender</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer._id} className="text-center">
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{customer.name}</td>
              <td className="py-2 px-4 border-b">{customer.email}</td>
              <td className="py-2 px-4 border-b">{customer.mobileNo}</td>
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
                  className="bg-gray-200 p-2 rounded-md mr-2"
                  onClick={() => handleEditClick(customer)}
                >
                  ✏️
                </button>
                <button className="bg-red-200 p-2 rounded-md">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {isEditModalOpen && selectedCustomer && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-1/3">
            <h2 className="text-lg font-bold mb-4">Update Customer Status</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Current Status: <strong>{selectedCustomer.status}</strong>
              </label>
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="w-full border px-3 py-2 rounded-md"
              >
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateStatus}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
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

export default CustomersList;
