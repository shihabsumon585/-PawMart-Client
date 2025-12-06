import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const PetsSupplies = () => {
    const [data, setData] = useState();
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/listing")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, []);
    return (
        <div>
            <title>Pets & Supplies</title>
            <h1 className='text-center text-2xl font-bold my-10'>All Services</h1>

            {/* filtered category */}
            <div className="flex justify-end mb-6">
                <select
                    className="select select-bordered w-52"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    <option value="Pets">Pets</option>
                    <option value="Food">Food</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Care Products">Care Products</option>
                </select>
            </div>



            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    data
                        ?.filter(item =>
                            selectedCategory ? item.category === selectedCategory : true
                        )
                        ?.map(service => (
                            <ServicesCard key={service._id} service={service} />
                        ))
                }

            </div>
        </div>
    );
};

export default PetsSupplies;