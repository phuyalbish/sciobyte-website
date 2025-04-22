import React from "react";
import TrekItenaryAccordion from "@/components/accordion/TrekItenaryAccordion";
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
function TrekItenarySection({ map, map_link, elevation_graph }) {
  return (
    <section id="maps">
      {
                     ( map ||  elevation_graph) && (
                      <div className="flex flex-col  p-6  rounded-lg bg-G200 gap-10">
                        {map && (
                          <div  className="flex flex-col gap-2  rounded-md overflow-hidden">
                          <div className="text-xl tracking-wide font-liches font-light"> Trek Map</div>
                          <a href={map_link} target="_blank" aria-label="Trek Map in GoogleMaps">
                            <img
                              decoding="async"
                              loading="lazy"
                              src={BASE_MEDIA_URL + map}
                              alt="Trek Map"
                              className="w-full h-auto object-cover rounded-md"
                            />
                          </a>
                        </div>
                        )}

                        {elevation_graph && (
                        <div
                          className="flex flex-col gap-2  rounded-md overflow-hidden"
                          onClick={() => scrollToSection("maps")}
                        >
                          <div className="text-xl tracking-wide font-liches font-light">Elevation Graph:</div>
                          <img
                            decoding="async"
                            loading="lazy"
                            src={BASE_MEDIA_URL + elevation_graph}
                            alt="Trek Elevation Graph"
                            className="w-full h-auto object-cover rounded-md"
                          />
                        </div>

                        )}
                    </div>
                     )
                    }
    </section>
  );
}

export default TrekItenarySection;
