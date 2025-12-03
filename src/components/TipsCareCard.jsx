import React from 'react';

const TipsCareCard = ({tip}) => {
    return (
        <div className="w-full bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition">
            <img
                src={tip?.image}
                alt={tip?.title}
                className="w-full h-40 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{tip?.title}</h3>
                <p className="text-sm text-gray-700">{tip?.shortDescription}</p>
            </div>
        </div>
    );
};

export default TipsCareCard;