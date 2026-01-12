import React from 'react';
import Container from '@/components/Container.jsx';
import useIntersectionVisible from "@/hooks/useIntersectionVisible";

const PrivacyPolicy = () => {
  const { ref: sectionRef, isVisible } = useIntersectionVisible({ threshold: 0.1 });

  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us, such as when you fill out our onboarding form, request a consultation, or communicate with us. This includes your name, business description, email address, and phone number."
    },
    {
      title: "2. How We Use Your Data",
      content: "ScioByte uses the collected data to provide and improve our services, develop custom BI and AI solutions, and communicate project updates. We do not sell your personal or business data to third parties."
    },
    {
      title: "3. Data Security",
      content: "We implement enterprise-grade security measures to protect your information. Since we specialize in data engineering, we treat your business intelligence with the highest level of confidentiality and technical safeguards."
    },
    {
      title: "4. Cookies & Tracking",
      content: "Our website may use cookies to enhance user experience and analyze site traffic. You can choose to disable cookies through your browser settings, though some features of the site may function differently."
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
            <h1 className="text-xl md:text-3xl font-bold mb-3">PRIVACY <br /><span className="text-gray-400 font-medium">POLICY.</span></h1>
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em]">Updated: Jan 2026</p>
          </div>

          {/* Intro */}
          <div className="mb-12">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed italic">
              At ScioByte, we are committed to protecting your privacy. This policy outlines how we handle your data when you use our website and services.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-10">
            {sections.map((section, index) => (
              <div key={index} className="group">
                <h2 className="text-sm font-bold uppercase tracking-wide mb-3 group-hover:text-gray-400 transition-colors duration-300">
                  {section.title}
                </h2>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed border-l border-gray-100 pl-5 group-hover:border-black transition-colors duration-300">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 p-6 bg-gray-50 rounded-lg border border-gray-100 inline-block w-full">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-1">Compliance Inquiry</h2>
            <p className="text-[11px] text-gray-500 mb-3">For clarifications regarding data handling:</p>
            <a 
              href="mailto:privacy@sciobyte.com" 
              className="text-xs font-bold underline hover:text-gray-400 transition-colors"
            >
              privacy@sciobyte.com
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;