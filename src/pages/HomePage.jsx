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
import PreferenceSection from "@/components/pages/home/PreferenceSection";
import UpcomingEventSection from "@/components/pages/home/UpcomingEventsSection.jsx";
import FooterVector from "@/assets/footer/FooterHome.svg";
import { useEffect, useState } from "react";
import { fetchHomeTreks } from "@/apis/treks.js";

function HomePage() {

  
const [treks, setTreks] = useState([]);

    const [showBanner, setShowBanner] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetchHomeTreks();
      const treksData = response?.data?.results;
      setTreks(treksData);
    })();
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => setShowBanner(false), 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col gap-10 md:gap-16 relative w-full scrollbar-gutter-stable ">
      <div className="flex flex-col">

      <SplashSection />
      <TrekSection treks={treks?.slice(0, 3)} plainText="YOUR TALE BEGINS" blueText="NOW!" />
      </div>
      <div className="flex flex-col w-full relative -mt-48">
        <Parallex />
        <PreferenceSection />
      </div>
      <HomeStaySection />
      <SpontaneousTrekSection  treks={treks} />
      <div className="flex flex-col w-full relative">
        <YTSection />
        <ReviewSection />
      </div>
        <UpcomingEventSection />
      <div className="flex flex-col w-full relative">
      <InstagramSection />
      <div className="w-full flex flex-col gap-10 bg-G200 py-6 pt-10">
        <h1 className="text-3xl font-dance md:text-5xl font-regular ">
        Discover and Explore
      </h1>
      <TrekSection  treks={treks?.slice(0,3)} />
      </div>
      </div>
      <NeedToKnowSection />
      <FAQSection />

      <img src={FooterVector}  alt="Footer Vector Home Page"  className="w-full" />
    </div>
  );
}

export default HomePage;
