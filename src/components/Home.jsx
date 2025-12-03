import React, { useEffect, useState } from 'react';
import Swipper from './Swipper';
import ServicesCard from './ServicesCard';
import { Link } from 'react-router';
import TipsCare from './TipsCare';
import MeetOurExpertVets from './MeetOurExpertVets';
import PatientFeedback from './PatientFeedback';

const Home = () => {
    const [data, setData] = useState()

    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className='space-y-10'>
            <title>Home</title>
            <Swipper></Swipper>
            
            {/* services section */}
            <div >
                <h1 className='text-2xl text-center font-bold my-4'>Popular Winter Care Services</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-x-hidden gap-6 mx-auto'>
                    {
                        data?.slice(0, 6).map(service => <ServicesCard key={service.serviceId} service={service}></ServicesCard>)
                    }
                </div>
                <div className='flex justify-center items-center'>
                    <Link className='btn btn-primary w-30 mt-6' to={"/services"}>All Services</Link>
                </div>
            </div>

            {/* Pets Care Tips section */}
            <TipsCare></TipsCare>

            {/* Meet Our Experts Vets */}
            <MeetOurExpertVets></MeetOurExpertVets>

            {/* Patient Feedback */}
            <PatientFeedback></PatientFeedback>
        </div>
    );
};

export default Home;