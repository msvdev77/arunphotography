import React from 'react';
import { heroImage } from '../data';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <img src={heroImage} alt="Hero Background" className="hero-img" />
                <div className="overlay"></div>
            </div>
            <div className="hero-content container fade-in-up visible">
                <h1>Capturing Life's <br /><em>Precious Moments</em></h1>
                <p>Specializing in intimate Weddings and joyful Kids' Birthdays.</p>
                <div className="hero-buttons">
                    <a href="#portfolio" className="btn btn-primary">View Gallery</a>
                    <a href="#contact" className="btn btn-outline">Book Now</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
