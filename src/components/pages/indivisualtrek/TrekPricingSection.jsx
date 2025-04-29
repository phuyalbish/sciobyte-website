import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CiShare2 } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import { scrollToSection } from "@/apis/scrollToSection.js";
// import { FaStar } from "react-icons/fa";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

import { BASE_MEDIA_URL } from "@/config/baseurl.js";
function TrekPricingSection({ slug, total_price, map, pricings, trek_name, stars = 0 }) {
  const { id } = useParams();

   const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(slug));
  }, [slug]);
  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(slug)) {
      favorites = favorites.filter(name => name !== slug);

      setLiked("Trek Removed!");
      setTimeout(() => setLiked(null), 3000);
    } else {
      favorites.push(slug);
      setLiked("Trek Liked!");
      setTimeout(() => setLiked(null), 3000);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  const [liked, setLiked] = useState(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://hellotrekkers.com/trek/" + id
      );
      setLiked("Link Copied!");
      setTimeout(() => setLiked(null), 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div className="flex flex-col w-full gap-7">
      <div className="flex flex-col gap-2">
        <div className="relative flex justify-between w-full items-start flex-wrap">
          <div className="flex flex-col items-start">
            <div className="text-sm text-bold">Price Starting From</div>
            <div className="text-lg font-bold text-B500">USD {total_price}</div>
          </div>
          <div className="flex relative  gap-2 items-center">
            {/* <div className="flex gap-1 items-center justify-center">
              {[...Array(stars)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500 text-sm" />
              ))}
            </div> */}
             <div onClick={toggleFavorite} className="cursor-pointer">
              {isFavorite ? (
                <FaHeart className="text-red-500 size-6" />
              ) : (
                <FaRegHeart className="text-red-500 size-6" />
              )}
            </div>
            <CiShare2 className="size-7 cursor-pointer" onClick={handleCopy} />
          </div>

          {liked && (
            <div className="text-N500 text-sm absolute bottom-0 right-0 w-34 ">
              {liked}
            </div>
          )}
        </div>
         {Array.isArray(pricings) && pricings?.length > 0 ? (
        <div className="flex flex-col border gap-2  bg-B100 rounded-xl px-4 py-4">
         
            <>
              <div className="flex justify-between">
                <div className="font-semibold">Group Size</div>
                <div className="font-semibold">Cost Per Person</div>
              </div>
              {pricings?.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between pt-2 border-t border-N200"
                >
                  <div>
                    {item?.min_group_range !== 0 &&
                      `${item?.min_group_range} - `}
                    {item?.max_group_range} Person
                  </div>
                  <div>${item?.price_per_person}</div>
                </div>
              ))}
            </>
          
        </div>
        ) : ""}
        <Link
        aria-label="Contact Page"
          to="/contact"
          className="rounded-lg bg-B500 hover:bg-B700 text-white text-base font-bold cursor-pointer flex justify-center items-center p-4"
        >
          Make a Booking
        </Link>
        <a

          aria-label="Whatsapp"
          href={`https://web.whatsapp.com/send?phone=+9779849828857&text=Hello Aashish, I want to know more about: ${trek_name}`}
          target="_blank"
          className="rounded-lg bg-G600 hover:bg-G700 text-white text-base font-bold cursor-pointer flex justify-center gap-3 items-center p-4"
        >
          <FaWhatsapp className="text-lg"/>
          Quick Inquiry
        </a>
        <div className="flex gap-2 justify-center items-center flex-wrap">
          <div className="font-semibold">Not Happy?
          </div>
          <Link
            aria-label="Create Page"
          to="/create"
          className="text-B500 hover:underline underline-offset-2 font-semibold"
        >
          Customize a trip
        </Link>
        </div>
      </div>
      {map && (
        <div className="flex flex-col gap-3 ">
        <div className="text-lg text-left font-bold">Route Map & Elevation</div>
        <div
          className="group w-full h-full flex items-center justify-center cursor-pointer"
          onClick={() => scrollToSection("maps")}
        >
          <div className="absolute flex md:hidden  group-hover:flex border border-white rounded-md px-2 py-1 text-white cursor-pointer">
            View
          </div>
          <img
            decoding="async"
            loading="lazy"
            src={BASE_MEDIA_URL + map}
            alt="Trek Map"
            className="w-full h-36 object-cover  rounded-md"
          />
        </div>
      </div>
      )}
    </div>
  );
}

export default TrekPricingSection;
