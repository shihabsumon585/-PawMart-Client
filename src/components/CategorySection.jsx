import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import ServicesCard from './ServicesCard';


const CategorySection = () => {
    const [services, setServices] = useState();
    const [categoryDatas, setCategoryDatas] = useState([]);
    const categories = [
        { name: "Pets", icon: "🐶", color: "from-orange-400 to-pink-500" },
        { name: "Food", icon: "🍖", color: "from-green-400 to-emerald-500" },
        { name: "Accessories", icon: "🧸", color: "from-blue-400 to-cyan-500" },
        { name: "Care Products", icon: "💊", color: "from-purple-400 to-pink-500" }
    ];

    useEffect(() => {
        fetch("http://localhost:3000/listing")
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.log(error));
    }, []);
    const handleCategory = async (category) => {
        const res = await fetch(`http://localhost:3000/category-filtered-product/${category}`);
        const data = await res.json();
        setCategoryDatas(data);
    }

    return (
        <div className='bg-[#F2F4F7] pt-2 rounded-4xl pb-6'>
            {/* 4 category section */}
            <div className="container mx-auto px-4 pb-16 ">
                <h2 className="text-4xl text-center text-blue-900 font-bold my-10">
                    Category Section
                </h2>
                {

                }
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories?.map((cat) => (
                        <div
                            key={cat.name}
                            className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                        >
                            <div className={`card-body items-center text-center bg-gradient-to-br ${cat.color} text-white rounded-2xl`}>
                                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                                    {cat.icon}
                                </div>
                                <h3 className="card-title text-2xl">{cat.name}</h3>
                                <Link onClick={() => handleCategory(cat.name)} to={`/category-filtered-product/${cat.name}`} className="btn btn-sm btn-outline border-white text-white hover:bg-white hover:text-gray-800 mt-4">
                                    Explore
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Recent section */}
            <div className=''>
                <h1 className='text-4xl text-center text-blue-900 font-bold my-10'>Recent Listings</h1>

                {/* 4 category */}

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-x-hidden gap-6 mx-auto'>
                    {
                        services?.slice(0, 6).map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                    }
                </div>
                <div className='flex justify-center items-center'>
                    <Link className='btn btn-primary w-30 mt-6' to={"/pets&supplies"}>All Services</Link>
                </div>
            </div>
        </div>
    );
};

export default CategorySection;