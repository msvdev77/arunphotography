import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import './DoraExperience.css';

const DoraExperience = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const observerRefs = useRef([]);

    // Optimize: Only render a subset of data to prevent DOM overload
    const items = useMemo(() => portfolioData.slice(0, 10), []);

    useEffect(() => {
        const observers = [];

        const options = {
            root: document.querySelector('.carousel-track'),
            rootMargin: '0px',
            threshold: 0.6 // Trigger when 60% of the item is visible
        };

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Number(entry.target.dataset.index);
                    setActiveIndex(index);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        observerRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, [items]);

    const activeItem = items[activeIndex] || items[0];

    return (
        <section className="dora-container">
            {/* Optimized Background */}
            <div className="dynamic-background">
                <div
                    className="bg-image"
                    style={{
                        backgroundImage: `url(${activeItem.src})`,
                        opacity: 0.4
                    }}
                />
                <div className="bg-overlay"></div>
            </div>

            <div className="dora-content">
                <div className="header-area">
                    <div className="hero-logo-wrapper">
                        <h1>ARUN</h1>
                        <span className="hero-logo-sub">STUDIO</span>
                    </div>
                </div>

                <div className="carousel-track">
                    <div className="carousel-spacer" />

                    {items.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <div
                                key={item.id}
                                ref={el => observerRefs.current[index] = el}
                                data-index={index}
                                className={`gallery-item-wrapper ${isActive ? 'active' : ''}`}
                            >
                                <div className="image-card">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>

                                <div className={`item-info ${isActive ? 'visible' : ''}`}>
                                    <span className="category-tag">{item.category}</span>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        );
                    })}

                    <div className="carousel-spacer" />
                </div>

                <div className="scroll-hint">
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DoraExperience;
