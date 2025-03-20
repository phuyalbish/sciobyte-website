import React from "react";
import { Link } from "react-router-dom";
import nationalStamp from "@/assets/national-stamp.png"
import NTB from "@/assets/NTB.png"
import Taan from "@/assets/Taan.png"
import nationalFlag from "@/assets/national-flag.png"
import footerLogo from "@/assets/footer-logo.svg"
import footerImg from "@/assets/footer-img.png"

// const handleWord = (word) => {
//   const numberOfWords = word.split(" ").length;
//   const keyName = numberOfWords > 0 ? word.split(" ") : word;
//   return (
//     <span className="flex">
//       {keyName.length > 0
//         ? keyName.map((name) => (
//             <pre style={{ fontFamily: "inherit" }}>{`${name} `}</pre>
//           ))
//         : keyName}
//     </span>
//   );
// };

const HTLogo = ({ className }) => (
  <div className={className}>
    <img
      decoding="async"
      loading="lazy"
      src={footerLogo}
      alt="/footer-logo"
      className=""
      style={{ width: "12rem" }}
    />
  </div>
);

const NavItems = ({ item }) => {
  const { title, items } = item;
  return (
    <>
      <div className="">
        <h1 className="text-center md:text-left text-xl py-[0.5rem] px-[0.625rem]">
          {title}
        </h1>
        <ul className="flex flex-col gap-[0.625rem] text-center md:text-left">
          {items.map((item, index) => (
            <li key={index} className="  py-[0.5rem] px-[0.625rem] ">
              <Link to={item.url} className="line-clamp-2">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
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
          url: "",
        },
        {
          name: "Why Hello Trekkers",
          url: "",
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
          name: "Discover",
          url: "",
        },
      ],
    },
  ];

  return (
    <footer className="bg-G500">
      <div className="relative text-white text-center px-[2rem] md:px-[4.5rem] pt-[1rem]">
        <div className="p-10 flex  flex-col gap-[0.5rem]">
          <h1 className="text-2xl home-heading">WE ARE ASSOCIATED WITH:</h1>
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

        <div className="flex flex-col gap-10">
          <HTLogo className="block lg:hidden mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-[2rem] justify-center text-center place-content-center">
            {menuItems.map((item, index) => {
              if (index === 2) {
                return (
                  <React.Fragment key={index}>
                    <HTLogo className="hidden lg:block" />
                    <NavItems item={item} />
                  </React.Fragment>
                );
              }
              return <NavItems item={item} key={index} />;
            })}
          </div>
        </div>

        <div className="w-full -translate-y-[15%] absolute left-0 z-[-1]">
          <img
            width="100%"
            src={footerImg}
            alt="footer-img"
            decoding="async"
            loading="lazy"
          />
          <div className="flex flex-col gap-3 py-5 bg-black text-white translate-y-[-1%]">
            <p>
              All rights reserved © Hello Trekkers Pvt. Ltd
            </p>
            <p> 
              Designed by Webodle
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
