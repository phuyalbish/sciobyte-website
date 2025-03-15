import React from "react";
import right from "@/assets/mandala_right.png";
import left from "@/assets/mandala_left.png";
import insta1 from "@/assets/insta1.png";
import insta2 from "@/assets/insta2.png";
import insta3 from "@/assets/insta3.png";
import insta4 from "@/assets/insta4.png";
import insta5 from "@/assets/insta5.png";
import insta6 from "@/assets/insta6.png";
import insta7 from "@/assets/insta7.png";
import insta8 from "@/assets/insta8.png";
import insta9 from "@/assets/insta9.png";

const insta_post = [
  insta1,
  insta2,
  insta3,
  insta4,
  insta5,
  insta6,
  insta7,
  insta8,
  insta9,
];

import bottom from "@/assets/bottom_chitwan.png";
import { FaInstagram } from "react-icons/fa";

function InstagramSection() {
  return (
    <div className="relative flex justify-center  items-center flex-col">
      <img
        src={right}
        alt=""
        className="hidden md:block right-0 w-[9rem] object-cover absolute z-0"
      />
      <img
        src={left}
        alt=""
        className="hidden md:block left-0 w-[9rem] object-cover absolute z-0"
      />
      <div className="flex w-[80vw] md:w-[50vw] container border gap-2 flex-col mb-20">
        <div className="flex flex-wrap justify-between px-2 py-2">
          <div className="flex gap-2 items-center">
            <FaInstagram size="24" />
            <p className="text-base md:text-xl">@hellotrekkersnamaste</p>
          </div>
          <div className="sm:flex hidden text-sm sm:text-base md:text-lg cursor-pointer rounded-md bg-blue-500 text-white p-1 px-2">
            Follow us
          </div>
        </div>
        {/* <div className="flex flex-row flex-wrap"> */}
        <div className="grid grid-cols-3 gap-[0.25rem]">
          {Array.isArray(insta_post) && insta_post.length > 0 ? (
            insta_post.map((post, index) => (
              // <div className="flex w-1/3 p-0.5" key={index}>
              <div className="flex w-full" key={index}>
                <img src={post} alt="" className="w-full cursor-pointer" />
              </div>
            ))
          ) : (
            <p className="text-gray-500">No categories available</p>
          )}
        </div>

        <div className="sm:hidden  text-sm sm:text-base md:text-lg cursor-pointer rounded-md bg-blue-500 text-white p-1 px-2">
          Follow us
        </div>
      </div>
      <img src={bottom} alt="" className="bottom-0 object-cover  z-0" />
    </div>
  );
}

export default InstagramSection;
