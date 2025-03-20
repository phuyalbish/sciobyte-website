import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import CategoryTile from "@/components/tiles/CategoryTile";
const API_URL = import.meta.env.VITE_BASE_API_URL;
function CategorySection() {
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
    <div className="relative md:px-[4rem] bg-black pb-10  w-full flex flex-col gap-3 md:gap-7 flex-grow-0 justify-center items-center">
      <div className="flex items-center justify-center gap-2 flex-wrap home-headings">
        <span className="text-white">Your</span>
        <span className="font-bold text-B300">PREFERENCE</span>
        <span className="text-white">is our</span>{" "}
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
          <div className="w-full md:hidden">
            <EmblaCarousel>
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
  );
}

export default CategorySection;
