import { useEffect, useRef, useState } from 'react';
import Container from "@/components/Container.jsx";
function TransformDataSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initialize Lenis
    let lenis;
    
    const initLenis = async () => {
      const Lenis = (await import('lenis')).default;
      
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    initLenis();

    // Intersection Observer for scroll trigger
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: '-50px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-[#EEE7D7]">

      <Container>
        <div
          ref={sectionRef}
          className={`w-full flex md:flex-row flex-col justify-between items-center transition-all duration-1000 ease-out ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="flex flex-col w-1/2 gap-4">
            <div
              className={`text-3xl font-bold transition-all duration-1000 delay-100 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
            >
              Transform Data from Decision
            </div>
            <div
              className={`text-md transition-all duration-1000 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
            >
              Enterprise-grade analytics solutions designed for SMEs. Fast
              delivery, modern tech stack, and hands-on expertise to turn your
              data into actionable insights.
            </div>

            <div
              className={`flex gap-4 transition-all duration-1000 delay-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="md:text-md px-4 py-2 bg-blue-800 hover:bg-blue-900 rounded-lg text-white cursor-pointer transition-colors">
                Explore Services
              </div>
              <div className="md:text-md px-4 py-2 border-2 border-blue-800 hover:bg-blue-800 rounded-lg text-blue-800 hover:text-white cursor-pointer transition-colors">
                Get Started
              </div>
            </div>
          </div>
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-20 scale-90'
            }`}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              W
            </div>
          </div>
        </div>
      </Container>

    </div>
  );
}

export default TransformDataSection;