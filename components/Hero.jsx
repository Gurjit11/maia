"use client";
import Image from "next/image";
import priyanka from "../public/priyanka.png";
import quotation from "../public/quotation.png";

const Hero = () => {
  return (
    <div className="pt-20 bg-white justify-start items-center flex">
      <div className="">
        {/* <img
          className="w-96 h-96 left-0 top-0 absolute"
          src="https://via.placeholder.com/777x690"
        /> */}
        <div className="grid grid-cols-2">
          <div className="col-span-1 flex-col justify-center gap-6 flex">
            <div className="flex-col p-20 gap-2 flex">
              <div className="flex-col  gap-4  flex">
                <div className=" text-slate-700 text-6xl font-normal font-['FONTSPRING DEMO - Argent CF'] ">
                  Discover Your Fertility Journey
                </div>
                <div className=" text-slate-700 text-3xl font-light font-['Poppins'] ">
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
              <div className="justify-start items-start gap-1 flex">
                <div className="text-slate-700 text-base font-light font-['Poppins'] ">
                  Eg.
                </div>
                <div className="text-slate-700 text-base font-light font-['Poppins'] ">
                  Is IVF safe?, What is Egg Freezing?
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 pb-1.5 justify-center items-center flex">
            <div className="justify-center items-center flex-col">
              <Image
                src={priyanka}
                className="w-[60%] ml-32"
                alt="Priyanka Chopra"
              />
              <div className="mx-3 p-2 w-[90%] bg-slate-200 rounded-xl border border-gray-200 backdrop-blur-lg flex-col justify-end items-end gap-2 flex">
                <div className="justify-start items-start gap-4 flex">
                  <Image src={quotation} w={60} alt="Priyanka Chopra" />
                  <div className=" text-slate-700  font-normal  leading-normal">
                    It's the best thing you'll give yourself because you're
                    taking the power from your biological clock, and you can
                    work until however long you want. Your eggs will still be
                    the same age as when you froze them.
                  </div>
                </div>
                <div className="flex-col text-sm font-semibold justify-start items-start gap-2 flex">
                  <div>
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
