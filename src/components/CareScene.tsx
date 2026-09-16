import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Lightformer, Environment, RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function CareObjects() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ pointer, clock }, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    if (!group.current) return;
    group.current.rotation.y = clock.getElapsedTime() * 0.42 - 0.3 + pointer.x * 0.1;
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, 0.12 + pointer.y * 0.12, 4, delta);
  });

  return (
    <group ref={group} rotation={[0.12, -0.3, -0.08]}>
      <Float speed={1.15} rotationIntensity={0.22} floatIntensity={0.35}>
        <group>
          <RoundedBox args={[1.15, 3.8, 0.78]} radius={0.45} smoothness={7} castShadow>
            <meshPhysicalMaterial color="#ff7378" roughness={0.2} metalness={0.02} clearcoat={1} clearcoatRoughness={0.16} />
          </RoundedBox>
          <RoundedBox args={[3.8, 1.15, 0.78]} radius={0.45} smoothness={7} castShadow>
            <meshPhysicalMaterial color="#ff7378" roughness={0.2} metalness={0.02} clearcoat={1} clearcoatRoughness={0.16} />
          </RoundedBox>
        </group>
      </Float>
      <Float speed={0.9} rotationIntensity={0.3} floatIntensity={0.45}>
        <mesh position={[2.3, 1.8, -0.4]} castShadow>
          <sphereGeometry args={[0.52, 48, 48]} />
          <meshPhysicalMaterial color="#0879bd" roughness={0.12} metalness={0.08} clearcoat={1} />
        </mesh>
      </Float>
      <Float speed={1.3} rotationIntensity={0.25} floatIntensity={0.32}>
        <RoundedBox args={[0.8, 0.8, 0.8]} radius={0.22} smoothness={6} position={[-2.25, -1.45, -0.2]} rotation={[0.2, 0.3, 0.5]} castShadow>
          <meshPhysicalMaterial color="#d8f0f7" roughness={0.14} clearcoat={1} transparent opacity={0.94} />
        </RoundedBox>
      </Float>
    </group>
  );
}

export function CareScene() {
  return (
    <div className="care-scene" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 9], fov: 38 }} gl={{ antialias: true, alpha: true }} shadows>
        <ambientLight intensity={0.85} />
        <directionalLight position={[5, 7, 5]} intensity={2.4} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <CareObjects />
        <Environment>
          <Lightformer intensity={2.5} position={[0, 6, 2]} scale={[8, 2, 1]} />
          <Lightformer intensity={1.4} color="#9bd8ef" position={[-5, 1, 1]} rotation-y={Math.PI / 2} scale={[8, 2, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}