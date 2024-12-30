"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [sort, setSort] = useState("all");
  const [originalReviews, setOriginalReviews] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const getReviews = async () => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://maia.projectx38.cloud/dashboard-apis/maia-dashboard/reviews/list",
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
      const reviewsData = response.data.data;

      // Fetch doctor details for each review
      const doctorDetailsPromises = reviewsData.map((review) =>
        axios.post(
          "https://maia.projectx38.cloud/dashboard-apis/maia-dashboard/doctors/details",
          { doctorId: review.reviewedForResourceId },
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

      const doctorDetailsResponses = await Promise.all(doctorDetailsPromises);
      const doctorDetails = doctorDetailsResponses.map((res) => res.data.data);

      // Combine reviews with doctor details
      const reviewsWithDoctorDetails = reviewsData.map((review, index) => ({
        ...review,
        doctorDetails: doctorDetails[index],
      }));

      setReviews(reviewsWithDoctorDetails);
      setOriginalReviews(reviewsWithDoctorDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(reviews.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reviews.slice(indexOfFirstItem, indexOfLastItem);

  console.log(reviews);
  const toggleStatus = (reviewId, status) => {
    let data = JSON.stringify({
      reviewId: reviewId,
      newStatus: status === "ACTIVE" ? "INACTIVE" : "ACTIVE",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://maia.projectx38.cloud/dashboard-apis/maia-dashboard/reviews/updateStatus",
      headers: {
        "login-token":
          "f48668d4ea1989d14a5692c5c4b7b296a2d651c4947526876dee65a7e191bacecdaff5bb1b21293df00fef97b96f1beb97ce695eb8ddb062ee48e912e5fddf83e7dc7008fcef956f29c78dae1f6486b433304398b040aa7f3312867c6d090ecbc5c5df4eaf8e21c8a0ecd3ac73b4469b59c892d51bf61fa9713f0cded76ded8a",
        "Content-Type": "application/json",
        Cookie:
          "x38_gadighoda_admin_login_unique=f48668d4ea1989d14a5692c5c4b7b29629e8b2f6a9e870fbf0451038467110d0967eb7e0d9aec0714d2890d5e279f980412b02e37441a232867cbbed5478a25b6db22230c03d7b1d567a32edcd6355d48fe270e204b3aaa0113f3c6c3284696b649fd126ad6ce51dff09a20a2280ef49eaf875c81c8ebcc77337259757f19cc9; x38_gadighoda_admin_user_details=j%3A%7B%22_id%22%3A%226698d1db58e489d6943d9e30%22%2C%22userId%22%3A%22df2af83e-b7ff-4d70-b417-29f14701f3c9%22%2C%22userName%22%3A%22anikethandore12%40gmail.com%22%2C%22password%22%3A%22test1234%22%2C%22status%22%3A%22ACTIVE%22%2C%22name%22%3A%22Aniket%20Handore%22%7D",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.reviewId === reviewId
          ? {
              ...review,
              status: review.status === "ACTIVE" ? "INACTIVE" : "ACTIVE",
            }
          : review
      )
    );
  };

  useEffect(() => {
    if (sort === "all") {
      setReviews(originalReviews);
    } else {
      const sortedReviews = [...reviews].sort((a, b) => {
        if (sort === "recent") {
          return (
            new Date(b.createdAt.timestamp) - new Date(a.createdAt.timestamp)
          );
        }
        return 0;
      });
      setReviews(sortedReviews);
    }
  }, [sort, originalReviews]);

  useEffect(() => {
    if (search === "") {
      setReviews(originalReviews);
    } else {
      const filteredReviews = reviews.filter((review) =>
        review?.reviewedBy?.name
          ?.toLowerCase()
          .includes(search?.toLowerCase() || "")
      );
      setReviews(filteredReviews);
    }
  }, [search]);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Reviews</h1>
          <span className="text-gray-500">Reviews</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex justify-between items-center mt-6 mb-4">
        <div className="flex items-center space-x-3">
          <input
            type="text"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search Reviews"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex space-x-3 items-center">
          <div className="flex items-center space-x-1">
            <label className="text-gray-500">Sort by:</label>
            <select
              className="border px-2 py-1 rounded-md"
              value={sort}
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
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="py-2 px-4 text-start border-b">#</th>
            <th className="py-2 px-4 text-start border-b">Review By</th>
            <th className="py-2 px-4 text-start border-b">Reviewed</th>
            <th className="py-2 px-4 text-start border-b">Rating</th>
            <th className="py-2 px-4 text-start border-b">Date</th>
            <th className="py-2 px-4 text-start border-b">Comment</th>
            <th className="py-2 px-4 text-start border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((review, index) => (
            <tr key={review?.reviewId} className="text-start">
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">
                <div className="flex items-start justify-start gap-2">
                  {review?.reviewedBy?.name}
                </div>
              </td>
              <td className="py-2 px-4 border-b">
                {review?.doctorDetails?.doctorDetails?.doctorName}
              </td>
              <td className="py-2 flex justify-start items-center gap-2 px-4 border-b">
                <AiFillStar className="text-xl text-yellow-500" />{" "}
                {review?.reviewRating}
              </td>
              <td className="py-2 px-4 border-b">
                {new Date(review?.createdAt?.ISODate).toLocaleDateString(
                  "en-US",
                  {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }
                )}
              </td>
              <td className="py-2 px-4 border-b truncate w-28">
                <div className="truncate overflow-hidden whitespace-nowrap max-w-xs">
                  {review?.reviewText}
                </div>
              </td>
              <td className="py-2 px-4 border-b">
                <div className="flex items-center justify-start gap-2">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={review?.status === "ACTIVE"}
                      onChange={() =>
                        toggleStatus(review.reviewId, review.status)
                      }
                    />
                    <div className="w-11 h-6 bg-[#F1F5F9] rounded-full peer   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#70AAA4]">
                      {/* <div className="absolute inset-0 flex items-center justify-center text-xs">
                        {appointment?.status === "ACTIVE" ? "👁️" : "🔒"}
                      </div> */}
                    </div>
                  </label>
                  <span className="text-sm w-16 text-center">
                    {review?.status === "ACTIVE" ? "Visible" : "Hidden"}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-700">
          Showing {currentPage} of {Math.ceil(reviews.length / itemsPerPage)}{" "}
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
            disabled={currentPage === Math.ceil(reviews.length / itemsPerPage)}
          >
            Next
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
