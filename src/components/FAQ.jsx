import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Is PawMart a trusted pet store?",
            answer:
                "Yes, PawMart is trusted by thousands of pet parents. We provide 100% authentic products with secure payment and reliable delivery.",
        },
        {
            question: "How fast is PawMart delivery?",
            answer:
                "We offer fast and reliable delivery. Most orders are delivered within 24–48 hours depending on your location.",
        },
        {
            question: "Do you offer pet grooming or health services?",
            answer:
                "Yes, PawMart provides grooming, basic health care guidance, and pet cleaning services through trusted partners.",
        },
        {
            question: "What payment methods are supported?",
            answer:
                "We support secure online payments including cards, mobile banking, and cash on delivery in selected areas.",
        },
        {
            question: "Can I return or replace a product?",
            answer:
                "Yes, products can be returned or replaced if they meet our return policy conditions. Customer satisfaction is our priority.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className=" bg-base-200">
            <div className="max-w-5xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content">
                        Frequently Asked <span className="text-accent">Questions</span>
                    </h2>
                    <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
                        Find quick answers to common questions about PawMart and our services.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-2xl bg-base-100 border border-base-300 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-5 text-left"
                            >
                                <span className="font-medium text-base-content">
                                    {item.question}
                                </span>
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-300 ${openIndex === index ? "rotate-180 text-accent" : ""
                                        }`}
                                />
                            </button>

                            {openIndex === index && (
                                <div className="px-5 pb-5 text-sm text-base-content/70 leading-relaxed">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
