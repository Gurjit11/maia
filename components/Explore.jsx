"use client";
import Image from "next/image";
import location from "../public/location.png";
import loc from "../public/loc.png";
import bag from "../public/bag.png";
import ivf from "../public/ivf.png";
import eggsperm from "../public/eggsperm.png";
import fertilitysupport from "../public/fertilitysupport.png";
import iuitreatment from "../public/iuitreatment.png";
import star from "../public/star.png";
import eggfreezing from "../public/eggfreezing.png";
import arrow from "../public/arrow.png";
import ellipse from "../public/Ellipse.png";

const Explore = () => {
  return (
    <div>
      <div className="sm:grid grid-cols-2 p-3 sm:p-0">
        <div className="col-span-1 flex justify-center items-center">
          <div className=" flex-col justify-start items-start sm:gap-6 inline-flex">
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="text-slate-700 text-base font-medium ">
                Doctors nearby{" "}
              </div>
              <div className="p-2 rounded border border-red-400 justify-start items-start gap-1 flex">
                <div className="text-red-400 text-base font-semibold ">
                  Mumbai
                </div>
                <Image src={location} width={20} alt="icon" />
              </div>
            </div>
            <div className="flex-col justify-start items-start sm:gap-10 flex">
              <div className="flex-col justify-end items-start sm:gap-10 flex">
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className=" text-slate-700 sm:text-5xl text-2xl font-bold font-['FONTSPRING DEMO - Argent CF'] leading-10">
                    Explore doctors you can count on
                  </div>
                  <div className="text-zinc-600 sm:text-2xl font-normal font-['Poppins'] leading-7 tracking-widest">
                    FIND SPECIALISTS
                  </div>
                </div>
              </div>
              <div className=" px-6 py-4 rounded-lg border border-slate-700 justify-center items-center gap-2 inline-flex">
                <div className=" text-center text-slate-700 text-base font-medium  leading-tight">
                  Find top Doctors
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:flex-col flex overflow-x-scroll gap-10">
          <div className="sm:w-[70%] my-5  px-6 py-4 bg-stone-100 rounded-lg shadow justify-start items-start gap-24 flex">
            <div className="justify-start items-center gap-4 w-full flex-col sm:flex">
              <Image src={ellipse} alt={"icon"} />

              <div className="w-full flex-col justify-start items-start gap-2 flex">
                <div className="flex justify-between items-center w-full  text-slate-700 text-xl font-bold font-['FONTSPRING DEMO - Argent CF'] leading-normal">
                  <div>Dr. Hemlata Agarwal</div>
                  <div>
                    <Image src={arrow} alt={"icon"} />
                  </div>
                </div>
                <div className="h-28 flex-col justify-start items-start gap-1 flex">
                  <div className=" justify-start items-center gap-2 inline-flex">
                    <Image src={loc} alt={"icon"} />
                    <div className="text-slate-700 text-sm font-normal font-['Poppins'] leading-none">
                      Malad (W), Mumbai
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <Image src={bag} alt={"icon"} />

                    <div className="text-slate-700 text-sm font-normal font-['Poppins'] leading-none">
                      Experience: 27 Years
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <Image src={star} alt={"icon"} />
                    <Image src={star} alt={"icon"} />
                    <Image src={star} alt={"icon"} />
                    <Image src={star} alt={"icon"} />
                  </div>
                  <div className="w-64 justify-start items-start gap-2 inline-flex">
                    <div className="rounded-lg justify-center items-center gap-1 flex">
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8  bg-slate-200 rounded-full">
                          <Image src={fertilitysupport} alt={"icon"} />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg justify-center items-center gap-1 flex">
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8  bg-amber-100 rounded-full">
                          <Image src={eggfreezing} alt={"icon"} />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg justify-center items-center gap-1 flex">
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8  bg-red-100 rounded-full">
                          <Image src={ivf} alt={"icon"} />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg justify-center items-center gap-1 flex">
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8  bg-green-100 rounded-full">
                          <Image src={iuitreatment} alt={"icon"} />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg justify-center items-center gap-1 flex">
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8  bg-orange-100 rounded-full">
                          <Image src={eggsperm} alt={"icon"} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[70%] my-5  px-6 py-4 bg-stone-100 rounded-lg shadow justify-start items-start gap-24 flex">
            <div className="justify-start items-center gap-4 w-full flex-col sm:flex">
              <Image src={ellipse} alt={"icon"} />

              <div className="w-full flex-col justify-start items-start gap-2 flex">
                <div className="flex justify-between items-center w-full  text-slate-700 text-xl font-bold font-['FONTSPRING DEMO - Argent CF'] leading-normal">
                  <div>Dr. Hemlata Agarwal</div>
                  <div>
                    <Image src={arrow} alt={"icon"} />
                  </div>
                </div>
                <div className="h-28 flex-col justify-start items-start gap-1 flex">
                  <div className=" justify-start items-center gap-2 inline-flex">
                    <Image src={loc} alt={"icon"} />
                    <div className="text-slate-700 text-sm font-normal font-['Poppins'] leading-none">
                      Malad (W), Mumbai
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <Image src={bag} alt={"icon"} />

                    <div className="text-slate-700 text-sm font-normal font-['Poppins'] leading-none">
                      Experience: 27 Years
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <Image src={star} alt={"icon"} />
                    <Image src={star} alt={"icon"} />
                    <Image src={star} alt={"icon"} />
                    <Image src={star} alt={"icon"} />
                  </div>
                  <div className="w-64 justify-start items-start gap-2 inline-flex">
                    <div className="rounded-lg justify-center items-center gap-1 flex">
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8  bg-slate-200 rounded-full">
                          <Image src={fertilitysupport} alt={"icon"} />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg justify-center items-center gap-1 flex">
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8  bg-amber-100 rounded-full">
                          <Image src={eggfreezing} alt={"icon"} />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg justify-center items-center gap-1 flex">
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8  bg-red-100 rounded-full">
                          <Image src={ivf} alt={"icon"} />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg justify-center items-center gap-1 flex">
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8  bg-green-100 rounded-full">
                          <Image src={iuitreatment} alt={"icon"} />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg justify-center items-center gap-1 flex">
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8  bg-orange-100 rounded-full">
                          <Image src={eggsperm} alt={"icon"} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[70%] my-5  px-6 py-4 bg-stone-100 rounded-lg shadow justify-start items-start gap-24 flex">
            <div className="justify-start items-center gap-4 w-full flex-col sm:flex">
              <Image src={ellipse} alt={"icon"} />

              <div className="w-full flex-col justify-start items-start gap-2 flex">
                <div className="flex justify-between items-center w-full  text-slate-700 text-xl font-bold font-['FONTSPRING DEMO - Argent CF'] leading-normal">
                  <div>Dr. Hemlata Agarwal</div>
                  <div>
                    <Image src={arrow} alt={"icon"} />
                  </div>
                </div>
                <div className="h-28 flex-col justify-start items-start gap-1 flex">
                  <div className=" justify-start items-center gap-2 inline-flex">
                    <Image src={loc} alt={"icon"} />
                    <div className="text-slate-700 text-sm font-normal font-['Poppins'] leading-none">
                      Malad (W), Mumbai
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <Image src={bag} alt={"icon"} />

                    <div className="text-slate-700 text-sm font-normal font-['Poppins'] leading-none">
                      Experience: 27 Years
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <Image src={star} alt={"icon"} />
                    <Image src={star} alt={"icon"} />
                    <Image src={star} alt={"icon"} />
                    <Image src={star} alt={"icon"} />
                  </div>
                  <div className="w-64 justify-start items-start gap-2 inline-flex">
                    <div className="rounded-lg justify-center items-center gap-1 flex">
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8  bg-slate-200 rounded-full">
                          <Image src={fertilitysupport} alt={"icon"} />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg justify-center items-center gap-1 flex">
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8  bg-amber-100 rounded-full">
                          <Image src={eggfreezing} alt={"icon"} />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg justify-center items-center gap-1 flex">
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8  bg-red-100 rounded-full">
                          <Image src={ivf} alt={"icon"} />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg justify-center items-center gap-1 flex">
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8  bg-green-100 rounded-full">
                          <Image src={iuitreatment} alt={"icon"} />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg justify-center items-center gap-1 flex">
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8  bg-orange-100 rounded-full">
                          <Image src={eggsperm} alt={"icon"} />
                        </div>
                      </div>
                    </div>
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

export default Explore;
