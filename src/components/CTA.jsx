import { ShoppingCart, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function CTA() {
    return (
        <section className="pb-20 bg-accent">
            <div className="max-w-7xl mx-auto px-4">
                <div className="rounded-3xl bg-accent text-accent-content px-8 py-16 md:px-16 text-center shadow-xl">
                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-5">
                        Everything Your Pet Needs, In One Place
                    </h2>

                    {/* Subtitle */}
                    <p className="max-w-2xl mx-auto mb-10 text-accent-content/90">
                        Join thousands of happy pet parents who trust PawMart for quality products, fast delivery, and loving care.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to={"/pets&supplies"} className="inline-flex items-center gap-2 rounded-xl bg-base-100 px-8 py-3 font-semibold text-base-content transition hover:scale-105">
                            <ShoppingCart size={18} />
                            Shop Now
                        </Link>

                    
                    </div>
                </div>
            </div>
        </section>
    );
}
