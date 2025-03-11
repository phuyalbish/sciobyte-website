import React from "react";

const handleWord = (word) => {
  const numberOfWords = word.split(" ").length;
  const keyName = numberOfWords > 0 ? word.split(" ") : word;
  return (
    <span className="flex">
      {keyName.length > 0
        ? keyName.map((name) => (
            <pre style={{ fontFamily: "inherit" }}>{`${name} `}</pre>
          ))
        : keyName}
    </span>
  );
};

const NavItems = ({ item }) => {
  const { title, items } = item;
  console.log("items: ", items);
  return (
    <>
      <div>
        <h1 className="text-center md:text-left text-[1.75rem] py-[0.5rem] px-[0.625rem]">
          {title}
        </h1>
        <ul className="flex flex-col gap-[0.625rem] text-center md:text-left">
          {items.map((item, index) => (
            <li
              key={index}
              className=" text-[1.3125rem] py-[0.5rem] px-[0.625rem]"
            >
              <a href="">{item.name}</a>
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
          name: "Why Choose Hello Trekkers",
          url: "",
        },
        {
          name: "Contact Us",
          url: "",
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
    <footer className=" bg-[#006557] ">
      <div className="container text-white text-center relative px-[2rem] md:px-[4.5rem] pt-[1rem]">
        <div className="p-10 flex  flex-col gap-[0.5rem]">
          <h1 className="text-3xl font-medium">WE ARE ASSOCIATED WITH:</h1>
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

        <div className="flex flex-col md:flex-row gap-[2.88rem] md:gap-[7.75rem] justify-center items-center md:items-start">
          <div className="flex flex-col md:flex-row justify-between gap-[2.88rem] md:gap-[2.625rem]">
            {menuItems.slice(0, 2).map((item) => (
              <NavItems item={item} />
            ))}
          </div>

          <div className="order-[-1] md:order-[0]">
            <img
              src="/footer-logo.svg"
              alt="/footer-logo"
              className=""
              style={{ width: "12rem" }}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-[2.88rem] md:gap-[2.625rem]">
            {menuItems.slice(2).map((item) => (
              <NavItems item={item} />
            ))}
          </div>
        </div>

        <div className="w-full">
          <img width="100%" src="/footer-img.png" alt="footer-img" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
