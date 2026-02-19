import { useRef, useMemo, useState, useEffect, Component, type ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

class WebGLErrorBoundary extends Component<{ children: ReactNode; fallback?: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; fallback?: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return (this.props.fallback || null) as ReactNode;
    return this.props.children;
  }
}

function useWebGLSupport() {
  const [supported, setSupported] = useState(true);
  useEffect(() => {
    try {
      const c = document.createElement('canvas');
      const gl = c.getContext('webgl2') || c.getContext('webgl');
      setSupported(!!gl);
    } catch {
      setSupported(false);
    }
  }, []);
  return supported;
}

function CSSFallback({ variant = 'portal' }: { variant?: 'portal' | 'discover' | 'dashboard' }) {
  const opacity = variant === 'portal' ? 1 : variant === 'discover' ? 0.5 : 0.35;
  return (
    <div
      className="pj-canvas-container"
      style={{
        opacity,
        background: `
          radial-gradient(circle at 30% 40%, rgba(224,90,58,0.12), transparent 50%),
          radial-gradient(circle at 70% 60%, rgba(224,90,58,0.08), transparent 50%),
          radial-gradient(circle at 50% 80%, rgba(224,90,58,0.05), transparent 50%)
        `,
      }}
    />
  );
}

function FloatingParticles({ count = 80, color = '#E05A3A', spread = 8 }: { count?: number; color?: string; spread?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread * 0.5,
      ] as [number, number, number],
      speed: 0.2 + Math.random() * 0.5,
      offset: Math.random() * Math.PI * 2,
      scale: 0.02 + Math.random() * 0.04,
    }));
  }, [count, spread]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    particles.forEach((p, i) => {
      dummy.position.set(
        p.position[0] + Math.sin(t * p.speed + p.offset) * 0.3,
        p.position[1] + Math.cos(t * p.speed * 0.7 + p.offset) * 0.4,
        p.position[2] + Math.sin(t * p.speed * 0.5) * 0.2,
      );
      dummy.scale.setScalar(p.scale * (1 + Math.sin(t * 2 + p.offset) * 0.3));
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </instancedMesh>
  );
}

function PortalRing({ radius = 2.5, tubeRadius = 0.04 }: { radius?: number; tubeRadius?: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = Math.sin(t * 0.3) * 0.1;
    ref.current.rotation.y = t * 0.15;
    ref.current.rotation.z = Math.cos(t * 0.2) * 0.05;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, tubeRadius, 16, 100]} />
      <meshBasicMaterial color="#E05A3A" transparent opacity={0.7} />
    </mesh>
  );
}

function PortalRings() {
  return (
    <group>
      <PortalRing radius={2.2} tubeRadius={0.03} />
      <PortalRing radius={2.8} tubeRadius={0.02} />
      <PortalRing radius={3.4} tubeRadius={0.015} />
    </group>
  );
}

function GlowSphere() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.scale.setScalar(1 + Math.sin(t * 1.5) * 0.1);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshBasicMaterial color="#E05A3A" transparent opacity={0.08} />
    </mesh>
  );
}

function GridFloor() {
  const ref = useRef<THREE.GridHelper>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.z = -(state.clock.elapsedTime * 0.3 % 1);
    }
  });

  return (
    <gridHelper
      ref={ref}
      args={[20, 20, '#E05A3A', 'rgba(224,90,58,0.05)']}
      position={[0, -3, 0]}
      material-opacity={0.08}
      material-transparent
    />
  );
}

function FloatingGeometry() {
  const groupRef = useRef<THREE.Group>(null!);
  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  const shapes = useMemo(() => [
    { pos: [-3, 1.5, -2] as [number, number, number], type: 'oct', scale: 0.3 },
    { pos: [3.5, -1, -1.5] as [number, number, number], type: 'ico', scale: 0.25 },
    { pos: [-2, -2, -3] as [number, number, number], type: 'oct', scale: 0.2 },
    { pos: [2, 2.5, -2.5] as [number, number, number], type: 'ico', scale: 0.15 },
  ], []);

  return (
    <group ref={groupRef}>
      {shapes.map((s, i) => (
        <FloatingShape key={i} position={s.pos} type={s.type} scale={s.scale} index={i} />
      ))}
    </group>
  );
}

function FloatingShape({ position, type, scale, index }: { position: [number, number, number]; type: string; scale: number; index: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.position.y = position[1] + Math.sin(t * 0.5 + index) * 0.3;
    ref.current.rotation.x = t * 0.2 + index;
    ref.current.rotation.z = t * 0.15 + index * 0.5;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      {type === 'oct' ? <octahedronGeometry args={[1]} /> : <icosahedronGeometry args={[1]} />}
      <meshBasicMaterial color="#E05A3A" wireframe transparent opacity={0.15} />
    </mesh>
  );
}

export function PortalScene() {
  const webgl = useWebGLSupport();
  if (!webgl) return <CSSFallback variant="portal" />;

  return (
    <WebGLErrorBoundary fallback={<CSSFallback variant="portal" />}>
      <div className="pj-canvas-container">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.1} />
          <GlowSphere />
          <PortalRings />
          <FloatingParticles count={60} spread={6} />
          <FloatingGeometry />
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
}

export function DiscoverScene() {
  const webgl = useWebGLSupport();
  if (!webgl) return <CSSFallback variant="discover" />;

  return (
    <WebGLErrorBoundary fallback={<CSSFallback variant="discover" />}>
      <div className="pj-canvas-container" style={{ opacity: 0.5 }}>
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }} dpr={[1, 1.5]}>
          <FloatingParticles count={40} spread={10} color="#E05A3A" />
          <GridFloor />
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
}

export function DashboardScene() {
  const webgl = useWebGLSupport();
  if (!webgl) return <CSSFallback variant="dashboard" />;

  return (
    <WebGLErrorBoundary fallback={<CSSFallback variant="dashboard" />}>
      <div className="pj-canvas-container" style={{ opacity: 0.35 }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]}>
          <FloatingParticles count={30} spread={8} color="#E05A3A" />
          <FloatingGeometry />
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
}
