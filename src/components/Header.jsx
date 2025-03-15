import React, { useState } from "react";
import Logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
function Header() {
  const [isDropDown, setIsDropDown] = useState(false);
  return (
    <>
      <div className="bg-white  shadow-md  sticky top-0 z-50 md:relative ">
        <div className="container px-10 md:px-[4rem] max-w-[100em] w-full mx-auto">
          <header className=" z-30 text-white py-[1rem] w-full flex flex-row  justify-between">
            <Link to="/">
              <img src={Logo} className="lg:w-48 md:w-32 sm:w-28 w-24 h-auto" />
            </Link>

            <div className="sm:flex hidden gap-20">
              <div className="md:flex hidden flex-col justify-end items-end">
                <div className="text-base text-slate-600">Email us</div>
                <div className="md:text-md text-black">
                  hellotrekkersnamaste@gmail.com
                </div>
              </div>

              <div className="flex  flex-col justify-end items-end">
                <div className="text-base text-slate-600">WhatsApp</div>
                <div className="lg:text-md text-black">+977-9709707037</div>
              </div>
            </div>
            <div
              className="md:hidden w-5 h-5 rounded-full bg-B300 active:bg-B500"
              onClick={() => {
                setIsDropDown(!isDropDown);
              }}
            ></div>
          </header>
        </div>
        {isDropDown && (
          <div className="px-10 w-full h-[100vh] fixed z-50 bg-white p-5 gap-5 shadow-md transition-all duration-300 ease-in-out flex flex-col"></div>
        )}
      </div>
    </>
  );
}

export default Header;
