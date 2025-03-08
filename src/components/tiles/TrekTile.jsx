const JourneyDetailsPanel = ({ detail }) => {
    console.log(detail);
    return (
        <>
            <p className="flex justify-between items-center gap-[0.5rem] md:gap-[1rem]">
                <img width="100%" src={detail?.icon} alt="TrekType.svg" className=""
                />
                <span className="text-center">
                    <span className="block text-sm">{detail?.key}</span>
                    <strong className="block md:text-base text-sm">{detail?.value}</strong>
                </span>
            </p>
        </>
    )
}

const TrekTile = ({ data }) => {
    const { name, price, image, difficulty, formatted_duration } = data;
    const journeyDetails = [
        { icon: '/TrekType.svg', key: "Type", value: "Trek" },
        { icon: '/duration.svg', key: "Duration", value: formatted_duration },
        { icon: '/difficult.svg', key: "Difficulty Level", value: difficulty?.name },
    ]

    return (
        <>
            <div className="max-w-lg flex flex-col gap-[0.5rem] rounded-lg overflow-hidden shadow-md bg-white p-5">
                <div className="relative">
                    <img className="rounded w-full h-64 object-cover object-center" src={image} alt="Annapurna Base Camp Circuit" />
                    <div className="flex items-center mb-2">
                        <span className="absolute top-[0.5rem] left-[0.5rem] bg-secondary text-white text-base  rounded-xl font-bold px-[1rem] py-[0.5rem]">Best Price</span>
                        <div className="absolute top-[0.5rem] right-[0.5rem] h-[2.3rem] w-[2.3rem] bg-secondary rounded-xl p-[0.3rem]">
                            <img className="h-full w-full" src="/group.svg" alt="Group Icon" />
                        </div>
                    </div>
                </div>
                <h2 className="font-bold text-xl mb-2 text-left">{name}</h2>
                <div className="flex justify-between items-end mb-1 w-full">
                    <span className="text-yellow-500 text-2xl">★★★★☆</span>
                    <p className="text-gray-600 text-right">Price Starting From <br /> <span className="text-primary font-bold text-3xl">USD {price}</span></p>
                </div>
                <div className="flex justify-between text-gray-600 mt-2 gap-[2rem]">
                    {
                        journeyDetails.map((detail, index) => <JourneyDetailsPanel key={index} detail={detail} />)
                    }
                </div>
            </div>
        </>
    );
}

export default TrekTile;