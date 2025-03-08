import React from "react";
import ytbg from "@/assets/YTBG.jpg";
import { FaYoutube } from "react-icons/fa";
import YTCarousel from "./YTCarousel";
import img7 from "@/assets/carousel1.png";
import img8 from "@/assets/carousel2.png";
const slides = [img7, img8];
function YTSection() {
  return (
    <div className="relative  w-screen h-[80vh] ">
      <img
        src={ytbg}
        alt=""
        className="w-screen h-full object-cover absolute z-0"
      />

      <div className="relative z-10 bg-cover w-full h-full flex items-center ">
        <div className="textConten w-7/12 h-full flex flex-col gap-10 pl-20 justify-center ">
          <div className="text-5xl text-left text-white font-bold flex flex-col ">
            Let`s
          </div>
          <span className="text-red-500 font-base lg:text-7xl flex gap-5 items-center ">
            <FaYoutube />
            Youtube
          </span>
        </div>
        <YTCarousel>
          {slides.map((s, index) => (
            <img
              key={index}
              src={s}
              alt={`Slide ${index}`}
              className="w-[28vw]"
            />
          ))}
        </YTCarousel>
      </div>
    </div>
  );
}

export default YTSection;
