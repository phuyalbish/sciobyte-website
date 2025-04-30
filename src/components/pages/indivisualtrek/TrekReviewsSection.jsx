import { useState } from "react";
import { useEffect } from "react";
import { ImCross } from "react-icons/im";
import { FaPlay } from "react-icons/fa";

import ReviewTile from "@/components/tiles/ReviewTile";
import EmblaReviewCarousel from "@/components/carousel/EmblaReviewCarousel";


import { fetchGoogleReviews} from "@/apis/review.js";
import { BASE_MEDIA_URL } from "@/config/baseurl.js";
function TrekReviewsSection({reviews}) {


    const [google_reviews, setGoogleReviews] = useState([]);
     useEffect(() => {
      (async () => {
        const response = await fetchGoogleReviews();
        const data = response.data.reviews;
        setGoogleReviews(data);
      })();
    }, []);
  
  
  const [isOpenYTSection, setIsOpenYTSection] = useState(false);
  const [ytLink, setytLink] = useState("rvZaxT6L3A");
  return <section id="reviews" className="flex flex-col gap-5 relative">

    <div className="text-xl tracking-wide font-liches font-light">
      Reviews
    </div>


          {Array.isArray(google_reviews) && google_reviews.length > 0 ? (

            <div className="flex flex-col gap-5">
              <div className="text-lg tracking-wide font-liches font-light">
                Google Review by our Trekkers
              </div>
                    <div className="flex flex-wrap ">

                        {google_reviews?.slice(0, 3)?.map((review, index) => (
                          <ReviewTile
                            key={index}
                            star={review.rating}
                            profile={review?.profile_photo_url}
                            reviewDetail={review.text}
                            name={review.author_name}
                            date={review.relative_time_description}
                          />
                        ))}
                    </div>


              <div className="flex justify-end">

                 <a href="https://maps.app.goo.gl/Bck3AAUZQMq5qBZq7" target="_blank"  aria-label="Reviews" className="text-B400 transition-colors duration-500 hover:text-B700 cursor-pointer mt-2 underline underline-offset-2">
                  See All
                </a>
                </div>
                        </div>
                      ) : (
                        <p className="text-gray-500">No Reviews available</p>
                      )
          }





{Array.isArray(reviews) && reviews.length > 0 && (
  <div className="flex flex-col gap-5">
    <div className="text-lg tracking-wide font-liches font-light">
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
                  src={BASE_MEDIA_URL + review?.image}
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
                      src={BASE_MEDIA_URL + review?.image}
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
  </section>
}

export default TrekReviewsSection;
