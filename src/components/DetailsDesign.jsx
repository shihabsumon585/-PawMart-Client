import { Star } from "lucide-react";
import React from "react";

const DetailsDesign = ({ d }) => {
    if (!d) return <p className="text-center text-lg">No Service Found</p>
    
    const {
        serviceId,
        serviceName,
        providerName,
        providerEmail,
        price,
        rating,
        slotsAvailable,
        description,
        image,
        category,
    } = d;

    return (
        <div className="flex justify-center p-6">
            <div className="max-w-3xl w-full shadow-xl rounded-2xl overflow-hidden">
                <img
                    src={image}
                    alt={serviceName}
                    className="w-full h-72 object-cover"
                />
                <div className="p-6 space-y-4">
                    <h2 className="text-3xl font-bold">{serviceName}</h2>
                    <p className="text-gray-600">Category: <span className="font-semibold">{category}</span></p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 bg-gray-100 rounded-xl space-y-1">
                            <p><span className="font-semibold">Service ID:</span> {serviceId}</p>
                            <p><span className="font-semibold">Provider:</span> {providerName}</p>
                            <p><span className="font-semibold">Email:</span> {providerEmail}</p>
                            <p><span className="font-semibold">Slots Available:</span> {slotsAvailable}</p>
                        </div>
                        

                        <div className="p-4 bg-gray-100 rounded-xl space-y-1">
                            <p><span className="font-semibold">Price:</span> ${price}</p>
                            <p className="flex items-center gap-1 font-semibold">
                                Rating: {rating} <Star size={18} className="text-yellow-500" />
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed">{description}</p>

                    <button className="w-full text-lg py-6 rounded-xl mt-4">
                        Book This Service
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailsDesign;