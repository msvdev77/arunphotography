import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebookF, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>ARUN STUDIO</h3>
                        <p className="location">
                            <FaMapMarkerAlt className="icon" /> Kakinada, Andhra Pradesh, India
                        </p>
                    </div>

                    <div className="social-links">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <FaWhatsapp />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Arun Photography. All rights reserved By MS.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
