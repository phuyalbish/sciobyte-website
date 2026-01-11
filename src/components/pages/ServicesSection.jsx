import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Container from '@/components/Container.jsx';
gsap.registerPlugin(ScrollTrigger);

// Mock Logo
const Logo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%234F46E5'/%3E%3Ctext x='50' y='60' font-size='40' fill='white' text-anchor='middle' font-family='Arial'%3EW%3C/text%3E%3C/svg%3E";

function ServiceSection({ data, index }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const listItemsRef = useRef([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const isEven = index % 2 !== 0;

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const items = listItemsRef.current;

    // Only apply pin and animations on desktop (768px and above)
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const setupAnimations = () => {
      if (mediaQuery.matches) {
        // Pin the image while scrolling (desktop only)
        ScrollTrigger.create({
          trigger: section,
          start: 'top 20%',
          end: 'bottom 60%',
          pin: image,
          pinSpacing: false,
        });

        // Animate list items one by one
        items.forEach((item) => {
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
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      } else {
        // Mobile: simple fade-in without pinning
        items.forEach((item) => {
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
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }
    };

    setupAnimations();

    // Re-setup animations on resize
    const handleResize = () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      setupAnimations();
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [isEven]);

  return (
    <Container>
      <div ref={sectionRef} className={`w-full flex justify-between md:flex-row flex-col items-start md:gap-8 gap-6 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
        <div ref={imageRef} className="flex-shrink-0 md:w-auto w-full md:flex md:justify-start justify-center">
          <img
            src={data.logo || Logo}
            alt={data.logoAlt || "Logo"}
            width={100}
            height={100}
            className="rounded-full shadow-lg"
          />
        </div>

        <div className="flex flex-col md:w-1/2 w-full gap-4">
          <div className="text-2xl md:text-3xl font-bold text-gray-800">
            {data.title}
          </div>
          <div className="text-sm md:text-md text-gray-600">
            {data.description}
          </div>
          <div className="text-sm md:text-md font-semibold text-gray-800 mt-2 md:mt-4">
            {data.deliverableTitle || "What We Deliver"}
          </div><div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {data.deliverables.map((item, idx) => (
              <div
                key={idx}
                ref={el => (listItemsRef.current[idx] = el)}
                className="relative group cursor-pointer bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border border-blue-200 hover:border-blue-400 rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 z-10 hover:z-50"
                onMouseEnter={() => setHoveredItem(idx)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <p className="text-sm md:text-base text-gray-700 font-medium">
                  {item}
                </p>
                
                {hoveredItem === idx && (
                  <div className="absolute left-0 top-full mt-2 z-50 w-full">
                    <div className="bg-white border-2 border-indigo-500 rounded-lg shadow-2xl p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-800 mb-1">
                            {item}
                          </p>
                          <p className="text-xs text-gray-600">
                            Click to learn more about this service feature and how it can benefit your business.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

function App() {
  const servicesData = [
    {
      title: "Data Analytics & Visualization",
      description: "Convert raw, scattered business data into clear, interactive dashboards that empower teams to make faster, smarter decisions. We deliver Power BI, Tableau, and Looker Studio solutions with automated reporting and real-time insights.",
      deliverableTitle: "What We Deliver",
      deliverables: [
        "Interactive dashboards with automated daily/weekly/monthly reporting",
        "KPI trackers for sales, marketing, finance, and operations",
        "Excel to BI migration with custom visualization frameworks",
        "Real-time dashboards enabled by API and cloud integration"
      ],
      logo: Logo,
      logoAlt: "Data Analytics Logo"
    },
    {
      title: "Business Intelligence (BI) Systems",
      description: "Complete BI infrastructure: data collection → storage → transformation → dashboards → automation.",
      deliverableTitle: "What We Deliver",
      deliverables: [
        "BI architecture planning",
        "Data warehouse setup",
        "Data lake creation",
        "Role-based dashboards & reporting"
      ],
      logo: Logo,
      logoAlt: "BI Systems Logo"
    },
    {
      title: "Data Engineering & ETL Pipelines",
      description: "Reliable, scalable pipelines that clean, transform, and prepare data for analytics or ML.",
      deliverableTitle: "What We Deliver",
      deliverables: [
        "ETL/ELT pipeline development",
        "API-based data extraction",
        "Data cleaning & wrangling frameworks",
        "Batch & real-time ingestion",
        "Database design and optimization",
        "Migration to cloud platforms"
      ],
      logo: Logo,
      logoAlt: "Data Engineering Logo"
    },
    {
      title: "Machine Learning & AI Solutions",
      description: "Predictive models and automation tools that help organizations forecast, optimize, and innovate.",
      deliverableTitle: "What We Deliver",
      deliverables: [
        "Forecasting (sales, inventory, finance, demand)",
        "Customer churn prediction",
        "Recommendation engines",
        "Customer segmentation",
        "Fraud detection & anomaly analysis",
        "NLP solutions (chatbots, sentiment analysis)",
        "Predictive maintenance models"
      ],
      logo: Logo,
      logoAlt: "Machine Learning Logo"
    },
    {
      title: "Consulting & Strategic Advisory",
      description: "Expert guidance to help businesses define the right analytics strategy and execute it effectively.",
      deliverableTitle: "What We Deliver",
      deliverables: [
        "Data maturity assessment",
        "Analytics roadmap",
        "BI strategy formulation",
        "Cost optimization",
        "Process automation strategy",
        "Analytics team training & upskilling"
      ],
      logo: Logo,
      logoAlt: "Consulting Logo"
    },
    {
      title: "Custom Software & Tooling",
      description: "Internal tools and analytics-driven apps tailored to your business needs.",
      deliverableTitle: "Deliverables",
      deliverables: [
        "Custom dashboards",
        "Internal workflow apps",
        "Recommendation widgets",
        "Automated scripts & bots"
      ],
      logo: Logo,
      logoAlt: "Custom Software Logo"
    }
  ];

  return (
    <div className="flex flex-col gap-40 pt-40">
      {servicesData.map((service, index) => (
        <ServiceSection key={index} data={service} index={index} />
      ))}
    </div>
  );
}

export default App;