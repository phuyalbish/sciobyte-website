import React from "react";
import Logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
      <div class="bg-white  shadow-md">
        <div className="container px-[2rem] md:px-[4.5rem]">
          {/* <header className=" z-50 text-white px-[2rem] md:px-[4.5rem] py-[1rem] w-full flex flex-row justify-center sm:justify-between"> */}
          <header className=" z-50 text-white py-[1rem] w-full flex flex-row justify-center sm:justify-between">
            <Link to="/">
              <img src={Logo} className="lg:w-48 md:w-32 sm:w-28 h-auto" />
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
          </header>
        </div>
      </div>
  );
}

export default Header;
