
import HoverableGrid from "@/components/pages/HoverableGrid.jsx";
import Container from '@/components/Container.jsx';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Logo from "@/assets/Logo.png"
import Curve from "@/assets/Curve.png"
import TransformDataSection from "@/components/pages/TransformDataSection.jsx";
import HomeServiceSection from "@/components/pages/HomeServiceSection.jsx";
import StatsSection from "@/components/pages/StatsSection.jsx";
import AdvantageSection from "@/components/pages/AdvantageSection.jsx";

function HomePage() {

  
  return (
  <>
  
  <div className="flex flex-col">
  <div className="w-full h-[90vh] flex justify-center items-center">
          <HoverableGrid/>
                  <div className="flex flex-col gap-4 items-center  justify-center absolute">
                        <div className="flex md:flex-row flex-col group justify-start items-center gap-4">
                              <img src={Logo} alt="Webodle Logo"  width={100} height={100} className="rounded-full group-hover:opacity-70"/>
                              <div className="text-white text-xl md:text-4xl select-none group-hover:opacity-70 transition-colors duration-500 ease-in-out">ScioByte</div>
                        </div>
                        <div className="text-white md:text-lg select-none hover:opacity-70 transition-colors duration-500 ease-in-out">The data you know helps you grow</div>
                              <div className="flex gap-4 justify-center w-full mt-4">
                                    <a href="https://www.instagram.com/sciobyte" rel="noopener noreferrer"  target="_blank"><FaInstagram className="size-8 select-none text-white hover:opacity-70 transition-colors duration-500 ease-in-out cursor-pointer"/></a>
                                    <a href="https://www.linkedin.com/company/sciobyte-india/" rel="noopener noreferrer" target="_blank"><FaLinkedin className="size-8 select-none text-white hover:opacity-70 transition-colors duration-500 ease-in-out cursor-pointer"/></a>
                                    <a href="mailto:info@sciobyte.com" rel="noopener noreferrer" target="_blank"><BiLogoGmail className="size-8 select-none text-white hover:opacity-70 transition-colors duration-500 ease-in-out cursor-pointer"/></a>
                                    <a href="https://wa.me/+917249121882?text=Hello%20ScioByte" rel="noopener noreferrer" target="_blank"><FaWhatsapp className="size-8 select-none text-white hover:opacity-70 transition-colors duration-500 ease-in-out cursor-pointer"/></a>
                              </div>
                  </div>
            </div>
          <div className="flex flex-col gap-0">
            
        <div className="w-full relative bg-white">
                  <img src={Curve} alt="Curve"  className="w-full"/>
                  <div className="flex flex-col  my-20">
                        <TransformDataSection/> 
                        <HomeServiceSection />
                  </div>
                  <StatsSection/>
                  <AdvantageSection/>


                          <Container>
                            <div className="flex flex-col items-center text-center">
                              <h2 className="text-lg md:text-2xl font-bold mb-6">Ready to start your journey?</h2>
                              <p className="text-gray-600 mb-10 max-w-xl">
                                Our robot is waiting to guide you through our data-driven onboarding process.
                              </p>
                              <a 
                                href="/started" 
                                className="px-10 py-4 bg-black text-white font-bold hover:bg-gray-800 transition-all rounded-xl"
                              >
                                Get Started
                              </a>
                            </div>
                          </Container>

                 
        </div>  
</div>
         </div>
          </>

  )
}

export default HomePage