import  { useEffect, useState } from "react";
import { fetchGoogleReviews} from "@/apis/review.js";

const GoogleReviews = () => {


  return (
    <div className="p-4 ">
      <h2 className="text-xl font-bold">Google Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="p-3 border-b">
            <h3 className="font-semibold">
              {review.author_name} - {review.rating} ⭐
            </h3>
            <p>{review.text}</p>
            <span className="text-sm text-gray-500">
              {review.relative_time_description}
            </span>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default GoogleReviews;
