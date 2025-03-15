import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import logo from "@/assets/HTWhite.png";
function Navbar() {
  const [isTrekkingDropDownOpen, setIsTrekkingDropDownOpen] = useState(false);
  const [isHikeDropDownOpen, setIsHikeDropDownOpen] = useState(false);
  const [isTipsDropDownOpen, setIsTipsDropDownOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const vh10 = window.innerHeight * 0.1;
      setShowLogo(scrollPosition > vh10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="bg-B300  text-white shadow-md md:px-[4.63rem] py-4  items-center w-full flex flex-row justify-between text-sm md:text-base ">
        <Link to="/">
          <img
            src={logo}
            className={`w-8 ml-5 md:ml-0 aspect-square transition-all duration-300 ${
              showLogo ? "scale-100" : "scale-0"
            }`}
            alt="Logo"
          />
        </Link>

        <div className="flex flex-row  w-full justify-evenly  md:justify-center   sm:gap-5 md:gap-10 lg:gap-24 ">
          {/* <button
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
          </button> */}
          <span className="transition hover:underline underline-offset-1 hover:text-B500">
            <Link to="/treks">Treks</Link>
          </span>
          <span className="transition hover:underline underline-offset-1 hover:text-B500">
            <Link to="/hikes">Hikes</Link>
          </span>
          <span className="transition hover:underline underline-offset-1 hover:text-B500">
            <Link to="/blogs">Blogs</Link>
          </span>
          <span className="transition hover:underline underline-offset-1 hover:text-B500">
            <Link to="/about">About Us</Link>
          </span>
        </div>
      </div>
      {isTrekkingDropDownOpen && (
        <div className="relative w-full bg-white p-5 shadow-md transition-all duration-300 ease-in-out">
          <p className="text-black">Trekking options will be listed here...</p>
        </div>
      )}
      {isHikeDropDownOpen && (
        <div className="relative w-full bg-white p-5 shadow-md transition-all duration-300 ease-in-out">
          <p className="text-black">Hikes options will be listed here...</p>
        </div>
      )}
      {isTipsDropDownOpen && (
        <div className="relative w-full bg-white p-5 shadow-md transition-all duration-300 ease-in-out">
          <p className="text-black">Tips options will be listed here...</p>
        </div>
      )}
    </>
  );
}

export default Navbar;
