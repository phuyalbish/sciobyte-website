import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import logo from "@/assets/HTWhite.png";
import { fetchIndivisualCategories } from "@/apis/categories.js";
import NavbarTrekRegionTile from "@/components/tiles/NavbarTrekRegionTile.jsx";
import SearchTrekRegionTile from "@/components/tiles/SearchTrekRegionTile.jsx";

import { IoSearch } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { fetchSearch } from "@/apis/search.js";
import categories from "@/data/Categories.json";
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;

function Navbar({ activeMenu, setActiveMenu }) {
  const [isCompanyDropDown, setCompanyDropDown] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [typeDetails, setTypeDetails] = useState({});
  const [dropdowns, setDropdowns] = useState({});
  const navbarMenuRef = useRef(null);
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

  const getIndivisualType = async (slug) => {
    if (typeDetails[slug]) return;
    try {
      const response = await fetchIndivisualCategories(slug);
      setTypeDetails((prev) => ({ ...prev, [slug]: response }));
    } catch (error) {
      console.error("Error fetching trek:", error);
    }
  };
  const toggleDropdown = (slug) => {
    setDropdowns((prev) => {
      const newState = Object.keys(prev).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      return { ...newState, [slug]: !prev[slug] };
    });

    getIndivisualType(slug);
  };
  return (
    <>
      <div className="hidden md:flex bg-B500 text-white shadow-md items-center w-full justify-between text-sm md:text-base">
        <div className="w-full mx-auto flex items-center justify-between px-[4rem] py-4">
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
            className="flex flex-row justify-evenly md:justify-center gap-10 lg:gap-24 relative"
          >
            {categories?.map((item, index) => (
              <React.Fragment key={index}>
                <button
                  className={`${
                    activeMenu[item.name] ? "text-B900" : "text-white"
                  } flex items-center gap-1 transition hover:underline underline-offset-4`}
                  onClick={() => {
                    setActiveMenu(() => ({ [item.name]: true }));
                    setCompanyDropDown(false);
                    toggleDropdown(item.slug);
                  }}
                >
                  {item.name} <IoIosArrowDown />
                </button>

                {dropdowns[item.slug] && (
                  <div className="absolute top-14 left-0 m-auto w-full bg-white/65 backdrop-blur-md border border-white/20  p-3 rounded-md shadow-md transition-all duration-300 ease-in-out flex flex-col gap-3 text-N500">
                    {typeDetails[item.slug]?.treks?.map((trek) => (
                      <NavbarTrekRegionTile
                        key={trek.id}
                        type="travel"
                        image={trek.image}
                        name={trek.name}
                        id={trek.id}
                        setDropdowns={setDropdowns}
                      />
                    ))}

                    {typeDetails[item.slug]?.regions?.map((region) => (
                      <NavbarTrekRegionTile
                        key={region.id}
                        type="region"
                        image={region.image}
                        name={region.name}
                        id={region.id}
                        setDropdowns={setDropdowns}
                      />
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}

            <Link
              to="/blogs"
              className={`${
                activeMenu["blogs"] ? "text-B900" : "text-white"
              } transition hover:underline underline-offset-4`}
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
                } flex items-center gap-1 transition hover:underline underline-offset-4`}
                onClick={() => {
                  setActiveMenu({ company: true });
                  setDropdowns({});
                  setCompanyDropDown(!isCompanyDropDown);
                }}
              >
                Company <IoIosArrowDown />
              </button>

              {isCompanyDropDown && (
                <div className="absolute top-14 left-0 m-auto w-64 justify-start items-start  bg-white/65 backdrop-blur-md border border-white/20  p-3 rounded-md shadow-md transition-all duration-300 ease-in-out flex flex-col gap-3 text-N500">
                  <Link
                    to="/about"
                    className={`${
                      activeMenu["company"] ? "text-B900" : "text-white"
                    } transition hover:underline underline-offset-4`}
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setDropdowns({});
                      setCompanyDropDown(false);
                    }}
                  >
                    About Us
                  </Link>

                  <Link
                    to="/team"
                    className={`${
                      activeMenu["company"] ? "text-B900" : "text-white"
                    } transition hover:underline underline-offset-4`}
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setDropdowns({});
                      setCompanyDropDown(false);
                    }}
                  >
                    Team
                  </Link>

                  <Link
                    to="/contact"
                    className={`${
                      activeMenu["company"] ? "text-B900" : "text-white"
                    } transition hover:underline underline-offset-4`}
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setDropdowns({});
                      setCompanyDropDown(false);
                    }}
                  >
                    Contact Us
                  </Link>

                  <Link
                    to="/whyhellotrekkers"
                    className={`${
                      activeMenu["company"] ? "text-B900" : "text-white"
                    } transition hover:underline underline-offset-4`}
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setDropdowns({});
                      setCompanyDropDown(false);
                    }}
                  >
                    Why Hellotrekkers?
                  </Link>

                  <Link
                    to="/socialinitiative"
                    className={`${
                      activeMenu["company"] ? "text-B900" : "text-white"
                    } transition hover:underline underline-offset-4`}
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setDropdowns({});
                      setCompanyDropDown(false);
                    }}
                  >
                    Social Initiative
                  </Link>
                  <Link
                    to="/booking"
                    className={`${
                      activeMenu["company"] ? "text-B900" : "text-white"
                    } transition hover:underline underline-offset-4`}
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setDropdowns({});
                      setCompanyDropDown(false);
                    }}
                  >
                    Booking and Payments
                  </Link>

                  <Link
                    to="/termsandcondition"
                    className={`${
                      activeMenu["company"] ? "text-B900" : "text-white"
                    } transition hover:underline underline-offset-4`}
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
          <div
            className={` bg-white rounded-md overflow-hidden flex items-center px-2 py-1   gap-1 transition-all duration-300`}
          >
            <input
              type="text"
              className="outline-none bg-transparent h-full w-full text-sm text-N500 placeholder-N400"
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
        </div>

        {isSearchTile ? (
          <div className="absolute mt-80  right-5  z-40 max-w-[90vw] p-2 border-black bg-white/15 backdrop-blur-md border gap-2 border-white/20 rounded-lg flex felx-row overflow-x-scroll">
            {searchData?.map((item, index) => (
              <SearchTrekRegionTile
                key={index}
                name={item?.name}
                id={item?.id}
                type={item?.region_name}
                main_type={item?.main_type}
                image={item?.image}
              />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Navbar;
