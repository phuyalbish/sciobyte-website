import React from "react";
import Hero from "@/components/pages/company/Hero.jsx";
import Team from "@/components/pages/company/Team.jsx";
import HomeStay from "@/components/pages/company/HomeStay.jsx";
import CSR from "@/components/pages/company/CSR.jsx";

function CompanyPage() {
  return (
    <>
      <div className="container">
        <div className="px-10 md:px-[4rem] flex flex-col gap-[2rem] text-left mb-[2rem]">
          <Hero />
          <div className="flex flex-col gap-[0.8rem] pt-[5rem]">
            <h3 className="text-lg font-semibold">Hello Trekkers Pvt. Ltd.</h3>
            <p>Hello Trekkers Pvt. Ltd. was founded in the year 2025 with the primary goal of delivering exceptional trekking experiences to adventure enthusiasts from Nepal and across the globe. Our company was established with a strong commitment to promoting Nepal's natural beauty and cultural heritage while ensuring that every trekker—whether local or international—receives the highest standard of service, safety, and hospitality. We strive to create memorable journeys by combining professional guidance, personalized services, and authentic experiences that allow travelers to explore the majestic landscapes of Nepal in a meaningful and enjoyable way.</p>
          </div>
          <Team />
          <HomeStay />
          <CSR />
        </div>
      </div>
    </>
  );
}

export default CompanyPage;
