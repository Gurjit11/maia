import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import contact from "../public/contact.png";

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.4 });

  return (
    <div className="sm:p-20 py-10 p-5 overflow-clip">
      <div className=" justify-between items-center flex">
        <motion.div
          className="hidden sm:block w-[50%]"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}} // Trigger animation when in view
          transition={{ duration: 0.8, delay: 0.2 }}
          ref={ref}
        >
          <Image src={contact} />
        </motion.div>

        <motion.div
          className="sm:w-[40%] flex-col justify-start items-start sm:gap-8 inline-flex"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <div className="flex-col justify-start items-start sm:gap-8 gap-4 flex">
            <div className="flex-col justify-start mb-4 items-start gap-2 flex">
              <motion.div
                className="text-slate-700 sm:text-5xl text-2xl mb-2 font-bold font-['FONTSPRING DEMO - Argent CF'] leading-10"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                Begin Your Fertility Journey with Maia Care
              </motion.div>
              <motion.div
                className="text-zinc-600 sm:text-2xl font-normal font-['Poppins'] leading-7 tracking-widest"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                CONNECT WITH US
              </motion.div>
            </div>

            <div className="flex-col justify-start sm:w-[70%] items-start sm:gap-6 gap-3 flex">
              <motion.div
                className="text-slate-700 text-base font-medium font-['DM Sans']"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Name
              </motion.div>
              <motion.div
                className="h-14 px-4 py-3 rounded border w-full border-neutral-200 justify-start items-center inline-flex"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="search_input w-full peer p-3"
                />
              </motion.div>
              <motion.div
                className="text-slate-700 text-base font-medium font-['DM Sans']"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Phone Number
              </motion.div>
              <motion.div
                className="h-14 px-4 py-3 w-full rounded border border-neutral-200 justify-start items-center inline-flex"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  required
                  className="search_input w-full peer p-3"
                />
              </motion.div>
            </div>
            <motion.div
              className="h-14 px-6 py-4 bg-slate-700 rounded-lg justify-center items-center gap-2 inline-flex"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <button className="text-center text-white text-base font-medium font-['Poppins'] leading-tight">
                Get Started
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
