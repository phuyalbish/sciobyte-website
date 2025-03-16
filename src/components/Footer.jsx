import React from "react";
import { Link } from "react-router-dom";

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
      src="/footer-logo.svg"
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
          <h1 className="text-2xl font-medium">WE ARE ASSOCIATED WITH:</h1>
          <div className="flex justify-center items-center gap-5 ">
            <img
              className="h-full w-[4.6875rem] object-cover object-center"
              src="/national-stamp.png"
              alt="national-stamp"
            />
            <img
              className="h-full w-[4.6875rem] object-cover object-center"
              src="/NTB.png"
              alt="NTB"
            />
            <img
              className="h-full w-[4.6875rem] object-cover object-center"
              src="/Taan.png"
              alt="Taan"
            />
            <img
              className="h-full w-[4.6875rem] object-cover object-center"
              src="/national-flag.png"
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
          <img width="100%" src="/footer-img.png" alt="footer-img" />
          <div className="py-5 bg-black text-white translate-y-[-1%]">
            <p>
              All rights reserved ©️ Hello Trekkers Pvt. Ltd, Designed with Love
              by Webodle
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
