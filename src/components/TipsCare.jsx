import React, { useEffect, useState } from "react";
import TipsCareCard from "./TipsCareCard";

const TipsCare = () => {
    const [data, setData] = useState()

    useEffect(() => {
        fetch("/tipscare.json")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="mt-15">
            <h1 className="text-2xl text-black font-bold text-center mb-4">Winter Care Tips for Pets</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-x-hidden gap-6">
                {
                    data?.map(tip => <TipsCareCard key={tip.tipId} tip={tip}></TipsCareCard>)
                }
            </div>
        </div>
    );
};

export default TipsCare;
