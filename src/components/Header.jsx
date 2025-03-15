import React from "react";
import Logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="bg-white  shadow-md  sticky top-0 z-50 md:relative ">
      <div className="container px-10 md:px-[4rem] max-w-[100em] w-full mx-auto">
        <header className=" z-30 text-white py-[1rem] w-full flex flex-row justify-between">
          <Link to="/">
            <img src={Logo} className="lg:w-48 md:w-32 sm:w-28 h-auto" />
          </Link>
          <div className="md:flex hidden gap-20">
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

          <div className="md:hidden  gap-20"></div>
        </header>
      </div>
    </div>
  );
}

export default Header;
