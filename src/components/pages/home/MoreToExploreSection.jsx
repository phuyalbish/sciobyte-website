import { useEffect, useState } from "react";
import TrekTile from "@/components/tiles/TrekTile.jsx";
import { fetchTreks } from "@/apis/treks.js";

const MoreToExploreSection = ()  => {
    const [treks, setTreks] = useState([]);
    
    useEffect(() => {
        ( async () => {
            const response = await fetchTreks();
            const treksData = response?.data?.results;
            setTreks(treksData);
        })();
    }, []);
    

    return(
        <>
            <section className="p-4 bg-[#B0E4DD]">
                <h1 className="text-[2.3rem] mb-[3rem] font-semibold">Discover more to Explore</h1>
                <div className="flex flex-wrap gap-[1.5rem] place-items-center justify-center items-center">
                    {
                        treks?.map((trek, index) => <TrekTile key={index} data={trek} />)
                    }
                </div>
            </section>
        </>
    );
}

export default MoreToExploreSection;