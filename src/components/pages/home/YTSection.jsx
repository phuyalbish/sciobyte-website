import React from "react";
import { useState, useEffect } from "react";
import ytbg from "@/assets/YTBG.jpg";
import { FaYoutube } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaPlay } from "react-icons/fa";


  import { fetchReviews} from "@/apis/review.js";
import EmblaReviewCarousel from "@/components/carousel/EmblaReviewCarousel";

function YTSection() {

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetchReviews();
      const data = response?.data?.results;
      setReviews(data);
    })();
  }, []);


  const [isOpenYTSection, setIsOpenYTSection] = useState(false);
  const [ytLink, setytLink] = useState("rvZaxT6L3A");
  return (
     
      <div id="youtube"  className="relative container h-full">
         
        <div className="relative  z-10 bg-cover w-full h-full pt-10 flex md:flex-row flex-col justify-start items-center md:gap-5">
          <img
            decoding="async"
            loading="lazy"
            src={ytbg}
            alt=""
            className="w-full h-full object-cover absolute z-0 brightness-25"
          />

          <div className="textConten md:w-7/12 z-10  flex  flex-col  gap-0 md:pl-20 justify-center w-full  self-start md:mt-10  md:items-start items-center ">
            <div className="text-3xl sm:text-4xl md:text-5xl text-left pt-10 font-liches text-white font-bold flex flex-col">
              Let's
            </div>
            <a
              href="https://www.youtube.com/@hellotrekkers"
              target="_blank"
              className="text-red-500 font-base text-4xl md:text-7xl   flex  gap-5 items-center justify-center"
            >
              <FaYoutube />
              <div className="font-liches">Youtube</div>
            </a>
          </div>
          
                 {Array.isArray(reviews) && reviews.length > 0 ? (
                              <EmblaReviewCarousel>
                                          {
                                         reviews?.map((review, index) => (
                                           <div key={index} className="embla__slide min-w-full">
                                            <div className="flex w-full p-3  md:p-0  md:w-96 h-full rounded-md" >
                                              <div className="group flex relative rounded-md overflow-hidden  cursor-pointer " onClick={() => {
                                                    setIsOpenYTSection(true);
                                                    setytLink(review?.video_url);
                                                  }}>
                                                    <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full">
                                                    <div></div>
                                                      <FaPlay  className="opacity-0 group-hover:opacity-100 transition-all duration-500"/>

                                                     <div className="absolute z-10 flex flex-col justify-end items-center bg-gradient-to-t h-1/3 from-black to-transparent w-full bottom-0 p-2">
                                                
                                                    <div className="text-md font-light text-N100 line-clamp-1">{review?.description}</div>

                                                    <div className="text-xs font-light text-N300">{review?.traveller_name} ({review?.country})</div>
                                                  </div>
                                                </div>
                                                <img
                                                  decoding="async"
                                                  loading="lazy"
                                                  key={index}
                                                  src={review?.image}
                                                  alt={`Slide ${index}`}
                                                  className="rounded-md  pointer-events-auto w-96 h-full object-cover scale-100 transition-all group-hover:scale-105 duration-500 ease-in-out"
                                                />
                                              </div>
                                               
                                            </div>
                                               
                                           </div>
                                         ))
                                       }
                                       </EmblaReviewCarousel>
                                        )
                                         : ""}
          
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
  );
}

export default YTSection;
