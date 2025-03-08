import { useEffect, useState } from "react";
import TrekTile from "@/components/tiles/TrekTile.jsx";
import { fetchTreks } from "@/apis/treks.js";
import { v4 as uuidv4 } from "uuid";

const TrekSection = ()  => {
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
            <section className="p-4">
                <h1 className="text-[2.3rem] mb-[3rem] font-semibold">Your Tale Begins <span className="text-primary">NOW!</span></h1>
                <div className="flex flex-wrap flex-col md:flex-row gap-[1.5rem] justify-center items-center">
                    {
                        treks?.map(trek => <TrekTile key={uuidv4()} data={trek} />)
                    }
                </div>
            </section>
        </>
    );
}

export default TrekSection;