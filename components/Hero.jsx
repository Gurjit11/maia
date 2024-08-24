"use client";
import Image from "next/image";
import priyanka from "../public/priyanka.png";
import quotation from "../public/quotation.png";
import axios from "axios";

const Hero = () => {
  let data = JSON.stringify({
    id: "6689527988d8fd65f1a3934b",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://maia-2.onrender.com/doctor/getDoctor/",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  // axios
  //   .request(config)
  //   .then((response) => {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return (
    <div className=" bg-white justify-start items-center flex">
      <div
        className={`bg-[url('../public/mobileintersect.png')] bg-cover sm:bg-contain sm:bg-[url('../public/intersect.png')] bg-no-repeat`}
      >
        {/* <Image className="w-96 h-96 left-0 top-0 absolute" src={intersect} /> */}
        <div className="sm:grid py-5 sm:py-14 grid-cols-2">
          <div className="sm:hidden col-span-1 pb-1.5 justify-center items-center flex">
            <div className="justify-center items-center flex-col">
              <Image
                src={priyanka}
                className="w-[60%] sm:ml-32 ml-20"
                alt="Priyanka Chopra"
              />
              <div className="mx-3 p-2 w-[90%] bg-slate-200 rounded-xl border border-gray-200 backdrop-blur-lg flex-col justify-end items-end gap-2 flex">
                <div className="justify-start items-start gap-4 flex">
                  <Image
                    src={quotation}
                    className="w-10"
                    alt="Priyanka Chopra"
                  />
                  <div className="text-slate-700 text-xs sm:text-sm font-normal leading-normal">
                    It&apos;s the best thing you&apos;ll give yourself because
                    you&apos;re taking the power from your biological clock, and
                    you can work until however long you want. Your eggs will
                    still be the same age as when you froze them.
                  </div>
                </div>
                <div className="flex-col text-xs sm:text-sm font-semibold justify-start items-start gap-2 flex">
                  <div className="text-center flex">
                    <span className="text-slate-700  font-['Poppins'] leading-tight">
                      -{" "}
                    </span>
                    <span className="text-slate-700  font-['Poppins'] underline leading-tight">
                      Priyanka Chopra, Dax Shephard Armchair Expert Podcast
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex-col justify-center gap-6 flex">
            <div className="flex-col sm:p-20 p-5 gap-2 flex">
              <div className="flex-col  gap-4  flex">
                <div className="sm:text-start text-center text-slate-700 sm:text-6xl text-2xl font-normal font-['FONTSPRING DEMO - Argent CF'] ">
                  Discover Your Fertility Journey
                </div>
                <div className="sm:text-start text-center text-slate-700 sm:text-3xl font-light font-['Poppins'] ">
                  Search with purpose
                </div>
              </div>
              <div className="justify-start items-center gap-2 flex">
                <div className="w-[90%]">
                  <div className=" bg-white text-black  rounded border border-neutral-200 justify-start items-center flex">
                    <input
                      type="text"
                      placeholder="  Search your queries"
                      //   value={searchText}
                      //   onChange={handleSearchChange}
                      required
                      className="search_input w-full peer p-3"
                    />
                    {/* <div className="text-zinc-600 text-base font-normal font-['Poppins'] "></div>
                    <div className="rounded-sm" />
                    <div className="w-6 h-6 px-0.5 py-0.5 justify-center items-center flex" /> */}
                  </div>
                </div>
                <div className=" px-6 py-4 bg-red-400 rounded-lg justify-center items-center gap-2 flex">
                  <div className=" text-center text-white text-base font-medium font-['Poppins'] ">
                    Search
                  </div>
                </div>
              </div>
              <div className="justify-start text-xs sm:text-sm items-start gap-1 flex">
                <div className="text-slate-700 text-xs sm:text-sm  font-light font-['Poppins'] ">
                  Eg.
                </div>
                <div className="text-slate-700 text-xs sm:text-sm font-light font-['Poppins'] ">
                  Is IVF safe?, What is Egg Freezing?
                </div>
              </div>
            </div>
          </div>
          <div className="hidden col-span-1 pb-1.5 justify-center items-center sm:flex">
            <div className="justify-center items-center flex-col">
              <Image
                src={priyanka}
                className="w-[60%] sm:ml-32 ml-20"
                alt="Priyanka Chopra"
              />
              <div className="mx-3 p-2 w-[90%] bg-slate-200 rounded-xl border border-gray-200 backdrop-blur-lg flex-col justify-end items-end gap-2 flex">
                <div className="justify-start items-start gap-4 flex">
                  <Image
                    src={quotation}
                    className="w-10"
                    alt="Priyanka Chopra"
                  />
                  <div className="text-slate-700 text-xs sm:text-sm font-normal leading-normal">
                    It&apos;s the best thing you&apos;ll give yourself because
                    you&apos;re taking the power from your biological clock, and
                    you can work until however long you want. Your eggs will
                    still be the same age as when you froze them.
                  </div>
                </div>
                <div className="flex-col text-xs sm:text-sm font-semibold justify-start items-start gap-2 flex">
                  <div className="text-center flex">
                    <span className="text-slate-700  font-['Poppins'] leading-tight">
                      -{" "}
                    </span>
                    <span className="text-slate-700  font-['Poppins'] underline leading-tight">
                      Priyanka Chopra, Dax Shephard Armchair Expert Podcast
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
