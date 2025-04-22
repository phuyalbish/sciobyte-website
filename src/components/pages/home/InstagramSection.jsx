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

import bottom from "@/assets/bottom_chitwan.svg";
import { FaInstagram } from "react-icons/fa";

function InstagramSection() {
  return (
    <div id="instagram" className="relative flex justify-center  w-full items-center flex-col">
      <img
        decoding="async"
        loading="lazy"
        src={right}
        alt="Instagram Mandala Right"
        className="hidden md:block right-0 top-48 w-[9rem] object-cover absolute z-0"
      />
      <img
        decoding="async"
        loading="lazy"
        src={left}
        alt="Instagram Mandala Left"
        className="hidden md:block left-0  top-48 w-[9rem] object-cover absolute z-0"
      />
      <div className="flex  w-full md:w-[50vw]  gap-2 flex-col">
        <div className="flex flex-wrap justify-between items-center md:p-0 px-2">
          <div className="flex gap-2 items-center">
            <FaInstagram size="24" />
            <p className="text-md">@hellotrekkersnamaste</p>
          </div>
          <a
            href="https://www.instagram.com/hellotrekkersnamaste/"
            target="_future"
            className="flex text-base h-fit cursor-pointer rounded-md bg-B400 hover:bg-B500 text-white p-1 px-2"
          >
            Follow us
          </a>
        </div>
        {/* <div className="flex flex-row flex-wrap"> */}
        <div className="grid grid-cols-3 gap-0.5 ">
          {Array.isArray(insta_post) && insta_post.length > 0 ? (
            insta_post.map((post, index) => (
              // <div className="flex w-1/3 p-0.5" key={index}>
              <div className="flex w-full" key={index}>
                <img
                  decoding="async"
                  loading="lazy"
                  src={post}
                  alt={`Instagram Post ${index}`}
                  className="w-full cursor-pointer"
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500">No Instagram Post</p>
          )}
        </div>
      </div>
      <img
        decoding="async"
        loading="lazy"
        src={bottom}
        alt="Instagram Bottom Vector of chitwan national park"
        className="bottom-0 object-cover mt-5 w-full  z-0"
      />
    </div>
  );
}

export default InstagramSection;
