import React from "react";
import { Link } from "react-router-dom";
import nationalStamp from "@/assets/national-stamp.png";
import NTB from "@/assets/NTB.png";
import Taan from "@/assets/Taan.png";
import nationalFlag from "@/assets/national-flag.png";
import footerLogo from "@/assets/footer-img.svg";
import footerImg from "@/assets/footer-img.png";
import Location from "@/assets/icons/Location.svg"
import Email from "@/assets/icons/Email.svg"
import Phone from "@/assets/icons/Phone.svg"
import Whatsapp from "@/assets/icons/Whatsapp.svg"

const NavItems = ({ item }) => {
  const { title, items } = item;
  return (
    
      <div className="flex  flex-col  items-center  md:items-start  gap-6 w-full  justify-center md:justify-start" >
        <h1 className="text-md font-bold text-N100">
          {title}
        </h1>
        <ul className="flex flex-col  items-center md:items-start gap-4 text-N100">
          {items.map((item, index) => (
            <li key={index} className=" ">
              <Link aria-label={`To ${item?.name} ${index}`} to={item.url} className="line-clamp-2 items-center hover:text-G300 transition-all duration-500">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
  
  );
};

function Footer() {
  const discovery = [
    
        {
          name: "Trekking",
          url: "/category/treks",
        },
        {
          name: "Day Tours",
          url: "/category/tours",
        },
        {
          name: "Hike",
          url: "/category/dayhikes",
        },
        {
          name: "Spiritual Journey",
          url: "/category/treks",
        },
      ]
  
   
  const topTreks = [
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
      ]
    

  
  const company = [
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
          url: "/blogs",
        },
        {
          name: "Privacy Polocy",
          url: "/privacy",
        },
        {
          name: "Terms and Condition",
          url: "/termsandcondition",
        },
      ]
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

        <div className="flex flex-row px-8 justify-center md:justify-evenly items-start gap-10  flex-wrap mb-16">
            <div className="flex flex-col md:justify-start justify-center gap-6 ">
               <img src={footerLogo} alt="Logo" />
              <ul className="flex flex-col  items-start gap-4 text-N100">
                <li className="flex gap-2 items-center"> 
                  <img src={Location} alt="Location Image" className="w-7 aspect-square" />
                   Kirtipur, Kathmandu
                </li>
                <li className="flex gap-2 items-center"> 
                  <img src={Email} alt="Email Icon" className="w-7 aspect-square" />
                   info@hellotrekkers@gmail.com
                </li>
                <li className="flex gap-2 items-center"> 
                  <img src={Phone} alt="Phone (Office) Icon " className="w-7 aspect-square" />
                   +977-9709707037(Office)
                </li>
                <li className="flex gap-2 items-center"> 
                  <img src={Whatsapp} alt="Phone Icon" className="w-7 aspect-square" />
                  +977-9709707037
                </li>
              </ul>
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-evenly gap-10 tes w-8/12 items-justify">
          

            <div className="flex  flex-col  items-start  gap-6 w-full  justify-center md:justify-start" >
              <h1 className="text-md font-bold text-N100">
                Discovery
              </h1>
              <ul className="flex flex-col  items-start gap-4 text-N100">
                {discovery.map((item, index) => (
                  <li key={index} className=" ">
                    <Link  aria-label={`To ${item?.name} ${index}`} to={item.url} className="line-clamp-2 items-center hover:text-G300 transition-all duration-500">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>



              <div className="flex  flex-col  items-start  gap-6 w-full  justify-center md:justify-start" >
              <h1 className="text-md font-bold text-N100">
                Resources
              </h1>
              <ul className="flex flex-col  items-start gap-4 text-N100">
                  <li>
                    <a  aria-label="Home Page" href="https://www.youtube.com/@hellotrekkers" className="line-clamp-2 items-center hover:text-G300 transition-all duration-500">
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a aria-label="Instagram Link" href="https://www.instagram.com/hellotrekkersnamaste" className="line-clamp-2 items-center hover:text-G300 transition-all duration-500">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <Link aria-label="Blogs" to="/blogs" className="line-clamp-2 items-center hover:text-G300 transition-all duration-500">
                      Travel Tips
                    </Link>
                  </li>
              </ul>
            </div>


              <div className="flex  flex-col  items-start  gap-6 w-full  justify-center md:justify-start" >
              <h1 className="text-md font-bold text-N100">
                Company
              </h1>
              <ul className="flex flex-col  items-start gap-4 text-N100">
                {company.map((item, index) => (
                  <li key={index} className=" ">
                    <Link   aria-label={`To ${item?.name} ${index}`}  to={item.url} className="line-clamp-2 items-center hover:text-G300 transition-all duration-500">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            </div>
        </div>





      <div className="relative">
        <img
        alt="Footer Back with Pagoda style temples and mountains"
          width="100%"
          src={footerImg}
          decoding="async"
          loading="lazy"
          className="bg-B400 border border-t-B400 box-border border-l-0  border-b-0   outline-none border-r-0"
        />
        <div className="absolute w-full bottom-1 md:bottom-5 flex flex-col  box-border text-sm md:text-base text-white font-extralight">
          <p>All rights reserved @ Hello Trekkers Pvt. Ltd (2025)</p>
          <p>Designed by <a target="_blank" href="https://www.webodle.com" aria-label="Website Designer" className="font-bold">Webodle</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
