
import HoverableGrid from "@/components/pages/HoverableGrid.jsx";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Logo from "@/assets/Logo.png"
import Curve from "@/assets/Curve.png"
import CurveWhite from "@/assets/Curve-White.png";
import TransformDataSection from "@/components/pages/TransformDataSection";
import DataAnalysisSection from "@/components/pages/DataAnalysisSection.jsx";
import Container from "@/components/Container.jsx";

function HomePage() {

  
  return (
  <>
  
  <div className="flex flex-col">
      <div className="text-xl border border-white text-whitew-full h-30 bg-black">
        <Container>
        <div className="text-xl text-white">This is Header</div>
        </Container>
      </div>
  <div className="w-full h-[90vh] flex justify-center items-center">
      
          <HoverableGrid/>
          <div className="flex flex-col gap-4 items-center  justify-center absolute">
            <div className="flex justify-start items-center gap-4">
                  <img src={Logo} alt="Webodle Logo"  width={100} height={100} className="rounded-full"/>
                  <div className="text-white text-4xl select-none hover:text-blue-500 transition-colors duration-500 ease-in-out">ScioByte</div>
            </div>
            <div className="text-white text-lg select-none hover:text-blue-500 transition-colors duration-500 ease-in-out">The data you know helps you grow</div>
                  <div className="flex gap-4 justify-center w-full mt-4">
                        <a href="https://www.instagram.com/sciobyte" rel="noopener noreferrer"  target="_blank"><FaInstagram className="size-10 select-none text-white hover:text-blue-500 transition-colors duration-500 ease-in-out cursor-pointer"/></a>
                        <a href="https://www.linkedin.com/company/sciobyte-india/" rel="noopener noreferrer" target="_blank"><FaLinkedin className="size-10 select-none text-white hover:text-blue-500 transition-colors duration-500 ease-in-out cursor-pointer"/></a>
                        <a href="mailto:sciobyte@gmail.com" rel="noopener noreferrer" target="_blank"><BiLogoGmail className="size-10 select-none text-white hover:text-blue-500 transition-colors duration-500 ease-in-out cursor-pointer"/></a>
                        <a href="https://wa.me/+919175057182?text=Hello%20ScioByte" rel="noopener noreferrer" target="_blank"><FaWhatsapp className="size-10 select-none text-white hover:text-blue-500 transition-colors duration-500 ease-in-out cursor-pointer"/></a>
                  </div>
          </div>
  </div>
          <div className="flex flex-col gap-0">
            
        <div className="w-full relative bg-[#EEE7D7]">
                  <img src={Curve} alt="Curve"  className="w-full"/>
                  <div className="flex flex-col gap-40  my-40">
                        <TransformDataSection/> 
                  <DataAnalysisSection />
                  </div>

                 
        </div>  
         <img src={CurveWhite} alt="Curve WHite"  className="w-full"/> </div> 

         </div>
          </>

  )
}

export default HomePage