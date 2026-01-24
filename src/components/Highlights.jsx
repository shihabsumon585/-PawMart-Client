import { Star, Users, PackageCheck, Smile } from "lucide-react";

export default function Highlights() {
    const highlights = [
        {
            icon: Users,
            value: "10K+",
            label: "Happy Pet Parents",
        },
        {
            icon: PackageCheck,
            value: "5K+",
            label: "Products Delivered",
        },
        {
            icon: Star,
            value: "4.9/5",
            label: "Customer Rating",
        },
        {
            icon: Smile,
            value: "99%",
            label: "Satisfaction Rate",
        },
    ];

    return (
        <section className=" bg-base-100">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content">
                        PawMart <span className="text-accent">Highlights</span>
                    </h2>
                    <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
                        Trusted by thousands of pet parents for quality, care, and reliability.
                    </p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="flex items-center gap-5 rounded-2xl border border-base-300 p-6 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                                    <Icon size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-base-content">
                                        {item.value}
                                    </h3>
                                    <p className="text-sm text-base-content/70">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
