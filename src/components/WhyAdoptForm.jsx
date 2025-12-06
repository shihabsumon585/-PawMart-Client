import React from 'react';

const WhyAdoptForm = () => {
    return (
        {/* Why Adopt Section */ }
        < div className="bg-gradient-to-r from-orange-500 to-pink-500 py-16" >
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">
                    🐾 Why Adopt from PawMart?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="card bg-white shadow-xl">
                        <div className="card-body items-center text-center">
                            <div className="bg-orange-100 p-4 rounded-full mb-4">
                                <Heart size={48} className="text-orange-500" />
                            </div>
                            <h3 className="card-title">Save a Life</h3>
                            <p className="text-gray-600">
                                Every adoption gives a homeless pet a second chance at happiness and unconditional love.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-white shadow-xl">
                        <div className="card-body items-center text-center">
                            <div className="bg-pink-100 p-4 rounded-full mb-4">
                                <Shield size={48} className="text-pink-500" />
                            </div>
                            <h3 className="card-title">Verified Listings</h3>
                            <p className="text-gray-600">
                                All our listings are verified to ensure the safety and health of every pet.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-white shadow-xl">
                        <div className="card-body items-center text-center">
                            <div className="bg-purple-100 p-4 rounded-full mb-4">
                                <Users size={48} className="text-purple-500" />
                            </div>
                            <h3 className="card-title">Community Support</h3>
                            <p className="text-gray-600">
                                Join a caring community of pet lovers and get ongoing support for your new companion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
      </div >
    );
};

export default WhyAdoptForm;