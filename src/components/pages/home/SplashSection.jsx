import React from "react";
import img from "@/assets/SplashScreenImg.png";
import imgVector from "@/assets/vectorSplashImg.png";
function SplashSection() {
  return (
    <div className="relative">
      <img
        src={img}
        alt=""
        className="w-full h-[60vh] md:h-[80vh] lg:h-screen  object-cover z-0 absolute"
      />
      <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen gap-10 md:gap-20 flex flex-col  items-center justify-end">
        <div className="flex flex-col gap-10 top-[40%]  w-[70vw] items-center justify-center">
          <div className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-white font-bold z-40 splash-heading">
            Creating your Tales from our Trails
          </div>
          <div className="bg-white z-40  rounded-md overflow-hidden md:w-[50vw]">
            <input
              type="text"
              className="outline-none bg-white h-10  w-full px-10"
              placeholder="Search Your Trip"
            />
          </div>
        </div>
        <img src={imgVector} alt="" className="w-full  object-cover  z-30 " />
      </div>
    </div>
  );
}

export default SplashSection;
