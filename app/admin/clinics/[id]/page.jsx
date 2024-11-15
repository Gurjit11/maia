"use client";
import axios from "axios";
import { Cake, Check, DotSquareIcon, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMale } from "react-icons/io5";
import { FaDirections } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const ClinicProfile = ({ params }) => {
  const [doctor, setDoctor] = useState();
  const { id } = params;
  const getDoctor = () => {
    let data = JSON.stringify({
      clinicId: "4d85ffd2-ff50-4982-a16f-682f43bfceff",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://maia.projectx38.cloud/web-apis/maia/web/clinics/details",
      headers: {
        "Content-Type": "application/json",
        "device-id": "97c2fe5e-0f68-4d72-b277-d5d2d4e628a8",
        "login-token":
          "f48668d4ea1989d14a5692c5c4b7b2964c1cd4333f27869b149f8f5b7db9c37a0731331d8bfdddaee2b39aa2da420282524c49da2bffa8bf95d5b6d4c956d1aea10ebcc18bb59d9fb0b68e8a0701262037f59784c56f5141e9446618ce41e97864da9a3c4729b6469712045d9d379f7e8996734fcfe58bf4029f8bb2c34d3b8831f3f79b575a4fe0b810e569ba76099e6b6e80a08bc2488350d7dc632a9d0feca6588711354f54e52adfebd6828012b69aaa1e903bfa9ac57a8c676e89d2853f30297fbab03b8b45c49af79cd819bd289ba7b7d3e50d799c01e27dcc02b1580a5ac3b6a6cc94dff860916be3340c958c75952faafd90bff74c677b74767d4d5dba21cd8ab57d8c0991e537ddaffb5f3cefea2c7f31e4d2dad2e1af34c8525d6295c8af0a9aefe466e3c4218ecac52d4265860495f0ece6361f315af2c82c97af5bc9e6aa356f19fcab74af5ecd4ba4c55fedeab1876372e9ff6cc8b1ebc0799988be785907c04772a8b96b2706b95151bdcb63ed2752734a64c6ea9691e0c335",
        "city-id": "NA",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        setDoctor(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(doctor);

  useEffect(() => {
    getDoctor();
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="p-6 bg-white">
        <h1 className="text-[#1E293B] text-2xl font-bold">
          {doctor?.clinicDetails?.clinicName}
        </h1>
        <span className="text-black">
          Users &gt; Doctors &gt;{" "}
          <span className="text-muted-foreground">
            {doctor?.clinicDetails?.clinicName}
          </span>
        </span>
      </div>

      <div className="p-6">
        <div className="flex gap-6 w-full">
          <div className="bg-white p-4 w-full rounded-lg">
            <div className="flex justify-between">
              <div className="flex gap-6">
                <div className="w-24 h-24 relative">
                  <img
                    className="rounded-full"
                    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/salman-khan-1991-12-09-2017-01-53-43.jpg"
                    alt=""
                  />
                  <div className="absolute right-0 bottom-0 bg-green-500 rounded-full p-1">
                    <Check className="text-white w-4 h-4" />
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#131D2A]">
                    {doctor?.clinicDetails?.clinicName}
                  </p>
                  <Badge
                    variant="outline"
                    className="bg-gray-50 text-green-600 rouded-full font-semibold mt-2"
                  >
                    Active
                  </Badge>
                  <div className="mt-2 flex items-center gap-3">
                    <StarFilledIcon className="text-yellow-300 w-5 h-5" />
                    {doctor?.reviewsStat?.avgRating}
                  </div>
                </div>
              </div>

              <div className="p-2 rounded-lg border border-gray-200 h-min cursor-pointer">
                <BsThreeDotsVertical />
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-2">
                  <Cake className="w-5 h-5" /> 24 June 1985 (23 Yrs)
                </div>
              </div>

              <div className="flex items-center gap-16">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />{" "}
                  {doctor?.clinicDetails?.contactNumber}
                </div>

                <div className="flex items-center gap-2">
                  <Mail /> {doctor?.clinicDetails?.contactEmail}
                </div>
              </div>

              <div className="flex">
                <MapPin className="w-5 h-5 items-start mr-2" />
                <div>
                  <p>
                    {doctor?.address?.address}, {doctor?.address?.area},{" "}
                    {doctor?.address?.landmark}
                  </p>

                  <p>
                    {doctor?.address?.addressName}, {doctor?.address?.state}
                  </p>
                  <p>{doctor?.address?.pincode}</p>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <FaDirections />

                <p className="text-[#2B4360] underline cursor-pointer">
                  Locate on Map
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 bg-white rounded-lg shadow-sm">
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-base font-medium text-gray-600">
                  Beds:
                </span>
                <span className="text-sm text-gray-800">
                  {doctor?.clinitStats?.totalBeds}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-base font-medium text-gray-600">
                  Doctors:
                </span>
                <span className="text-sm text-gray-800">
                  {doctor?.clinitStats?.totalDoctors}
                </span>
              </div>
              <div>
                <span className="text-base font-medium text-gray-600 mb-2 block">
                  Services:
                </span>
                <div className="flex flex-wrap gap-2">
                  {doctor?.services?.map((service) => (
                    <span
                      key={service.serviceId}
                      className="px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded-full"
                    >
                      {service.serviceName}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-base font-medium text-gray-600">
                  Timings:
                </span>
                <div className="flex flex-col items-end gap-1">
                  {doctor?.workingHours?.map((time, index) => (
                    <span key={index} className="text-sm text-gray-800">
                      {time.dayOfWeek} {time.startTime} - {time.endTime}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="font-bold my-6 text-xl">Photos</p>
          <div className="grid grid-cols-9 gap-2">
            {[
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150",
            ].map((src, index) => (
              <div key={index} className="relative w-32 h-32">
                <img
                  src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/salman-khan-1991-12-09-2017-01-53-43.jpg"
                  alt={`Photo ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                {index === 7 && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                    <span className="text-white text-2xl font-bold">+7</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="font-bold my-6 text-xl">Consult At</p>

          <div className="grid grid-cols-4 gap-10">
            <div className="flex bg-white p-3 rounded-lg">
              <div className="w-28 h-28 rounded-full">
                <img
                  src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/salman-khan-1991-12-09-2017-01-53-43.jpg"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="ml-3">
                <p className="text-lg font-semibold text-[#2B4360]">
                  Dr. Jake Wilson
                </p>
                <p className="inline-flex items-center text-sm mt-2 text-[#2B4360]">
                  Gynecologist/Obstetrician
                </p>

                <Button className="mt-4 bg-white text-[#2B4360] border border-[#2B4360]">
                  View Profile
                </Button>
              </div>
            </div>
            <div className="flex bg-white p-3 rounded-lg">
              <div className="w-28 h-28 rounded-full">
                <img
                  src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/salman-khan-1991-12-09-2017-01-53-43.jpg"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="ml-3">
                <p className="text-lg font-semibold text-[#2B4360]">
                  Dr. Jake Wilson
                </p>
                <p className="inline-flex items-center text-sm mt-2 text-[#2B4360]">
                  Gynecologist/Obstetrician
                </p>

                <Button className="mt-4 bg-white text-[#2B4360] border border-[#2B4360]">
                  View Profile
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="font-bold my-6 text-xl">Reviews ({doctor?.reviewsStat.totalReviews})</p>
          <div className="flex flex-col divide-y bg-white rounded-lg divide-[#2B4360]">
            <div className="p-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full">
                    <img
                      src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/salman-khan-1991-12-09-2017-01-53-43.jpg"
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-2xl font-semibold text-[#2B4360]">
                    Samriddhi Singh
                  </p>
                </div>
                <p className="text-[#2B4360] font-light">9 months ago</p>
              </div>
              <p className="text-sm mt-5">
                Dr. Kort practices the exact opposite of a "one size fits all"
                approach to medicine. He took my fears seriously - primarily
                about the hormone injections - and worked with me to create a
                schedule that I was comfortable with, but that also got great
                results. He's one of the kindest and most knowledgeable doctors
                I've ever had.
              </p>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full">
                    <img
                      src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/salman-khan-1991-12-09-2017-01-53-43.jpg"
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-2xl font-semibold text-[#2B4360]">
                    Samriddhi Singh
                  </p>
                </div>
                <p className="text-[#2B4360] font-light">9 months ago</p>
              </div>
              <p className="text-sm mt-5">
                Dr. Kort practices the exact opposite of a "one size fits all"
                approach to medicine. He took my fears seriously - primarily
                about the hormone injections - and worked with me to create a
                schedule that I was comfortable with, but that also got great
                results. He's one of the kindest and most knowledgeable doctors
                I've ever had.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicProfile;
