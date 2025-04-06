import React, { useState, useEffect } from "react";
// import vid from "@/assets/SplashVid.mp4";
import SplashVidGif from "@/assets/SplashVideo.gif";
import imgVector from "@/assets/vectorSplashImg.png";
import { IoSearch } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { fetchSearch } from "@/apis/search.js";
import SearchTrekRegionTile from "@/components/tiles/SearchTrekRegionTile.jsx";
function SplashSection() {
  const [isSearchTile, setIsSearchTile] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState(null);
  const handleSearch = async () => {
    if (searchText.trim() !== "") {
      const response = await fetchSearch(searchText);
      console.log(response.data);
      setSearchData(response.data);
      setIsSearchTile(true);
      console.log("Searching for:", searchText);
    } else {
      console.log("No search text entered");
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute h-full inset-0  w-full">
        <img 
          className="w-full h-full object-cover pb-5 z-0 brightness-75"
          src={SplashVidGif}
          alt="SplashVidGif"
        />
      </div>

      <div className="relative w-full z-30 flex flex-col justify-between h-[60vh] sm:h-[70vh] md:h-[93vh] lg:[100vh]   gap-10 items-center">
        <div></div>
        <div
          className={`flex flex-col w-full p-10 ${
            !isSearchTile ? "gap-10" : "gap-2"
          }   items-center justify-center`}
        >
          {!isSearchTile ? (
            <div className=" text-white font-bold z-40 select-none font-dance text-3xl md:text-5xl">
              Creating your Tales from our Trails
            </div>
          ) : (
            ""
          )}
          <div className="bg-white w-full rounded-md overflow-hidden flex items-center px-5  h-10  gap-1 shadow-xl  md:h-14 max-w-[95vw]  md:w-[50vw]">
            <input
              type="text"
              className="outline-none bg-transparent h-full w-full md:text-base text-md text-N500 placeholder-N300"
              placeholder="Nepal welcomes you, dive in!"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <IoSearch
              className=" md:size-8 size-6 text-N300 hover:text-N500 cursor-pointer select-none"
              onClick={handleSearch}
            />
            {isSearchTile && (
              <LiaTimesSolid
                className="md:size-8 size-6  text-N300 hover:text-N500 cursor-pointer select-none"
                onClick={() => setIsSearchTile(false)}
              />
            )}
          </div>
          {isSearchTile ? (
            <div className="absolute mt-80 z-40 max-w-[90vw] p-2 border-black bg-white/15 backdrop-blur-md border gap-2 border-white/20 rounded-lg flex felx-row overflow-x-scroll">
              {searchData?.map((item, index) => (
                <SearchTrekRegionTile
                  key={index}
                  name={item?.name}
                  id={item?.id}
                  type={item?.type_name}
                  main_type={item?.main_type}
                  image={item?.image}
                />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        <img
          decoding="async"
          loading="lazy"
          src={imgVector}
          alt=""
          className="w-full bottom-1 object-cover z-30"
        />
      </div>
    </div>
  );
}

export default SplashSection;
