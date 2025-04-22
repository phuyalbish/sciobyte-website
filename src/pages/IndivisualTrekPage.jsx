import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BreadCrumbs from "@/components/tiles/BreadCrumbs";
import { fetchIndivisualTrek } from "@/apis/treks.js";
import ImageSlideSection from "@/components/pages/indivisualtrek/ImageSlideSection";
import TrekBasicInformationSection from "@/components/pages/indivisualtrek/TrekBasicInformationSection";
import TrekOverviewSection from "@/components/pages/indivisualtrek/TrekOverviewSection";

import FooterVector from "@/assets/footer/FooterTrek.svg";
import TrekTile from "@/components/tiles/TrekTile.jsx";
import { scrollToSection } from "@/apis/scrollToSection.js";
import TrekItenarySection from "@/components/pages/indivisualtrek/TrekItenarySection";
import TrekMapSection from "@/components/pages/indivisualtrek/TrekMapSection";
import TrekFAQSection from "@/components/pages/indivisualtrek/TrekFAQSection";
import TrekRequirementSection from "@/components/pages/indivisualtrek/TrekRequirementSection";
import TrekGearsSection from "@/components/pages/indivisualtrek/TrekGearsSection";
import TrekReviewsSection from "@/components/pages/indivisualtrek/TrekReviewsSection";
import TrekIncludedSection from "@/components/pages/indivisualtrek/TrekIncludedSection";
import TrekPricingSection from "@/components/pages/indivisualtrek/TrekPricingSection";
import TrekOtherInfoSection from "@/components/pages/indivisualtrek/TrekOtherInfoSection";
import { fetchTreks } from "@/apis/treks.js";

export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;

