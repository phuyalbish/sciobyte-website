import { useState } from "react";

import { useLocation, Outlet } from "react-router-dom";
import {motion, useScroll, useMotionValueEvent} from "framer-motion"
import Footer from "@/components/Footer.jsx";
import Header from "@/components/Header.jsx";
import Navbar from "@/components/Navbar";
import whatsapp from "@/assets/whatsapp.png";
export default function PageLayout() {
  const [activeMenu, setActiveMenu] = useState({});

  const location = useLocation();

  const scrollStickyRoutes = ["/trek"];
  const shouldUseAnimatedSticky = scrollStickyRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  const { scrollY}  = useScroll();
  const [hideHeader, setHideHeader] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
  
    if (latest > previous && latest > 990) {
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }
  
    if (latest > previous && latest > 990) {
      setHideNavbar(true);
    } else {
      setHideNavbar(false);
    }
  });

  return (
    <div className="flex relative w-full flex-col bg-gray-100">

      {shouldUseAnimatedSticky ? (
              <motion.nav
                variants={{
                  visible: { y: 0 },
                  hidden: { y: "-100%" },
                }}
                animate={hideHeader ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="sticky top-0 z-50 bg-white shadow-md md:hidden"
              >
                <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
              </motion.nav>
            ) : (
            <div className={`bg-white  shadow-md  top-0  z-50 sticky md:hidden`}>
                <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            </div>
            )}

      <div className={`bg-white  shadow-md  top-0  z-50  md:block hidden`}>
            <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>


      {shouldUseAnimatedSticky ? (
        <motion.nav
          variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
          }}
          animate={hideNavbar ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="sticky top-0 z-50 bg-white shadow-md"
        >
          <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </motion.nav>
      ) : (
        <div className="sticky top-0 z-50">
          <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </div>
      )}
      <main className="flex-1  relative bg-gray-100">
        {/* {children} */}
<Outlet/>
        <a

          aria-label="Whatsapp"
          href={`https://web.whatsapp.com/send?phone=+9779849828857&text=Hello Aashish, I want to know more about the packages you provide`}
          target="_blank"
          className="rounded-lg md:block fixed z-30  bottom-5 left-5 w-16 h-16  text-white text-lg font-bold cursor-pointer flex justify-center gap-3 items-center"
        >
          <img
            decoding="async"
            loading="lazy"
            src={whatsapp}
            alt="WhatsApp Icon"
            className="w-14 h-14  object-cover z-50 "
          />
        </a>
      </main>
        <Footer />

    </div>
  );
}
