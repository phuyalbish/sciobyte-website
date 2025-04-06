import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumbs from "@/components/tiles/BreadCrumbs";
import { fetchIndivisualTrek } from "@/apis/treks.js";
import ImageSlideSection from "@/components/pages/indivisualtrek/ImageSlideSection";
import TrekBasicInformationSection from "@/components/pages/indivisualtrek/TrekBasicInformationSection";
import TrekOverviewSection from "@/components/pages/indivisualtrek/TrekOverviewSection";

import { scrollToSection } from "@/apis/scrollToSection.js";
import TrekItenarySection from "@/components/pages/indivisualtrek/TrekItenarySection";
import TrekFAQSection from "@/components/pages/indivisualtrek/TrekFAQSection";
import TrekRequirementSection from "@/components/pages/indivisualtrek/TrekRequirementSection";
import TrekReviewsSection from "@/components/pages/indivisualtrek/TrekReviewsSection";
import TrekIncludedSection from "@/components/pages/indivisualtrek/TrekIncludedSection";
import TrekPricingSection from "@/components/pages/indivisualtrek/TrekPricingSection";
import SopontaneousTrekTile from "@/components/tiles/SopontaneousTrekTile.jsx";
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

  return (
    <>
      <div className="flex flex-col gap-5 mt-5 w-full md:px-[4.5rem] px-5 mb-20">
        <BreadCrumbs
          type_name={trek?.type_name}
          type_slug={trek?.type_slug}
          region_name={trek?.region_name}
          region_id={trek?.region}
          name={trek?.name}
        />
        <ImageSlideSection gallery={trek?.gallery} />
        <div className="flex sticky top-0 h-full gap-10 w-full">
          <div className="flex md:w-2/3 w-full flex-col gap-4 ">
            <TrekBasicInformationSection data={trek} />
            <div className="flex flex-col gap-5 text-left">
              <div className="p-3   sticky overflow-x-auto top-[7vh]  md:top-[8vh] z-20 bg-B400 flex flex-nowrap gap-7 text-md  font-bold text-N100">
                <button
                  onClick={() => scrollToSection("overview")}
                  className="hover:underline"
                >
                  Overview
                </button>
                <button
                  onClick={() => scrollToSection("itenary")}
                  className="hover:underline"
                >
                  Itinerary
                </button>

                <button
                  onClick={() => scrollToSection("requirements")}
                  className="hover:underline"
                >
                  Requirements
                </button>
                <button
                  onClick={() => scrollToSection("included")}
                  className="hover:underline flex gap-1"
                >
                  <span>What's</span>
                  <span>Included</span>
                </button>

                <button
                  onClick={() => scrollToSection("faqs")}
                  className="hover:underline"
                >
                  FAQs
                </button>
              </div>
              <TrekOverviewSection
                description={trek?.description}
                challenges={trek?.challenges_name}
              />
              <div className="block md:hidden">
                <TrekPricingSection
                  price={trek?.price}
                  map={trek?.map}
                  pricings={trek?.pricing}
                  name={trek?.name}
                  star={trek?.star}
                />
              </div>
              <TrekItenarySection data={trek?.schedules} />
              <TrekRequirementSection
                requirements={trek?.requirements}
                gears={trek?.gears_name}
              />
              <TrekIncludedSection
                includes={trek?.includes}
                excludes={trek?.excludes}
              />
              <div className="flex flex-col  p-4 bg-G200 gap-10">

              
              <div
                id="maps"
                className="flex flex-col gap-2  rounded-md overflow-hidden"
              >
                <div className="text-xl font-bold">Map</div>
                <a href={trek?.map_link} target="_blank">
                  <img
                    decoding="async"
                    loading="lazy"
                    src={BASE_MEDIA_URL + trek?.map}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </a>
              </div>
              <div
                className="flex flex-col gap-2  rounded-md overflow-hidden"
                onClick={() => scrollToSection("maps")}
              >
                <div className="text-xl font-bold">Elevation Graph:</div>
                <img
                  decoding="async"
                  loading="lazy"
                  src={BASE_MEDIA_URL + trek?.elevation_graph}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
              </div>
              <TrekFAQSection faqs={trek?.faqs} />
              {/* <TrekReviewsSection /> */}


            </div>
          </div>
          <div className="md:flex sticky top-[10vh] hidden md:w-1/3  h-[80vh]">
            <TrekPricingSection
              price={trek?.price}
              pricings={trek?.pricing}
              map={trek?.map}
              name={trek?.name}
              star={trek?.star}
            />
          </div>
        </div>
      </div>
      <div className="fixed bg-B75 z-10 w-full  bottom-0 h-16 sm:hidden">
        <div className="p-2 flex justify-end gap-16">
          <div className="flex flex-col justify-start items-start ">
            <div className="text-base font-light text-N300">Connect</div>
            <div className="text-base text-N500">Send Inquiry</div>
          </div>

          <div className="text-base font-light text-N50 bg-B400 flex gap-2 justify-center items-center px-2 rounded-md">
            Make a booking
          </div>
        </div>
      </div>


              <div className="flex   w-full flex-col gap-4 md:px-[4.5rem] px-5">
                      <h1 className="text-xl font-liches md:text-2xl font-regular w-full text-left">
                      YOU MIGHT ALSO LIKE
                    </h1>
                    <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative gap-10 justify-items-center bottom_popup">
                {treks?.map((trek, index) => (
                  <SopontaneousTrekTile key={index} data={trek} />
                ))}
              </div>
              
          </div>
              
    </>
  );
}

export default IndivisualTrekPage;
