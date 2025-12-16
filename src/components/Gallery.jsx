import React, { useState } from 'react';
import { portfolioData } from '../data';
import ImageLoader from './ImageLoader';
import './Gallery.css';

const Gallery = () => {
    const [filter, setFilter] = useState('all');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const filteredData = filter === 'all'
        ? portfolioData
        : portfolioData.filter(item => item.category === filter);

    const openLightbox = (item) => {
        setCurrentImage(item);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setCurrentImage(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="portfolio" className="section">
            <div className="container">
                <div className="section-header text-center fade-in-up visible">
                    <h2>Selected Works</h2>
                    <p>Love stories and little celebrations.</p>
                </div>

                <div className="filter-buttons fade-in-up visible">
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={`filter-btn ${filter === 'wedding' ? 'active' : ''}`}
                        onClick={() => setFilter('wedding')}
                    >
                        Weddings
                    </button>
                    <button
                        className={`filter-btn ${filter === 'birthday' ? 'active' : ''}`}
                        onClick={() => setFilter('birthday')}
                    >
                        Birthdays
                    </button>
                </div>

                <div className="gallery-grid">
                    {filteredData.map(item => (
                        <div
                            key={item.id}
                            className="gallery-item fade-in-up visible"
                            onClick={() => openLightbox(item)}
                        >
                            <ImageLoader src={item.src} alt={item.title} />
                            <div className="item-overlay">
                                <span>{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {lightboxOpen && currentImage && (
                <div className="lightbox active" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
                    <img
                        src={currentImage.src}
                        alt={currentImage.title}
                        className="lightbox-img"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <div className="lightbox-caption">{currentImage.title}</div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
