import { useEffect, useState } from "react";
import axios from "axios";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import CategoryTile from "@/components/tiles/CategoryTile";
const API_URL = import.meta.env.VITE_BASE_API_URL;
const GoogleReview = () => {
  return (
    <div className="p-4 bg-white shadow-lg  text-left   lg:rounded-r-[1rem] rounded-l-[1rem]   flex flex-col gap-[0.5rem]">
      <div className="flex text-left">
        <span className="mr-2">
          <img
            decoding="async"
            loading="lazy"
            src="/google-logo.png"
            alt="Google Logo"
            className="h-6 w-6"
          />
        </span>
        <div className="flex gap-3 items-center">
          <span className="text-lg font-bold text-[#418BE0]">4.8</span>
          <div className="text-yellow-500 flex">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>☆</span>
          </div>
        </div>
      </div>
      <a href="#" className=" hover:underline text-[#418BE0]">
        See our Reviews
      </a>
    </div>
  );
};
const HomeStaySection = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(`${API_URL}/categories/all/`)
      .then((response) => {
        setCategories(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setError("Failed to load categories");
        setLoading(false);
      });
  }, []);
  return (
    <div className="flex flex-col gap-10">
      <div className="relative px-10 md:px-[4rem] w-full z-40 flex  mb-20 flex-col gap-10 flex-grow-0 justify-center items-center">
        <div className="py-2 px-3 w-fit  home-headings   rounded-lg">
          Your <span className="font-bold text-B300">PREFERENCE</span> is our{" "}
          <span className="font-bold text-B300">PRIORITY</span>
        </div>

        {loading ? (
          <p className="text-white text-lg">Loading categories...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
              {Array.isArray(categories) && categories.length > 0 ? (
                categories
                  .slice(0, 2)
                  .map((category, index) => (
                    <CategoryTile
                      key={index}
                      img={category.image}
                      name={category.name}
                    />
                  ))
              ) : (
                <p className="text-gray-500">No categories available</p>
              )}
            </div>
            <div className="md:hidden">
              <EmblaCarousel options={{ loop: true }}>
                {categories.slice(0, 2).map((category, index) => (
                  <div
                    key={index}
                    className="embla__slide min-w-full  flex  justify-center"
                  >
                    <CategoryTile
                      key={index}
                      img={category.image}
                      name={category.name}
                    />
                  </div>
                ))}
              </EmblaCarousel>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col px-5 md:px-[4rem] max-w-[100em] mx-auto   lg:gap-0 gap-10">
          <div className="py-2 px-3 text-center home-headings  md:mb-10 rounded-lg">
            Your <span className="font-bold text-B300">HOMESTAY</span> Family{" "}
            <span className="font-bold text-B300">WELCOMES</span> You.
          </div>

          <div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-end w-full gap-5 ">
            <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4 ">
              <div className="home-headings  font-semibold text-left">
                Kritipur Comfort Homestay
              </div>
              <p className="text-[1rem] text-left">
                Namaste! We are a warm and loving family of four – Aama, Suju,
                Aashish, and our little one, Anahat. Since 2017, our home has
                been open to guests from around the world, and we feel truly
                blessed to have welcomed over 200 wonderful friends into our
                lives. Hosting has allowed us to build a global family, filled
                with beautiful connections and cherished memories. With open
                hearts, we invite you to be a part of our home, where you’ll
                experience warmth, love, and the true essence of family.
                Welcome!
              </p>
              <div className="flex">
                <GoogleReview />
              </div>
            </div>
            <div className="relative md:w-[32rem] w-full ">
              <div className="absolute h-full w-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <img
                decoding="async"
                loading="lazy"
                src="/homestay.png"
                alt="homestay"
                className="h-full w-full object-cover rounded-xl"
              />
              <a
                href="https://www.instagram.com/nepalwelcomesyou/"
                target="_future"
                className="absolute bottom-1 right-1 flex gap-2  items-center "
              >
                <img
                  decoding="async"
                  loading="lazy"
                  src="/instagram-logo.png"
                  alt=""
                  className="w-6"
                />
                <p className="text-lg font-semibold  text-white underline underline-offset-1">
                  @nepalwelcomesyou
                </p>
              </a>
            </div>
          </div>
          {/* <div className="relative   ">
          <div className="lg:w-full flex  max-w-[100em] mx-auto  lg:absolute top-[5vh] flex-row gap-3   w-full md:justify-between justify-center md:px-[4.5rem]">
            <GoogleReview />
          </div>
        </div> */}
        </div>
        <img
          decoding="async"
          loading="lazy"
          src="/homestay-vector.png"
          alt="homestay-vector"
          className="w-full   block"
        />
      </div>
    </div>
  );
};

export default HomeStaySection;
