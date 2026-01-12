import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import { FaWhatsapp } from "react-icons/fa";

export default function PageLayout() {
  const { scrollY } = useScroll();
  const location = useLocation();
  const [hideHeader, setHideHeader] = useState(false);

  // Dynamic colors: From white to green/black after 100vh
  // We use window.innerHeight to detect when 100vh is reached
  const vh100 = window.innerHeight;
  
  const iconColor = useTransform(
    scrollY, 
    [0, vh100], 
    ["#ffffff","#000000"] 
  );

  const shadowColor = useTransform(
    scrollY,
    [0, vh100],
    ["rgba(0,0,0,0.1)", "rgba(0,0,0,0.3)"]
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 20) {
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }
  });

  return (
    <div className="flex relative w-full flex-col bg-transparent">
      <motion.nav
        initial="visible"
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hideHeader ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="sticky top-0 z-50 text-white"
      >
        <Header />
      </motion.nav>

      <main className="flex-1 relative">
        <Outlet />
      </main>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/+919175057182?text=Hello%20ScioByte"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] group rounded-full transition-transform duration-300 hover:scale-110 hover:-translate-y-2 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      > 
        <motion.div style={{ color: iconColor }}>
          <FaWhatsapp className="text-xl md:text-2xl" />
        </motion.div>

        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap font-bold">
          Chat with us
        </span>
      </motion.a>

      <Footer />
    </div>
  );
}