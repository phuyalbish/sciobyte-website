import React from "react";
import DOMPurify from 'dompurify';
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
function TrekOtherInfoSection({ info }) {
  const sanitizedContent = DOMPurify.sanitize(info);
  return (
    <section id="otherinfo" className="text-base italic font-lighter text-N500">

      <span className="font-light text-md font-liches text-black">Other Information:</span>
      <span dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    
    </section>
  );
}

export default TrekOtherInfoSection;