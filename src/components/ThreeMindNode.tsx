
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Sphere, Float } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeMindNodeProps {
  text: string;
  color: string;
  position: [number, number, number];
  isSelected?: boolean;
  onClick?: () => void;
}

const NodeSphere = ({ text, color, position, isSelected, onClick }: ThreeMindNodeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      const scale = hovered ? 1.2 : isSelected ? 1.1 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        <Sphere
          ref={meshRef}
          args={[1, 32, 32]}
          onClick={onClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshPhongMaterial 
            color={color} 
            transparent 
            opacity={0.8}
            emissive={hovered ? color : '#000000'}
            emissiveIntensity={hovered ? 0.2 : 0}
          />
        </Sphere>
        <Text
          position={[0, 0, 1.1]}
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="black"
        >
          {text}
        </Text>
      </group>
    </Float>
  );
};

export const ThreeMindNode = (props: ThreeMindNodeProps) => {
  return <NodeSphere {...props} />;
};
