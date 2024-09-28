import Image from "next/image";
import adminlogin from "../../../public/adminlogin.png";

const AdminLogin = () => {
  return (
    <div className="grid grid-cols-2 ">
      <div className="col-span-1 flex justify-center items-center">
        <div className=" flex-col justify-start items-start gap-8 flex">
          <div className="self-stretch h-36 flex-col justify-start items-center gap-6 flex">
            <div className="justify-start items-center gap-1 inline-flex">
              <div className="w-12 h-8 relative"></div>
              <div className="text-red-400 text-2xl font-normal font-['Poppins'] leading-7">
                MAIA.CARE
              </div>
            </div>
            <div className="self-stretch h-20 flex-col justify-start items-center gap-2 flex">
              <div className="self-stretch text-center text-slate-800 text-4xl font-semibold font-['Poppins'] leading-10">
                Sign In To Your Account.
              </div>
              <div className="self-stretch text-center text-slate-600 text-lg font-normal font-['Poppins'] leading-7">
                Please enter details to access your dashboard
              </div>
            </div>
          </div>
          <div className="self-stretch h-80 flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch h-52 flex-col justify-end items-start gap-6 flex">
              <div className="self-stretch h-20 flex-col justify-start items-end gap-2 flex">
                <div className="self-stretch h-20 flex-col justify-start items-end gap-2 flex">
                  <div className="self-stretch text-slate-800 text-sm font-semibold font-['Poppins'] leading-tight">
                    Email Address
                  </div>
                  <div className="self-stretch p-3 bg-white rounded-lg border border-slate-300 justify-start items-center gap-3 inline-flex">
                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                      <div className="w-5 h-5 px-0.5 py-1 justify-center items-center flex" />
                      <div className="grow shrink basis-0 text-slate-600 text-base font-medium font-['Poppins'] leading-snug">
                        Admin@maiacare.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-28 flex-col justify-end items-start gap-3 flex">
                <div className="self-stretch h-20 flex-col justify-start items-end gap-2 flex">
                  <div className="self-stretch h-20 flex-col justify-start items-end gap-2 flex">
                    <div className="self-stretch text-slate-800 text-sm font-semibold font-['Poppins'] leading-tight">
                      Password
                    </div>
                    <div className="self-stretch p-3 bg-white rounded-lg border border-slate-300 justify-start items-center gap-3 inline-flex">
                      <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                        <div className="w-5 h-5 px-0.5 pt-px pb-0.5 justify-center items-center flex" />
                        <div className="grow shrink basis-0 text-slate-600 text-base font-medium font-['Poppins'] leading-snug">
                          *****************
                        </div>
                      </div>
                      <div className="w-5 h-5 px-px py-0.5 justify-center items-center flex" />
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-end items-center gap-4 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="text-slate-700 text-sm font-semibold font-['Poppins'] underline leading-tight">
                      Forgot Password
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-24 flex-col justify-start items-center gap-6 flex">
              <div className="self-stretch px-5 py-3 bg-slate-700 rounded-lg justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-base font-semibold font-['Poppins'] leading-snug">
                  Sign In
                </div>
                <div className="w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
              </div>
              <div className="self-stretch justify-center items-center gap-1 inline-flex">
                <div className="text-slate-800 text-sm font-normal font-['Poppins'] leading-tight">
                  Don’t have an account?
                </div>
                <div className="justify-center items-center gap-2 flex">
                  <div className="text-slate-700 text-sm font-semibold font-['Poppins'] underline leading-tight">
                    Sign Up
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-3 inline-flex">
            <div className="text-center text-slate-400 text-xs font-semibold font-['Poppins'] uppercase leading-none tracking-wide">
              OR
            </div>
          </div>
          <div className="self-stretch h-24 flex-col justify-start items-end gap-2 flex">
            <div className="self-stretch px-4 py-2.5 bg-white rounded-lg border border-slate-300 justify-center items-center gap-3 inline-flex">
              <div className="w-6 h-6 relative" />
              <div className="text-slate-800 text-base font-medium font-['Poppins'] leading-snug">
                Sign In With Facebook
              </div>
            </div>
            <div className="self-stretch px-4 py-2.5 bg-white rounded-lg border border-slate-300 justify-center items-center gap-3 inline-flex">
              <div className="w-6 h-6 pr-px justify-center items-center flex">
                <div className="w-6 h-6 relative"></div>
              </div>
              <div className="text-slate-800 text-base font-medium font-['Poppins'] leading-snug">
                Sign In With Google
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 ">
        <Image src={adminlogin} className="h-screen w-auto" />
      </div>
    </div>
  );
};

export default AdminLogin;
