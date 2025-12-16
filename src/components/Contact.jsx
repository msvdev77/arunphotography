import React from 'react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const category = formData.get('category');
        const message = formData.get('message');

        // Construct WhatsApp message
        const text = `Hi, I'm ${name}. I'm interested in a ${category} photoshoot. ${message}`;
        const encodedText = encodeURIComponent(text);

        // Replace with your actual WhatsApp number (international format without +)
        const phoneNumber = "919876543210";

        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
        e.target.reset();
    };

    return (
        <section id="contact" className="section bg-light">
            <div className="container">
                <div className="contact-wrapper fade-in-up visible">
                    <div className="contact-info">
                        <h2>Let's Create Magic</h2>
                        <p>Ready to book your session? Fill out the form or reach out directly.</p>
                        <ul className="contact-details">
                            <li><strong>Email:</strong> hello@moments.com</li>
                            <li><strong>Phone:</strong> (555) 123-4567</li>
                            <li><strong>Location:</strong> Kakinada, Andhra Pradesh, India</li>
                        </ul>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Event Type</label>
                            <select id="category" name="category">
                                <option value="wedding">Wedding</option>
                                <option value="birthday">Birthday</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Inquiry</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
