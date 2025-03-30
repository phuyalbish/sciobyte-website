import React, { useState, useEffect } from "react";
import Logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import types from "@/data/Types.json";
import { IoIosArrowDown } from "react-icons/io";
import { fetchTypes, fetchIndivisualTypes } from "@/apis/types.js";
import HeaderTrekCategoryTile from "@/components/tiles/HeaderTrekCategoryTile.jsx";

export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;

function Header({ setActiveMenu }) {
  const [isDropDown, setIsDropDown] = useState(false);

  const [typeDetails, setTypeDetails] = useState({});
  const [dropdowns, setDropdowns] = useState({});

  const getIndivisualType = async (slug) => {
    if (typeDetails[slug]) return;
    try {
      const response = await fetchIndivisualTypes(slug);
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
      <div className="bg-white  shadow-md  sticky top-0 z-50 md:relative ">
        <div className="container px-3 md:px-[4rem] max-w-[100em] w-full mx-auto">
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
                <div className="text-base text-N300 flex gap-2 items-center justify-end">
                  <HiOutlineMail />
                  Email us
                </div>
                <div className="md:text-md text-N500">
                  hellotrekkersnamaste@gmail.com
                </div>
              </div>

              <div className="flex  flex-col justify-end items-end">
                <div className="text-base text-N300 flex gap-2 items-center">
                  <FaWhatsapp className="text-green-500" />
                  WhatsApp
                </div>
                <div className="md:text-md text-N500">+977-9709707037</div>
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
          <div className="px-10 w-full h-[100vh] fixed z-50 bg-white p-5 gap-10 shadow-md transition-all duration-300 ease-in-out flex flex-col items-left">
            {types?.map((item, index) =>
              item?.showInNavBar ? (
                <div
                  key={index}
                  className="relative flex gap-2 items-left w-full flex-col"
                >
                  <button
                    className="flex items-center gap-1 transition font-bold hover:underline underline-offset-1 hover:text-B500"
                    onClick={() => toggleDropdown(item.slug)}
                  >
                    {item.name} <IoIosArrowDown />
                  </button>

                  {dropdowns[item.slug] && (
                    <div className="w-full bg-white  transition-all duration-300 ease-in-out flex flex-col gap-3 text-N500">
                      {typeDetails[item.slug]?.treks?.map((trek) => (
                        <HeaderTrekCategoryTile
                          key={trek.id}
                          type="travel"
                          image={trek.image}
                          name={trek.name}
                          id={trek.id}
                          onclick={() => setIsDropDown(false)}
                        />
                      ))}
                      {typeDetails[item.slug]?.categories?.map((category) => (
                        <HeaderTrekCategoryTile
                          key={category.id}
                          type="category"
                          image={category.image}
                          name={category.name}
                          id={category.id}
                          onclick={() => setIsDropDown(false)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : null
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
              to="/about"
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
