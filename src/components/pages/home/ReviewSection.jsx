import React, { useState } from "react";
import img1 from "@/assets/googleReviews.png";
import img2 from "@/assets/TripAdvisor.png";
import testimonial from "@/assets/testimonials.jpeg";
import ReviewTile from "@/components/tiles/ReviewTile";
const reviews = [
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
function ReviewSection() {
  const [isGoogleReview, setGoogleReview] = useState(true);
  return (
    <div className="bg-blue-500 p-20 flex flex-col gap-20">
      <div className="text-4xl ">
        What our <span className="text-white ">Friends</span> Have to
        Say
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center gap-5">
          <div
            className={`flex flex-row  rounded-t-md ${
              isGoogleReview ? "bg-gray-100" : "bg-transparent"
            }`}
            onClick={() => {
              setGoogleReview(true);
            }}
          >
            <img
              src={img1}
              alt=""
              className="w-28 cursor-pointer  object-cover z-0  p-2"
            />
          </div>
          <div
            className={`flex flex-row rounded-t-md ${
              !isGoogleReview ? "bg-gray-100" : "bg-transparent"
            }`}
            onClick={() => {
              setGoogleReview(false);
            }}
          >
            <img
              src={img2}
              alt=""
              className="w-28 cursor-pointer  object-cover z-0  p-2"
            />
          </div>
        </div>
        {isGoogleReview && (
          <div className="relative md:w-[70vw]  bg-gray-100 p-5 shadow-md rounded-2xl rounded-bl-none transition-all duration-300 ease-in-out flex flex-row flex-wrap">
            {Array.isArray(reviews) && reviews.length > 0 ? (
              reviews.map((review, index) => (
                <ReviewTile
                  key={index}
                  star={review.stars}
                  profile={review.profile}
                  reviewDetail={review.reviewDetail}
                  name={review.name}
                />
              ))
            ) : (
              <p className="text-gray-500">No Google Categories available</p>
            )}
          </div>
        )}
        {!isGoogleReview && (
          <div className="relative  md:w-[70vw]   bg-gray-100 p-5 shadow-md rounded-3xl rounded-bl-none transition-all duration-300 ease-in-out flex flex-row flex-wrap">
            {Array.isArray(reviews) && reviews.length > 0 ? (
              reviews.map((review, index) => (
                <ReviewTile
                  key={index}
                  star={review.stars}
                  profile={review.profile}
                  reviewDetail={review.reviewDetail}
                  name={review.name}
                />
              ))
            ) : (
              <p className="text-gray-500">No Google Categories available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ReviewSection;
