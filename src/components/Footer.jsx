import React from "react";
import { Link } from "react-router-dom";
import nationalStamp from "@/assets/national-stamp.png";
import NTB from "@/assets/NTB.png";
import Taan from "@/assets/Taan.png";
import nationalFlag from "@/assets/national-flag.png";
import footerLogo from "@/assets/footer-img.svg";
import footerImg from "@/assets/footer-img.png";


const NavItems = ({ item }) => {
  const { title, items } = item;
  return (
    
      <div className="flex flex-col  items-start gap-6">
        <h1 className="text-md font-bold text-N100">
          {title}
        </h1>
        <ul className="flex flex-col  items-start gap-4 text-N100">
          {items.map((item, index) => (
            <li key={index} className=" ">
              <Link to={item.url} className="line-clamp-2">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
  
  );
};

function Footer() {
  const menuItems = [
    {
      title: "Discover",
      items: [
        {
          name: "Trekking",
          url: "",
        },
        {
          name: "Day Tours",
          url: "",
        },
        {
          name: "Hike",
          url: "",
        },
        {
          name: "Spiritual Journey",
          url: "",
        },
      ],
    },

    {
      title: "Resources",
      items: [
        {
          name: "Youtube",
          url: "",
        },
        {
          name: "Instagram",
          url: "",
        },
        {
          name: "Travel Tips",
          url: "",
        },
      ],
    },

    {
      title: "Top Treks",
      items: [
        {
          name: "Langtang",
          url: "",
        },
        {
          name: "Manaslu",
          url: "",
        },
        {
          name: "ABC",
          url: "",
        },
        {
          name: "Pach Pokhari",
          url: "",
        },
        {
          name: "Mustang",
          url: "",
        },
      ],
    },

    {
      title: "Company",
      items: [
        {
          name: "About Us",
          url: "/about",
        },
        {
          name: "Contact Us",
          url: "/contact",
        },
        {
          name: "Blogs",
          url: "",
        },
        {
          name: "Privacy Polocy",
          url: "/privacy",
        },
        {
          name: "Terms and Condition",
          url: "/termsandcondition",
        },
      ],
    },
  ];

  return (
    <footer className="bg-B400 flex flex-col justify-center">
        <div className="p-10 flex flex-col gap-2 px-8">
          <h1 className="text-lg font-bold text-N100">WE ARE ASSOCIATED WITH:</h1>
          <div className="flex justify-center items-center gap-5 ">
            <img
              decoding="async"
              loading="lazy"
              className="h-14 w-14 object-cover object-center"
              src={nationalStamp}
              alt="national-stamp"
            />
            <img
              decoding="async"
              loading="lazy"
              className="h-14 w-14 object-cover object-center"
              src={NTB}
              alt="NTB"
            />
            <img
              decoding="async"
              loading="lazy"
              className="h-14 w-10 object-cover object-center"
              src={Taan}
              alt="Taan"
            />
            <img
              decoding="async"
              loading="lazy"
              className="h-14 w-14 object-cover object-center"
              src={nationalFlag}
              alt="national-flag"
            />
          </div>
        </div>

        <div className="flex flex-row px-8 justify-evenly items-start gap-16 flex-wrap">
            <div className="flex flex-col md:justify-start justify-center gap-6">
               <img src={footerLogo} alt="" />
              <ul className="flex flex-col  items-start gap-4 text-N100">
                <li>
                   Kirtipur, Kathmandu
                </li>
                <li>
                   info@hellotrekkers@gmail.com
                </li>
                <li>
                   +977-9709707037(Office)
                </li>
                <li>
                   977-9709707037
                </li>
              </ul>
            </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-[2rem] justify-center text-center place-content-center"> */}
            {menuItems.map((item, index) => {
              return <NavItems item={item} key={index} />
            })}
        </div>
      <div className="relative">
        <img
          width="100%"
          src={footerImg}
          decoding="async"
          loading="lazy"
          className="bg-B400 border border-t-B400 box-border border-l-0  border-b-0   outline-none border-r-0"
        />
        <div className="absolute w-full bottom-1 md:bottom-5 flex flex-col  box-border text-sm md:text-md text-white">
          <p>All rights reserved © Hello Trekkers Pvt. Ltd</p>
          <p>Designed by Webodle</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
