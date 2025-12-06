import React from 'react';
import { useLoaderData } from 'react-router';
import ServicesCard from './ServicesCard';

const CategoryWiseCard = () => {
    const loaderDatas = useLoaderData([]);
    return (
        <div>
            <h1 className='text-center text-blue-900 text-4xl font-bold mt-10'>Total Product ({loaderDatas?.length})</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-x-hidden gap-6 mx-auto mt-10'>
                {
                    loaderDatas?.map(loaderData => <ServicesCard key={loaderData._id} service={loaderData}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default CategoryWiseCard;