import ServiceSection from "@/components/pages/ServiceSection.jsx";

import servicesData from "@/data/services.js";

function HomeServiceSection() {
  return (
    
    <div className="flex flex-col gap-40 pt-40">
      {servicesData.filter(service => service.isShownOnHome).map((service, index) => (
        <ServiceSection key={index} data={service} index={index} />
      ))}
      <a href="/services"  
      className="md:text-base  text-sm px-4 py-2 border-2 border-black hover:bg-black rounded-lg text-black hover:text-white transition-colors m-auto w-fit">View all Services</a>
    </div>
  )
}

export default HomeServiceSection

