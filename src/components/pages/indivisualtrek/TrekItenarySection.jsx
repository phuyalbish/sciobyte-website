import React from "react";
import TrekItenaryAccordion from "@/components/accordion/TrekItenaryAccordion";

function TrekItenarySection({ data }) {
  return (
    <section id="itenary" className="flex flex-col gap-5">
      {Array.isArray(data) && data.length > 0 ? (
        <>
          <div className="text-xl font-liches font-light">Itinerary</div>
          {data.map((item, index) => (
            <TrekItenaryAccordion schedule={item} key={index} />
          ))}
        </>
      ) : null}
    </section>
  );
}

export default TrekItenarySection;