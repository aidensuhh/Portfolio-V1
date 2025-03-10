"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { Points, BufferGeometry, Float32BufferAttribute, Color } from 'three';
import { useTheme } from '@/context/theme-context';

function ParticleSystem() {
  const points = useRef<Points>(null);
  const { theme } = useTheme();

  // Create particles with more interesting distribution
  const particleCount = 3000;
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const color1 = new Color(theme === 'light' ? '#f7dfdf' : '#946263');
    const color2 = new Color(theme === 'light' ? '#eae7fc' : '#676394');

    for(let i = 0; i < particleCount; i++) {
      // Create a spiral distribution
      const theta = Math.random() * Math.PI * 2;
      const r = Math.random() * 50 + 5;
      const y = (Math.random() - 0.5) * 50;

      positions[i * 3] = Math.cos(theta) * r;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * r;

      // Interpolate between two colors based on position
      const mixFactor = Math.sin(theta + y * 0.05);
      const particleColor = color1.clone().lerp(color2, mixFactor);
      
      colors[i * 3] = particleColor.r;
      colors[i * 3 + 1] = particleColor.g;
      colors[i * 3 + 2] = particleColor.b;
    }
    return [positions, colors];
  }, [theme]);

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));

  useFrame((state) => {
    if (!points.current) return;
    
    // Complex rotation
    points.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    points.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    
    // Breathing effect
    const scale = 1 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    points.current.scale.set(scale, scale, scale);

    // Update individual particle positions for wave effect
    const positions = points.current.geometry.attributes.position.array as Float32Array;
    for(let i = 0; i < positions.length; i += 3) {
      const time = state.clock.getElapsedTime();
      positions[i + 1] += Math.sin(time + positions[i] * 0.1) * 0.01;
    }
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry attach="geometry" {...geometry} />
      <pointsMaterial
        attach="material"
        size={0.15}
        sizeAttenuation={true}
        vertexColors={true}
        transparent
        opacity={0.6}
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticleField() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 30], fov: 75 }}
        dpr={[1, 2]}
      >
        <ParticleSystem />
      </Canvas>
    </div>
  );
} 