import React from "react";

const vets = [
  {
    "vetId": 1,
    "name": "Dr. Sarah Ahmed",
    "speciality": "Canine & Feline Medicine",
    "experience": "10 years",
    "image": "https://i.ibb.co.com/mCv26j3F/e9cbba2b-bb90-491d-a00b-b15112fb480c.jpg",
    "bio": "Dr. Sarah specializes in preventive care and advanced treatment for dogs and cats, ensuring your pets are always healthy."
  },
  {
    "vetId": 2,
    "name": "Dr. Imran Hossain",
    "speciality": "Surgery & Emergency Care",
    "experience": "8 years",
    "image": "https://i.ibb.co.com/tw4R0ckK/Lou-Ivanovic-MD-FACC.jpg",
    "bio": "Dr. Imran is an expert in surgical procedures and emergency treatments for pets, providing safe and effective care."
  },
  {
    "vetId": 3,
    "name": "Dr. Farzana Yasmin",
    "speciality": "Nutrition & Behavioral Therapy",
    "experience": "7 years",
    "image": "https://i.ibb.co.com/b5Xtr1yy/77dec56d3f345a9f2c2cfe0a4bee60dd.jpg",
    "bio": "Dr. Farzana focuses on pet nutrition and behavioral therapy, helping pets stay fit, happy, and mentally healthy."
  }
]


const MeetOurExpertVets = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    Meet Our Expert Vets
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-x-hidden gap-6">
                    {vets.map(vet => (
                        <div
                            key={vet.vetId}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                        >
                            <img
                                src={vet.image}
                                alt={vet.name}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {vet.name}
                                </h3>
                                <p className="text-sm text-gray-500 mb-1">
                                    {vet.speciality}
                                </p>
                                <p className="text-sm text-gray-400 mb-3">
                                    Experience: {vet.experience}
                                </p>
                                <p className="text-gray-700 text-sm">{vet.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MeetOurExpertVets;
