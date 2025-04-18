import React from "react";
import DOMPurify from 'dompurify';
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
function TrekOverviewSection({ description, challenges = null }) {
  const sanitizedContent = DOMPurify.sanitize(description);
  return (
    <section id="overview" className="flex flex-col gap-5">
      <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    
    </section>
  );
}

export default TrekOverviewSection;
