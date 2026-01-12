import React from 'react';
import Container from '@/components/Container.jsx';
import useIntersectionVisible from "@/hooks/useIntersectionVisible";

const TermsOfService = () => {
  const { ref: sectionRef, isVisible } = useIntersectionVisible({ threshold: 0.1 });

  const clauses = [
    {
      title: "1. Service Scope",
      content: "ScioByte provides data-driven consulting, BI dashboard development, and custom AI tooling. These services are provided on a project or retainer basis as specified in your individual service agreement."
    },
    {
      title: "2. User Obligations",
      content: "Users must provide accurate business data for analysis. You are responsible for maintaining the confidentiality of any access credentials provided for ScioByte-developed dashboards or portals."
    },
    {
      title: "3. Prohibited Use",
      content: "You may not use our developed tools or data insights for any illegal activities, or to reverse-engineer any proprietary ScioByte methodologies used in the delivery of the service."
    },
    {
      title: "4. Service Availability",
      content: "While we strive for 24/7 availability for retainer-based support and hosted dashboards, we do not guarantee uninterrupted service. Maintenance windows will be communicated in advance."
    },
    {
      title: "5. Intellectual Property",
      content: "Unless otherwise agreed in writing, ScioByte grants you a perpetual, non-exclusive license to use the final deliverables. ScioByte retains ownership of pre-existing code libraries and generic frameworks."
    },
    {
      title: "6. Modifications to Service",
      content: "We reserve the right to modify or discontinue parts of our service offerings to reflect changes in technology or market standards. Significant changes will be updated here."
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen py-16">
      <Container>
        <div 
          ref={sectionRef}
          className={`max-w-3xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <div className="border-b border-gray-100 pb-8 mb-10">
            <h1 className="text-xl md:text-3xl font-bold  mb-3">TERMS OF <br /><span className="text-gray-400 font-medium">SERVICE.</span></h1>
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em]">Effective: January 2026</p>
          </div>

          {/* Intro */}
          <div className="mb-12">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed italic">
              These Terms of Service govern your access to and use of ScioByte's platform and consulting services. Please read them carefully to understand your rights and responsibilities.
            </p>
          </div>

          {/* Service Clauses */}
          <div className="space-y-10">
            {clauses.map((clause, index) => (
              <div key={index} className="group">
                <h2 className="text-sm font-bold uppercase tracking-wide mb-3 group-hover:text-gray-400 transition-colors duration-300">
                  {clause.title}
                </h2>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed border-l border-gray-100 pl-5 group-hover:border-black transition-colors duration-300">
                  {clause.content}
                </p>
              </div>
            ))}
          </div>

          {/* Legal Footer */}
          <div className="mt-16 p-6 bg-gray-50 rounded-lg border border-gray-100 w-full">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-1">Governing Law</h2>
            <p className="text-[11px] text-gray-500 mb-3">
              By using these services, you consent to the jurisdiction of the courts in Bangalore, India for any legal matters arising from these terms.
            </p>
            <p className="text-[10px] text-gray-400 italic">Questions? Contact our legal desk at legal@sciobyte.com</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TermsOfService;