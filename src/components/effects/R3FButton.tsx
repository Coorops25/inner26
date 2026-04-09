
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// Fix for missing R3F types
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      meshStandardMaterial: any;
      meshBasicMaterial: any;
      planeGeometry: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

interface R3FButtonProps {
  label: string;
  onClick: () => void;
  backgroundColor?: string;
  textColor?: string;
  isOutline?: boolean;
}

const R3FButton: React.FC<R3FButtonProps> = ({ 
    label, 
    onClick, 
    backgroundColor = '#B89A6E', 
    textColor = '#3E352A',
    isOutline = false,
}) => {
  const groupRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (groupRef.current) {
      const targetZ = hovered ? 0.2 : 0;
      // Optimization: Sleep when close to target
      if (Math.abs(groupRef.current.position.z - targetZ) > 0.001) {
          groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.1);
      }
    }
  });

  return (
    <group
      ref={groupRef}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <RoundedBox args={[4, 1, 0.1]} radius={0.15}>
        <meshStandardMaterial 
            color={backgroundColor}
            transparent={isOutline}
            opacity={isOutline ? 0.2 : 1}
        />
      </RoundedBox>

       {isOutline && (
          <RoundedBox args={[4, 1, 0.1]} radius={0.15} position={[0,0, -0.01]}>
             <meshBasicMaterial color={backgroundColor} side={THREE.BackSide} />
          </RoundedBox>
       )}

      <Text
        position={[0, 0, 0.1]}
        fontSize={0.4}
        color={textColor}
        anchorX="center"
        anchorY="middle"
        outlineColor={backgroundColor}
        outlineWidth={isOutline ? 0 : 0.02}
      >
        {label}
      </Text>
      
      {hovered && (
        <mesh>
            <planeGeometry args={[5, 1.5]} />
            <meshBasicMaterial 
                color={backgroundColor}
                transparent 
                opacity={0.3}
                blending={THREE.AdditiveBlending}
            />
        </mesh>
      )}
      
      <ambientLight intensity={0.8} />
      <pointLight position={[0, 1, 5]} intensity={0.5} />
    </group>
  );
};

export default R3FButton;
