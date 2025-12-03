import React, { useEffect } from "react";
import { FaUserFriends, FaSmileBeam, FaCheckCircle } from "react-icons/fa";
import AOS from 'aos';

const PatientFeedback = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false, 
        });
        AOS.refresh();
    }, []);
    return (
        <section className="bg-base-200 py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Our Service Achievements
                </h2>

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-x-hidden py-10"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    // data-aos-once="true"
                >

                    <div className="card bg-base-100 shadow-xl py-8 flex flex-col items-center rounded-xl hover:scale-105 duration-300">
                        <FaUserFriends className="text-5xl text-accent mb-4" />
                        <h3 className="text-4xl font-bold">5,200+</h3>
                        <p className="text-lg text-gray-600 mt-2">Total Clients Served</p>
                    </div>

                    <div className="card bg-base-100 shadow-xl py-8 flex flex-col items-center rounded-xl hover:scale-105 duration-300">
                        <FaSmileBeam className="text-5xl text-yellow-500 mb-4" />
                        <h3 className="text-4xl font-bold">98%</h3>
                        <p className="text-lg text-gray-600 mt-2">Customer Satisfaction</p>
                    </div>

                    <div className="card bg-base-100 shadow-xl py-8 flex flex-col items-center rounded-xl hover:scale-105 duration-300">
                        <FaCheckCircle className="text-5xl text-green-500 mb-4" />
                        <h3 className="text-4xl font-bold">3,800+</h3>
                        <p className="text-lg text-gray-600 mt-2">Returning Clients</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PatientFeedback;
