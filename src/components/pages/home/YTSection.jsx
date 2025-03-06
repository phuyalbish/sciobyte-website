import React from "react";
import ytbg from "@/assets/YTBG.png";
import { FaYoutube } from "react-icons/fa";

function YTSection() {
  return (
    <div className="relative  w-screen h-[80vh]">
      <img src={ytbg} alt="" className="w-screen   object-cover absolute z-0" />

      <div className=" z-10 bg-cover relative w-full h-full flex items-center">
        <div className="textConten w-7/12  flex flex-col gap-10 pl-20 justify-center">
          <div className="text-5xl text-left text-white font-bold flex flex-col ">
            Let`s
          </div>
          <span className="text-red-500 font-base text-9xl flex gap-5 items-center ">
            <FaYoutube />
            Youtube
          </span>
        </div>
      </div>
    </div>
  );
}

export default YTSection;
