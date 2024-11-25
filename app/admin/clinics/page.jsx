"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const ClinicsList = () => {
  const [clinics, setClinics] = useState([]);
  const getClinics = async () => {
    let data = JSON.stringify({
      filters: {},
      pageNo: 0,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://maia.projectx38.cloud/web-apis/maia/web/clinics/get",
      headers: {
        "Content-Type": "application/json",
        "device-id": "97c2fe5e-0f68-4d72-b277-d5d2d4e628a8",
        "login-token":
          "f48668d4ea1989d14a5692c5c4b7b2964c1cd4333f27869b149f8f5b7db9c37a0731331d8bfdddaee2b39aa2da420282524c49da2bffa8bf95d5b6d4c956d1aea10ebcc18bb59d9fb0b68e8a0701262037f59784c56f5141e9446618ce41e97864da9a3c4729b6469712045d9d379f7e8996734fcfe58bf4029f8bb2c34d3b8831f3f79b575a4fe0b810e569ba76099e6b6e80a08bc2488350d7dc632a9d0feca6588711354f54e52adfebd6828012b69aaa1e903bfa9ac57a8c676e89d2853f30297fbab03b8b45c49af79cd819bd289ba7b7d3e50d799c01e27dcc02b1580a5ac3b6a6cc94dff860916be3340c958c75952faafd90bff74c677b74767d4d5dba21cd8ab57d8c0991e537ddaffb5f3cefea2c7f31e4d2dad2e1af34c8525d6295c8af0a9aefe466e3c4218ecac52d4265860495f0ece6361f315af2c82c97af5bc9e6aa356f19fcab74af5ecd4ba4c55fedeab1876372e9ff6cc8b1ebc0799988be785907c04772a8b96b2706b95151bdcb63ed2752734a64c6ea9691e0c335",
        "city-id": "NA",
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      const clinicsData = response.data.data;
      setClinics(clinicsData);

      // Fetch details for each doctor
      const detailsPromises = clinicsData.map((clinic) =>
        axios.post(
          "https://maia.projectx38.cloud/web-apis/maia/web/clinics/details",
          { clinicId: clinic.clinicId },
          {
            headers: {
              "Content-Type": "application/json",
              "device-id": "97c2fe5e-0f68-4d72-b277-d5d2d4e628a8",
              "login-token":
                "f48668d4ea1989d14a5692c5c4b7b2964c1cd4333f27869b149f8f5b7db9c37a0731331d8bfdddaee2b39aa2da420282524c49da2bffa8bf95d5b6d4c956d1aea10ebcc18bb59d9fb0b68e8a0701262037f59784c56f5141e9446618ce41e97864da9a3c4729b6469712045d9d379f7e8996734fcfe58bf4029f8bb2c34d3b8831f3f79b575a4fe0b810e569ba76099e6b6e80a08bc2488350d7dc632a9d0feca6588711354f54e52adfebd6828012b69aaa1e903bfa9ac57a8c676e89d2853f30297fbab03b8b45c49af79cd819bd289ba7b7d3e50d799c01e27dcc02b1580a5ac3b6a6cc94dff860916be3340c958c75952faafd90bff74c677b74767d4d5dba21cd8ab57d8c0991e537ddaffb5f3cefea2c7f31e4d2dad2e1af34c8525d6295c8af0a9aefe466e3c4218ecac52d4265860495f0ece6361f315af2c82c97af5bc9e6aa356f19fcab74af5ecd4ba4c55fedeab1876372e9ff6cc8b1ebc0799988be785907c04772a8b96b2706b95151bdcb63ed2752734a64c6ea9691e0c335",
              "city-id": "NA",
            },
          }
        )
      );

      const detailsResponses = await Promise.all(detailsPromises);
      const detailedClinics = detailsResponses.map((res) => res.data.data);

      // Update doctors with detailed information
      console.log(detailedClinics);

      setClinics(detailedClinics);
    } catch (error) {
      console.log(error);
    }
  };

  const updateClinicStatus = async (clinicId, newStatus) => {
    let data = JSON.stringify({
      clinicId: clinicId,
      newStatus: newStatus,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://maia.projectx38.cloud/dashboard-apis/maia-dashboard/clinics/updateStatus",
      headers: {
        "login-token":
          "f48668d4ea1989d14a5692c5c4b7b296a2d651c4947526876dee65a7e191bacecdaff5bb1b21293df00fef97b96f1beb97ce695eb8ddb062ee48e912e5fddf83e7dc7008fcef956f29c78dae1f6486b433304398b040aa7f3312867c6d090ecbc5c5df4eaf8e21c8a0ecd3ac73b4469b59c892d51bf61fa9713f0cded76ded8a",
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      console.log("Status updated successfully:", response.data);
      // Refresh the clinics list after updating
      getClinics();
    } catch (error) {
      console.error("Error updating clinic status:", error);
    }
  };

  useEffect(() => {
    getClinics();
  }, []);
  console.log(clinics);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Clinics</h1>
          <span className="text-gray-500">Users &gt; Clinics</span>
        </div>
        <Link href="/admin/clinics/addnew">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            + Add New Clinic
          </button>
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="flex justify-between items-center mt-6 mb-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
            <span className="mr-2">{clinics.length} Clinics</span>
          </div>
          <input
            type="text"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search Clinics"
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
          {clinics?.map((clinic, index) => (
            <tr key={clinic?.clinicId} className="text-center">
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">
                <div className="flex items-center  justify-center gap-2">
                  <img
                    src={clinic?.clinicDetails?.logoImage}
                    alt={clinic?.clinicDetails?.doctorName}
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                  />
                  <Link href={`/admin/clinics/${clinic.clinicId}`}>
                    <span className="inline-block">
                      {clinic?.clinicDetails?.clinicName}
                    </span>
                  </Link>
                </div>
              </td>
              <td className="py-2 px-4 border-b">
                {new Date(clinic?.createdAt?.ISODate).toLocaleDateString()}
              </td>
              <td className="py-2 px-4 border-b">
                {clinic?.clinicDetails?.contactNumber}
              </td>
              <td className="py-2 px-4 border-b">
                {clinic?.clinicDetails?.contactEmail}
              </td>
              <td className="py-2 px-4 border-b">
                <span
                  className={`py-1 px-3 rounded-full text-xs ${
                    clinic?.status === "ACTIVE"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {clinic?.status}
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

export default ClinicsList;
