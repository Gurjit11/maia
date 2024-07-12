import icon from "../public/icon.png";
import clinic from "../public/clinic.png";
import doctor from "../public/doctor.png";
import Image from "next/image";
import Login from "./Login";

const Navbar = () => {
  return (
    <div className="w-full p-2 bg-white shadow">
      <div className=" justify-between px-6 items-center flex">
        <div className="justify-start items-center gap-8 flex">
          <div className="justify-start overflow-y-clip items-center gap-1 flex">
            <Image src={icon} alt="logo" className="scale-125 " height={60} />
          </div>
          {/* <div className=" bg-white rounded-lg border border-orange-200 justify-center items-center gap-2 flex">
            <div className="text-slate-700 text-base font-normal font-['Poppins'] leading-tight">
              Select City
            </div>
            <div className="w-4 h-4 px-0.5 pt-1.5 pb-1 justify-center items-center flex" />
          </div> */}
        </div>
        <div className="justify-start items-center gap-14 flex">
          <div className="justify-start items-start gap-14 flex">
            <div className="justify-start items-center gap-2 flex">
              <Image src={doctor} />
              <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                Find Doctor{" "}
              </div>
            </div>
            <div className="justify-start items-center gap-2 flex">
              <Image src={clinic} />

              <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
                Find Clinics{" "}
              </div>
            </div>
          </div>
          <Login />
        </div>
      </div>
      <div className=" justify-around items-center flex px-10">
        <div className="justify-center items-center gap-4 flex">
          <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
            Fertility Support
          </div>
        </div>
        <div className="justify-center items-center gap-4 flex">
          <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
            IVF & IUI
          </div>
        </div>
        <div className="justify-center items-center gap-4 flex">
          <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
            Egg & Sperm Freezing
          </div>
        </div>
        <div className="justify-start items-center gap-2 flex">
          <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
            Consultation
          </div>
          <div className=" bg-green-200 rounded-md p-1">
            <div className=" text-green-600 text-sm font-medium font-['Poppins'] leading-none">
              Free
            </div>
          </div>
        </div>
        <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
          Blogs
        </div>
        <div className="text-stone-950 text-base font-normal font-['Poppins'] leading-tight">
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default Navbar;
