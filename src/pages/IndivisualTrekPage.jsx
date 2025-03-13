import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrums from "@/components/tiles/BreadCrums";
import { fetchIndivisualTrek } from "@/apis/treks.js";
import whatsapp from "@/assets/whatsapp.png";
import ImageSlideSection from "@/components/pages/indivisualtrek/ImageSlideSection";
import TrekBasicInformationSection from "@/components/pages/indivisualtrek/TrekBasicInformationSection";
import TrekOverviewSection from "@/components/pages/indivisualtrek/TrekOverviewSection";

import { scrollToSection } from "@/apis/scrollToSection.js";
import TrekItenarySection from "@/components/pages/indivisualtrek/TrekItenarySection";
import TrekFAQSection from "@/components/pages/indivisualtrek/TrekFAQSection";
import TrekReviewsSection from "@/components/pages/indivisualtrek/TrekReviewsSection";
import TrekIncludedSection from "@/components/pages/indivisualtrek/TrekIncludedSection";
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
function IndivisualTrekPage() {
  const [trek, setTrek] = useState(null);
  const { id } = useParams();

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
    <div className="flex flex-col gap-5 my-6 md:px-[4.63rem] px-2">
      <BreadCrums
        travelType="Trek"
        location="Arnnapurna Base Camp"
        name={trek?.name}
      />
      <ImageSlideSection
        image1={trek?.image}
        image2={trek?.image}
        image3={trek?.image}
        image4={trek?.image}
      />
      <div className="flex md:w-2/3">
        <div className="flex flex-col gap-24">
          <TrekBasicInformationSection data={trek} />
          <div className="flex flex-col w-100 gap-16 text-left">
            <div className="flex flex-col gap-5">
              <div className="py-3 px-1 flex gap-7 text-xl font-bold text-N500">
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
                  Itenary
                </button>
                <button
                  onClick={() => scrollToSection("included")}
                  className="hover:underline"
                >
                  What's Included
                </button>

                <button
                  onClick={() => scrollToSection("faqs")}
                  className="hover:underline"
                >
                  FAQs
                </button>
                <button
                  onClick={() => scrollToSection("reviews")}
                  className="hover:underline"
                >
                  Reviews
                </button>
              </div>
              <TrekOverviewSection data={trek?.description} />
            </div>
            <TrekItenarySection data={trek?.schedules} />
            <TrekIncludedSection
              includes={trek?.includes}
              excludes={trek?.excludes}
            />
            <div id="maps" className="flex flex-col gap-5">
              <div className="text-2xl font-bold">Map</div>
              <img
                src={BASE_MEDIA_URL + trek?.map_image}
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="flex flex-col gap-5">
              <div className="text-2xl font-bold">Elevation Graph:</div>
              <img
                src={BASE_MEDIA_URL + trek?.elevation_graph}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <TrekFAQSection faqs={trek?.faqs} />
            <TrekReviewsSection />
          </div>
        </div>
      </div>

      <img
        src={whatsapp}
        alt=""
        className="w-16 h-16  object-cover z-40 fixed bottom-5 left-5 "
      />
    </div>
  );
}

export default IndivisualTrekPage;
