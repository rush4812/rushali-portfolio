"use client";
import { useMemo, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Line, OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { skillsData } from "@/data/skills";

// Fibonacci sphere distribution
function getFibonacciSpherePoints(samples: number, radius: number) {
  const points: THREE.Vector3[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;
    points.push(new THREE.Vector3(x * radius, y * radius, z * radius));
  }
  return points;
}

// Generate high-resolution canvas texture for badges (Pure WebGL, 0 DOM roots)
function createSkillTexture(name: string, color: string, isHovered: boolean, isDimmed: boolean) {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 76;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.clearRect(0, 0, 256, 76);

  const radius = 38;
  const x = 4;
  const y = 4;
  const w = 248;
  const h = 68;

  // Background pill
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, radius);
  ctx.fillStyle = isHovered 
    ? "rgba(13, 20, 36, 0.95)" 
    : isDimmed 
      ? "rgba(10, 15, 26, 0.35)" 
      : "rgba(10, 15, 26, 0.85)";
  ctx.fill();

  // Glow on hover
  if (isHovered) {
    ctx.shadowColor = color;
    ctx.shadowBlur = 18;
  }

  // Border
  ctx.lineWidth = isHovered ? 4 : 2;
  ctx.strokeStyle = isHovered 
    ? color 
    : isDimmed 
      ? "rgba(255, 255, 255, 0.08)" 
      : "rgba(255, 255, 255, 0.22)";
  ctx.stroke();

  // Reset shadow
  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;

  // Color Indicator Dot
  ctx.beginPath();
  ctx.arc(32, 38, isHovered ? 8 : 6, 0, Math.PI * 2);
  ctx.fillStyle = isDimmed ? "rgba(255, 255, 255, 0.2)" : color;
  ctx.fill();

  if (isHovered) {
    ctx.shadowColor = color;
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(32, 38, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
  }

  // Text Label
  ctx.font = `600 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
  ctx.fillStyle = isHovered 
    ? "#ffffff" 
    : isDimmed 
      ? "rgba(255, 255, 255, 0.28)" 
      : "rgba(255, 255, 255, 0.9)";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText(name, 52, 38);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

type SkillNodeItem = (typeof skillsData)[0] & { position: THREE.Vector3 };

// Single Skill Node Component using Billboard
function SkillNode({ 
  node, 
  isHovered, 
  isDimmed 
}: { 
  node: SkillNodeItem; 
  isHovered: boolean; 
  isDimmed: boolean; 
}) {
  const texture = useMemo(() => {
    return createSkillTexture(node.name, node.color, isHovered, isDimmed);
  }, [node.name, node.color, isHovered, isDimmed]);

  const scale = isHovered ? 1.45 : isDimmed ? 0.95 : 1.15;
  const width = scale * 1.0;
  const height = width * (76 / 256);

  return (
    <group position={node.position}>
      {/* 3D Anchor Bead on Globe Surface */}
      <mesh>
        <sphereGeometry args={[isHovered ? 0.08 : 0.04, 16, 16]} />
        <meshStandardMaterial 
          color={isHovered ? node.color : "#94a3b8"}
          emissive={isHovered ? node.color : "#334155"}
          emissiveIntensity={isHovered ? 3 : 0.4}
        />
      </mesh>

      {/* Floating 3D Billboard Badge (Pure WebGL) */}
      <Billboard follow lockX={false} lockY={false} lockZ={false}>
        {texture && (
          <mesh>
            <planeGeometry args={[width, height]} />
            <meshBasicMaterial 
              map={texture} 
              transparent 
              opacity={isDimmed ? 0.35 : 1}
              depthWrite={false}
            />
          </mesh>
        )}
      </Billboard>
    </group>
  );
}

function SphereContent({ hoveredSkillId }: { hoveredSkillId: string | null }) {
  const groupRef = useRef<THREE.Group>(null);
  const radius = 3.2;
  
  const nodes = useMemo(() => {
    const points = getFibonacciSpherePoints(skillsData.length, radius);
    return skillsData.map((skill, i) => ({
      ...skill,
      position: points[i]
    }));
  }, []);

  const lines = useMemo(() => {
    const result: { start: THREE.Vector3; end: THREE.Vector3; color: string; opacity: number; isHighlighted: boolean }[] = [];
    nodes.forEach(node => {
      if (node.relatedTo) {
        node.relatedTo.forEach(targetId => {
          const target = nodes.find(n => n.id === targetId);
          if (target) {
            const isHighlighted = hoveredSkillId === node.id || hoveredSkillId === target.id;
            result.push({
              start: node.position,
              end: target.position,
              color: isHighlighted ? node.color : "#ffffff",
              opacity: isHighlighted ? 0.85 : 0.08,
              isHighlighted
            });
          }
        });
      }
    });
    return result;
  }, [nodes, hoveredSkillId]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (!hoveredSkillId) {
      // Gentle ambient rotation
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x += delta * 0.04;
    } else {
      // Rotate smoothly to bring hovered node toward front
      const hoveredNode = nodes.find(n => n.id === hoveredSkillId);
      if (hoveredNode) {
        const targetY = -Math.atan2(hoveredNode.position.x, hoveredNode.position.z);
        const targetX = Math.atan2(
          hoveredNode.position.y, 
          Math.sqrt(hoveredNode.position.x * hoveredNode.position.x + hoveredNode.position.z * hoveredNode.position.z)
        );
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, delta * 3.5);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, delta * 3.5);
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe Globe Shell */}
      <Sphere args={[radius * 0.96, 28, 28]}>
        <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.04} />
      </Sphere>

      {/* Connecting Relational Lines */}
      {lines.map((line, i) => (
        <Line
          key={i}
          points={[line.start, line.end]}
          color={line.color}
          lineWidth={line.isHighlighted ? 2 : 1}
          transparent
          opacity={line.opacity}
        />
      ))}

      {/* Pure WebGL Skill Nodes */}
      {nodes.map((node) => {
        const isHovered = hoveredSkillId === node.id;
        const isDimmed = Boolean(hoveredSkillId && !isHovered);

        return (
          <SkillNode
            key={node.id}
            node={node}
            isHovered={isHovered}
            isDimmed={isDimmed}
          />
        );
      })}
    </group>
  );
}

export default function SkillSphere({ hoveredSkillId }: { hoveredSkillId: string | null }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-full" />;
  }

  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas 
        camera={{ position: [0, 0, 8.5], fov: 45 }} 
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <SphereContent hoveredSkillId={hoveredSkillId} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={!hoveredSkillId} autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}
