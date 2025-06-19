
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const AnimatedSphere = ({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={scale} position={position}>
        <meshBasicMaterial
          color={color}
          transparent={true}
          opacity={0.7}
        />
      </Sphere>
    </Float>
  );
};

const SimpleParticles = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particles = [];
  for (let i = 0; i < 50; i++) {
    const x = (Math.random() - 0.5) * 20;
    const y = (Math.random() - 0.5) * 20;
    const z = (Math.random() - 0.5) * 20;
    
    particles.push(
      <mesh key={i} position={[x, y, z]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshBasicMaterial color="#00D4FF" transparent={true} opacity={0.6} />
      </mesh>
    );
  }

  return (
    <group ref={groupRef}>
      {particles}
    </group>
  );
};

export const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#FF6B9D" />
        
        <AnimatedSphere position={[-4, 2, -5]} color="#00D4FF" scale={0.8} />
        <AnimatedSphere position={[4, -2, -3]} color="#FF6B9D" scale={0.6} />
        <AnimatedSphere position={[0, 0, -8]} color="#8B5CF6" scale={1.2} />
        
        <SimpleParticles />
      </Canvas>
    </div>
  );
};
