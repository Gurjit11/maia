"use client";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Modal from "react-modal";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { MdOutlineCloudSync } from "react-icons/md";

function EditProfileModal({
  name: initialName,
  email: initialEmail,
  phone: initialPhone,
  gender: initialGender,
}) {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState(initialPhone);
  const [gender, setGender] = useState(initialGender);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="text-black bg-white">
      <button onClick={openModal}>
        <div className="text-[#E29578] flex items-center gap-1 cursor-pointer">
          <Pencil className="w-4 h-4" />
          <p>Edit Profile</p>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        preventScroll={true}
        onRequestClose={closeModal}
        // style={customStyles}
        className="justify-center  sm:p-0 items-center flex my-12 flex-col bg-opacity-5 bg-black/70 w-full h-full z-20 text-black"
        contentLabel="Appointment Modal"
      >
        <div className="text-black sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] z-20 w-[100%] sm:flex-col rounded-3xl bg-white p-6">
          <>
            <div className="flex items-center justify-between w-full">
              <p className="text-[#E29578] font-semibold text-2xl">
                Book Appointment
              </p>
              <IoClose
                className="w-5 h-5 cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            </div>

            <div className="mt-6 grid gap-2">
              <div className="text-[rgb(43,67,96)]  w-full">
                <p className="text-[#2B4360]">Name</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter the patient's name"
                  className="focus:outline-none mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md"
                />
              </div>
              <div className="text-[rgb(43,67,96)]  w-full">
                <p className="text-[#2B4360]">Email</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter the patient's name"
                  className="focus:outline-none mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md"
                />
              </div>{" "}
              <div className="text-[rgb(43,67,96)]  w-full">
                <p className="text-[#2B4360]">Phone Number</p>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter the patient's name"
                  className="focus:outline-none mt-1 flex items-center justify-between w-full py-3 px-2 border border-gray-200 rounded-md"
                />
              </div>
              <div className="text-[rgb(43,67,96)]  w-full">
                <p className="text-[#2B4360]">Phone Number</p>

                <RadioGroup defaultValue={gender} className="flex mt-1 gap-3">
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male" className="text-sm">
                      Male
                    </Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female" className="text-sm">
                      Female
                    </Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="others" id="others" />
                    <Label htmlFor="others" className="text-sm">
                      Others
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex justify-between">
                <button className="font-semibold  bg-white border border-[#2B4360] text-[#2B4360] mt-5 py-3 px-6 rounded-md" onClick={closeModal}>
                  Cancel
                </button>
                <button className="font-semibold  bg-[#2B4360] text-white mt-5 py-3 px-6 rounded-md" onClick={closeModal}>
                  Done
                </button>
              </div>
            </div>
          </>
        </div>
      </Modal>
    </div>
  );
}

export default EditProfileModal;
