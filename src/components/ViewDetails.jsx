import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Star } from "lucide-react";
import { toast, Toaster } from 'react-hot-toast';

const ViewDetails = () => {

    const servicesData = useLoaderData();
    const { id } = useParams();
    const [details, setDetails] = useState();

    useEffect(() => {
        const foundedData = servicesData.find(d => d.serviceId == id);
        setDetails(foundedData);
    }, [servicesData, id]);

    const handleBookService = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        toast(`${name} booking confirm to your service...`); 
        e.target.reset();
    }


    return (
        <div className='bg-base-300'>
            <Toaster></Toaster>
            <title>Details</title>

            <div className="flex justify-center p-6">
                <div className="max-w-3xl w-full shadow-xl rounded-2xl overflow-hidden">
                    <img
                        src={details?.image}
                        alt={details?.serviceName}
                        className="w-full h-72 object-cover"
                    />
                    <div className="p-6 space-y-4">
                        <h2 className="text-3xl font-bold">{details?.serviceName}</h2>
                        <p className="text-gray-600">Category: <span className="font-semibold">{details?.category}</span></p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <div className="p-4 bg-gray-100 rounded-xl space-y-1">
                                <p><span className="font-semibold">Service ID:</span> {details?.serviceId}</p>
                                <p><span className="font-semibold">Provider:</span> {details?.providerName}</p>
                                <p><span className="font-semibold">Email:</span> {details?.providerEmail}</p>
                                
                            </div>


                            <div className="p-4 bg-gray-100 rounded-xl space-y-1">
                                <p><span className="font-semibold">Price:</span> ${details?.price}</p>
                                <p className="flex items-center gap-1 font-semibold">
                                    Rating: {details?.rating} <Star size={18} className="text-yellow-500" />
                                </p>
                                <p><span className="font-semibold">Slots Available:</span> {details?.slotsAvailable}</p>
                            </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed">{details?.description}</p>


                    </div>
                </div>
            </div>

            <div className="flex justify-center p-6 mt-10 ">
                <div className="max-w-3xl w-full shadow-xl rounded-2xl overflow-hidden pb-10">
                    <form onSubmit={handleBookService}>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto pb-10">
                            <legend className="fieldset-legend text-xl text-center font-bold">Book Your Service</legend>

                            <label className="label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Your Name" required />

                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Enter Your Email" required />

                            <button type='submit' className="btn btn-neutral mt-4">Book This Service</button>
                        </fieldset>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ViewDetails;