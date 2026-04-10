import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PresentationControls, Float, Edges, RoundedBox, Box, Sphere } from '@react-three/drei';

function Microchip() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    // Very slow atmospheric rotation
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Main Base plate of the Microchip */}
      <RoundedBox args={[3.2, 0.3, 3.2]} radius={0.05} smoothness={4}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.2} />
        <Edges scale={1} threshold={15} color="#7c3aed" /> {/* Violet edge highlight */}
      </RoundedBox>

      {/* Center Silicon Core */}
      <Box args={[1.6, 0.4, 1.6]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#000000" metalness={1} roughness={0.1} />
        <Edges scale={1} threshold={15} color="#06b6d4" /> {/* Cyan edge highlight */}
      </Box>

      {/* Implied Glowing Energy Center */}
      <Sphere args={[0.3, 32, 32]} position={[0, 0.25, 0]}>
        <meshBasicMaterial color="#06b6d4" toneMapped={false} />
      </Sphere>

      {/* Gold/Copper colored I/O Pins */}
      {Array.from({ length: 8 }).map((_, i) => (
        <React.Fragment key={i}>
          {/* Top row */}
          <Box args={[0.15, 0.1, 0.4]} position={[-1.05 + (i * 0.3), 0, -1.7]}>
            <meshStandardMaterial color="#a78bfa" metalness={0.8} roughness={0.4} />
          </Box>
          {/* Bottom row */}
          <Box args={[0.15, 0.1, 0.4]} position={[-1.05 + (i * 0.3), 0, 1.7]}>
            <meshStandardMaterial color="#a78bfa" metalness={0.8} roughness={0.4} />
          </Box>
          {/* Left row */}
          <Box args={[0.4, 0.1, 0.15]} position={[-1.7, 0, -1.05 + (i * 0.3)]}>
            <meshStandardMaterial color="#a78bfa" metalness={0.8} roughness={0.4} />
          </Box>
          {/* Right row */}
          <Box args={[0.4, 0.1, 0.15]} position={[1.7, 0, -1.05 + (i * 0.3)]}>
            <meshStandardMaterial color="#a78bfa" metalness={0.8} roughness={0.4} />
          </Box>
        </React.Fragment>
      ))}
    </group>
  );
}

export default function ThreeDChip() {
  return (
    <div className="w-full h-[500px] relative z-10 cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 4, 7], fov: 40 }} gl={{ alpha: true, antialias: true }}>
        <color attach="background" args={['transparent']} />
        
        {/* Highly dramatic lighting setup */}
        <ambientLight intensity={0.6} color="#ffffff" />
        <spotLight position={[10, 15, 10]} angle={0.2} penumbra={1} intensity={100} castShadow />
        <spotLight position={[-10, 5, -10]} angle={0.3} penumbra={1} intensity={50} color="#7c3aed" />
        <pointLight position={[0, -2, 0]} intensity={20} color="#06b6d4" />
        
        {/* Presentation controls allow user to spin the model and it snaps back securely */}
        <PresentationControls
          global
          config={{ mass: 2, tension: 200, friction: 20 }}
          snap={{ mass: 4, tension: 1500, friction: 30 }}
          rotation={[0.3, 0.4, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 2, Math.PI / 2]}
        >
          <Float speed={3} rotationIntensity={1} floatIntensity={1.5}>
            <Microchip />
          </Float>
        </PresentationControls>
      </Canvas>
    </div>
  );
}
