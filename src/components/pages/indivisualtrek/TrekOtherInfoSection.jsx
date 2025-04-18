import React from "react";
import DOMPurify from 'dompurify';
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
function TrekOtherInfoSection({ info }) {
  const sanitizedContent = DOMPurify.sanitize(info);
  return (
    <section id="overview" className="flex flex-col gap-5 text-base italic text-lighter">

      Other Information:
      <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    
    </section>
  );
}

export default TrekOtherInfoSection;