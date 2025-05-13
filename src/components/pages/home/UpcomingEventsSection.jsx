import UpcomingEventTile from "@/components/tiles/UpcomingEventTile.jsx";
import Container from "@/components/Container.jsx";
import { fetchEvents } from "@/apis/events.js";

import { useEffect, useState } from "react";
const UpcomingEventsSection = () => {

  
const [events, setEvents] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetchEvents();
      const eventsData = response?.data?.results;
      setEvents(eventsData);
    })();
  }, []);


  return (
    Array.isArray(events) && events.length > 0 ? (
    <div className="mb-20">
      <Container>
        <div className="flex flex-col mb-10">
          <div className="text-2xl font-liches md:text-4xl tracking-widest font-regular px-2 md:mb-6 ">
          Upcoming Departures
          </div>
          <div className=""><span className="text-B500 font-dance text-2xl ">Travel with new friends,</span> <span className="text-G500 text-2xl  font-dance">create new Tales</span></div>
        </div>
          {events?.map((event, index) => (
            <UpcomingEventTile key={index} data={event} />
          ))}
      </Container>
    </div>

  ) :""
  );
};

export default UpcomingEventsSection;
