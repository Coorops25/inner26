
import React, { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Fix for missing R3F types
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      planeGeometry: any;
      shaderMaterial: any;
    }
  }
}

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform vec2 uMouse;
  uniform float uHover;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    float dist = distance(uv, uMouse);
    float wave = sin(dist * 25.0 - uTime * 3.0) * 0.02;
    uv += wave * uHover; // Apply wave only on hover
    gl_FragColor = texture2D(uTexture, uv);
  }
`;

interface R3FImagePlaneProps {
  imageUrl: string;
}

const R3FImagePlane: React.FC<R3FImagePlaneProps> = ({ imageUrl }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const texture = useTexture(imageUrl);

  const uniforms = useMemo(() => ({
    uTexture: { value: texture },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uHover: { value: 0.0 },
    uTime: { value: 0.0 },
  }), [texture]);

  useFrame((state) => {
    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.ShaderMaterial;
      const currentHover = mat.uniforms.uHover.value;

      // Optimization: Only animate time if active
      if (hovered || currentHover > 0.001) {
         mat.uniforms.uTime.value = state.clock.getElapsedTime();
      }

      // Smooth interpolation for hover state
      if (Math.abs(currentHover - (hovered ? 1.0 : 0.0)) > 0.001) {
        mat.uniforms.uHover.value = THREE.MathUtils.lerp(currentHover, hovered ? 1.0 : 0.0, 0.1);
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={[1.5, 2, 1]}
      onPointerOver={(e) => {
        if (e.uv) { uniforms.uMouse.value.copy(e.uv); }
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      onPointerMove={(e) => {
        if (e.uv) { uniforms.uMouse.value.copy(e.uv); }
      }}
    >
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};

export default R3FImagePlane;
