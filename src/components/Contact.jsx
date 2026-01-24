import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        toast("Your form successfully submitted!");
        e.target.reset(); // ai lineta kaj korche na keno?
    }
    return (
        <section className="font-roboto min-h-screen py-16 px-4">
            <Toaster></Toaster>
            <title>Contact</title>
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                

                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content">
                        Contact <span className="text-accent">PawMart</span>
                    </h2>
                    <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
                        We'd love to hear from you. Reach out to us anytime!
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="  p-6 rounded-2xl shadow text-center">
                        <Mail className="mx-auto text-primary mb-2" size={28} />
                        <h3 className="text-xl font-semibold mb-1">Email</h3>
                        <p className="text-gray-400 dark:text-gray-300">support@pawmart.com</p>
                    </div>

                    <div className="  p-6 rounded-2xl shadow text-center">
                        <Phone className="mx-auto text-primary mb-2" size={28} />
                        <h3 className="text-xl font-semibold mb-1">Phone</h3>
                        <p className="text-gray-400 dark:text-gray-300">+880 1751 782602</p>
                    </div>

                    <div className="  p-6 rounded-2xl shadow text-center">
                        <MapPin className="mx-auto text-primary mb-2" size={28} />
                        <h3 className="text-xl font-semibold mb-1">Address</h3>
                        <p className="text-gray-400 dark:text-gray-300">A/4, Mirpur-14, Dhaka, Bangladesh</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className=" p-8 rounded-2xl shadow max-w-3xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-6 text-center text-primary">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" required placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-300 " />
                        <input type="email" required placeholder="Your Email" className="w-full p-3 rounded-lg border border-gray-300 " />
                        <textarea placeholder="Your Message" required rows={5} className="w-full p-3 rounded-lg border border-gray-300 "></textarea>
                        <button type="submit" className="w-full btn bg-accent p-3 rounded-lg font-semibold hover:scale-105 transition">Send Message</button>
                    </form>
                </div>

                {/* Optional Map / Location */}
                <div className="mt-16">
                    <iframe
                        title="PawMart Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9310644396123!2d90.358638!3d23.804057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6d7f7f7f7f7%3A0x7f7f7f7f7f7f7f7f!2sMirpur%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                        className="w-full h-80 rounded-2xl shadow"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
