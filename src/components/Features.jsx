import { PawPrint, Truck, ShieldCheck, HeartHandshake } from "lucide-react";

export default function Features() {
    const features = [
        {
            icon: PawPrint,
            title: "Premium Pet Products",
            desc: "Carefully selected food, toys, and accessories to keep your pets happy and healthy.",
        },
        {
            icon: Truck,
            title: "Fast & Reliable Delivery",
            desc: "Quick delivery across the city so your pet never has to wait.",
        },
        {
            icon: ShieldCheck,
            title: "Trusted & Safe",
            desc: "100% authentic products with secure payment and buyer protection.",
        },
        {
            icon: HeartHandshake,
            title: "Pet Lover Support",
            desc: "Friendly customer support from people who truly love pets.",
        },
    ];

    return (
        <section className=" bg-base-100">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content">
                        Why Choose <span className="text-accent">PawMart</span>
                    </h2>
                    <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
                        Everything you need for your beloved pets — quality products, fast delivery, and trusted service.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="group rounded-2xl border border-base-300 p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-content transition">
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-lg font-semibold text-base-content mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-base-content/70">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
