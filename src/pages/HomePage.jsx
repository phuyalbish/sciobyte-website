import React from "react";
import SplashSection from "@/components/pages/home/SplashSection";
import TrekSection from "@/components/pages/home/TrekSection.jsx";
import FAQSection from "@/components/pages/home/FAQSection.jsx";
import Parallex from "@/components/pages/home/Parallex.jsx";
import YTSection from "@/components/pages/home/YTSection.jsx";
import HomeStaySection from "@/components/pages/home/HomeStaySection.jsx";
import InstagramSection from "@/components/pages/home/InstagramSection";
import NeedToKnowSection from "@/components/pages/home/NeedToKnowSection";
import ReviewSection from "@/components/pages/home/ReviewSection";
import SpontaneousTrekSection from "@/components/pages/home/SpontaneousTrekSection";
import CategorySection from "@/components/pages/home/CategorySection";

function HomePage() {
  return (
    <div className="flex flex-col gap-10 md:gap-16 relative w-full">
      <SplashSection />
      <TrekSection />
      <div className="flex flex-col w-full relative">
        <Parallex />
        <CategorySection />
      </div>
      <HomeStaySection />
      <SpontaneousTrekSection />
      <div className="flex flex-col w-full relative">
        <YTSection />
        <ReviewSection />
      </div>
      <InstagramSection />
      <NeedToKnowSection />
      <FAQSection />
    </div>
  );
}

export default HomePage;
