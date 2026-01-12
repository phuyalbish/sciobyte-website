import Container from '@/components/Container.jsx';
import useIntersectionVisible from "@/hooks/useIntersectionVisible";
import { LuClock, LuCpu, LuHeadset } from "react-icons/lu";

function StatsSection() {
  const { ref: sectionRef, isVisible } = useIntersectionVisible({
    threshold: 0.3,
  });

  const stats = [
    {
      icon: <LuClock className="text-3xl" />,
      value: "7-21",
      label: "Days",
      sublabel: "Average delivery time for projects",
    },
    {
      icon: <LuCpu className="text-3xl" />,
      value: "100%",
      label: "Customized",
      sublabel: "Solutions tailored to your needs",
    },
    {
      icon: <LuHeadset className="text-3xl" />,
      value: "24/7",
      label: "Support",
      sublabel: "Available with retainer packages",
    },
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-100" ref={sectionRef}>
      <Container>
        <div className="flex justify-evenly items-center gap-16 md:gap-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 200}ms` }}
              className={`flex flex-col items-center md:items-start text-center md:text-left transition-all duration-1000 ease-out ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12"
              }`}
            >
              {/* Icon Wrapper */}
              <div className="mb-6 p-3 bg-gray-50 rounded-xl text-black inline-block">
                {stat.icon}
              </div>

              {/* The Number/Value */}
              <div className="text-5xl md:text-6xl font-bold tracking-tighter mb-2 text-black">
                {stat.value}
              </div>
              
              {/* The Primary Label */}
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">
                {stat.label}
              </div>

              {/* The Description */}
              <p className="text-gray-600 text-sm md:text-base max-w-[280px] leading-relaxed">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default StatsSection;