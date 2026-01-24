import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Dog Owner",
      review:
        "PawMart has completely changed how I shop for my dog. The quality and delivery speed are amazing!",
      rating: 5,
    },
    {
      name: "Rahim Khan",
      role: "Cat Parent",
      review:
        "Very reliable service. I always find authentic products for my cat and the support team is super friendly.",
      rating: 5,
    },
    {
      name: "Nusrat Jahan",
      role: "Pet Lover",
      review:
        "From food to accessories, PawMart has everything. Highly recommended for every pet parent.",
      rating: 4,
    },
  ];

  return (
    <section className=" bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">
            What Our <span className="text-accent">Customers Say</span>
          </h2>
          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            Real feedback from pet parents who trust PawMart every day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-base-200 p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Quote Icon */}
              <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-content">
                <Quote size={18} />
              </div>

              {/* Review */}
              <p className="text-sm text-base-content/80 mb-6 leading-relaxed">
                "{item.review}"
              </p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < item.rating
                        ? "text-accent fill-accent mr-1"
                        : "text-base-300 mr-1"
                    }
                  />
                ))}
              </div>

              {/* User Info */}
              <div>
                <h4 className="font-semibold text-base-content">
                  {item.name}
                </h4>
                <p className="text-xs text-base-content/60">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
