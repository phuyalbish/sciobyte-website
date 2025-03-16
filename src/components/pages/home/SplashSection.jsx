import React, { useState, useEffect } from "react";
import img from "@/assets/SplashScreenImg.png";
import imgVector from "@/assets/vectorSplashImg.png";
import { IoSearch } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { fetchSearch } from "@/apis/search.js";
import SearchTrekCategoryTile from "@/components/tiles/SearchTrekCategoryTile.jsx";
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
    <div className="relative">
      <img
        src={img}
        alt=""
        className="w-full h-[60vh] md:h-[80vh] lg:h-screen pb-5   object-cover z-0 absolute"
      />
      <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen gap-24 sm:gap-20 md:gap-48 lg:gap-32     flex flex-col  items-center justify-end">
        <div
          className={`flex flex-col ${
            !isSearchTile ? "gap-10" : "gap-2"
          }  md:top-[40%]    w-[70vw] items-center justify-center`}
        >
          {!isSearchTile ? (
            <div className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl  text-white font-bold z-40 select-none">
              Creating your Tales from our Trails
            </div>
          ) : (
            ""
          )}
          <div className="bg-white z-40  rounded-md overflow-hidden flex items-center px-5  h-10  gap-5  md:h-14   md:w-[50vw]">
            <input
              type="text"
              className="outline-none bg-white h-full w-full"
              placeholder="Search Your Trip"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <IoSearch
              className="size-8 text-N300 hover:text-N500 cursor-pointer select-none"
              onClick={handleSearch}
            />
            {isSearchTile && (
              <LiaTimesSolid
                className="size-8 text-N300 hover:text-N500 cursor-pointer select-none"
                onClick={() => setIsSearchTile(false)}
              />
            )}
          </div>
          {isSearchTile ? (
            <div className="w-full  bg-white/15 backdrop-blur-md border p-2 gap-2 border-white/20 rounded-lg flex flex-row  overflow-x-scroll">
              {searchData?.map((item, index) => (
                <SearchTrekCategoryTile
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
          src={imgVector}
          alt=""
          className="w-full   bottom-1 object-cover  z-30 "
        />
      </div>
    </div>
  );
}

export default SplashSection;
