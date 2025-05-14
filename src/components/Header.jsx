import React, { useState, useEffect, useRef } from "react";
import Logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Pen from "@/assets/icons/Pen.svg"
import { IoIosArrowDown } from "react-icons/io";
import Heart from "@/assets/Heart.svg";
import Container from "@/components/Container.jsx";
import { fetchTrekCategories } from "@/apis/categories.js";
import { GoArrowUpRight } from "react-icons/go";

function Header({ activeMenu, setActiveMenu }) {
  const [isDropDown, setIsDropDown] = useState(false);
    const [isTrekDropDown, setTrekDropDown] = useState(false);
    const trekDropdownRef = useRef(null);
    const trekButtonRef = useRef(null);
      const [searchRegionID, setSearchRegionID] = useState(0);
  
    const [trekRegionDetail, setTrekRegionDetail] = useState({});
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        
        
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
  

  
    useEffect(() => {
      (async () => {
        const response = await fetchTrekCategories()
        setTrekRegionDetail(response);
      })();
    }, []);
  
  

  return (
    <>
        <Container>
          <header className=" z-30 text-white py-[1rem] w-full flex flex-row  justify-between">
            <Link
            aria-label="Home Page"
              to="/"
              onClick={() => {
                setActiveMenu({});
                setIsDropDown(false);
              }}
            >
              <img
                decoding="async"
                loading="lazy"
                src={Logo}
                alt="Logo"
                className="lg:w-48 md:w-32 sm:w-28 w-24 h-auto"
              />
            </Link>

            <div className="md:flex hidden items-center gap-5">
              <a href="mailto:info@hellotrekkers.com" aria-label="email to the owner" className="flex-col justify-end items-end cursor-pointer group">
                <div className="text-base text-N900 flex gap-2 items-center justify-end">
                  <HiOutlineMail />
                  Email us
                </div>
                <div className="md:text-base text-N900 font-bold group-hover:underline underline-offset-4">
                  info@hellotrekkers.com
                </div>
              </a>

              <div className="flex  flex-col justify-end items-end">
                <div className="text-base text-N900 flex gap-2 items-center justify-end">
                  <FaWhatsapp className="text-green-500" />
                  WhatsApp
                </div>
                <div className="md:text-base text-N900 font-bold">+977-9709707037</div>
              </div>
            </div>
            <div className="flex gap-4 justify-center items-center md:hidden ">

                 <Link  to="/liked" aria-label="Liked Page">
                    <img
                      decoding="async"
                      loading="lazy"
                      src={Heart}
                      className="ml-5 md:ml-0 aspect-square transition-all duration-300"
                      alt="Logo Image"
                    />
                </Link>
           <div className="md:hidden">
              {isDropDown ? (
                <IoClose
                  className="text-N500 size-8 cursor-pointer"
                  onClick={() => setIsDropDown(false)}
                />
              ) : (
                <IoIosMenu
                  className="text-N500 size-8 cursor-pointer"
                  onClick={() => setIsDropDown(true)}
                />
              )}
            </div>
            </div>
            
          </header>
        </Container>
        {isDropDown && (
          <div className="px-4 w-full h-fit top-16 fixed z-50 bg-white/90 backdrop-blur-sm p-5 gap-10 shadow-md transition-all duration-300 ease-in-out flex flex-col items-left">
           


            <div
                  className="relative flex gap-2 items-left w-full flex-col"
                >

              <button
                ref={trekButtonRef}
                  className={`${
                    activeMenu["treks"] ? "text-B600" : "text-black"
                  } flex items-center gap-1 transition font-bold text-base`}
                  onClick={() => {
                    setActiveMenu(() => ({ ["treks"]: true }));
                    setTrekDropDown((prev) => !prev)
                  }}
                >
                  Let's Trek <IoIosArrowDown />
                </button>


               {isTrekDropDown && (
            
                <div 
                  ref={trekDropdownRef}
                  className="w-full bg-white/65 backdrop-blur-md border border-white/20 p-2 rounded-md  transition-all duration-300 ease-in-out flex flex-col gap-3 text-N900 text-sm justify-start items-start">
               
                   <div className="flex gap-4 flex-col text-sm w-full">
                    <div className="w-full p-1  gap-2 bg-B500 flex-row rounded-md flex flex-wrap">

                    {trekRegionDetail?.map((region, index) => (
                    <div className= {`${
                          searchRegionID == index ? "bg-white text-B500" : "bg-transparent text-white"
                        }  hover:bg-white p-2 rounded-md  group flex  gap-2 items-center text-sm w-fit text-start cursor-pointer`} key={index} onClick={ () =>{
                            setSearchRegionID(index)
                          }}>
                            <div className="group-hover:text-B500">{region?.name} </div>
                            <Link  to={`/region/${region?.slug}`}
                             onClick={() => {
                          setTrekDropDown(null);
                        }} 
                            className="rounded-md p-1 h-fit bg-G300">

                              <GoArrowUpRight className="text-base text-white"/>
                            </Link>
                          </div>
                        ))}
                    </div>

                    <div className="p-2   justify-start gap-3  flex flex-col items-start">
                    {trekRegionDetail?.[searchRegionID]?.treks.map((trek, index) => (
                      <Link
                        aria-label={`Trek - ${trek?.slug}`} to={`/trek/${trek?.slug}`} className="w-full text-start justify-start items-start text-base" key={index} onClick={() => {
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
              </div>




            <Link

            aria-label="Blogs"
              to="/blogs"
              className="transition  hover:text-B500 text-left font-bold"
              onClick={() => {
                setIsDropDown(false);
              }}
            >
              Blogs and Tips
            </Link>
            <Link
            aria-label="Company Page"
              to="/about"
              className="transition  hover:text-B500 text-left  font-bold"
              onClick={() => {
                setIsDropDown(false);
              }}
            >
              About
            </Link>
                                    <Link to="/create" aria-label="Create Your Trip"
                                            className=" group flex gap-2 items-center justify-center w-full text-sm px-4 py-2 bg-B500 shadow-lg rounded-md hover:text-B500 hover:bg-transparent border border-transparent hover:border-B500 text-white hover:shadow-none transition-colors duration-500"
                                            onClick={() => {
                                              setActiveMenu({ company: true });
                                            }}
                                          >
                      
                                          <p className="text-sm"> Create Your Trip</p>
                                      <img src={Pen}
                                      alt="Create Your Trip"
                                        className="size-6  text-white hover:text-G800 cursor-pointer select-none"
                                      />
                                  </Link>
          </div>



        )}
      </>
  );
}

export default Header;