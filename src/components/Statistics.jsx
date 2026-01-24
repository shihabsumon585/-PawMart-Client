import { PawPrint, ShoppingBag, Users, Truck } from "lucide-react";

export default function Statistics() {
    const stats = [
        {
            icon: PawPrint,
            value: "12K+",
            label: "Pets Served",
        },
        {
            icon: ShoppingBag,
            value: "8K+",
            label: "Orders Completed",
        },
        {
            icon: Users,
            value: "6K+",
            label: "Active Customers",
        },
        {
            icon: Truck,
            value: "24/7",
            label: "Delivery Support",
        },
    ];

    return (
        <section className="bg-base-200">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content">
                        PawMart <span className="text-accent">Statistics</span>
                    </h2>
                    <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
                        Numbers that reflect our commitment, growth, and love for pets.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="rounded-2xl bg-base-100 p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                                    <Icon size={30} />
                                </div>
                                <h3 className="text-3xl font-bold text-base-content mb-1">
                                    {item.value}
                                </h3>
                                <p className="text-sm text-base-content/70">
                                    {item.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
