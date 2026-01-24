import React from 'react';
import "./Footer.css";


const Footer = () => {
    return (
        <footer className="pm-footer mt-10">
            <div className="pm-footer-container">
                <div className="pm-footer-col pm-about">
                    <h3 className="pm-logo">PawMart</h3>
                    <p className="pm-desc">
                        PawMart connects local pet owners and buyers for adoption and pet care products.
                        A community-driven platform to adopt, sell, and care — all in one place.
                    </p>
                </div>

                <div className="pm-footer-col pm-contact">
                    <h4>Contact Info</h4>
                    <ul className="pm-contact-list">
                        <li><strong>Email:</strong> support@pawmart.com</li>
                        <li><strong>Phone:</strong> +880 1751 782602</li>
                        <li><strong>Address:</strong>A/4, Mirpur-14, Dhaka, Bangladesh</li>
                    </ul>
                </div>

                <div className="pm-footer-col pm-links">
                    <h4>Useful Links</h4>
                    <ul className="pm-links-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/pets&supplies">Pets &amp; Supplies</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/terms">Terms &amp; Conditions</a></li>
                    </ul>
                </div>
            </div>
            <div className="pm-footer-bottom">
                <p>© {new Date().getFullYear()} PawMart. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;