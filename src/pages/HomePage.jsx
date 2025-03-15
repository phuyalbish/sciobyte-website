import React from "react";
import SplashSection from "@/components/pages/home/SplashSection";
import TrekSection from "@/components/pages/home/TrekSection.jsx";
import FAQSection from "@/components/pages/home/FAQSection.jsx";
import Parallex from "@/components/pages/home/Parallex.jsx";
import YTSection from "@/components/pages/home/YTSection.jsx";
import HomeStaySection from "@/components/pages/home/HomeStaySection.jsx";
import InstagramSection from "@/components/pages/home/InstagramSection";
import NeedToKnowSection from "@/components/pages/home/NeedToKnowSection";
import SpontaneousTrekSection from "@/components/pages/home/SpontaneousTrekSection";

function HomePage() {
  return (
    <div className="flex flex-col gap-[3rem] mb-20">
      <SplashSection />
      <TrekSection />
      <Parallex />
      <HomeStaySection />
      <SpontaneousTrekSection />
      <div className="flex flex-col">
        <YTSection />
      </div>
      <InstagramSection />
      <NeedToKnowSection />
      <FAQSection />
    </div>
  );
}

export default HomePage;
