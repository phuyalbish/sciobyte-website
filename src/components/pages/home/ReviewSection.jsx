import React, { useState } from "react";
import img1 from "@/assets/googleReviews.png";
import img2 from "@/assets/TripAdvisor.png";
import testimonial from "@/assets/testimonials.jpeg";
import ReviewTile from "@/components/tiles/ReviewTile";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
const google_reviews = [
  {
    stars: 5,
    profile: testimonial,
    reviewDetail:
      "HelloTrekkers is the best trekking and travel agency in Nepal! The guides were amazing, and the experience was unforgettable.",
    name: "Julia",
  },
  {
    stars: 4,
    profile: testimonial,
    reviewDetail:
      "Great experience with HelloTrekkers! The trekking routes were well-planned, and the hospitality was top-notch.",
    name: "Michael",
  },
  {
    stars: 3,
    profile: testimonial,
    reviewDetail:
      "A fantastic journey through the Himalayas. The team was professional and friendly. Highly recommend!",
    name: "Sophie",
  },
  {
    stars: 4,
    profile: testimonial,
    reviewDetail:
      "Loved the adventure! The scenery was breathtaking, and the guides were very helpful.",
    name: "Daniel",
  },
  {
    stars: 5,
    profile: testimonial,
    reviewDetail:
      "A must-try experience for any adventure lover. Everything was well-organized, and I felt safe throughout the trek.",
    name: "Emma",
  },
];

const trip_reviews = [
  {
    stars: 4,
    profile: testimonial,
    reviewDetail:
      "Loved the adventure! The scenery was breathtaking, and the guides were very helpful.",
    name: "Daniel",
  },
  {
    stars: 3,
    profile: testimonial,
    reviewDetail:
      "A fantastic journey through the Himalayas. The team was professional and friendly. Highly recommend!",
    name: "Sophie",
  },
  {
    stars: 5,
    profile: testimonial,
    reviewDetail:
      "A must-try experience for any adventure lover. Everything was well-organized, and I felt safe throughout the trek.",
    name: "Emma",
  },
  {
    stars: 5,
    profile: testimonial,
    reviewDetail:
      "HelloTrekkers is the best trekking and travel agency in Nepal! The guides were amazing, and the experience was unforgettable.",
    name: "Julia",
  },
  {
    stars: 4,
    profile: testimonial,
    reviewDetail:
      "Great experience with HelloTrekkers! The trekking routes were well-planned, and the hospitality was top-notch.",
    name: "Michael",
  },
];
function ReviewSection() {
  const [isGoogleReview, setGoogleReview] = useState(true);
  return (
    <div className="bg-blue-500 md:p-20 p-4 relative w-full  flex flex-col gap-5 pt-10 ">
      <div className="flex gap-2 flex-col md:flex-row items-center w-full justify-center">
        <span className="text-3xl md:text-4xl font-liches ">WHAT OUR</span><span className="text-white  text-3xl md:text-4xl font-reenie"> F. R. I. E. N. D. S </span> <span className="text-3xl md:text-4xl font-liches ">HAVE TO SAY</span>
      </div>
      <div className="relative w-full flex flex-col items-center ">
        <div className="relative w-full flex flex-row justify-center gap-5">
          <div
            className={`flex flex-row   rounded-t-lg  rounded-b-lg md:rounded-b-none ${
              isGoogleReview ? "bg-gray-100" : "bg-transparent"
            }`}
            onClick={() => {
              setGoogleReview(true);
            }}
          >
            <img
              decoding="async"
              loading="lazy"
              src={img1}
              alt=""
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
              alt=""
              className="w-28 cursor-pointer  object-cover z-0  p-2"
            />
          </div> */}
        </div>
        <div className="md:flex hidden w-full relative   lg:w-[70vw] max-w-[100em] mx-auto bg-gray-100 p-5 shadow-md rounded-2xl rounded-bl-none transition-all duration-300 ease-in-out  flex-row flex-wrap">
          {isGoogleReview ? (
            Array.isArray(google_reviews) && google_reviews.length > 0 ? (
              google_reviews.map((review, index) => (
                <ReviewTile
                  key={index}
                  star={review.stars}
                  profile={review.profile}
                  reviewDetail={review.reviewDetail}
                  name={review.name}
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
        <div className="md:hidden relative  w-full mt-2 max-w-[100em] mx-auto bg-gray-100 py-5 shadow-md rounded-2xl rounded-bl-none transition-all duration-300 ease-in-out flex flex-row flex-wrap">
          {isGoogleReview ? (
            Array.isArray(google_reviews) && google_reviews.length > 0 ? (
              <EmblaCarousel>
                {google_reviews.map((review, index) => (
                  <div key={index} className="embla__slide min-w-full">
                    <ReviewTile
                      star={review.stars}
                      profile={review.profile}
                      reviewDetail={review.reviewDetail}
                      name={review.name}
                    />
                  </div>
                ))}
              </EmblaCarousel>
            ) : (
              <p className="text-gray-500">No Reviews available</p>
            )
          ) : ""
          // Array.isArray(trip_reviews) && trip_reviews.length > 0 ? (
          //   <EmblaCarousel>
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
          //   </EmblaCarousel>
          // ) : (
          //   <p className="text-gray-500">No Reviews available</p>
          // )
          }
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
