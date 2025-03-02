import React from "react";
import ytbg from "@/assets/YTBG.png";
function YTSection() {
  return (
    <div className="relative">
      <img
        src={ytbg}
        alt=""
        className="w-screen h-screen object-cover absolute z-0"
      />

      <div className="w-screen h-screen z-10 relative flex ">
        <div className="textConten w-2/5 flex flex-col gap-5 px-20 justify-center">
          <div className="text-4xl text-left text-white font-bold">
            Let`s <span className="text-red-500 font-bold ">Youtube</span>
          </div>
          <div className="text-6xl text-white font-bold text-left leading-normal">
            Tales from the Trekking Trials
          </div>
          <div className="text-3xl text-white font-bold text-left">
            Be ready to find out new tale.
          </div>
        </div>
      </div>
    </div>
  );
}

export default YTSection;
