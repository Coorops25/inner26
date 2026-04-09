
import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Fix for missing R3F types by augmenting the react module
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
  uniform vec2 uMouse;
  uniform float uAspect;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 center = uMouse;
    vec2 uv = vUv;

    // Correct aspect ratio for circular shape calculation
    vec2 pos = uv - center;
    pos.x *= uAspect;
    
    float dist = length(pos);
    
    // Smooth soft glow / ink drop effect
    // Radius breathes slightly with time
    float radius = 0.025 + 0.005 * sin(uTime * 3.0); 
    
    // Smooth falloff
    float alpha = smoothstep(radius, 0.0, dist);
    
    // Color: Inner Spirit Accent (Warm Earthy Gold)
    vec3 color = vec3(0.72, 0.60, 0.43); 

    // Output color with transparency
    gl_FragColor = vec4(color, alpha * 0.5);
  }
`;

const SplashCursorR3F: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();
  
  // Store real mouse position in ref to decouple from React render cycle
  const mouseRef = useRef(new THREE.Vector2(0.5, 0.5));
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uAspect: { value: viewport.aspect },
  }), []);

  // Update aspect ratio if window resizes
  useEffect(() => {
    uniforms.uAspect.value = viewport.aspect;
  }, [viewport.aspect, uniforms]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates (0 to 1)
      // In ThreeJS UVs: (0,0) is bottom-left
      mouseRef.current.x = event.clientX / window.innerWidth;
      mouseRef.current.y = 1.0 - (event.clientY / window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const mat = meshRef.current.material as THREE.ShaderMaterial;
    mat.uniforms.uTime.value = state.clock.getElapsedTime();

    // Smoothly interpolate (Lerp) the shader mouse value towards the real mouse value
    // This creates a pleasing "delay" or "fluid" feeling
    const currentX = mat.uniforms.uMouse.value.x;
    const currentY = mat.uniforms.uMouse.value.y;
    const targetX = mouseRef.current.x;
    const targetY = mouseRef.current.y;
    const ease = 0.15; // Adjust for more/less lag

    mat.uniforms.uMouse.value.x += (targetX - currentX) * ease;
    mat.uniforms.uMouse.value.y += (targetY - currentY) * ease;
  });

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
};

export default SplashCursorR3F;
