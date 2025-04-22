import React, { useEffect } from "react";
import Hero from "@/components/pages/company/Hero.jsx";
import Team from "@/components/pages/company/Team.jsx";
import AboutHT from "@/components/pages/company/AboutHT.jsx";
import WhyHT from "@/components/pages/company/WhyHT.jsx";
import Booking from "@/components/pages/company/Booking.jsx";
import HomeStay from "@/components/pages/company/HomeStay.jsx";
import CSR from "@/components/pages/company/CSR.jsx";
import FooterVector from "@/assets/footer/FooterAbout.svg";
import { scrollToSection } from "@/apis/scrollToSection.js";

import { useParams } from "react-router-dom";

function CompanyPage() {
  const { id } = useParams();

  useEffect(() => {
    scrollToSection(id);
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="flex flex-col gap-16 mb-20">
          <Hero />
          <AboutHT/>
          <WhyHT />
          <Team/>
          <HomeStay />
          <CSR />
          <Booking />
        </div>
      </div>

      <img src={FooterVector}  alt="Footer Vector Company Page" className="w-full" />
    </>
  );
}

export default CompanyPage;