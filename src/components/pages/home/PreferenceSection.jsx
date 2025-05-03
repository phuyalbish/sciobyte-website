import { useEffect } from 'react';
import { observeOnScroll } from '@/utils/observeOnScroll';
import Container from "@/components/Container.jsx";

import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import PreferenceTile from "@/components/tiles/PreferenceTile";
import CityTour from "@/assets/PreferenceCityTour.svg"
import CulturalExperience from "@/assets/PreferenceCulturalExperience.svg"
import JungleSafari from "@/assets/PreferenceJungleSafari.svg"
import Tours from "@/assets/PreferenceTours.svg"
import Trekking from "@/assets/PreferenceTrekking.svg"
function PreferenceSection() {



    useEffect(() => {
    observeOnScroll('.bottom_popup');
  }, []);

  const preferences = [

     {
      icon:Trekking, 
      name:"Trekkings",
      slug:"/category/treks"
    },
     {
      icon:Tours, 
      name:"Tours In Nepal",
      slug:"/category/treks"
    },
     {
      icon:JungleSafari, 
      name:"Jungle Safari",
      slug:"/category/treks"
    },
    {
      icon:CityTour, 
      name:"City Tour",
      slug:"/category/treks"
    },
     {
      icon:CulturalExperience, 
      name:"Cultural Experience",
      slug:"/category/treks"
    },
    
  ]
  return (
    <div className="bg-black">
      <Container>
    <div className="relative  bg-black pb-10  w-full flex flex-col gap-3 md:gap-7 justify-center items-center ">
      <div className="flex items-center justify-center text-B500 m-3 p-3 rounded-md bg-white font-liches font-regular gap-2 flex-wrap text-3xl md:text-4xl ">
        YOUR PREFERENCE IS OUR PRIORITY
      </div>
        <>
          <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[2rem] bottom_popup">
            {Array.isArray(preferences) && preferences.length > 0 ? (
              preferences?.map((preference, index) => (
                  <PreferenceTile
                    key={index}
                    img={preference.icon}
                    slug={preference.slug}
                    name={preference.name}
                  />
                ))
            ) : (
              <p className="text-gray-500">No Preference Available</p>
            )}
          </div>
          <div className="w-full md:hidden bottom_popup">
           <EmblaCarousel>
              {preferences?.map((preference, index) => (
                <div
                  key={index}
                  className="embla__slide min-w-full  flex  justify-center"
                >
                  <PreferenceTile
                    key={index}
                    img={preference.icon}
                    slug={preference.slug}
                    name={preference.name}
                    id={preference.id}
                  />
                </div>
              ))}
            </EmblaCarousel>
          </div>
        </>

    </div>
    </Container>
    </div>
  );
}

export default PreferenceSection;
