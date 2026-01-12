import ServiceSection from "@/components/pages/ServiceSection.jsx";

import servicesData from "@/data/services.js";

function HomeServiceSection() {
  return (
    
    <div className="flex flex-col gap-40 pt-40">
      {servicesData.map((service, index) => (
        <ServiceSection key={index} data={service} index={index} />
      ))}
    </div>
  )
}

export default HomeServiceSection

