import React, { useState } from "react";
import ytbg from "@/assets/YTBG.jpg";
import { FaYoutube } from "react-icons/fa";
import YTCarousel from "./YTCarousel";
import img1 from "@/assets/carousel1.png";
import img2 from "@/assets/carousel2.png";
import { ImCross } from "react-icons/im";
const slides = [
  { img: img1, link: "8T4lC0-iWjc" },
  { img: img2, link: "WHG6Y8Az3gg" },
];
function YTSection() {
  const [isOpenYTSection, setIsOpenYTSection] = useState(false);
  const [ytLink, setytLink] = useState("rvZaxT6L3A");
  return (
    <div className="relative  w-full h-[80vh] ">
      <img
        decoding="async"
        loading="lazy"
        src={ytbg}
        alt=""
        className="w-full h-full object-cover absolute z-0 brightness-25"
      />
      <div className="container h-full  max-w-[100em] mx-auto">
        <div className="relative  z-10 bg-cover w-full h-full md:py-0 py-10 flex md:flex-row flex-col items-center gap-5 ">
          <div className="textConten md:w-7/12  flex  flex-col gap-5 md:gap-0 md:pl-20 justify-center w-full  self-start md:mt-10  md:items-start items-center">
            <div className="text-3xl md:text-5xl text-left text-white font-bold flex flex-col ">
              Connect us on
            </div>
            <a
              href="https://www.youtube.com/@hellotrekkers"
              target="_blank"
              className="text-red-500 font-base text-4xl md:text-7xl Fi flex  gap-5 items-center justify-center"
            >
              <FaYoutube />
              <div>Youtube</div>
            </a>
          </div>
          <YTCarousel>
            {slides.map((s, index) => (
              <img
                decoding="async"
                loading="lazy"
                key={index}
                src={s.img}
                alt={`Slide ${index}`}
                className="cursor-pointer md:min-w-[30vw] h-auto pointer-events-auto  min-w-[80vw] object-cover "
                onClick={() => {
                  setIsOpenYTSection(true);
                  setytLink(s.link);
                }}
              />
            ))}
          </YTCarousel>
        </div>
        {isOpenYTSection && (
          <div className="fixed w-full h-screen top-0 left-0 z-50   bg-black  shadow-md transition-all duration-300 ease-in-out flex flex-col gap-5 items-center justify-center">
            <ImCross
              className="text-B300 bg-white p-2 rounded-full   md:absolute m-auto md:top-5 md:mt-0 mt-5  self-between  cursor-pointer"
              size={32}
              onClick={() => {
                setIsOpenYTSection(false);
              }}
            />
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${ytLink}?autoplay=1&controls=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default YTSection;
