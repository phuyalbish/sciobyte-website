import React from "react";
import SplashSection from "@/components/pages/home/SplashSection";
import TrekSection from "@/components/pages/home/TrekSection.jsx";
import FAQSection from "@/components/pages/home/FAQSection.jsx";
import Parallex from "@/components/pages/home/Parallex.jsx";
import YTSection from "@/components/pages/home/YTSection.jsx";
import whatsapp from "@/assets/whatsapp.png";
import HomeStaySection from "@/components/pages/home/HomeStaySection.jsx";
import ReviewSection from "@/components/pages/home/ReviewSection";
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
        <ReviewSection />
      </div>
      <InstagramSection />
      <TrekSection />
      <NeedToKnowSection />
      <FAQSection />
      <img
        src={whatsapp}
        alt=""
        className="w-16 h-16  object-cover z-40 fixed bottom-5 left-5 "
      />
    </div>
  );
}

export default HomePage;
