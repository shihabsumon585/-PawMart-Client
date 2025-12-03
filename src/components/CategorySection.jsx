import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import ServicesCard from './ServicesCard';


const CategorySection = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, []);
    return (
        <div>
            <div >
                <h1 className='text-4xl text-center text-blue-900 font-bold my-10'>Category Section</h1>

                {/* 4 category */}
                <div>
                    <div>
                        {
                            // data.map(d => <button>"{d.category}"</button>)
                        }
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-x-hidden gap-6 mx-auto'>
                    {
                        data?.slice(0, 6).map(service => <ServicesCard key={service.serviceId} service={service}></ServicesCard>)
                    }
                </div>
                <div className='flex justify-center items-center'>
                    <Link className='btn btn-primary w-30 mt-6' to={"/services"}>All Services</Link>
                </div>
            </div>
        </div>
    );
};

export default CategorySection;