import  { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import BreadCrumbs from "@/components/tiles/BreadCrumbs";
import { fetchIndivisualTrek } from "@/apis/treks.js";
import ImageSlideSection from "@/components/pages/indivisualtrek/ImageSlideSection";
import TrekBasicInformationSection from "@/components/pages/indivisualtrek/TrekBasicInformationSection";
import TrekOverviewSection from "@/components/pages/indivisualtrek/TrekOverviewSection";

import FooterVector from "@/assets/footer/FooterTrek.svg";
import TrekTile from "@/components/tiles/TrekTile.jsx";
import SectionGappingWithoutAnimation from '@/components/SectionGappingWithoutAnimation';
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

import { BASE_MEDIA_URL } from "@/config/baseurl.js";

function IndivisualTrekPage() {
  const [trek, setTrek] = useState(null);
  const { id } = useParams();

  
    useEffect(() => {
      (async () => {
        const response = await fetchTreks();
        const treksData = response?.data?.results;
        setTrek(treksData);
      })();
    }, []);

  useEffect(() => {
    const getTrek = async () => {
      try {
        const response = await fetchIndivisualTrek(id);
        setTrek(response);
      } catch (error) {
        console.error("Error fetching trek:", error);
      }
    };

    getTrek();
  }, [id]);

  return (
    <>
    <div className="mb-10">
        
      <div className="flex flex-col gap-5 mt-5 w-full md:px-[4rem] mb-20">
        <div className="px-4 md:px-0">
          <BreadCrumbs
          category_name={trek?.categories?.name}
          category_slug={trek?.categories?.slug}
          region_name={trek?.regions?.name}
          region_slug={trek?.regions?.slug}
          name={trek?.name}
        />
        </div>
        <div className="px-4 md:px-0">
          <ImageSlideSection gallery={trek?.gallery}/>
          </div>
     
        <div className="flex sticky top-0 h-full gap-10 w-full">
          <div className="flex md:w-9/12 w-full flex-col gap-4">
          <div className="px-4 md:px-0 ">
            <TrekBasicInformationSection 
            travel_name = {trek?.name}
                max_duration ={trek?.max_duration}
                max_distance = {trek?.max_distance}
                min_group_range={trek?.min_group_range}
                max_group_range = {trek?.max_group_range}
                min_hike_hour={trek?.min_hike_hour}
                max_hike_hour = {trek?.max_hike_hour}
                start_point = {trek?.start_point}
                end_point = {trek?.end_point}
                difficulties = {trek?.difficulties}
                accomodations = {trek?.accomodations}
                max_altitude = {trek?.max_altitude}
                meals = {trek?.meals}
                districts = {trek?.districts}
                best_seasons =  {trek?.best_seasons}
            />
            </div>
            <div className="flex flex-col gap-10 text-left">
              <div className="p-2 px-4 sticky overflow-x-auto top-16 md:rounded-b-md z-20 bg-B400 flex flex-nowrap gap-7 text-md  underline-offset-4 tracking-wide font-liches font-light  text-white">
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
                  className="hover:underline "
                >
                  Gears
                </button>
                )}

               
                {(Array.isArray(trek?.includes) && trek.includes.length > 0 || Array.isArray(trek?.excludex) && trek.excludes.length > 0) && (
                   <button
                  onClick={() => scrollToSection("included")}
                  className="hover:underline flex gap-1"
                >
                  <span className="tracking-wide font-liches font-light w-32">What&apos;s Included</span>
                  {/* <span className=" tracking-wide font-liches font-light">Included</span> */}
                </button>
                )}

                
                  <button
                  onClick={() => scrollToSection("reviews")}
                  className="hover:underline"
                >
                  Reviews
                </button>

                
              {Array.isArray(trek?.faqs) && trek.faqs.length > 0 && (
                <button
                  onClick={() => scrollToSection("faqs")}
                  className="hover:underline"
                >
                  FAQs
                </button>
                )}
              </div>
              <div className="flex flex-col gap-10 text-left md:px-0 px-4 ">

              <TrekOverviewSection
                description={trek?.description}
              />
              <div className="block md:hidden">
                <TrekPricingSection
                  total_price={trek?.total_price}
                  slug={trek?.slug}
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

              </div>
          <div className="md:flex sticky top-[10vh] hidden md:w-3/12  h-[80vh]">
            <TrekPricingSection
               total_price={trek?.total_price}

                  slug={trek?.slug}
                  map={trek?.map || trek?.elevation_graph}
                  pricings={trek?.pricing}
                  trek_name={trek?.name}
                  stars={trek?.stars}
            />
          </div>
        </div>
      </div>
       {Array.isArray(trek?.reference) && trek.reference.length > 0 && (
          <div className="flex w-full flex-col gap-4 md:px-[4rem] px-5">
            <h1 className="text-lg font-liches md:text-xl font-regular w-full text-left">
              YOU MIGHT ALSO LIKE
            </h1>
            
        <SectionGappingWithoutAnimation>
          {trek.reference.map((item, index) => (
                <TrekTile
                  key={index}
                  data={{ ...item, image: BASE_MEDIA_URL + item.image }}
                />
              ))}
              </SectionGappingWithoutAnimation>
          </div>
        )} 
    </div>
    <img src={FooterVector}  alt="Footer Vector Indivisual Trek Page"  className="w-full" />

    </>
  );
}

export default IndivisualTrekPage;
