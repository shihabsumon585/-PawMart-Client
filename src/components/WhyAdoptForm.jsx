import { Heart, Shield, Users } from 'lucide-react';
import React from 'react';

export default function WhyAdoptForm() {
    const features = [
        {
            icon: Heart,
            title: "Save a Life",
            description: "Every adoption gives a homeless pet a second chance at happiness and unconditional love.",
        },
        {
            icon: Shield,
            title: "Verified Listings",
            description: "All our listings are verified to ensure the safety and health of every pet.",
        },
        {
            icon: Users,
            title: "Community Support",
            description: "Join a caring community of pet lovers and get ongoing support for your new companion.",
        },
    ];

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content">
                        Why Adopt from <span className="text-accent">PawMart</span>?
                    </h2>
                    <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
                        Discover the benefits of adopting through PawMart and joining our caring pet community.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="rounded-2xl bg-base-100 shadow-md p-8 text-center transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="bg-accent/10 p-5 rounded-full mb-4 inline-flex items-center justify-center">
                                    <Icon size={48} className="text-accent" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-base-content">{item.title}</h3>
                                <p className="text-sm text-base-content/70">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}