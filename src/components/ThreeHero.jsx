import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Image, Environment, Float, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';

function Card({ url, position, rotation, index }) {
    const ref = useRef();
    const [hovered, hover] = useState(false);

    useFrame((state, delta) => {
        // Smooth hover effect
        const targetScale = hovered ? 1.2 : 1;
        ref.current.scale.x = THREE.MathUtils.lerp(ref.current.scale.x, targetScale, delta * 8);
        ref.current.scale.y = THREE.MathUtils.lerp(ref.current.scale.y, targetScale, delta * 8);

        // Subtle floating movement per card
        ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.1;
    });

    return (
        <Image
            ref={ref}
            url={url}
            transparent
            side={THREE.DoubleSide}
            onPointerOver={() => { document.body.style.cursor = 'pointer'; hover(true); }}
            onPointerOut={() => { document.body.style.cursor = 'auto'; hover(false); }}
            position={position}
            rotation={rotation}
        >
            <planeGeometry args={[1.2, 1.8]} />
        </Image>
    );
}

function Carousel({ radius = 2.5 }) {
    const group = useRef();
    const [rotationSpeed, setRotationSpeed] = useState(0.05);

    useFrame((state, delta) => {
        // Continuous rotation
        group.current.rotation.y += delta * rotationSpeed;

        // Mouse interaction for tilt
        const x = state.pointer.x;
        const y = state.pointer.y;

        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, y * 0.2, delta * 2);
        group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -x * 0.2, delta * 2);
    });

    // Use a subset of data to avoid overcrowding
    const items = portfolioData.slice(0, 10);
    const count = items.length;

    return (
        <group ref={group}>
            {items.map((item, i) => {
                const angle = (i / count) * Math.PI * 2;
                return (
                    <Card
                        key={item.id}
                        url={item.src}
                        index={i}
                        position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
                        rotation={[0, angle, 0]}
                    />
                );
            })}
        </group>
    );
}

const ThreeHero = () => {
    return (
        <section style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                textAlign: 'center',
                pointerEvents: 'none',
                width: '100%'
            }}>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 7rem)',
                        lineHeight: 1,
                        marginBottom: '1rem',
                        mixBlendMode: 'overlay'
                    }}
                >
                    CAPTURING<br />
                    <span className="serif-text" style={{ color: '#fff' }}>Moments</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    style={{ fontSize: '1.2rem', opacity: 0.8 }}
                >
                    Drag to explore the gallery
                </motion.p>
            </div>

            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <color attach="background" args={['#030014']} />
                <fog attach="fog" args={['#030014', 5, 15]} />

                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#FF0080" />
                <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={1} color="#00DFD8" />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <Carousel />
                </Float>

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <Sparkles count={100} scale={10} size={2} speed={0.4} opacity={0.5} color="#7928CA" />

                <Environment preset="city" />
            </Canvas>
        </section>
    );
};

export default ThreeHero;
