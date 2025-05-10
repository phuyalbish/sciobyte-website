import { Link } from "react-router-dom";
import nationalStamp from "@/assets/national-stamp.png";
import NTB from "@/assets/NTB.png";
import Taan from "@/assets/Taan.png";
import nationalFlag from "@/assets/national-flag.png";
import footerLogo from "@/assets/footer-img.svg";
import footerImg from "@/assets/footer-bg.svg";
import Location from "@/assets/icons/Location.svg"
import Email from "@/assets/icons/Email.svg"
import Phone from "@/assets/icons/Phone.svg"
import Whatsapp from "@/assets/icons/Whatsapp.svg"
import Visa from "@/assets/Payment/Visa.svg"
import MasterCard from "@/assets/Payment/Mastercard.svg"
import WesternUnion from "@/assets/Payment/WesternUnion.svg"

import Container from "@/components/Container.jsx";
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
    <footer className="bg-B400 flex flex-col gap-6 justify-center ">
      <Container >
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center mb-10">
        <div className="flex flex-col  justify-start items-start gap-2 ">
          <h1 className="text-lg font-semibold  text-white">WE ARE ASSOCIATED WITH</h1>
          <div className="flex justify-center items-center gap-6 ">
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

        <div className="flex flex-col gap-2 md:items-start">
          <div className="text-md text-white">We Accept</div>
          <div className="flex gap-2">

            <img
              decoding="async"
              loading="lazy"
              className="h-8 object-cover object-center"
              src={Visa}
              alt="Visa"
            />
            <img
              decoding="async"
              loading="lazy"
              className="h-8 object-cover object-center"
              src={MasterCard}
              alt="MasterCard"
            />
            <img
              decoding="async"
              loading="lazy"
              className="h-8 object-cover object-center"
              src={WesternUnion}
              alt="MasterCard"
            />
          </div>
        </div>

      </div>

        <div className="flex flex-row  justify-center md:justify-between items-start gap-10  flex-wrap mb-16">
            <div className="flex flex-col md:justify-start justify-center gap-6 ">
               <img src={footerLogo} alt="Logo" />
              <ul className="flex flex-col  items-start gap-4 text-white">
                <li className="flex gap-2 items-center"> 
                  <img src={Location} alt="Location Image" className="w-7 aspect-square" />
                   Kirtipur, Kathmandu
                </li>
                {/* <li className="flex gap-2 items-center"> 
                  <img src={Email} alt="Email Icon" className="w-7 aspect-square" />
                   
                </li> */}

                <li className="flex gap-2 items-center"> 
                  <img src={Email} alt="Email Icon" className="w-7 aspect-square" />
                  <div className="flex flex-col  items-start justify-start">
                    <div>info@hellotrekkers.com</div>
                    <div>hellotrekkersnamaste@gmail.com</div>
                  </div>
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
              <h1 className="text-md font-bold text-white">
                Discovery
              </h1>
              <ul className="flex flex-col  items-start gap-4 text-white">
                {discovery.map((item, index) => (
                  <li key={index} className=" ">
                    <Link  aria-label={`To ${item?.name} ${index}`} to={item.url} className="line-clamp-2 items-center hover:text-black transition-all duration-500">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>



              <div className="flex  flex-col  items-start  gap-6 w-full  justify-center md:justify-start" >
              <h1 className="text-md font-bold text-white">
                Resources
              </h1>
              <ul className="flex flex-col  items-start gap-4 text-white">
                  <li>
                    <a  aria-label="Home Page" href="https://www.youtube.com/@hellotrekkers" className="line-clamp-2 items-center hover:text-black transition-all duration-500">
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a aria-label="Instagram Link" href="https://www.instagram.com/hellotrekkersnamaste" className="line-clamp-2 items-center hover:text-black transition-all duration-500">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <Link aria-label="Blogs" to="/blogs" className="line-clamp-2 items-center hover:text-black transition-all duration-500">
                      Blogs and Tips
                    </Link>
                  </li>
              </ul>
            </div>


              <div className="flex  flex-col  items-start  gap-6 w-full  justify-center md:justify-start" >
              <h1 className="text-md font-bold text-white">
                Company
              </h1>
              <ul className="flex flex-col  items-start gap-4 text-white">
                {company.map((item, index) => (
                  <li key={index} className=" ">
                    <Link   aria-label={`To ${item?.name} ${index}`}  to={item.url} className="line-clamp-2 items-center hover:text-black transition-all duration-500">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            </div>
        </div>
</Container>

      <div className="relative">
        <img
        alt="Footer Back with Pagoda style temples and mountains"
          width="100%"
          src={footerImg}
          decoding="async"
          loading="lazy"
          className="bg-B400  box-border border-l-0  border-b-0   outline-none border-r-0"
        />
        <div className="md:absolute md:bg-transparent bg-black w-full bottom-1 md:bottom-5 flex flex-col  box-border text-sm md:text-base text-white font-extralight">
          <p>All rights reserved @ Hello Trekkers Pvt. Ltd (2025)</p>
          <p>Designed by <a target="_blank" href="https://www.webodle.com" aria-label="Website Designer" className="font-bold">Webodle</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
