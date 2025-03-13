import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrums from "@/components/tiles/BreadCrums";
import { fetchIndivisualTrek } from "@/apis/treks.js";
import whatsapp from "@/assets/whatsapp.png";
import ImageSlideSection from "@/components/pages/indivisualtrek/ImageSlideSection";
import TrekBasicInformation from "@/components/pages/indivisualtrek/TrekBasicInformation";

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
      <TrekBasicInformation data={trek} />

      <img
        src={whatsapp}
        alt=""
        className="w-16 h-16  object-cover z-40 fixed bottom-5 left-5 "
      />
    </div>
  );
}

export default IndivisualTrekPage;
