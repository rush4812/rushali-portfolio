"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useScroll, MotionValue } from "framer-motion";

function CyberGlobe({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const scroll = scrollYProgress.get();
    
    // Slow rotation
    meshRef.current.rotation.y += delta * 0.02;
    meshRef.current.rotation.x += delta * 0.01;
    
    // Move up and zoom out on scroll
    meshRef.current.position.y = THREE.MathUtils.lerp(0, 4, scroll);
    state.camera.position.z = THREE.MathUtils.lerp(12, 16, scroll);
  });

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} color="#38bdf8" />
      
      {/* Abstract Glowing Grid Sphere */}
      <Sphere ref={meshRef} args={[4, 32, 32]}>
        <meshBasicMaterial 
          color="#38bdf8" 
          wireframe 
          transparent 
          opacity={0.15} 
        />
      </Sphere>

      {/* Floating Particles (Sparkles) */}
      <Sparkles 
        count={800} 
        scale={25} 
        size={4} 
        speed={0.1} 
        opacity={0.6} 
        color="#38bdf8" 
      />
      <Sparkles 
        count={200} 
        scale={15} 
        size={8} 
        speed={0.2} 
        opacity={0.4} 
        color="#818cf8" 
      />
    </group>
  );
}

export default function Scene() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full bg-[#09090b]">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 45 }}
        gl={{ alpha: false, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={["#09090b"]} />
        <fog attach="fog" args={["#09090b", 5, 30]} />
        <CyberGlobe scrollYProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
}
