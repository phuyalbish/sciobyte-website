import TeamCard from "@/components/tiles/TeamCard.jsx";
import aashish from "@/assets/aashish.jpeg";
const Team = () => {
  return (
    <>
      <div id="team" className="flex flex-col px-5 md:px-[4rem] max-w-[100em] mx-auto gap-5">
        <div className="text-xl font-liches text-left rounded-lg font-semibold">
          Meet Our Team
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[2rem]">
        <TeamCard name="Aashish Regmi" title="Founder" imgUrl={aashish} />
      </div>
      </div>
    </>
  );
};

export default Team;
