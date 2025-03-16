import TeamCard from "@/components/tiles/TeamCard.jsx";

const Team = () => {
    const teams = [
        {
            name: "Aashish Regmi",
            title: "Founder",
            imageUrl: "/aashish.jpeg"
        },
    ]
    return (
        <>
            <div>
                <h1 className="text-[2.375rem] font-semibold py-[2rem] text-center">Meet Our Team</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-4 gap-[2rem]">
                    {
                        teams.map((team, index) => <TeamCard key={index} team={team} />)
                    }
                </div>
            </div>
        </>
    );
}

export default Team;