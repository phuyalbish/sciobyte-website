import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import logo from "@/assets/HTWhite.png";
import { fetchIndivisualNavCategories } from "@/apis/categories.js";
import SearchTrekRegionTile from "@/components/tiles/SearchTrekRegionTile.jsx";

import { IoSearch } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { fetchSearch } from "@/apis/search.js";
import categories from "@/data/Categories.json";
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;

function Navbar({ activeMenu, setActiveMenu }) {
  const [isCompanyDropDown, setCompanyDropDown] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [categoryDetails, setCategoryDetails] = useState({});
  const [dropdowns, setDropdowns] = useState({});
  const navbarMenuRef = useRef(null);
  const [searchRegionID, setSearchRegionID] = useState(0)
  const [isSearchTile, setIsSearchTile] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    const handleOutsideNavbarClick = (event) => {
      setDropdowns((prevDropdowns) => {
        if (
          Object.keys(prevDropdowns).length > 0 &&
          navbarMenuRef.current &&
          !navbarMenuRef.current.contains(event.target)
        ) {
          return {};
        }
        return prevDropdowns;
      });
    };

    window.addEventListener("click", handleOutsideNavbarClick);

    return () => {
      window.removeEventListener("click", handleOutsideNavbarClick);
    };
  }, []);

  const handleSearch = async () => {
    if (searchText.trim() !== "") {
      const response = await fetchSearch(searchText);
      setSearchData(response.data);
      setIsSearchTile(true);
    } else {
      console.log("No search text entered");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > window.innerHeight * 0.1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const toggleDropdown = (slug) => {
    setDropdowns((prev) => {
      const newState = Object.keys(prev).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      return { ...newState, [slug]: !prev[slug] };
    });


  const getIndivisualCategory = async (slug) => {
    if (categoryDetails[slug]) return;
    try {
      const response = await fetchIndivisualNavCategories(slug);
      setCategoryDetails((prev) => ({ ...prev, [slug]: response }));
    } catch (error) {
      console.error("Error fetching trek:", error);
    }
  };

    getIndivisualCategory(slug);
  };
  return (
    <>
      <div className="relative hidden md:flex bg-B500 text-white shadow-md items-center w-full justify-between text-sm md:text-base">
        <div className="w-full h-16 mx-auto flex items-center justify-between px-[4rem] gap-6 py-4">
          <Link
            to="/"
            onClick={() => {
              setActiveMenu({});
              setDropdowns({});
              setCompanyDropDown(false);
            }}
          >
            <img
              decoding="async" // Avoid re-fetching if data already exists
              loading="lazy"
              src={logo}
              className={`w-8 ml-5 md:ml-0 aspect-square transition-all duration-300 ${
                showLogo ? "scale-100" : "scale-0"
              }`}
              alt="Logo"
            />
          </Link>

          <div
            ref={navbarMenuRef}
            className="flex flex-row justify-evenly md:justify-center gap-10 lg:gap-16 w-full relative"
          >
            {categories?.map((item, index) => (
              <React.Fragment key={index}>
                <button
                  className={`${
                    activeMenu[item.name] ? "text-B900" : "text-white"
                  } flex items-center gap-1 transition hover:underline underline-offset-4 text-sm`}
                  onClick={() => {
                    setActiveMenu(() => ({ [item.name]: true }));
                    setCompanyDropDown(false);
                    toggleDropdown(item.slug);
                  }}
                >
                  {item.name} <IoIosArrowDown />
                </button>


               {dropdowns[item.slug] && categoryDetails[item.slug] && (
            
                <div className="absolute top-14 left-0 w-full bg-white/65 backdrop-blur-md border border-white/20 p-2 rounded-md shadow-md transition-all duration-300 ease-in-out flex flex-col gap-3 text-N900 text-sm justify-start items-start">
               
                  <div className="flex gap-2  text-sm w-full">
                    <div className=" w-fit   flex-col  ">

                    {categoryDetails[item?.slug]?.regions?.map((region, index) => (
                    <div className= {`${
                    searchRegionID == index ? "bg-B200" : "bg-transparent"
                  }  hover:bg-B200 p-2 rounded flex flex-col text-sm w-fit text-start cursor-pointer `} key={index} onClick={ () =>{
                      setSearchRegionID(index)
                    }}>{region?.name} 
                    {/* ({region?.trek_count}) */}
                    </div>
                  ))}

                    </div>

                    <div className="p-2   justify-start gap-2 items-start  flex-row ">
                    {categoryDetails[item.slug]?.regions[searchRegionID]?.treks.map((trek, index) => (
                      <Link to={`/trek/${trek?.slug}`} className="w-fit  items-start text-sm hover:underline  underline-offset-4" key={index} onClick={() => {
                          setActiveMenu({ blogs: true });
                          setDropdowns({});
                          setCompanyDropDown(false);
                        }}>{trek?.name}</Link>
                    ))}
                    </div>
                  </div>
                  <div className="flex w-full justify-end">
              <Link to={`/category/${categoryDetails[item.slug]?.slug}`} className=" w-fit  flex flex-row justify-end text-xs text-N500 hover:text-N900 cursor-pointer"  onClick={() => {
                setActiveMenu({ blogs: true });
                setDropdowns({});
                setCompanyDropDown(false);
              }}
              >View all {categoryDetails[item?.slug]?.name}</Link>
              </div>
                </div>
              )}
              </React.Fragment>
            ))}

            <Link
              to="/blogs"
              className={`${
                activeMenu["blogs"] ? "text-B900" : "text-white"
              } transition hover:underline underline-offset-4 text-sm`}
              onClick={() => {
                setActiveMenu({ blogs: true });
                setDropdowns({});
                setCompanyDropDown(false);
              }}
            >
              Blogs and Tips
            </Link>
            <div className="relative">
              <button
                className={`${
                  activeMenu["company"] ? "text-B900" : "text-white"
                } flex items-center gap-1 transition hover:underline underline-offset-4 text-sm`}
                onClick={() => {
                  setActiveMenu({ company: true });
                  setDropdowns({});
                  setCompanyDropDown(!isCompanyDropDown);
                }}
              >
                Company <IoIosArrowDown />
              </button>

              {isCompanyDropDown && (
                <div className="absolute top-14 left-0 m-auto w-64 justify-start items-start text-N900  bg-white/65 backdrop-blur-md border border-white/20  p-3 rounded-md shadow-md transition-all duration-300 ease-in-out flex flex-col gap-5 text-sm">
                  
                  <Link
                    to="/contact"
                    className="text-N900  hover:underline"

                    onClick={() => {
                      setDropdowns({});
                      setCompanyDropDown(false);
                    }}
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/about"
                    className="text-N900  hover:underline"
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setDropdowns({});
                      setCompanyDropDown(false);
                    }}
                  >
                    About Us
                  </Link>


                  <Link
                    to="/about/why"
                    
                    className="text-N900 hover:underline"
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setDropdowns({});
                      setCompanyDropDown(false);
                    }}
                  >
                    Why Hellotrekkers?
                  </Link>


                  <Link
                    to="/about/team"
                    
                    className="text-N900 hover:underline"
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setDropdowns({});
                      setCompanyDropDown(false);
                    }}
                  >
                    Team
                  </Link>


                  <Link
                    to="/about/homestay"
                    
                    className="text-N900 hover:underline"
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setDropdowns({});
                      setCompanyDropDown(false);
                    }}
                  >
                    Our Homestay
                  </Link>


                  <Link
                    to="/about/csr"
                    
                    className="text-N900  hover:underline"
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setDropdowns({});
                      setCompanyDropDown(false);
                    }}
                  >
                    Social Initiative
                  </Link>
                  <Link
                    to="/about/booking"
                    
                    className="text-N900 hover:underline"
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setDropdowns({});
                      setCompanyDropDown(false);
                    }}
                  >
                    Booking and Payments
                  </Link>

                  <Link
                    to="/privacy"
                    
                    className="text-N900 hover:underline"
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setDropdowns({});
                      setCompanyDropDown(false);
                    }}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/termsandcondition"
                    
                    className="text-N900 hover:underline"
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setDropdowns({});
                      setCompanyDropDown(false);
                    }}
                  >
                    Terms and Condition
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="relative">
            
          <div

            className={` bg-white rounded-md overflow-hidden relative  items-center px-2 py-1   gap-1 transition-all duration-300 hidden lg:flex`}
          >
            <input
              type="text"
              className="outline-none bg-transparent h-full w-full text-xs text-N500 placeholder-N400"
              placeholder="Search Keywords"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <IoSearch
              className="size-6 text-N300 hover:text-N500 cursor-pointer select-none"
              onClick={handleSearch}
            />
            {isSearchTile && (
              <LiaTimesSolid
                className="size-6  text-N300 hover:text-N500 cursor-pointer select-none"
                onClick={() => setIsSearchTile(false)}
              />
            )}
          </div>
           {isSearchTile ? (
          <div className="absolute  right-0 top-12 z-40 max-w-[90vw]  p-2 bg-white/70 backdrop-blur-md  gap-2 border-white/20 rounded-lg flex felx-row overflow-x-auto">
            {searchData?.map((item, index) => (
              <SearchTrekRegionTile
                key={index}
                name={item?.name}
                image={item?.image}
                slug={item?.slug}
                category_name={item?.category_name}
                category_slug={item?.category_slug}
                main_category={item?.main_category}
                main_category_slug={item?.main_category_slug}
              />
            ))}
          </div>
        ) : (
          ""
        )}
        </div>


          </div>

       
      </div>
    </>
  );
}

export default Navbar;
