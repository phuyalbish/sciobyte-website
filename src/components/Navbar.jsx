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
import Pen from "@/assets/icons/Pen.svg"
import { FaHeart } from "react-icons/fa";

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
        <div className="w-full h-16 mx-auto flex items-center justify-between px-[4rem] gap-3 py-4">

          <div className="relative flex gap-2 items-center ">
            
           <Link

            aria-label="Home Page"
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
              alt="Logo Image"
            />
          </Link>

          <div

            className={` border border-white rounded-full bg-white/10  overflow-hidden relative h-fit w-full  items-center p-0.5   gap-1 transition-all duration-300 hidden lg:flex 
              ${
                showLogo ? "opacity-100" : "opacity-0"
              }`}
          >
            <input
              type="text"
              className="outline-none bg-transparent h-full w-full text-sm text-white placeholder-white pl-3 "
              placeholder="Search Keywords"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />


              {!isSearchTile && (
              <div className="bg-white hover:bg-transparent border border-transparent hover:border-white cursor-pointer group hover h-full aspect-square p-1 rounded-full flex justify-center items-center transition-colors duration-500" onClick={handleSearch}>
                <IoSearch
                  className="size-5 text-B500 group-hover:text-white select-none transition-colors duration-500"
                />
              </div>
            )}

            {isSearchTile && (
              <div className="bg-white hover:bg-transparent border border-transparent hover:border-white cursor-pointer group hover h-full aspect-square p-1 rounded-full flex justify-center items-center transition-colors duration-500"  onClick={() => setIsSearchTile(false)}>
                <LiaTimesSolid
                  className="size-5 text-B500 group-hover:text-white  select-none transition-colors duration-500"
                 
                />
              </div>
            )}
          </div>


           {showLogo && isSearchTile && searchData?.length ? (
          <div className="absolute  left-0 top-12 z-40 max-w-[90vw]  p-2 bg-white/70 backdrop-blur-md  gap-2 border-white/20 rounded-lg flex felx-row overflow-x-auto">
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

          <div
            ref={navbarMenuRef}
            className="flex flex-row justify-evenly md:justify-center gap-6  lg:gap-10 w-fit  relative"
          >
            {categories?.map((item, index) => (
              <React.Fragment key={index}>
                <button
                  className={`${
                    activeMenu[item.name] ? "text-B900" : "text-white"
                  } flex items-center gap-1 transition text-sm`}
                  onClick={() => {
                    setActiveMenu(() => ({ [item.name]: true }));
                    setCompanyDropDown(false);
                    toggleDropdown(item.slug);
                  }}
                >
                  {item.name} <IoIosArrowDown />
                </button>


               {dropdowns[item.slug] && categoryDetails[item.slug] && (
            
                <div className="absolute top-12 left-0 w-full bg-white/65 backdrop-blur-md border border-white/20 p-2 rounded-md shadow-md transition-all duration-300 ease-in-out flex flex-col gap-3 text-N900 text-sm justify-start items-start">
               
                  <div className="flex gap-2  text-sm w-full ">
                    <div className="flex flex-col gap-2 w-4/12 border-0 border-r-2">

                    {categoryDetails[item?.slug]?.regions?.map((region, index) => (
                    <div className= {`${
                          searchRegionID == index ? "bg-B100" : "bg-transparent"
                        }  hover:bg-B200 p-2 rounded flex flex-col  text-sm w-fit text-start cursor-pointer `} key={index} onClick={ () =>{
                            setSearchRegionID(index)
                          }}>{region?.name} 
                          </div>
                        ))}

                    </div>

                    <div className="px-2   justify-start gap-3  flex flex-col items-start">
                    {categoryDetails[item.slug]?.regions[searchRegionID]?.treks.map((trek, index) => (
                      <Link
                        aria-label={`Trek - ${trek?.slug}`} to={`/trek/${trek?.slug}`} className="w-fit text-sm text-start items-start  hover:text-G500" key={index} onClick={() => {
                          setActiveMenu({ });
                          setDropdowns({});
                          setCompanyDropDown(false);
                        }}>{trek?.name}</Link>
                    ))}
                    </div>
                  </div>
                  <div className="flex w-full justify-end">
                  <Link aria-label={`Category - ${categoryDetails[item.slug]?.slug}`} to={`/category/${categoryDetails[item.slug]?.slug}`} className=" w-fit  flex flex-row justify-end text-xs text-N500 hover:text-N900 cursor-pointer"  onClick={() => {
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
              aria-label="Blogs"
              className={`${
                activeMenu["blogs"] ? "text-B900" : "text-white"
              } transition text-sm`}
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
                } flex items-center gap-1 transition text-sm`}
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
                  aria-label="Contact"
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

                  aria-label="About Us"
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
                    
                  aria-label="About Us -Why Hellotrekkers"
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
                    
                  aria-label="About Us- Team"
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
                    
                  aria-label="About Us - Home Stay"
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
                    
                  aria-label="About Us - CSR"
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
                    
                  aria-label="About Us - Booking"
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
                    
                  aria-label="Privacy Policy"
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
                    
                  aria-label="Terms And Conditions"
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

          <div className="relative flex gap-4  items-center">
                 <Link  to="/liked" aria-label="Liked Page">
                <FaHeart   className="size-6  text-red-500 hover:text-white cursor-pointer select-none"/>
                </Link>
              <Link to="/create" aria-label="Create Your Trip"
                      className=" group flex gap-2 items-center justify-center w-full text-sm px-4 py-2 bg-white shadow-lg rounded-md text-B500 hover:bg-transparent border border-transparent hover:border-white hover:text-white hover:shadow-none transition-colors duration-500"
                      onClick={() => {
                        setActiveMenu({ company: true });
                        setDropdowns({});
                        setCompanyDropDown(false);
                      }}
                    >

                    <p className="text-sm"> Create Your Trip</p>
                <img src={Pen}
                alt="Create Your Trip"
                  className="size-6  text-white hover:text-G800 cursor-pointer select-none"
                />
            </Link>
            </div>


          </div>

       
      </div>
    </>
  );
}

export default Navbar;
