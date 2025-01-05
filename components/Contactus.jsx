import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import contact from "../public/contact.png";
import Select from "react-select";
import countryList from "react-select-country-list";
import CountryFlag from "react-country-flag";
import { AiOutlineDown } from "react-icons/ai";
import { FaCaretDown, FaChevronDown } from "react-icons/fa";

const CountryDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState({
    value: "IN",
    label: "India",
  });
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const options = countryList().getData();
  console.log(selectedCountry);

  // Custom render for the selected single value
  const customSingleValue = ({ data }) => (
    <div className="custom-single-value">
      <CountryFlag
        countryCode={data.value}
        svg
        style={{ marginRight: "8px" }}
        onClick={() => setDropdownVisible(!isDropdownVisible)}
      />
    </div>
  );

  // Custom render for dropdown options
  const customOption = (props) => {
    const { data, innerRef, innerProps } = props;
    return (
      <div
        ref={innerRef}
        {...innerProps}
        className="custom-option cursor-pointer p-2 flex items-center"
      >
        <CountryFlag countryCode={data.value} svg className="mr-2 text-2xl" />
        {data.label}
      </div>
    );
  };

  return (
    <div className="relative">
      {/* Conditionally render flag with selected country label */}

      <div
        className="flex items-center border-r px-1 h-14 cursor-pointer"
        onClick={() => setDropdownVisible(!isDropdownVisible)}
      >
        <CountryFlag
          countryCode={selectedCountry.value}
          svg
          className="mx-2 text-2xl"
        />
        <FaChevronDown className="text-xl mr-2 text-[#E29578]" />

        {/* {selectedCountry.label} */}
      </div>

      {/* Dropdown menu with absolute positioning */}
      {isDropdownVisible && (
        <div className="absolute w-56 top-12  z-50">
          <Select
            options={options}
            components={{
              SingleValue: customSingleValue,
              Option: customOption,
            }}
            placeholder="Select your country"
            className="w-full "
            onChange={(option) => {
              setSelectedCountry(option);
              setDropdownVisible(false); // Close dropdown after selection
            }}
            autoFocus
          />
        </div>
      )}
    </div>
  );
};

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.6 });

  return (
    <div className="sm:p-20 py-10 p-5 ">
      <div className="overflow-x-clip  justify-between items-center flex">
        <motion.div
          className="hidden sm:block overflow-clip  w-[60%]"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}} // Trigger animation when in view
          transition={{ duration: 0.8, delay: 0.2 }}
          ref={ref}
        >
          <Image
            src={contact}
            className="hover:scale-105 object-cover transition-all duration-300"
          />
        </motion.div>

        <motion.div
          className="sm:w-[45%] flex-col justify-start items-start sm:gap-8 inline-flex"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <div className="flex-col justify-start items-start sm:gap-4 gap-4 flex">
            <div className="flex-col justify-start  items-start gap-2 flex">
              <motion.div
                className="text-slate-700 sm:text-5xl  text-2xl mb-2  font-serif leading-10"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                Begin Your Fertility Journey with Maia Care
              </motion.div>
              <motion.div
                className="text-zinc-600 sm:text-xl font-normal font-['Poppins'] leading-7 tracking-widest"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                CONNECT WITH US
              </motion.div>
            </div>

            <div className="flex-col justify-start w-full items-start sm:gap-4 gap-3 flex">
              <motion.div
                className="text-slate-700 text-base font-medium font-['DM Sans']"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Name
              </motion.div>
              <motion.div
                className="h-14 rounded border w-full border-[#DEDEDE] justify-start items-center inline-flex"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="search_input focus:outline-none w-full peer p-3"
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
                className="h-14  w-full rounded border border-[#DEDEDE] justify-start items-center inline-flex"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <CountryDropdown />
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  required
                  className="search_input focus:outline-none w-full peer p-3"
                />
              </motion.div>
            </div>
            <motion.div
              className="h-14 px-5 py-3 bg-slate-700 rounded-lg justify-center items-center gap-2 inline-flex"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <button className="text-center text-white text-base font-poppins font-medium leading-tight">
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
