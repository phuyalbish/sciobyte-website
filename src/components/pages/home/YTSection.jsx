import React, { useState } from "react";
import ytbg from "@/assets/YTBG.jpg";
import { FaYoutube } from "react-icons/fa";
import YTCarousel from "./YTCarousel";
import img1 from "@/assets/carousel1.png";
import img2 from "@/assets/carousel2.png";
import { ImCross } from "react-icons/im";
const slides = [
  { img: img1, link: "irvZaxT6L3A" },
  { img: img2, link: "WHG6Y8Az3gg" },
];
function YTSection() {
  const [isOpenYTSection, setIsOpenYTSection] = useState(false);
  const [ytLink, setytLink] = useState("rvZaxT6L3A");
  return (
    <div className="relative  w-screen h-[80vh] ">
      <img
        src={ytbg}
        alt=""
        className="w-screen h-full object-cover absolute z-0"
      />

      <div className="relative z-10 bg-cover w-full h-full md:py-0 py-10 flex md:flex-row flex-col items-center gap-5 ">
        <div className="textConten w-7/12  flex md:flex-col gap-5 md:gap-10 md:pl-20 justify-center   ">
          <div className="text-3xl md:text-5xl text-left text-white font-bold flex flex-col ">
            Let`s
          </div>
          <a
            href="https://www.youtube.com/@Welcomenepal"
            target="_blank"
            className="text-red-500 font-base text-3xl md:text-7xl flex  gap-5 items-center"
          >
            <FaYoutube />
            Youtube
          </a>
        </div>
        <YTCarousel>
          {slides.map((s, index) => (
            <img
              key={index}
              src={s.img}
              alt={`Slide ${index}`}
              className="cursor-pointer md:min-w-[30vw]  w-[50vw] object-cover"
              onClick={() => {
                setIsOpenYTSection(true);
                setytLink(s.link);
              }}
            />
          ))}
        </YTCarousel>
      </div>

      {isOpenYTSection && (
        <div className="fixed w-screen h-screen top-0 left-0 z-50   bg-black/75 p-5 shadow-md transition-all duration-300 ease-in-out flex flex-col gap-5 items-center">
          <ImCross
            className="text-white right-5 self-end"
            size={20}
            onClick={() => {
              setIsOpenYTSection(false);
            }}
          />
          <iframe
            className="w-[90vw] h-[80vh]"
            src={`https://www.youtube.com/embed/${ytLink}?autoplay=1&controls=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default YTSection;
