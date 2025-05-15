import  { useState } from "react";
import splashImg from "@/assets/SplashImg.webp";
import imgVector from "@/assets/vectorSplashImg.svg";
import { IoSearch } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { fetchSearch } from "@/apis/search.js";
import SearchTrekRegionTile from "@/components/tiles/SearchTrekRegionTile.jsx";
function SplashSection() {
const [isSearchTile, setIsSearchTile] = useState(false);
const [searchText, setSearchText] = useState("");
const [searchData, setSearchData] = useState([]);
const [errMsg, setErrMsg] = useState("");
const [loaded, setLoaded] = useState(false);

const handleSearch = async () => {
  if (searchText.trim() !== "") {
    const response = await fetchSearch(searchText);

    if (response.data.length > 0) {
      setSearchData(response.data); 
      setIsSearchTile(true);
      setErrMsg("");                 
    } else {
      setErrMsg("Treks not found");   
       setTimeout(() => {
        setErrMsg("");
      }, 5000);

      setTimeout(() => {
       
      setSearchText("");
      }, 5000);
      
    }
  }
};
  return (
    <div className="relative w-full h-full">
      <div className="absolute h-full inset-0  w-full">
        {!loaded && (
          <img
          src={splashImg}
          width="100%"
          height="100%" 
          className="absolute  top-0 left-0 z-0  rounded-md  w-full h-full  object-cover "
        />
        )}
      <video
          className={` ${!loaded ? "opacity-0" : "opacity-100"} w-full h-full  object-cover pb-5 z-0 brightness-75`}
          src="https://res.cloudinary.com/ddpus4suz/video/upload/v1747062872/o5hhix712ukugozt5grh.mp4"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setLoaded(true)}
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
            <div className=" text-white font-bold z-40 select-none font-dance splash-heading">
              Creating your Tales from our Trails
            </div>
          ) : (
            ""
          )}
          <div className="bg-white w-full rounded-full overflow-hidden flex items-center pl-5 p-0.5  h-10  gap-1 shadow-xl  md:h-14 max-w-[95vw]  md:w-[50vw] transition-colors duration-500">
            <input
              type="text"
              className="outline-none bg-transparent h-full w-full md:text-base text-xs text-N500 placeholder-N500 "
              placeholder="Nepal welcomes you, dive in!"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            {!isSearchTile && (
              <div className="bg-B500 hover:bg-transparent cursor-pointer border border-transparent hover:border-B500 group hover h-full aspect-square p-1 rounded-full flex justify-center items-center transition-colors duration-500" onClick={handleSearch}>
                <IoSearch
                  className="size-5 text-white group-hover:text-B500  select-none transition-colors duration-500"
                  
                />
              </div>
            )}

            {isSearchTile && (
              <div className="bg-B500 hover:bg-transparent cursor-pointer border border-transparent hover:border-B500 group hover h-full aspect-square p-1 rounded-full flex justify-center items-center transition-colors duration-500"  onClick={() => setIsSearchTile(false)}>
                <LiaTimesSolid
                  className="size-5 text-white group-hover:text-B500 select-none transition-colors duration-500"
                 
                />
              </div>
            )}
          </div>
          {isSearchTile && (
            searchData.length ? (
              <div className="z-40 max-w-[90vw] p-2 border-black bg-white/15 backdrop-blur-md border gap-2 border-white/20 rounded-lg flex flex-row overflow-x-auto">
                {searchData.map((item, index) => (
                  <SearchTrekRegionTile
                    key={index}
                    name={item?.name}
                    image={item?.image}
                    slug={item?.slug}
                    main_category={item?.main_category}
                    main_category_slug={item?.main_category_slug}
                  />
                ))}
              </div>
            ) :""
          )}
          {errMsg && (
              <div className="absolute mt-80 z-40 max-w-[90vw] p-2 border-black bg-white/15 backdrop-blur-md border gap-2 border-white/20 rounded-lg flex flex-row overflow-x-auto">
                Treks not found
              </div>
            )}
        </div>
        <img
          decoding="async"
          loading="lazy"
          src={imgVector}
          alt="Vector Splash Image"
          className="w-full bottom-1 object-cover z-30"
        />
      </div>
    </div>
  );
}

export default SplashSection;
