import { Stethoscope, Scissors, Bath, ShoppingCart } from "lucide-react";

export default function Service() {
    const services = [
        {
            icon: Stethoscope,
            title: "Pet Health Care",
            desc: "Basic health checkups and guidance to keep your pet active and safe.",
        },
        {
            icon: Scissors,
            title: "Grooming Service",
            desc: "Professional grooming to keep your pets clean, fresh, and stylish.",
        },
        {
            icon: Bath,
            title: "Pet Cleaning",
            desc: "Hygienic cleaning services using pet-friendly and safe products.",
        },
        {
            icon: ShoppingCart,
            title: "Pet Supplies",
            desc: "All daily essentials — food, toys, accessories — in one place.",
        },
    ];

    return (
        <section className=" bg-base-200">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content">
                        Our <span className="text-accent">Services</span>
                    </h2>
                    <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
                        PawMart offers more than products — we provide complete care and services for your pets.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="relative rounded-2xl bg-base-100 p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-lg font-semibold text-base-content mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-base-content/70">
                                    {service.desc}
                                </p>

                                {/* Decorative Accent */}
                                <span className="absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-accent/5" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
