import { useEffect } from "react";
import Container from "@/components/Container.jsx";
import useIntersectionVisible from "@/hooks/useIntersectionVisible";
import Robot from '@/lottie/GetStarted.json';
import Services from '@/lottie/Services.json';
import Globe from '@/lottie/Globe.json';
import Lottie from 'lottie-react';

function TransformDataSection() {
  const { ref: sectionRef, isVisible } = useIntersectionVisible({
    threshold: 0.2,
    rootMargin: "-50px",
  });

  useEffect(() => {
    let lenis;

    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;

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

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-white">
      <Container>
        <div
          ref={sectionRef}
          className={`w-full flex md:flex-row flex-col-reverse gap-8 justify-between items-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div
            className={`transition-all duration-1000 delay-400 md:w-1/3 ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-20 scale-90"
            }`}
          >
            
            <Lottie animationData={Globe} className="w-full h-full" loop={true} speed={0.1} />
          </div>

          <div className="flex flex-col md:w-1/2 gap-4">
            <div
              className={`text-lg md:text-3xl font-bold transition-all duration-1000 delay-100 font-liches ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              Transform Data into Decision
            </div>

            <div
              className={`text-base md:text-md transition-all duration-1000 delay-200  ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              Enterprise-grade analytics solutions designed for SMEs. Fast
              delivery, modern tech stack, and hands-on expertise to turn your
              data into actionable insights.
            </div>

            <div
              className={`flex gap-4 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              
              <a
                href="/services"
                className="md:text-base  flex flex-row items-center gap-2 text-sm px-4 py-2 border-2 border-black hover:bg-slate-100 rounded-lg text-black hover:flex-row-reverse transition-all duration-500 ease-in-out"
             
             >

             <Lottie animationData={Services} className="w-6 h-6" loop={true} />
               
               <p>Explore Services</p>
              </a>
              <a
                href="/started"
                className="md:text-base flex flex-row items-center gap-2 text-sm px-4 py-2 text-black hover:bg-black/15 bg-slate-200 rounded-md transition-colors duration-500 ease-in-out"
              
                >
                
             <Lottie animationData={Robot} className="w-10" loop={true} />
               
               <p>Get Started</p>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TransformDataSection;