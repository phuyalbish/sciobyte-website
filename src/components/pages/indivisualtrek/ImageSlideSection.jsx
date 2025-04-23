import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BASE_MEDIA_URL } from "@/config/baseurl.js";
function ImageSlideSection({ gallery}) {
  const [isOpenGallerySection, setIsOpenGallerySection] = useState(false);
  return (
   
       <>

      <div className="w-full relative hidden sm:flex h-[616px] overflow-hidden rounded-md transition-all duration-300 ease-in-out">
        {gallery?.slice(0, 4).map((item, index) =>
          index == 3 ? (
            <div
              key={index}
              className="relative object-cover hover:w-2/4 w-1/4 px-0.5 overflow-hidden rounded-md transition-all duration-500 ease-in-out"
              onClick={() => {
                setIsOpenGallerySection(true);
              }}
            >
              <div className="absolute w-full h-full flex justify-center items-center p-5 bg-transparent text-transparent cursor-pointer hover:bg-white/50 hover:text-N900  font-bold">
                +{gallery?.length - 3} Photos
              </div>
              <img
                decoding="async"
                loading="lazy"
                alt={`Gallery Image ${index}`}
                src={BASE_MEDIA_URL + item.image}
                className="object-cover w-full h-full overflow-hidden transition-all duration-500 ease-in-out"
              />
            </div>
          ) : (
            <img
              decoding="async"
              loading="lazy"
              key={index}
              src={BASE_MEDIA_URL + item.image}

                alt={`Gallery Image ${index}`}
              className={`object-cover pointer-events-auto px-0.5 overflow-hidden transition-all rounded-md duration-500 ease-in-out 
                  ${gallery?.length === 1 ? "w-full" : ""}
                  ${gallery?.length === 2 ? "w-1/2 hover:w-2/3" : ""}
                  ${gallery?.length === 3 ? "w-1/3 hover:w-2/3" : ""}
                  ${gallery?.length >= 4 ? "w-1/4 hover:w-2/4" : ""}`}
            />
          )
        )}
      </div>

      <div className="relative flex  sm:hidden w-full flex-wrap gap-2">
        {gallery?.slice(0, 3).map((item, index) =>
          index == 2 ? (
            <div
              className="relative w-1/3 flex-grow"
              key={index}
              onClick={() => {
                setIsOpenGallerySection(true);
              }}
            >
              <div className="absolute z-10 rounded-md  w-full h-full bg-white/50 text-white font-bold flex items-center justify-center text-xl">
                <div className="text-N900 rounded-md">
                  +{gallery?.length - 2}
                </div>
              </div>
              <img
                decoding="async"
                loading="lazy"
                key={index}

                alt={`Gallery Image ${index}`}
                src={BASE_MEDIA_URL + item.image}
                className="z-0 bg-black object-cover rounded-md w-full h-full overflow-hidden transition-all duration-500 ease-in-out"
              />
            </div>
          ) : (
            <img
              decoding="async"
              loading="lazy"
              key={index}

                alt={`Gallery Image ${index}`}
              src={BASE_MEDIA_URL + item.image}
              className={`object-cover transition-all rounded-md duration-500 ease-in-out 
                  ${index == 0 ? "w-full" : "w-1/3 flex-grow"}`}
            />
          )
        )}
      </div>
      {isOpenGallerySection && (
        <div className="fixed w-full  h-full p-2  top-0 left-0 z-50   bg-white/100 shadow-md transition-all duration-300 ease-in-out flex flex-col gap-5 items-center">
         <div className="bg-white absolute rounded-full  cursor-pointer  right-6 hover:scale-105 scale-100  transition-all duration-500 top-4 self-end">
           <IoCloseOutline
            className="text-black"
            size={32}
            onClick={() => {
              setIsOpenGallerySection(false);
            }}
          />
         </div>
          <div className="flex flex-wrap overflow-scroll gap-4 ">
            {gallery?.map((item, index) => (
              <img
                decoding="async"
                loading="lazy"
                key={index}

                alt={`Gallery Image ${index}`}
                src={BASE_MEDIA_URL + item.image}
                className="object-cover transition-all duration-500 ease-in-out w-full  aspect-video flex-grow"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ImageSlideSection;
