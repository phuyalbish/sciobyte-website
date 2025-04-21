import React from "react";

import DOMPurify from 'dompurify';
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
function TrekRequirementSection({ requirements }) {

  const sanitizedContent = DOMPurify.sanitize(requirements);
  return (
    <section id="requirements">
    {requirements && (
    <div  className="flex flex-col gap-5">
      <div className="text-xl tracking-wide font-liches font-light">Requirements</div>
    
      <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
      </div>)}
    </section>
  );
}

export default TrekRequirementSection;
