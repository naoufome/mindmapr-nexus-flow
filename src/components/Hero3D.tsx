
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Sphere, Float, OrbitControls, Line } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const MindMapVisualization = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central node */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere position={[0, 0, 0]} args={[0.8, 32, 32]}>
          <meshPhongMaterial color="#00D4FF" transparent={true} opacity={0.8} />
        </Sphere>
        <Text
          position={[0, 0, 0.9]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Ideas
        </Text>
      </Float>

      {/* Connected nodes */}
      {[
        { pos: [-2, 1, 0], color: "#FF6B9D", text: "Create" },
        { pos: [2, -1, 0], color: "#8B5CF6", text: "Organize" },
        { pos: [0, 2, 0], color: "#10B981", text: "Connect" },
        { pos: [-1, -2, 0], color: "#F59E0B", text: "Grow" },
      ].map((node, index) => (
        <Float key={index} speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
          <Sphere position={node.pos as [number, number, number]} args={[0.5, 16, 16]}>
            <meshPhongMaterial color={node.color} transparent={true} opacity={0.7} />
          </Sphere>
          <Text
            position={[node.pos[0], node.pos[1], node.pos[2] + 0.6]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {node.text}
          </Text>
          {/* Connection lines using Line component from drei */}
          <Line
            points={[
              [0, 0, 0],
              [node.pos[0], node.pos[1], node.pos[2]]
            ]}
            color="#00D4FF"
            transparent={true}
            opacity={0.5}
            lineWidth={2}
          />
        </Float>
      ))}
    </group>
  );
};

export const Hero3D = () => {
  return (
    <div className="h-64 w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#FF6B9D" />
        
        <MindMapVisualization />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};
