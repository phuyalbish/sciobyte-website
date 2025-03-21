import React from "react";
import TrekItenaryAccordion from "@/components/accordion/TrekItenaryAccordion";
function TrekItenarySection({ data }) {
  return (
    <section id="itenary" className="flex flex-col gap-5">
      <div className="text-2xl font-bold"> Itinerary</div>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item, index) => (
          <TrekItenaryAccordion schedule={item} key={index} />
        ))
      ) : (
        <p>Loading Schedules...</p>
      )}
    </section>
  );
}

export default TrekItenarySection;
