import React from "react";
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
function ImageSlideSection({ image1, image2, image3, image4 }) {
  return (
    <div className="w-full  -black h-[616px] flex transition-all duration-300 ease-in-out">
      <img
        src={BASE_MEDIA_URL + image1}
        className="  object-cover hover:w-2/4 w-1/4 overflow-hidden transition-all duration-500 ease-in-out"
      />{" "}
      <img
        src={BASE_MEDIA_URL + image2}
        className="  object-cover hover:w-2/4 w-1/4 overflow-hidden transition-all duration-500 ease-in-out"
      />{" "}
      <img
        src={BASE_MEDIA_URL + image3}
        className="  object-cover hover:w-2/4 w-1/4 overflow-hidden transition-all duration-500 ease-in-out"
      />{" "}
      <img
        src={BASE_MEDIA_URL + image4}
        className="  object-cover hover:w-2/4 w-1/4 overflow-hidden transition-all duration-500 ease-in-out"
      />
    </div>
  );
}

export default ImageSlideSection;
