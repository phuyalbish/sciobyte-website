import Container from '@/components/Container.jsx';
import useIntersectionVisible from "@/hooks/useIntersectionVisible";
import { 
  LuShieldCheck, 
  LuCircleDollarSign, 
  LuZap, 
  LuUserCheck, 
  LuGlobe, 
  LuLayers 
} from "react-icons/lu";

function AdvantageSection() {
  const { ref: sectionRef, isVisible } = useIntersectionVisible({
    threshold: 0.1,
  });

  const mainAdvantages = [
    {
      icon: <LuShieldCheck />,
      title: "Enterprise Quality",
      desc: "World-class solutions built with modern tech stack and global standards."
    },
    {
      icon: <LuCircleDollarSign />,
      title: "SME Pricing",
      desc: "Affordable rates designed specifically for growing businesses."
    },
    {
      icon: <LuZap />,
      title: "Rapid Delivery",
      desc: "Fast execution cycles ranging from 7 to 21 days."
    }
  ];

  const supportingAdvantages = [
    {
      icon: <LuUserCheck />,
      title: "Hands-On Founder Involvement",
      desc: "Direct access to experienced leadership throughout your project journey."
    },
    {
      icon: <LuGlobe />,
      title: "Indian Context, Global Standards",
      desc: "Solutions that understand local business needs while meeting international quality benchmarks."
    },
    {
      icon: <LuLayers />,
      title: "End-to-End Execution",
      desc: "Complete ownership from strategy and design through implementation and support."
    }
  ];

  return (
    <section className="py-24 bg-white" ref={sectionRef}>
      <Container>
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className={`max-w-2xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-2xl md:text-4xl font-bold  mb-6 font-liches">
              The ScioByte Advantage
            </h2>
            <p className="text-md text-gray-600 leading-relaxed">
              We deliver enterprise-grade solutions at SME-friendly prices, combining
              modern technology with hands-on founder involvement and fast execution cycles.
            </p>
          </div>

          {/* Main Grid (Bento Style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainAdvantages.map((item, idx) => (
              <div 
                key={idx}
                style={{ transitionDelay: `${idx * 150}ms` }}
                className={`p-8 border border-gray-100 rounded-2xl bg-gray-50/50 hover:bg-white hover:border-black transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="text-2xl mb-4 text-black">{item.icon}</div>
                <h3 className="text-lg font-liches font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Supporting Advantages (List/Wide Style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {supportingAdvantages.map((item, idx) => (
              <div 
                key={idx}
                style={{ transitionDelay: `${(idx + 3) * 150}ms` }}
                className={`flex gap-4 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="mt-1 text-xl text-gray-400">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-black mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AdvantageSection;