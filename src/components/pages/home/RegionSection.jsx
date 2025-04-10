import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import RegionTile from "@/components/tiles/RegionTile";
const API_URL = import.meta.env.VITE_BASE_API_URL;
function RegionSection() {
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(`${API_URL}/regions/all/`)
      .then((response) => {
        setRegions(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching regions:", err);
        setError("Failed to load regions");
        setLoading(false);
      });
  }, []);
  return (
    <div className="relative md:px-[4rem] bg-black pb-10  w-full flex flex-col gap-3 md:gap-7 flex-grow-0 justify-center items-center ">
      <div className="flex items-center justify-center text-B500 m-3 p-3 rounded-md bg-white font-liches font-regular gap-2 flex-wrap text-3xl md:text-4xl ">
        YOUR PREFERENCE IS OUR PRIORITY
      </div>

      {loading ? (
        <p className="text-white text-lg">Loading regions...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] bottom_popup">
            {Array.isArray(regions) && regions.length > 0 ? (
              regions
                .slice(0, 2)
                .map((region, index) => (
                  <RegionTile
                    key={index}
                    img={region.icon}
                    name={region.name}
                  />
                ))
            ) : (
              <p className="text-gray-500">No regions available</p>
            )}
          </div>
          <div className="w-full md:hidden bottom_popup">
            <EmblaCarousel>
              {regions?.slice(0, 2).map((region, index) => (
                <div
                  key={index}
                  className="embla__slide min-w-full  flex  justify-center"
                >
                  <RegionTile
                    key={index}
                    img={region.image}
                    name={region.name}
                    id={region.id}
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

export default RegionSection;
