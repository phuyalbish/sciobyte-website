import ServiceSection from "@/components/pages/ServiceSection.jsx";

import servicesData from "@/json/services.js";

function HomeServiceSection() {
  return (
    
    <div className="flex flex-col gap-40 pt-40">
      {servicesData.filter(service => service.isShownOnHome).map((service, index) => (
        <ServiceSection key={index} data={service} index={index} />
      ))}
      <a href="/services" className="border border-black rounded-md p-2 m-auto cursor-pointer hover:bg-black/10 hover:shadow-md">View all Services</a>
    </div>
  )
}

export default HomeServiceSection

