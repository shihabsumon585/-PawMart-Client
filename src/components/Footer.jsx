import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-10">
            
            <div className="max-w-7xl mx-auto px-5 grid sm:grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Website Summary */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Winter Pet Companion</h3>
                    <p className="text-sm leading-6 opacity-80">
                        A cozy winter companion platform designed for pet owners to keep their furry friends warm,
                        safe, and healthy during the cold season. Discover local pet care services, winter pet clothing,
                        grooming options, and expert tips — all in one friendly interface.
                    </p>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Contact Info</h3>
                    <ul className="space-y-2 text-sm opacity-90">
                        <li>Email: support@winterpets.com</li>
                        <li>Phone: +880 123 456 789</li>
                        <li>Address: Dhaka, Bangladesh</li>
                    </ul>
                </div>

                {/* Social + Privacy */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm opacity-90">
                        <li><a href="#" className="hover:underline">Facebook</a></li>
                        <li><a href="#" className="hover:underline">Instagram</a></li>
                        <li><a href="#" className="hover:underline">Twitter</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>

            </div>

            <div className="text-center text-sm opacity-70 mt-8">
                © {new Date().getFullYear()} Winter Pet Companion. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;