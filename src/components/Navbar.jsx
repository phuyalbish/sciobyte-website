import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import logo from "@/assets/htwhite.svg";
import { fetchTrekCategories } from "@/apis/categories.js";
import SearchTrekRegionTile from "@/components/tiles/SearchTrekRegionTile.jsx";
import { GoArrowUpRight } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { fetchSearch } from "@/apis/search.js";
import Pen from "@/assets/icons/Pen.svg"
import Heart from "@/assets/Heart.svg";

function Navbar({ activeMenu, setActiveMenu }) {

  const [isCompanyDropDown, setCompanyDropDown] = useState(false);
  const [isTrekDropDown, setTrekDropDown] = useState(false);
  const companyDropdownRef = useRef(null);
  const companyButtonRef = useRef(null);
  const trekDropdownRef = useRef(null);
  const trekButtonRef = useRef(null);



  const [showLogo, setShowLogo] = useState(false);
  const [trekRegionDetail, setTrekRegionDetail] = useState({});
  const navbarMenuRef = useRef(null);
  const [searchRegionID, setSearchRegionID] = useState(0);
  const [isSearchTile, setIsSearchTile] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      
      if (
        companyDropdownRef.current &&
        !companyDropdownRef.current.contains(event.target) &&
        companyButtonRef.current &&
        !companyButtonRef.current.contains(event.target)
      ) {
        setCompanyDropDown(false);
      }

      if (
        trekDropdownRef.current &&
        !trekDropdownRef.current.contains(event.target) &&
        trekButtonRef.current &&
        !trekButtonRef.current.contains(event.target)
      ) {
        setTrekDropDown(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
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

  useEffect(() => {
    (async () => {
      const response = await fetchTrekCategories()
      console.log(response)
      setTrekRegionDetail(response);
    })();
  }, []);



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
              setTrekDropDown(null);
              setCompanyDropDown(false);
            }}
          >
            <img
              decoding="async"
              loading="lazy"
              src={logo}
              className={`w-8 ml-5 md:ml-0 aspect-square transition-all duration-300 ${
                showLogo ? "scale-100" : "scale-0"
              }`}
              alt="Logo Image"
            />
          </Link>

          <div

            className={` border border-white rounded-full bg-white/10  overflow-hidden relative h-fit w-48  items-center p-0.5   gap-1 transition-all duration-300 hidden lg:flex 
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
          <div className="absolute  left-0 top-11 z-40 max-w-[90vw]  p-2 bg-white/70 backdrop-blur-md  gap-2 border-white/20 rounded-lg flex felx-row overflow-x-auto">
            {searchData?.map((item, index) => (
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
        ) : (
          ""
        )}
        </div>

          <div
            ref={navbarMenuRef}
            className="flex flex-row justify-evenly md:justify-center gap-6  lg:gap-10 w-full  relative"
          >
                <button
                ref={trekButtonRef}
                  className={`${
                    activeMenu["treks"] ? "text-B900" : "text-white"
                  } flex items-center gap-1 transition text-sm`}
                  onClick={() => {
                    setActiveMenu(() => ({ ["treks"]: true }));
                    setCompanyDropDown(false);
                    setTrekDropDown((prev) => !prev)
                  }}
                >
                  Let's Trek <IoIosArrowDown />
                </button>


               {isTrekDropDown && (
            
                <div 
                  ref={trekDropdownRef}
                  className="absolute top-11 left-0 w-full bg-white/80 backdrop-blur-md rounded-md shadow-md transition-all duration-300 ease-in-out flex flex-col gap-3 text-N900 text-sm justify-start items-start">
               
                   <div className="flex gap-2 text-sm w-full flex-grow h-full">
                    <div className="flex flex-col flex-shrink-0 gap-2 pr-0 p-2 bg-B500 rounded-md rounded-r-none w-100  h-100 mr-2">

                    {trekRegionDetail?.map((region, index) => (
                    <div className= {`${
                          searchRegionID == index ? "bg-white text-B500" : "bg-transparent text-white"
                        }  hover:bg-white hover:text-B500  p-2 pr-4 rounded rounded-r-none text-sm text-start items-center cursor-pointer flex gap-2 `} key={index} onClick={ () =>{
                            setSearchRegionID(index)
                          }}>
                            <div>{region?.name} </div>
                            <Link  to={`/region/${region?.slug}`}
                             onClick={() => {
                          setTrekDropDown(null);
                        }} 
                            className="hover:bg-G300 rounded-md p-1 h-fit group">

                              <GoArrowUpRight className="text-base group-hover:text-white"/>
                            </Link>
                          </div>
                        ))}
                    </div>

                    <div className="p-2 pt-6 justify-start gap-3  flex flex-col items-start">
                    {trekRegionDetail?.[searchRegionID]?.treks.map((trek, index) => (
                      <Link
                        aria-label={`Trek - ${trek?.slug}`} to={`/trek/${trek?.slug}`} className="w-fit text-sm text-start items-start  hover:text-G500" key={index} onClick={() => {
                          setActiveMenu({});
                          setTrekDropDown(null);
                        }}>{trek?.name}</Link>
                    ))}

                  <div className="flex  w-full justify-start mt-2">
                        <Link aria-label="Trek Page" to="/category/treks" className=" w-fit  flex flex-row justify-end items-center gap-1 text-xs text-N500 hover:text-N900 cursor-pointer"  onClick={() => {
                          setTrekDropDown(null);
                        }} ><div>View all Treks</div> <GoArrowUpRight className="text-base"/>
                        </Link>
                  </div>
                    </div>
                  </div>
            </div>
              )}

            <Link
              to="/blogs"
              aria-label="Blogs"
              className={`${
                activeMenu["blogs"] ? "text-B900" : "text-white"
              } transition text-sm`}
              onClick={() => {
                setActiveMenu({ blogs: true });
                    setTrekDropDown(false)
                setCompanyDropDown(false);
              }}
            >
              Blogs and Tips
            </Link>
            <div className="relative">
              <button
                ref={companyButtonRef}
                className={`${
                  activeMenu["company"] ? "text-B900" : "text-white"
                } flex items-center gap-1 transition text-sm`}
                onClick={() => {
                  setActiveMenu({ company: true });
                  
                setTrekDropDown(false)
                setCompanyDropDown((prev) => !prev);
                }}
              >
                Company <IoIosArrowDown />
              </button>

              {isCompanyDropDown && (
                <div 
                  ref={companyDropdownRef}
                    className="absolute top-11 left-0 m-auto w-64 justify-start items-start text-N900  bg-white/80 backdrop-blur-md border border-white/20  p-3 rounded-md shadow-md transition-all duration-300 ease-in-out flex flex-col gap-5 text-sm">
                  
                  <Link
                  aria-label="Contact"
                    to="/contact"
                    className="text-N900  hover:text-G500"

                    onClick={() => {
                      setCompanyDropDown(false);
                    }}
                  >
                    Contact Us
                  </Link>
                  <Link

                  aria-label="About Us"
                    to="/about"
                    className="text-N900  hover:text-G500"
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setCompanyDropDown(false);
                    }}
                  >
                    About Us
                  </Link>


                  <Link
                    to="/about/why"
                    
                  aria-label="About Us -Why Hellotrekkers"
                    className="text-N900 hover:text-G500"
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setCompanyDropDown(false);
                    }}
                  >
                    Why Hellotrekkers?
                  </Link>


                  <Link
                    to="/about/team"
                    
                  aria-label="About Us- Team"
                    className="text-N900 hover:text-G500"
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setCompanyDropDown(false);
                    }}
                  >
                    Team
                  </Link>


                  <Link
                    to="/about/homestay"
                    
                  aria-label="About Us - Home Stay"
                    className="text-N900 hover:text-G500"
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setCompanyDropDown(false);
                    }}
                  >
                    Our Homestay
                  </Link>


                  <Link
                    to="/about/csr"
                    
                  aria-label="About Us - CSR"
                    className="text-N900  hover:text-G500"
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setCompanyDropDown(false);
                    }}
                  >
                    Social Initiative
                  </Link>
                  <Link
                    to="/about/booking"
                    
                  aria-label="About Us - Booking"
                    className="text-N900 hover:text-G500"
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setCompanyDropDown(false);
                    }}
                  >
                    Booking and Payments
                  </Link>

                  <Link
                    to="/privacy"
                    
                  aria-label="Privacy Policy"
                    className="text-N900 hover:text-G500"
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setCompanyDropDown(false);
                    }}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/termsandcondition"
                    
                  aria-label="Terms And Conditions"
                    className="text-N900 hover:text-G500"
                    onClick={() => {
                      setActiveMenu({ company: true });
                      setCompanyDropDown(false);
                    }}
                  >
                    Terms and Condition
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="relative flex gap-4   items-center">
                 <Link  to="/liked" aria-label="Liked Page" className=" bg-white/60 p-3 rounded-md shadow-lg hover:bg-white">
                

                    <img
                      decoding="async"
                      loading="lazy"
                      src={Heart}
                      className={`ml-5 md:ml-0 aspect-square transition-all duration-300`}
                      alt="Logo Image"
                    />
                </Link>
              <Link to="/create" aria-label="Create Your Trip"
                      className=" group flex gap-2 items-center justify-center w-44 text-sm  p-2 bg-white shadow-lg rounded-md text-B500 hover:bg-transparent border border-transparent hover:border-white hover:text-white hover:shadow-none transition-colors duration-500"
                      onClick={() => {
                        setActiveMenu({ company: true });
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
