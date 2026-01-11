import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

export default function PageLayout() {
  const { scrollY } = useScroll();
  const location = useLocation();

  const [hideHeader, setHideHeader] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 20) {
      setHideHeader(true); // scrolling down
    } else {
      setHideHeader(false); // scrolling up or at top
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

      <Footer />
    </div>
  );
}