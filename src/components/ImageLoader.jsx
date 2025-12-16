import React, { useState } from 'react';

const ImageLoader = ({ src, alt, className, style }) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div
            className={`image-loader-container ${loaded ? 'loaded' : ''} ${className || ''}`}
            style={style}
        >
            {!loaded && !error && <div className="skeleton"></div>}

            {error ? (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    background: '#1a1a1a',
                    color: '#666',
                    fontSize: '0.8rem'
                }}>
                    Failed to load
                </div>
            ) : (
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    onLoad={() => setLoaded(true)}
                    onError={() => setError(true)}
                    style={{
                        filter: loaded ? 'blur(0)' : 'blur(20px)',
                        transform: loaded ? 'scale(1)' : 'scale(1.1)',
                        transition: 'opacity 0.5s ease, filter 0.5s ease, transform 0.5s ease'
                    }}
                />
            )}
        </div>
    );
};

export default ImageLoader;
