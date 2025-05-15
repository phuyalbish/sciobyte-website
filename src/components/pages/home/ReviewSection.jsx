import  { useEffect, useState } from "react";
import ReviewTileCarousel from "@/components/tiles/ReviewTileCarousel";
import ReviewTile from "@/components/tiles/ReviewTile";
import EmblaGoogleReviewCarousel from "@/components/carousel/EmblaGoogleReviewCarousel.jsx";
import googleImg from "@/assets/googleReviews.png"
import { fetchGoogleReviews} from "@/apis/review.js";
import { FaStar } from "react-icons/fa";
import Container from "@/components/Container.jsx";
import { GoArrowUpRight } from "react-icons/go";
import ImageSkeleton from "@/components/skeleton/ImageSkeleton.jsx";

function ReviewSection() {



  const [google_reviews, setGoogleReviews] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openedName, setOpenedName] = useState()
  const [openedStar, setOpenedStar] = useState()
  const [openedProfile, setOpenedProfile] = useState()
  const [openedDate, setOpenedDate] = useState()
  const [openedReviewDetail, setopenedReviewDetail] = useState()

  const openPopUp = (review) => {
    setOpenedName(review.author_name)
    setOpenedProfile(review.profile_photo_url)
    setOpenedStar(review.rating)
    setOpenedDate(review.relative_time_description)
    setopenedReviewDetail(review.text)
    setIsModalOpen(true)
  }
   useEffect(() => {
    (async () => {
      const response = await fetchGoogleReviews();
      const data = response.data.reviews;
      setGoogleReviews(data);
    })();
  }, []);

  const [isGoogleReview, setGoogleReview] = useState(true);
  return (
    <div className="bg-blue-500 py-16"> 
    <Container>
      <div className="flex gap-2 flex-col md:flex-row items-center w-full justify-center">
        <span className="text-3xl md:text-4xl font-liches ">WHAT OUR </span><span className="text-white  text-3xl md:text-4xl font-reenie"> F. R. I. E. N. D. S </span> <span className="text-3xl md:text-4xl font-liches "> HAVE TO SAY</span>
      </div>
      <div className="relative w-full flex flex-col items-center ">
        <div className="relative w-full flex flex-row justify-center gap-5">
          <div
            className={`flex flex-row   rounded-t-lg ${
              isGoogleReview ? "bg-white" : "bg-white"
            }`}
            onClick={() => {
              setGoogleReview(true);
            }}
          >
            <img
              src={googleImg}
              alt="Google Review"
              className="w-28 cursor-pointer  object-cover z-0  p-2"
            />
          </div>
          {/* <div
            className={`flex flex-row  rounded-t-lg  rounded-b-lg md:rounded-b-none ${
              !isGoogleReview ? "bg-gray-100" : "bg-transparent"
            }`}
            onClick={() => {
              setGoogleReview(false);
            }}
          >
            <img
              decoding="async"
              loading="lazy"
              src={img2}
              alt="Trip Advisor Review"
              className="w-28 cursor-pointer  object-cover z-0  p-2"
            />
          </div> */}
        </div>
        <div className="md:flex hidden  w-full relative p-6  max-w-[100em]  bg-gray-100 shadow-md rounded-2xl rounded-bl-none transition-all duration-300 ease-in-out  flex-col gap-3">
            <div className="flex flex-row flex-wrap">
            
            
              {isGoogleReview ? (
                Array.isArray(google_reviews) && google_reviews.length > 0 ? (
                  google_reviews.slice(0,6).map((review, index) => (
                    <ReviewTile
                      key={index}
                      star={review.rating}
                      profile={review?.profile_photo_url}
                      reviewDetail={review.text}
                      name={review.author_name}
                      date={review.relative_time_description}
                    />
                  ))
                ) : (
                  <p className="text-gray-500">No Reviews available</p>
                )
              ) : ""
              // : Array.isArray(trip_reviews) && trip_reviews.length > 0 ? (
              //   trip_reviews.map((review, index) => (
              //     <ReviewTile
              //       key={index}
              //       star={review.stars}
              //       profile={review.profile}
              //       reviewDetail={review.reviewDetail}
              //       name={review.name}
              //     />
              //   ))
              // ) : (
              //   <p className="text-gray-500">No Reviews available</p>
              // )
              }
              </div>
              <div className="flex justify-end">
                
                 <a href="https://maps.app.goo.gl/Bck3AAUZQMq5qBZq7" target="_blank"  aria-label="Reviews" className="flex gap-1 items-center  text-B400 transition-colors duration-500 hover:text-B700 cursor-pointer mt-2 underline underline-offset-2">
           <div> See All</div>
                 <GoArrowUpRight className="text-md"/>
        </a>
                </div>
        </div>
        <div className="md:hidden relative  w-full  max-w-[100em] mx-auto bg-gray-100 py-5  shadow-md rounded-2xl rounded-bl-none transition-all duration-300 ease-in-out flex flex-row flex-wrap">
          {isGoogleReview ? (
            Array.isArray(google_reviews) && google_reviews.length > 0 ? (
              <EmblaGoogleReviewCarousel>
                {google_reviews.slice(0,6).map((review, index) => (
                  <div key={index} className="embla__slide min-w-full">
                    <ReviewTileCarousel
                      key={index}
                      star={review.rating}
                      onClickPopUp={() => openPopUp(review)}
                      profile={review?.profile_photo_url}
                      reviewDetail={review.text}
                      name={review.author_name}
                      date={review.relative_time_description}
                    />
                  </div>
                ))}
              </EmblaGoogleReviewCarousel>
            ) : (
              <p className="text-gray-500">No Reviews available</p>
            )
          ) : ""
          // Array.isArray(trip_reviews) && trip_reviews.length > 0 ? (
          //   <EmblaGoogleReviewCarousel>
          //     {trip_reviews.map((review, index) => (
          //       <div key={index} className="embla__slide min-w-full">
          //         <ReviewTile
          //           star={review.stars}
          //           profile={review.profile}
          //           reviewDetail={review.reviewDetail}
          //           name={review.name}
          //         />
          //       </div>
          //     ))}
          //   </EmblaGoogleReviewCarousel>
          // ) : (
          //   <p className="text-gray-500">No Reviews available</p>
          // )
          }



      {isModalOpen && (
        <div className="absolute inset-0 z-20 bg-white/50  rounded-xl flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl max-w-lg w-full relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <div className="flex gap-3 mb-4 items-center">
              <img src={openedProfile} alt={openedName} className="w-10 h-10 rounded-full object-cover" />
              <div className="flex flex-col justify-start">
                <div className="font-semibold text-left">{openedName}</div>
                <div className="text-sm text-N500 text-left">{openedDate}</div>
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              {Array.from({ length: openedStar || 0 }).map((_, index) => (
                <FaStar key={index} className="text-yellow-300" size={18} />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-justify">{openedReviewDetail}</p>
          </div>
        </div>
      )}
        </div>
      </div>
      </Container>
    </div>
  );
}

export default ReviewSection;
