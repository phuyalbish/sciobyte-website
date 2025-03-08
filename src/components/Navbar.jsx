import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
function Navbar() {
  const [isTrekkingDropDownOpen, setIsTrekkingDropDownOpen] = useState(false);
  const [isHikeDropDownOpen, setIsHikeDropDownOpen] = useState(false);
  const [isTipsDropDownOpen, setIsTipsDropDownOpen] = useState(false);
  return (
    <>
      <div className="bg-blue-500 z-50 text-white shadow-md px-[4.63rem] py-4   w-screen flex flex-row   justify-center gap-24">
        <button
          className="flex items-center gap-1"
          onClick={() => {
            setIsHikeDropDownOpen(false);
            setIsTipsDropDownOpen(false);
            setIsTrekkingDropDownOpen(!isTrekkingDropDownOpen);
          }}
        >
          Trekking <IoIosArrowDown />
        </button>
        <button
          className="flex items-center gap-1"
          onClick={() => {
            setIsTrekkingDropDownOpen(false);
            setIsTipsDropDownOpen(false);
            setIsHikeDropDownOpen(!isHikeDropDownOpen);
          }}
        >
          Day Hikes <IoIosArrowDown />
        </button>
        <button
          className="flex items-center gap-1"
          onClick={() => {
            setIsTrekkingDropDownOpen(false);
            setIsHikeDropDownOpen(false);
            setIsTipsDropDownOpen(!isTipsDropDownOpen);
          }}
        >
          Travel Tips <IoIosArrowDown />
        </button>
        <a href="">Blogs</a>
        <a href="">About Us</a>
      </div>
      {isTrekkingDropDownOpen && (
        <div className="relative w-screen bg-white p-5 shadow-md transition-all duration-300 ease-in-out">
          <p className="text-black">Trekking options will be listed here...</p>
        </div>
      )}
      {isHikeDropDownOpen && (
        <div className="relative w-screen bg-white p-5 shadow-md transition-all duration-300 ease-in-out">
          <p className="text-black">Hikes options will be listed here...</p>
        </div>
      )}
      {isTipsDropDownOpen && (
        <div className="relative w-screen bg-white p-5 shadow-md transition-all duration-300 ease-in-out">
          <p className="text-black">Tips options will be listed here...</p>
        </div>
      )}
    </>
  );
}

export default Navbar;
