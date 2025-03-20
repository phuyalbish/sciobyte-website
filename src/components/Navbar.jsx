import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import logo from "@/assets/HTWhite.png";
import { fetchTypes, fetchIndivisualTypes } from "@/apis/types.js";
import NavbarTrekCategoryTile from "@/components/tiles/NavbarTrekCategoryTile.jsx";

export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;

function Navbar() {
  const [showLogo, setShowLogo] = useState(false);
  const [types, setTypes] = useState(null);
  const [typeDetails, setTypeDetails] = useState({});
  const [dropdowns, setDropdowns] = useState({}); // Stores dropdown state for each type
  const navbarMenuRef = useRef(null);

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


  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > window.innerHeight * 0.1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const getType = async () => {
      try {
        const response = await fetchTypes();
        setTypes(response?.data?.results);
      } catch (error) {
        console.error("Error fetching types:", error);
      }
    };
    getType();
  }, []);

  const getIndivisualType = async (slug) => {
    if (typeDetails[slug]) return; // Avoid re-fetching if data already exists
    try {
      const response = await fetchIndivisualTypes(slug);
      setTypeDetails((prev) => ({ ...prev, [slug]: response }));
    } catch (error) {
      console.error("Error fetching trek:", error);
    }
  };
  const toggleDropdown = (slug) => {
    setDropdowns((prev) => {
      // Close all dropdowns, but toggle only the selected one
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
      <div className="hidden md:flex bg-B300 text-white shadow-md items-center w-full justify-between text-sm md:text-base">
        <div className="max-w-[100em] w-full mx-auto flex items-center justify-between px-[4rem] py-4">
          <Link
            to="/"
            onClick={() => {
              setDropdowns({});
            }}
          >
            <img
              decoding="async"
              loading="lazy"
              src={logo}
              className={`w-8 ml-5 md:ml-0 aspect-square transition-all duration-300 ${
                showLogo ? "scale-100" : "scale-0"
              }`}
              alt="Logo"
            />
          </Link>

          <div ref={navbarMenuRef} className="flex flex-row justify-evenly md:justify-center gap-10 lg:gap-24">
            {types?.map((item, index) =>
              item?.showInNavBar ? (
                <React.Fragment key={index}>
                  <button
                    className="flex items-center gap-1 transition hover:underline underline-offset-1 hover:text-B500"
                    onClick={() => toggleDropdown(item.slug)}
                  >
                    {item.name} <IoIosArrowDown />
                  </button>

                  {dropdowns[item.slug] && (
                    <div className="absolute top-[10vh] m-auto w-[50vw] bg-white/65 backdrop-blur-md border border-white/20  p-3 rounded-md shadow-md transition-all duration-300 ease-in-out flex flex-col gap-3 text-N500">
                      {typeDetails[item.slug]?.treks?.map((trek) => (
                        <NavbarTrekCategoryTile
                          key={trek.id}
                          type="travel"
                          image={trek.image}
                          name={trek.name}
                          id={trek.id}
                          setDropdowns={setDropdowns}
                        />
                      ))}
                      {typeDetails[item.slug]?.categories?.map((category) => (
                        <NavbarTrekCategoryTile
                          key={category.id}
                          type="category"
                          image={category.image}
                          name={category.name}
                          id={category.id}
                          setDropdowns={setDropdowns}
                        />
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ) : null
            )}

            <Link
              to="/blogs"
              className="transition hover:underline underline-offset-1 hover:text-B500"
              onClick={() => {
                setDropdowns({});
              }}
            >
              Travel Tips
            </Link>
            <Link
              to="/company"
              className="transition hover:underline underline-offset-1 hover:text-B500"
              onClick={() => {
                setDropdowns({});
              }}
            >
              Company
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
