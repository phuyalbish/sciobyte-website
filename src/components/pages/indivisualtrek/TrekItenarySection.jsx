import React, { useEffect, useState } from "react";
import TrekItenaryAccordion from "@/components/accordion/TrekItenaryAccordion";

function TrekItenarySection({ data }) {



    const [scheduleData, setSchedule] = useState([]);
  
    const handleScheduleState = (id) => {
     
      setSchedule(
        scheduleData.map((schedule) => {
          if (id === schedule.id) {
            schedule.isOpened = true;
          } else {
            schedule.isOpened = false;
          }
          return schedule;
        })
      );
    };
  
    useEffect(() => {
      if (Array.isArray(data) && data.length > 0) {
        const updatedData = data.map((schedule, index) => ({
          ...schedule,
          isOpened: index === 0, 
        }));
        setSchedule(updatedData);
  
      }
    }, [data]);
  return (
    <section id="itenary" className="flex flex-col gap-5">
      {Array.isArray(data) && data.length > 0 ? (
        <>
          <div className="text-xl font-liches font-light">Itinerary</div>
          {scheduleData.map((item, index) => (
            <TrekItenaryAccordion schedule={item} 
              key={index} 
              isOpened={item.isOpened}
              handleScheduleState={handleScheduleState} />
          ))}
        </>
      ) : null}
    </section>
  );
}

export default TrekItenarySection;