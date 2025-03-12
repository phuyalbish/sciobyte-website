import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
function Navbar() {
  const [isTrekkingDropDownOpen, setIsTrekkingDropDownOpen] = useState(false);
  const [isHikeDropDownOpen, setIsHikeDropDownOpen] = useState(false);
  const [isTipsDropDownOpen, setIsTipsDropDownOpen] = useState(false);
  return (
    <>
      <div className="bg-blue-500 z-50 text-white shadow-md md:px-[4.63rem] py-4   w-full flex flex-row  justify-evenly  md:justify-center text-sm md:text-base  sm:gap-5 md:gap-10 lg:gap-24">
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
          className="sm:flex hidden items-center gap-1 "
          onClick={() => {
            setIsTrekkingDropDownOpen(false);
            setIsHikeDropDownOpen(false);
            setIsTipsDropDownOpen(!isTipsDropDownOpen);
          }}
        >
          Travel Tips <IoIosArrowDown />
        </button>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About Us</Link>
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
