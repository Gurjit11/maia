import Image from "next/image";
import contact from "../public/contact.png";

const Contactus = () => {
  return (
    <div className="sm:p-20 p-5">
      <div className=" justify-between items-center flex">
        <Image className="hidden sm:block w-[50%]" src={contact} />
        <div className="sm:w-[40%] flex-col justify-start items-start sm:gap-8 inline-flex">
          <div className="flex-col justify-start items-start sm:gap-8 gap-4 flex">
            <div className="flex-col justify-start mb-4 items-start gap-2 flex">
              <div className=" text-slate-700 sm:text-5xl text-2xl mb-2 font-bold font-['FONTSPRING DEMO - Argent CF'] leading-10">
                Begin Your Fertility Journey with Maia Care
              </div>
              <div className="text-zinc-600 sm:text-2xl font-normal font-['Poppins'] leading-7 tracking-widest">
                CONNECT WITH US
              </div>
            </div>
            <div className="flex-col justify-start  sm:w-[70%]  items-start sm:gap-6 gap-3 flex">
              <div className="text-slate-700 text-base font-medium font-['DM Sans']">
                Name
              </div>
              <div className=" h-14 px-4 py-3 rounded border  w-full border-neutral-200 justify-start items-center inline-flex">
                <div className="text-zinc-600 w-full text-sm font-normal font-['Poppins'] leading-none">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    //   value={searchText}
                    //   onChange={handleSearchChange}
                    required
                    className="search_input w-full peer p-3"
                  />
                </div>
              </div>
              <div className="text-slate-700 text-base font-medium font-['DM Sans']">
                Phone Number
              </div>
              <div className=" h-14 px-4 py-3  w-full rounded border border-neutral-200 justify-start items-center inline-flex">
                <div className="text-zinc-600 w-full text-sm font-normal font-['Poppins'] leading-none">
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    //   value={searchText}
                    //   onChange={handleSearchChange}
                    required
                    className="search_input w-full peer p-3"
                  />
                </div>
              </div>
            </div>
            <div className="h-14 px-6 py-4 bg-slate-700 rounded-lg justify-center items-center gap-2 inline-flex">
              <button className=" text-center text-white text-base font-medium font-['Poppins'] leading-tight">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
