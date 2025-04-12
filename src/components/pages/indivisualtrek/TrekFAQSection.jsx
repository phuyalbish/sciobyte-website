import React from "react";
import TrekFAQ from "@/components/accordion/TrekFAQ.jsx";
function TrekFAQSection({ faqs }) {
  return (
    <section id="faqs">
      <div className="flex flex-col gap-2">
        {Array.isArray(faqs) && faqs.length > 0 ? (
          <>
            <div className="text-lg font-bold">Frequently Asked Questions</div>
            {faqs.map((faq, index) => (
              <TrekFAQ faq={faq} key={index} />
            ))}
          </>
        ) : ""}
      </div>
    </section>
  );
}

export default TrekFAQSection;
