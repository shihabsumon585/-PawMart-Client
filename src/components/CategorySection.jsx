import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import ServicesCard from './ServicesCard';

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const CategorySection = () => {
    const [services, setServices] = useState();
    const categories = [
        { name: "Pets", icon: "🐶", color: "from-orange-400 to-pink-500" },
        { name: "Food", icon: "🍖", color: "from-green-400 to-emerald-500" },
        { name: "Accessories", icon: "🧸", color: "from-blue-400 to-cyan-500" },
        { name: "Care Products", icon: "💊", color: "from-purple-400 to-pink-500" }
    ];

    useEffect(() => {
        fetch("https://paw-mart-server-bay.vercel.app/listing")
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.log(error));
    }, []);

    const handleCategory = async (category) => {
        const res = await fetch(`https://paw-mart-server-bay.vercel.app/category-filtered-product/${category}`);
        const data = await res.json();
        console.log(data);
    }

    return (
        <div className=' pt-2 rounded-4xl '>
            <div className="container mx-auto px-4 pb-16 ">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content">
                        Explore Our <span className="text-accent">Categories</span>
                    </h2>
                    <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
                        Browse through a variety of products to find everything your pets need, from food to toys and accessories.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories?.map((cat) => (
                        <div
                            key={cat.name}
                            className="card shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                        >
                            <div className={`card-body items-center text-center bg-gradient-to-br ${cat.color} text-white rounded-2xl`}>
                                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                                    {cat.icon}
                                </div>
                                <h3 className="card-title text-2xl">{cat.name}</h3>

                                <Link
                                    onClick={() => handleCategory(cat.name)}
                                    to={`/category-filtered-product/${cat.name}`}
                                    className="btn btn-sm btn-outline border-white text-white hover:bg-white hover:text-gray-800 mt-4"
                                    data-tooltip-id="explore-tip"
                                    data-tooltip-content={`Explore ${cat.name} category`}
                                >
                                    Explore
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className='mt-20'>

                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content">
                        Check Out Our <span className="text-accent">Recent Listings</span>
                    </h2>
                    <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
                        Explore the latest products added to PawMart and never miss out on trending items for your pets.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 overflow-x-hidden gap-6 mx-auto'>
                    {
                        services?.slice(0, 6).map(service => (
                            <ServicesCard key={service._id} service={service}></ServicesCard>
                        ))
                    }
                </div>

                <div className='flex justify-center items-center'>
                    <Link className='btn bg-accent w-30 mt-6' to={"/pets&supplies"}>
                        All Services
                    </Link>
                </div>
            </div>


            <Tooltip id="explore-tip" place="top" />
        </div>
    );
};

export default CategorySection;
