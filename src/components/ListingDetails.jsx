import React from "react";

const ListingDetails = ({ listing, setIsModalOpen }) => {
    return (
        <div className="max-w-3xl mx-auto py-10 px-5">
            <div className="card bg-base-100 shadow-xl rounded-2xl">
                <figure className="h-72">
                    <img 
                        src={listing?.image}
                        alt={listing?.name}
                        className="w-full h-full object-cover"
                    />
                </figure>

                <div className="card-body space-y-3">
                    <h2 className="card-title text-3xl font-bold">
                        {listing?.name}
                    </h2>

                    <p><span className="font-bold">Category:</span> {listing?.category}</p>
                    <p><span className="font-bold">Owner Email:</span> {listing?.ownerEmail}</p>
                    <p><span className="font-bold">Location:</span> {listing?.location}</p>

                    <p className="leading-7">{listing?.description}</p>

                    <p className="text-xl font-bold text-primary">
                        Price: ${listing?.price}
                    </p>

                    <div className="mt-5">
                        <button 
                            className="btn btn-primary w-full text-lg"
                            onClick={() => setIsModalOpen(true)}
                        >
                            🛒 Adopt / Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingDetails;
