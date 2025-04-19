import React, { useState, useEffect } from "react";
import Logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import categories from "@/data/Categories.json";
import { IoIosArrowDown } from "react-icons/io";
import { fetchIndivisualNavCategories } from "@/apis/categories.js";

export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;

function Header({ setActiveMenu }) {
  const [isDropDown, setIsDropDown] = useState(false);
  const [searchRegionID, setSearchRegionID] = useState(0);

  const [categoryDetails, setCategoryDetails] = useState({});
  const [dropdowns, setDropdowns] = useState({});
 
  
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
      <div className="bg-white  shadow-md  sticky top-0  z-50 md:relative ">
        
        <div className="container px-3 md:px-[4rem] max-w-[100em]  w-full mx-auto">
          <header className=" z-30 text-white py-[1rem] w-full flex flex-row  justify-between">
            <Link
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
                className="lg:w-48 md:w-32 sm:w-28 w-24 h-auto"
              />
            </Link>

            <div className="md:flex hidden items-center gap-20">
              <div className="flex-col justify-end items-end">
                <div className="text-base text-N900 flex gap-2 items-center justify-end">
                  <HiOutlineMail />
                  Email us
                </div>
                <div className="md:text-md text-N900 font-bold">
                  hellotrekkersnamaste@gmail.com
                </div>
              </div>

              <div className="flex  flex-col justify-end items-end">
                <div className="text-base text-N900 flex gap-2 items-center justify-end">
                  <FaWhatsapp className="text-green-500" />
                  WhatsApp
                </div>
                <div className="md:text-md text-N900 font-bold">+977-9709707037</div>
              </div>
            </div>
            <div className="md:hidden">
              {isDropDown ? (
                <IoClose
                  className="text-N500 size-8 cursor-pointer"
                  onClick={() => setIsDropDown(false)} // Hide dropdown
                />
              ) : (
                <IoIosMenu
                  className="text-N500 size-8 cursor-pointer"
                  onClick={() => setIsDropDown(true)} // Show dropdown
                />
              )}
            </div>
          </header>
        </div>
        {isDropDown && (
          <div className="px-10 w-full h-[100vh]  fixed z-50 bg-white p-5 gap-10 shadow-md transition-all duration-300 ease-in-out flex flex-col items-left">
            {categories?.map((item, index) =>
                <div
                  key={index}
                  className="relative flex gap-2 items-left w-full flex-col"
                >
                  <button
                    className="flex items-center gap-1 transition font-bold hover:underline underline-offset-1 hover:text-B500"
                    onClick={() => toggleDropdown(item.slug)}
                  >
                    {item.name}<IoIosArrowDown />
                  </button>

                {Array.isArray(categoryDetails[item?.slug]?.regions) && categoryDetails[item?.slug]?.regions.length > 0 && dropdowns[item.slug] && (
                      <div className="top-14 left-0 w-full bg-white/65 backdrop-blur-md border border-white/20 p-2 rounded-md  transition-all duration-300 ease-in-out flex flex-col gap-3 text-N900 text-sm justify-start items-start">
                       
                             <div className="flex gap-4 flex-col text-sm w-full">
                              <div className="w-full p-1 gap-1 flex-row rounded-md border border-B300">
                                {categoryDetails[item?.slug]?.regions.map((region, index) => (
                                  <div
                                    key={index}
                                    className={`${
                                      searchRegionID === index ? "bg-B200" : "bg-transparent"
                                    } hover:bg-B200 p-2 rounded flex flex-col text-sm w-fit text-start cursor-pointer`}
                                    onClick={() => {
                                      setSearchRegionID(index);
                                    }}
                                  >
                                    {region?.name}
                                     {/* ({region?.trek_count}) */}
                                  </div>
                                ))}
                              </div>

                              <div className="justify-start gap-2 flex flex-col">
                                {categoryDetails[item.slug]?.regions[searchRegionID]?.treks.map((trek, index) => (
                                  <Link
                                    key={index}
                                    to={`/trek/${trek?.slug}`}
                                    className="w-full text-start justify-start items-start text-base hover:underline underline-offset-4"
                                    onClick={() => setIsDropDown(false)}
                                  >
                                    {trek?.name}
                                  </Link>
                                ))}
                              </div>
                               <div className="flex w-full justify-end">
                                  <Link
                                    to={`/category/${categoryDetails[item.slug]?.slug}`}
                                    className="w-fit flex flex-row justify-end text-xs text-N500 hover:text-N900 cursor-pointer"
                                    onClick={() => setIsDropDown(false)}
                                  >
                                    View all {categoryDetails[item?.slug]?.name}
                                  </Link>
                                </div>
                            </div>
                       </div>
                    )}
                </div>
            )}

            <Link
              to="/blogs"
              className="transition hover:underline underline-offset-1 hover:text-B500 text-left"
              onClick={() => {
                setIsDropDown(false);
                setDropdowns({});
              }}
            >
              Travel Tips
            </Link>
            <Link
              to="/company"
              className="transition hover:underline underline-offset-1 hover:text-B500 text-left"
              onClick={() => {
                setIsDropDown(false);
                setDropdowns({});
              }}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
