import TeamCard from "@/components/tiles/TeamCard.jsx";
import aashish from "@/assets/aashish.jpeg";
const Team = () => {
  const teams = [
    {
      name: "Aashish Regmi",
      title: "Founder",
      imageUrl: { aashish },
    },
  ];
  return (
    <>
      <div>
        <h1 className="text-[2.375rem] font-semibold py-[2rem] text-center">
          Meet Our Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[2rem]">
          {teams.map((team, index) => (
            <TeamCard key={index} team={team} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
