import  { useEffect, useState } from "react";
import ReviewTile from "@/components/tiles/ReviewTileFull";
import { fetchGoogleReviews} from "@/apis/review.js";

import PageConatiner from "@/components/PageContainer.jsx";

function ReviewSection() {

  const [google_reviews, setGoogleReviews] = useState([]);
   useEffect(() => {
    (async () => {
      const response = await fetchGoogleReviews();
      const data = response.data.reviews;
      setGoogleReviews(data);
    })();
  }, []);

  return (
    <PageConatiner>
      <div className="flex gap-2 flex-col md:flex-row items-center w-full justify-center">
        <span className="text-xl md:text-2xl font-liches ">WHAT OUR FRIENDS HAVE TO SAY</span>
      </div>
      <div className="relative w-full flex items-center flex-wrap gap-5 ">
        {
            Array.isArray(google_reviews) && google_reviews.length > 0 ? (
              google_reviews.map((review, index) => (
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
            )}
        </div>
        </PageConatiner>
  );
}

export default ReviewSection;
