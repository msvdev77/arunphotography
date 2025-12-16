import React from 'react';
import { useProgress } from '@react-three/drei';

export default function Loader() {
    const { active, progress } = useProgress();

    if (!active) return null;

    return (
        <div className="loader-container">
            <div className="loader-content">
                <h1 className="loader-title">MOMENTS</h1>
                <div className="loader-bar-bg">
                    <div
                        className="loader-bar-fill"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="loader-text">{Math.round(progress)}%</p>
            </div>
        </div>
    );
}
