import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, []);
    return (
        <div>
            <title>All Services</title>
            <h1 className='text-center text-2xl font-bold my-10'>All Services</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    data?.map(service => <ServicesCard key={service.serviceId} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;