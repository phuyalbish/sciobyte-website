import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Container from '@/components/Container.jsx';
import useIntersectionVisible from '@/hooks/useIntersectionVisible';

gsap.registerPlugin(ScrollTrigger);

function ServiceSection({ data, index }) {
  // 🔹 Intersection animation ONLY for title + description
  const { ref: textRef, isVisible } = useIntersectionVisible({
    threshold: 0.3,
    rootMargin: '-40px',
  });

  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const listItemsRef = useRef([]);
  const isEven = index % 2 !== 0;

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const items = listItemsRef.current;

    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const setupAnimations = () => {
      if (!section) return;

      if (mediaQuery.matches) {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 20%',
          end: 'bottom 60%',
          pin: image,
          pinSpacing: false,
        });

        items.forEach((item) => {
          if (!item) return;

          gsap.fromTo(
            item,
            {
              opacity: 0,
              x: isEven ? -50 : 50,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'top 50%',
                scrub: 1,
              },
            }
          );
        });
      } else {
        items.forEach((item) => {
          if (!item) return;

          gsap.fromTo(
            item,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 90%',
              },
            }
          );
        });
      }
    };

    setupAnimations();

    const handleResize = () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      setupAnimations();
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [isEven]);

  return (
    <Container>
      <div
        ref={sectionRef}
        className={`w-full flex justify-between md:flex-row flex-col items-start md:gap-8 gap-6 ${
          !isEven ? 'md:flex-row-reverse' : ''
        }`}
      >
        {/* IMAGE */}
        <div
          ref={imageRef}
          className="flex-shrink-0 md:w-1/3 md:flex md:justify-start justify-center"
        >
          <img src={data.logo} alt={data.title} className="w-full" />
        </div>

        {/* TEXT CONTENT */}
        <div className="flex flex-col md:w-1/2 w-full gap-4">
          {/* 🔹 Animated Title + Description */}
          <div
            ref={textRef}
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="text-lg md:text-3xl font-bold text-gray-800 font-liches">
              {data.title}
            </div>

            <div className="text-sm md:text-md text-gray-600 mt-2 ">
              {data.description}
            </div>
          </div>

          <div className="text-sm md:text-md font-semibold text-gray-800 mt-2 md:mt-4 font-liches">
            {data.deliverableTitle || 'What We Deliver'}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {data.deliverables.map((item, idx) => {
                  const Icon = item.icon; 
                  return (
                    <div
                      key={idx}
                      className="relative  group cursor-pointer bg-gradient-to-br from-black-50 to-black-70 border border-black/50 rounded-lg p-4 flex items-center gap-3 transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      {Icon && (
                        <div className="w-6 h-6 flex-shrink-0 text-black">
                          <Icon size={24} />
                        </div>
                      )}

                      <p className="text-sm text-gray-700 font-medium">
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
        </div>
      </div>
    </Container>
  );
}

export default ServiceSection;