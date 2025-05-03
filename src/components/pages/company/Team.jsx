import TeamCard from "@/components/tiles/TeamCard.jsx";
import aashish from "@/assets/aashish.jpeg";
import PageContainer from "@/components/PageContainer.jsx";

const Team = () => {
  return (
<PageContainer>
  <div id="team"  className="text-xl font-liches text-left rounded-lg font-semibold">
          Meet Our Team
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[2rem]">
        <TeamCard name="Aashish Regmi" title="Founder" imgUrl={aashish} />
      </div>
      </PageContainer>
  );
};

export default Team;
