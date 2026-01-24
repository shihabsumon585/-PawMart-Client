import React from "react";
import { Link } from "react-router";

const About = () => {
    return (
        <section className="font-roboto dark:bg-black text-gray-800 dark:text-gray-100">
            <title>About</title>
            
            <div className="text-center my-14">
                <h2 className="text-3xl md:text-4xl font-bold text-base-content">
                    About <span className="text-accent">PawMart</span>
                </h2>
                <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
                    PawMart is your trusted online destination for premium pet products and care essentials.
                </p>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-3xl font-semibold mb-4 text-secondary">Who We Are</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        PawMart was created with one simple mission: to make pet care easy, affordable, and
                        accessible for every pet parent. From nutritious food to essential accessories, we
                        bring everything your pet needs under one roof.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        We believe pets are family. That’s why we carefully select high-quality products and
                        ensure fast, reliable delivery across the country.
                    </p>
                </div>

                {/* Right Content (Stats / Highlights) */}
                <div className="grid grid-cols-2 gap-6">
                    <div className=" dark:bg-gray-900 rounded-2xl p-6 text-center shadow">
                        <h3 className="text-3xl font-bold text-primary">5K+</h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Happy Customers</p>
                    </div>
                    <div className=" dark:bg-gray-900 rounded-2xl p-6 text-center shadow">
                        <h3 className="text-3xl font-bold text-primary">1K+</h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Pet Products</p>
                    </div>
                    <div className=" dark:bg-gray-900 rounded-2xl p-6 text-center shadow">
                        <h3 className="text-3xl font-bold text-primary">24/7</h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Customer Support</p>
                    </div>
                    <div className=" dark:bg-gray-900 rounded-2xl p-6 text-center shadow">
                        <h3 className="text-3xl font-bold text-primary">Fast</h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Home Delivery</p>
                    </div>
                </div>
            </div>

            {/* Call To Action */}
            <div className="bg-accent py-12 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Because Your Pet Deserves the Best</h2>
                <p className="mb-6 opacity-90">Shop smart. Care better. Love more.</p>
                <Link to={"/pets&supplies"} className="bg-white text-accent font-semibold px-6 py-3 rounded-xl hover:scale-105 transition">
                    Explore Shop
                </Link>
            </div>
        </section>
    );
};

export default About;
