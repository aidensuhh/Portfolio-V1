"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { Points, BufferGeometry, Float32BufferAttribute, Color, AdditiveBlending } from 'three';
import { useTheme } from '@/context/theme-context';

function ParticleSystem() {
  const points = useRef<Points>(null);
  const { theme } = useTheme();

  const particleCount = 2000;
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    const color1 = new Color(theme === 'light' ? '#4a3aff' : '#946263');
    const color2 = new Color(theme === 'light' ? '#ff3a8c' : '#676394');

    for(let i = 0; i < particleCount; i++) {
      const t = (i / particleCount) % 1;
      const angle = t * Math.PI * 8;
      const radius = 25 + Math.sin(t * Math.PI * 4) * 5;
      
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (t - 0.5) * 50;
      positions[i * 3 + 2] = Math.sin(angle) * radius;

      const mixFactor = Math.sin(angle + t * Math.PI);
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
    
    points.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    points.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    
    const scale = 1 + Math.sin(state.clock.getElapsedTime() * 0.3) * 0.05;
    points.current.scale.set(scale, scale, scale);

    const positions = points.current.geometry.attributes.position.array as Float32Array;
    for(let i = 0; i < positions.length; i += 3) {
      const time = state.clock.getElapsedTime();
      const offset = i / positions.length;
      positions[i] = positions[i] + Math.sin(time * 0.5 + offset * Math.PI * 2) * 0.02;
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
        opacity={theme === 'light' ? 0.85 : 0.5}
        blending={AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticleField() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 30], fov: 75 }} dpr={[1, 2]}>
        <ParticleSystem />
      </Canvas>
    </div>
  );
} 