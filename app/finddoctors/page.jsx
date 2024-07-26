import Image from "next/image";
import React from "react";
import {
  AiFillFilter,
  AiOutlineSearch,
  AiOutlineSortAscending,
} from "react-icons/ai";
import about from "../../public/about.png";
import review from "../../public/review.png";
import money from "../../public/money.png";
import star from "../../public/star.png";
import bag from "../../public/bag.png";
import clinic from "../../public/clinic.png";

const FindDoctors = () => {
  return (
    <div className="bg-white p-20">
      <div className="flex justify-between">
        <div className=" w-full">
          <div className="w-[70%] h-14 px-4 py-3 bg-white text-black rounded-lg border border-[#dedede] justify-start items-center inline-flex">
            <input
              type="text"
              placeholder="Search doctors, specialization , service etc"
              //   value={searchText}
              //   onChange={handleSearchChange}
              required
              className="search_input w-full peer focus:outline-none p-3"
            />
            <AiOutlineSearch className="w-6 h-6 text-[#ED8081] px-0.5 py-0.5 justify-center items-center flex" />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="h-14 p-4 bg-white rounded-lg border border-[#dedede] justify-start items-start gap-1 inline-flex">
            <AiFillFilter className="text-[#154B6D] w-6 h-6  justify-center items-center flex" />
            <div className="text-[#2b4360] text-lg font-normal font-['Metropolis'] leading-relaxed">
              Filter
            </div>
          </div>
          <div className="h-14 p-4 bg-white rounded-lg border border-[#dedede] justify-start items-start gap-1 flex">
            <AiOutlineSortAscending className="text-[#154B6D] w-6 h-6  justify-center items-center flex" />
            <div className="text-[#2b4360] text-lg text-nowrap font-normal font-['Metropolis'] leading-relaxed">
              Sort By
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#2b4360] text-xl font-medium font-['Poppins'] leading-relaxed">
        Discover 19 IVF doctors in Mumbai.
      </div>
      <div className="flex-col justify-start items-start gap-7 ">
        <div className="p-8 bg-white rounded-2xl shadow justify-start items-center gap-10 inline-flex">
          <div className="w-24 h-24 relative">
            <img
              className="w-24 h-24 left-0 top-0 absolute rounded-full"
              src="https://via.placeholder.com/100x100"
            />
            <div className="w-8 h-8 px-0.5 py-0.5 left-[71px] top-[68px] absolute justify-center items-center inline-flex">
              <div className="w-7 h-7 relative"></div>
            </div>
          </div>
          <div className=" justify-between items-end flex">
            <div className=" flex-col justify-start items-start gap-4 inline-flex">
              <div className="text-[#2b4360] text-2xl font-bold font-['FONTSPRING DEMO - Argent CF'] leading-7">
                Dr. Jake Wilson
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="justify-start items-center gap-2 inline-flex">
                    <Image src={about} alt="icon" />
                    <div className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                      Gynecologist/Obstetrician
                    </div>
                  </div>
                  <div className="justify-start items-start gap-4 inline-flex">
                    <div className="justify-start items-center gap-2 flex">
                      <Image src={review} alt="icon" />

                      <div className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                        512 Reviews
                      </div>
                    </div>
                    <div className="justify-start items-center gap-2 flex">
                      <Image src={star} alt="icon" />

                      <div className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                        4.5
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-80 justify-start items-start gap-2 inline-flex">
                  <div className="rounded-lg justify-center items-center gap-1 flex">
                    <div className="w-8 h-8 relative">
                      <div className="w-8 h-8 left-0 top-0 absolute bg-[#e6f3f2] rounded-full" />
                      <div className="w-6 h-6 left-[4px] top-[5px] absolute" />
                    </div>
                  </div>
                  <div className="rounded-lg justify-center items-center gap-1 flex">
                    <div className="w-8 h-8 relative">
                      <div className="w-8 h-8 left-0 top-0 absolute bg-[#ffebc6] rounded-full" />
                      <div className="w-5 h-5 left-[6.40px] top-[6.40px] absolute">
                        <div className="w-1 h-1 left-[10.80px] top-[7.20px] absolute"></div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg justify-center items-center gap-1 flex">
                    <div className="w-8 h-8 relative">
                      <div className="w-8 h-8 left-0 top-0 absolute bg-[#ffe1d7] rounded-full" />
                      <div className="w-5 h-4 left-[7.20px] top-[8px] absolute" />
                    </div>
                  </div>
                  <div className="rounded-lg justify-center items-center gap-1 flex">
                    <div className="w-8 h-8 relative">
                      <div className="w-8 h-8 left-0 top-0 absolute bg-[#e4f3e8] rounded-full" />
                      <div className="w-5 h-5 left-[6.40px] top-[6.40px] absolute">
                        <div className="w-1 h-0.5 left-[12.20px] top-[5.59px] absolute"></div>
                        <div className="w-1.5 h-3 left-[6.75px] top-[2.77px] absolute"></div>
                        <div className="w-1 h-1.5 left-[7.59px] top-[3.86px] absolute"></div>
                        <div className="w-0.5 h-2 left-[8.52px] top-[7.54px] absolute"></div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg justify-center items-center gap-1 flex">
                    <div className="w-8 h-8 relative">
                      <div className="w-8 h-8 left-0 top-0 absolute bg-[#ffecdd] rounded-full" />
                      <div className="w-6 h-6 left-[4px] top-[4px] absolute">
                        <div className="w-1.5 h-1.5 left-[11.63px] top-[4.35px] absolute"></div>
                        <div className="w-1 h-4 left-[3.87px] top-[3.33px] absolute">
                          <div className="w-1 h-0.5 left-[0.27px] top-[2.71px] absolute"></div>
                          <div className="w-1 h-1 left-0 top-0 absolute"></div>
                        </div>
                        <div className="w-0.5 h-1.5 left-[10.26px] top-[11.29px] absolute"></div>
                        <div className="w-0.5 h-1.5 left-[15.54px] top-[11.52px] absolute"></div>
                        <div className="w-0.5 h-1.5 left-[12.59px] top-[13.33px] absolute"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-64 h-20 flex-col justify-start items-start gap-2 inline-flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-6 h-6 px-px py-1.5 justify-center items-center flex" />
                <div className="w-56">
                  <span className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                    Fees:{" "}
                  </span>
                  <span className="text-[#00b15c] text-base font-semibold font-['Poppins'] leading-tight">
                    ₹₹₹
                  </span>
                  <span className="text-[#ababab] text-base font-semibold font-['Poppins'] leading-tight">
                    ₹₹
                  </span>
                </div>
              </div>
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  <div className="w-6 h-6 p-0.5 bg-white/0 justify-center items-center inline-flex">
                    <div className="w-5 h-5 relative"></div>
                  </div>
                </div>
                <div className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                  Starline Hospital
                </div>
                <div className="text-[#e29578] text-base font-semibold font-['Poppins'] underline leading-tight">
                  +2 More
                </div>
              </div>
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-6 h-6 px-0.5 pt-0.5 pb-1 justify-center items-center flex" />
                <div className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                  23 Years
                </div>
              </div>
            </div>
            <div className="w-48 h-32 flex-col justify-start items-start gap-4 inline-flex">
              <div className="h-14 px-6 py-4 bg-[#2b4360] rounded-lg justify-center items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 text-center text-white text-base font-medium font-['Poppins'] leading-tight">
                  Book Appointment
                </div>
              </div>
              <div className="w-48 h-14 px-6 py-4 rounded-lg border border-[#2b4360] justify-center items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 text-center text-[#2b4360] text-base font-medium font-['Poppins'] leading-tight">
                  View Profile
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 bg-white rounded-2xl shadow justify-start items-center gap-10 inline-flex">
          <div className="w-24 h-24 relative">
            <img
              className="w-24 h-24 left-0 top-0 absolute rounded-full"
              src="https://via.placeholder.com/100x100"
            />
            <div className="w-8 h-8 px-0.5 py-0.5 left-[71px] top-[68px] absolute justify-center items-center inline-flex">
              <div className="w-7 h-7 relative"></div>
            </div>
          </div>
          <div className="h-36 justify-between items-end flex">
            <div className="h-36 flex-col justify-start items-start gap-4 inline-flex">
              <div className="text-[#2b4360] text-2xl font-bold font-['FONTSPRING DEMO - Argent CF'] leading-7">
                Dr. Jake Wilson
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="justify-start items-center gap-2 inline-flex">
                    <div className="w-6 h-6 pl-0.5 pr-px pt-1 pb-0.5 justify-center items-center flex" />
                    <div className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                      Gynecologist/Obstetrician
                    </div>
                  </div>
                  <div className="justify-start items-start gap-4 inline-flex">
                    <div className="justify-start items-center gap-2 flex">
                      <div className="w-6 h-6 px-px py-1 justify-center items-center flex" />
                      <div className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                        512 Reviews
                      </div>
                    </div>
                    <div className="justify-start items-center gap-2 flex">
                      <div className="w-6 h-6 px-px pt-px pb-0.5 justify-center items-center flex" />
                      <div className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                        4.5
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-80 justify-start items-start gap-2 inline-flex">
                  <div className="rounded-lg justify-center items-center gap-1 flex">
                    <div className="w-8 h-8 relative">
                      <div className="w-8 h-8 left-0 top-0 absolute bg-[#ffe1d7] rounded-full" />
                      <div className="w-5 h-4 left-[7.20px] top-[8px] absolute" />
                    </div>
                  </div>
                  <div className="rounded-lg justify-center items-center gap-1 flex">
                    <div className="w-8 h-8 relative">
                      <div className="w-8 h-8 left-0 top-0 absolute bg-[#ffecdd] rounded-full" />
                      <div className="w-6 h-6 left-[4px] top-[4px] absolute">
                        <div className="w-1.5 h-1.5 left-[11.63px] top-[4.35px] absolute"></div>
                        <div className="w-1 h-4 left-[3.87px] top-[3.33px] absolute">
                          <div className="w-1 h-0.5 left-[0.27px] top-[2.71px] absolute"></div>
                          <div className="w-1 h-1 left-0 top-0 absolute"></div>
                        </div>
                        <div className="w-0.5 h-1.5 left-[10.26px] top-[11.29px] absolute"></div>
                        <div className="w-0.5 h-1.5 left-[15.54px] top-[11.52px] absolute"></div>
                        <div className="w-0.5 h-1.5 left-[12.59px] top-[13.33px] absolute"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-64 h-20 flex-col justify-start items-start gap-2 inline-flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-6 h-6 px-px py-1.5 justify-center items-center flex" />
                <div className="w-56">
                  <span className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                    Fees:{" "}
                  </span>
                  <span className="text-[#00b15c] text-base font-semibold font-['Poppins'] leading-tight">
                    ₹₹₹
                  </span>
                  <span className="text-[#ababab] text-base font-semibold font-['Poppins'] leading-tight">
                    ₹₹
                  </span>
                </div>
              </div>
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  <div className="w-6 h-6 p-0.5 bg-white/0 justify-center items-center inline-flex">
                    <div className="w-5 h-5 relative"></div>
                  </div>
                </div>
                <div className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                  Starline Hospital
                </div>
                <div className="text-[#e29578] text-base font-semibold font-['Poppins'] underline leading-tight">
                  +2 More
                </div>
              </div>
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-6 h-6 px-0.5 pt-0.5 pb-1 justify-center items-center flex" />
                <div className="text-[#2b4360] text-base font-normal font-['Poppins'] leading-tight">
                  23 Years
                </div>
              </div>
            </div>
            <div className="w-48 h-32 flex-col justify-start items-start gap-4 inline-flex">
              <div className="h-14 px-6 py-4 bg-[#2b4360] rounded-lg justify-center items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 text-center text-white text-base font-medium font-['Poppins'] leading-tight">
                  Book Appointment
                </div>
              </div>
              <div className="w-48 h-14 px-6 py-4 rounded-lg border border-[#2b4360] justify-center items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 text-center text-[#2b4360] text-base font-medium font-['Poppins'] leading-tight">
                  View Profile
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDoctors;
