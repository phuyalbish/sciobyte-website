import Container from "@/components/Container.jsx";
import Logo from "@/assets/Logo.png"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import { LuMail, LuPhone, LuMapPin, LuSend } from "react-icons/lu";
import CurveWhite from "@/assets/Curve-White.png";

function Footer() {
  return (
    <footer className="text-white ">
      
    <img src={CurveWhite} alt="Curve WHite"  className="w-full pb-20"/>
      <Container>

        <div className="flex flex-row justify-between  flex-wrap gap-8">
          {/* Information */}
          <div className="flex flex-col justify-start gap-4"> 
            <div className="text-lg font-semibold mb-4 ">ScioByte</div>
               
                <div className="flex flex-col gap-3  text-white/80 text-sm md:text-base">
                    <div className="flex items-center gap-3 hover:text-white transition-colors duration-300 cursor-default">
                        <LuMapPin className="size-4 text-white" />
                        <span>Bangalore, India</span>
                    </div>
                    <a href="mailto:sciobyte@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors duration-300">
                        <LuMail className="size-4 text-white" />
                        <span>sciobyte@gmail.com</span>
                    </a>
                    <a href="tel:+919175057182" className="flex items-center gap-3 hover:text-white transition-colors duration-300">
                        <LuPhone className="size-4 text-white" />
                        <span>+91 91750 57182</span>
                    </a>
                </div>
                 <div className="flex gap-4 justify-start w-full mt-2">
                    <a href="https://www.instagram.com/sciobyte" rel="noopener noreferrer" target="_blank">
                        <FaInstagram className="size-6 select-none text-white hover:opacity-70 transition-colors duration-500 ease-in-out cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/company/sciobyte-india/" rel="noopener noreferrer" target="_blank">
                        <FaLinkedin className="size-6 select-none text-white hover:opacity-70 transition-colors duration-500 ease-in-out cursor-pointer" />
                    </a>
                    <a href="mailto:sciobyte@gmail.com" rel="noopener noreferrer" target="_blank">
                        <BiLogoGmail className="size-6 select-none text-white hover:opacity-70 transition-colors duration-500 ease-in-out cursor-pointer" />
                    </a>
                    <a href="https://wa.me/+919175057182?text=Hello%20ScioByte" rel="noopener noreferrer" target="_blank">
                        <FaWhatsapp className="size-6 select-none text-white hover:opacity-70 transition-colors duration-500 ease-in-out cursor-pointer" />
                    </a>
                </div>

            </div>

          {/* Services */}
          <div className="">
            <h3 className="text-lg font-semibold mb-4 ">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="text-white hover:opacity-70 transition-colors duration-500 ease-in-out">Data Processing</li>
              <li className="text-white hover:opacity-70 transition-colors duration-500 ease-in-out">Machine Learning</li>
              <li className="text-white hover:opacity-70 transition-colors duration-500 ease-in-out">Automation</li>
              <li className="text-white hover:opacity-70 transition-colors duration-500 ease-in-out">Business Intelligence</li>
            </ul>
          </div>


          <div  className="">  
            <h3 className="text-lg font-semibold mb-4 ">Company</h3>
            <ul className="space-y-2 text-gray-300 flex flex-col ">
              <a href="/about" className="text-white hover:opacity-70 transition-colors duration-500 ease-in-out">About Us</a>
              <a href="/contact" className="text-white hover:opacity-70 transition-colors duration-500 ease-in-out">Contact</a>
              <a href="/privacy-policy" className="text-white hover:opacity-70 transition-colors duration-500 ease-in-out">Privacy Policy</a>
              <a href="/terms-of-service" className="text-white hover:opacity-70 transition-colors duration-500 ease-in-out">Terms of Service</a>
            </ul>
          </div>
        </div>

        {/* Footer bottom text */}
        <div className="mt-12 pb-2 text-center text-gray-400 text-sm ">
          &copy; {new Date().getFullYear()} ScioByte. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;