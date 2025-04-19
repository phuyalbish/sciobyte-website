import React from "react";
import Hero from "@/components/pages/company/Hero.jsx";
import Team from "@/components/pages/company/Team.jsx";
import AboutHT from "@/components/pages/company/AboutHT.jsx";
import WhyHT from "@/components/pages/company/WhyHT.jsx";
import HomeStay from "@/components/pages/company/HomeStay.jsx";
import CSR from "@/components/pages/company/CSR.jsx";
import FooterVector from "@/assets/footer/FooterAbout.svg"

function CompanyPage() {
  return (
    <>
      <div className="container">
        <div className=" flex flex-col gap-16  mb-20">
          <Hero />
          <AboutHT/>
          <WhyHT/>
          <Team />
          <HomeStay />
          <CSR />

        </div>
      </div>

        <img src={FooterVector} alt="" className="w-full" />
    </>
  );
}

export default CompanyPage;