function IndivisualTrekPage() {
  const [trek, setTrek] = useState(null);
  const { id } = useParams();

   const [treks, setTreks] = useState([]);
  
    useEffect(() => {
      (async () => {
        const response = await fetchTreks();
        const treksData = response?.data?.results;
        setTreks(treksData);
      })();
    }, []);

  useEffect(() => {
    const getTrek = async () => {
      try {
        const response = await fetchIndivisualTrek(id);
        console.log();
        setTrek(response);
      } catch (error) {
        console.error("Error fetching trek:", error);
      }
    };

    getTrek();
  }, [id]);

  console.log(trek)
  return (
    <>
    <div className="mb-10">
        
      <div className="flex flex-col gap-5 mt-5 w-full md:px-[4.5rem] px-5 mb-20">
        <BreadCrumbs
          category_name={trek?.categories?.name}
          category_slug={trek?.categories?.slug}
          region_name={trek?.regions?.name}
          region_slug={trek?.regions?.slug}
          name={trek?.name}
        />
        
          <ImageSlideSection gallery={trek?.gallery}/>
     
        <div className="flex sticky top-0 h-full gap-10 w-full">
          <div className="flex md:w-9/12 w-full flex-col gap-4 ">
            <TrekBasicInformationSection 
            travel_name = {trek?.name}
                max_duration ={trek?.max_duration}
                max_distance = {trek?.max_distance}
                min_group_range={trek?.min_group_range}
                max_group_range = {trek?.max_group_range}
                start_point = {trek?.start_point}
                end_point = {trek?.end_point}
                difficulties = {trek?.difficulties}
                accomodations = {trek?.accomodations}
                max_altitude = {trek?.max_altitude}
                meals = {trek?.meals}
                districts = {trek?.districts}
                best_seasons =  {trek?.best_seasons}
            />
            <div className="flex flex-col gap-10 text-left">
              <div className="p-3  sticky overflow-x-auto top-16 rounded-b-md z-20 bg-B400 flex flex-nowrap gap-7 text-md  underline-offset-4 tracking-wide font-liches font-light  text-white">
                <button
                  onClick={() => scrollToSection("overview")}
                  className="hover:underline"
                >
                  Overview
                </button>
               {Array.isArray(trek?.schedules) && trek.schedules.length > 0 && (
                  <button
                  onClick={() => scrollToSection("itenary")}
                  className="hover:underline"
                >
                  Itinerary
                </button>
                )}

                {trek?.requirements && (
                <button
                  onClick={() => scrollToSection("requirements")}
                  className="hover:underline"
                >
                  Requirements
                </button>
                )}


              {Array.isArray(trek?.gears) && trek.gears.length > 0 && (
                  <button
                  onClick={() => scrollToSection("gears")}
                  className="hover:underline flex gap-1"
                >
                  Gears
                </button>
                )}

               
                {(Array.isArray(trek?.includes) && trek.includes.length > 0 || Array.isArray(trek?.excludex) && trek.excludes.length > 0) && (
                   <button
                  onClick={() => scrollToSection("included")}
                  className="hover:underline flex gap-1"
                >
                  <span className="tracking-wide font-liches font-light">What's</span>
                  <span className=" tracking-wide font-liches font-light">Included</span>
                </button>
                )}

                
              {Array.isArray(trek?.reviews) && trek.reviews.length > 0 && (
                  <button
                  onClick={() => scrollToSection("reviews")}
                  className="hover:underline flex gap-1"
                >
                  Reviews
                </button>
                )}

                
              {Array.isArray(trek?.faqs) && trek.faqs.length > 0 && (
                <button
                  onClick={() => scrollToSection("faqs")}
                  className="hover:underline"
                >
                  FAQs
                </button>
                )}
              </div>
              <TrekOverviewSection
                description={trek?.description}
              />
              <div className="block md:hidden">
                <TrekPricingSection
                  total_price={trek?.total_price}
                  map={trek?.map || trek?.elevation_graph}
                  pricings={trek?.pricing}
                  trek_name={trek?.name}
                  stars={trek?.stars}
                />
              </div>
              <TrekItenarySection data={trek?.schedules} />
              <TrekRequirementSection
                requirements={trek?.requirements}
              />
               <TrekGearsSection
                gears={trek?.gears}
              />
              <TrekIncludedSection
                includes={trek?.includes}
                excludes={trek?.excludes}
              />


              <TrekOtherInfoSection
                info={trek?.other_information}
              />
              <TrekMapSection map={trek?.map} map_link={trek?.map_link} elevation_graph={trek?.elevation_graph}/>
              <TrekReviewsSection reviews={trek?.reviews} trek_name={trek?.name}/>
              <TrekFAQSection faqs={trek?.faqs} />


            </div>
          </div>
          <div className="md:flex sticky top-[10vh] hidden md:w-3/12  h-[80vh]">
            <TrekPricingSection
               total_price={trek?.total_price}
                  map={trek?.map || trek?.elevation_graph}
                  pricings={trek?.pricing}
                  trek_name={trek?.name}
                  stars={trek?.stars}
            />
          </div>
        </div>
      </div>
      <div className="fixed bg-B100 z-10 w-full  bottom-0 h-16 sm:hidden">
        <div className="p-2 flex justify-end gap-16">
          <div className="flex flex-col justify-start items-start ">
            <div className="text-base font-light text-N400">Connect</div>
            <div className="text-base text-N800">Send Inquiry</div>
          </div>

          <Link 
          aria-label="Contact Page"
          to="/contact" className="text-base font-light  bg-B400 flex gap-2 justify-center items-center px-2 rounded-md text-white">
            Make a booking
          </Link>
        </div>
      </div>


       {Array.isArray(trek?.reference) && trek.reference.length > 0 && (
          <div className="flex w-full flex-col gap-4 md:px-[4.5rem] px-5">
            <h1 className="text-lg font-liches md:text-xl font-regular w-full text-left">
              YOU MIGHT ALSO LIKE
            </h1>
            <div className="flex gap-3 flex-wrap flex-grow w-full justify-start items-start">
              {trek.reference.map((item, index) => (
                <TrekTile
                  key={index}
                  data={{ ...item, image: BASE_MEDIA_URL + item.image }}
                />
              ))}
            </div>
          </div>
        )} 
    </div>
    <img src={FooterVector}  alt="Footer Vector Indivisual Trek Page"  className="w-full" />

    </>
  );
}

export default IndivisualTrekPage;
