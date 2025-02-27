import React, { useEffect, useState } from "react";
import axios from "axios";

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const placeID = "YOUR_PLACE_ID"; // Replace with your Google Place ID
  const apiKey = "YOUR_API_KEY"; // Replace with your Google API Key

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=name,rating,reviews&key=${apiKey}`
        );
        setReviews(response.data.result.reviews || []);
      } catch (error) {
        console.error("Error fetching Google Reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="p-4">
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
