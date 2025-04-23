import  { useEffect, useState } from "react";
import axios from "axios";

const TripAdvisorReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const tripAdvisorURL =
    "https://www.tripadvisor.com/Hotel_Review-g123456-d1234567-Reviews-Hotel_Name-City_State.html"; // Example URL
  const scraperAPIKey = "YOUR_SCRAPER_API_KEY"; // Your ScraperAPI key

  useEffect(() => {
    const fetchTripAdvisorReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.scraperapi.com?api_key=${scraperAPIKey}&url=${tripAdvisorURL}`
        );
        // Example: Scrape the review data from the HTML response
        const reviewsData = parseReviewsFromHTML(response.data); // Parse HTML to extract reviews
        setReviews(reviewsData);
        setLoading(false);
      } catch (err) {
        setError("Error fetching reviews",err);
        setLoading(false);
      }
    };

    fetchTripAdvisorReviews();
  }, []);

  const parseReviewsFromHTML = () => {
    // You'll need to parse the HTML to extract reviews (using libraries like Cheerio or regex)
    // Here's a dummy example of how you might process the scraped HTML
    return [
      {
        author_name: "John Doe",
        rating: 5,
        text: "Amazing stay! Highly recommend.",
      },
      {
        author_name: "Jane Smith",
        rating: 4,
        text: "Great service, but the food could be better.",
      },
    ];
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">TripAdvisor Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="p-3 border-b">
            <h3 className="font-semibold">
              {review.author_name} - {review.rating} ⭐
            </h3>
            <p>{review.text}</p>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default TripAdvisorReviews;
