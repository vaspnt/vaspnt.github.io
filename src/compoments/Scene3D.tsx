import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const Orb = ({ position, scale, speed, color }: { position: [number, number, number]; scale: number; speed: number; color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
  });
  return (
    <Float speed={1.2 * speed} rotationIntensity={0.4} floatIntensity={1.2}>
      <Icosahedron ref={ref} args={[scale, 4]} position={position}>
        <MeshDistortMaterial
          color={color}
          roughness={0.15}
          metalness={0.9}
          distort={0.35}
          speed={1.4}
          envMapIntensity={1.2}
        />
      </Icosahedron>
    </Float>
  );
};

export const Scene3D = () => {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#7dd3fc" />
        <directionalLight position={[-4, -2, 3]} intensity={0.6} color="#38bdf8" />
        <pointLight position={[0, 0, 5]} intensity={0.8} color="#ffffff" />
        <Orb position={[0, 0, 0]} scale={1.6} speed={1} color="#1a1f2e" />
        <Orb position={[2.4, 1.2, -1]} scale={0.45} speed={1.4} color="#38bdf8" />
        <Orb position={[-2.2, -1, -0.5]} scale={0.6} speed={0.8} color="#0f172a" />
      </Suspense>
    </Canvas>
  );
};
