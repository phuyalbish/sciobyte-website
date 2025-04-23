import DOMPurify from 'dompurify';
function TrekOverviewSection({ description }) {
  const sanitizedContent = DOMPurify.sanitize(description)
  return (
    <section id="overview" className="flex flex-col gap-5">

          <div className="text-xl font-liches font-light">Overview</div>
      <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    
    </section>
  );
}

export default TrekOverviewSection;
