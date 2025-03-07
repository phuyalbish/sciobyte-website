import React from "react";
import Logo from "@/assets/logo.png";
function Header() {
  return (
    <header className="bg-white z-50 text-white shadow-md px-[4.63rem] py-[1rem] w-full flex flex-row  justify-between">
      <img src={Logo} />
      <div className="flex gap-20">
        <div className="flex  flex-col justify-end items-end">
          <div className="text-base text-slate-600">Email us</div>
          <div className="text-lg text-black">
            hellotrekkersnamaste@gmail.com
          </div>
        </div>

        <div className="flex  flex-col justify-end items-end">
          <div className="text-base text-slate-600">Prompt Response</div>
          <div className="text-lg text-black">+977-9709707037</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
