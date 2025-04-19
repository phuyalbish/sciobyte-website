import React from "react";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaPlay } from "react-icons/fa";
import EmblaReviewCarousel from "@/components/carousel/EmblaReviewCarousel";


export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
function TrekReviewsSection({reviews, trek_name}) {
  
  const [isOpenYTSection, setIsOpenYTSection] = useState(false);
  const [ytLink, setytLink] = useState("rvZaxT6L3A");
  return <section id="reviews">
{Array.isArray(reviews) && reviews.length > 0 && (
  <div className="flex flex-col gap-5">
    <div className="text-xl tracking-wide font-liches font-light">
      Video Review by our Trekkers
    </div>

    {!isOpenYTSection && (
      <>
        <div className="hidden md:flex flex-wrap gap-2">
          {reviews.map((review, index) => (
            <div key={index} className="flex relative w-64 h-96 shadow-md rounded-md">
              <div
                className="group w-full flex relative border border-B500 rounded-md overflow-hidden cursor-pointer"
                onClick={() => {
                  setIsOpenYTSection(true);
                  setytLink(review?.video_url);
                }}
              >
                <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full">
                  <FaPlay className="opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute z-10 flex flex-col justify-end items-center bg-gradient-to-t h-1/3 from-black to-transparent w-full bottom-0 p-2">
                    <div className="text-md font-light text-N100 line-clamp-1">
                      {review?.description}
                    </div>
                    <div className="text-xs font-light text-N300">
                      {review?.traveller_name} ({review?.country})
                    </div>
                  </div>
                </div>
                <img
                  decoding="async"
                  loading="lazy"
                  src={BASE_MEDIA_URL + review?.traveller_image}
                  alt={`Slide ${index}`}
                  className="rounded-md pointer-events-auto w-full h-full object-cover scale-100 transition-all group-hover:scale-105 duration-500 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <EmblaReviewCarousel>
            {reviews.map((review, index) => (
              <div key={index} className="embla__slide min-w-full">
                <div className="flex w-full p-3 md:p-0 md:w-96 h-full shadow-md rounded-md">
                  <div
                    className="group flex relative w-full border border-B500 rounded-md overflow-hidden cursor-pointer"
                    onClick={() => {
                      setIsOpenYTSection(true);
                      setytLink(review?.video_url);
                    }}
                  >
                    <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full">
                      <FaPlay className="opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="absolute z-10 flex flex-col justify-end items-center bg-gradient-to-t h-1/3 from-black to-transparent w-full bottom-0 p-2">
                        <div className="text-md font-light text-N100 line-clamp-1">
                          {review?.description}
                        </div>
                        <div className="text-xs font-light text-N300">
                          {review?.traveller_name} ({review?.country})
                        </div>
                      </div>
                    </div>
                    <img
                      decoding="async"
                      loading="lazy"
                      src={BASE_MEDIA_URL + review?.traveller_image}
                      alt={`Slide ${index}`}
                      className="rounded-md pointer-events-auto w-full h-full object-cover scale-100 transition-all group-hover:scale-105 duration-500 ease-in-out"
                    />
                  </div>
                </div>
              </div>
            ))}
          </EmblaReviewCarousel>
        </div>
      </>
    )}
  </div>
)}
                          
       
        {isOpenYTSection && (
          <div className="relative w-full aspect-video overflow-hidden   top-0 left-0 rounded-md transition-all duration-300 ease-in-out flex flex-col gap-5 items-center justify-center">
            <ImCross
              className="text-B300 bg-white p-2 rounded-full  absolute z-10 right-5 top-20 self-between  cursor-pointer"
              size={32}
              onClick={() => {
                setIsOpenYTSection(false);
              }}
            />
            <iframe
              className="aspect-video object-cover w-full rounded-md"
              src={`https://www.youtube.com/embed/${ytLink}?autoplay=1&controls=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}
  </section>;
}

export default TrekReviewsSection;
