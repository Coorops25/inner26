
import React, { useEffect, useRef } from 'react';
import { Renderer, Camera, Transform, Program, Mesh, Color, Vec3, Geometry } from 'ogl';

interface GalaxyProps {
  mouseInteraction?: boolean;
  mouseRepulsion?: boolean;
  density?: number;
  glowIntensity?: number;
  saturation?: number;
  hueShift?: number;
  twinkleIntensity?: number;
  rotationSpeed?: number;
  repulsionStrength?: number;
  autoCenterRepulsion?: number;
  starSpeed?: number;
  speed?: number;
}

const vertexShader = `
    attribute vec3 position;
    attribute float size;
    attribute float random;
    
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform float uTime;
    uniform vec3 uMouse;
    uniform float uRepulsionStrength;
    uniform float uStarSpeed;
    
    varying float vRandom;
    varying float vDistance;
    
    void main() {
        vRandom = random;
        
        vec3 pos = position;
        
        // Gentle movement
        float movement = sin(uTime * uStarSpeed + random * 10.0) * 0.1;
        pos.y += movement;
        
        // Mouse Repulsion
        if (uRepulsionStrength > 0.0) {
            vec3 mousePos = vec3(uMouse.x * 20.0, uMouse.y * 10.0, 0.0); // Approximate world space scale
            float dist = distance(pos.xy, mousePos.xy);
            float repulse = max(0.0, (5.0 - dist) / 5.0);
            vec3 dir = normalize(pos - mousePos);
            // pos += dir * repulse * uRepulsionStrength; // Push away
            // Or pull towards? Assuming repulsion based on prop name
            pos.z += repulse * uRepulsionStrength * 2.0; // Push depth
        }

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        
        gl_Position = projectionMatrix * mvPosition;
        
        // Size attenuation
        gl_PointSize = size * (30.0 / -mvPosition.z);
        
        vDistance = -mvPosition.z;
    }
`;

const fragmentShader = `
    precision highp float;
    
    uniform vec3 uColor;
    uniform float uTime;
    uniform float uTwinkle;
    uniform float uSaturation;
    
    varying float vRandom;
    
    void main() {
        vec2 uv = gl_PointCoord.xy;
        float dist = length(uv - 0.5);
        
        if (dist > 0.5) discard;
        
        // Soft circle
        float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
        
        // Twinkle
        float twinkle = sin(uTime * 5.0 + vRandom * 100.0) * 0.5 + 0.5;
        float intensity = mix(1.0, twinkle, uTwinkle);
        
        // Color
        vec3 color = uColor;
        
        // Desaturate if needed
        float gray = dot(color, vec3(0.299, 0.587, 0.114));
        color = mix(vec3(gray), color, uSaturation);
        
        gl_FragColor = vec4(color, alpha * intensity);
    }
`;

const Galaxy: React.FC<GalaxyProps> = ({
  mouseInteraction = true,
  density = 1,
  saturation = 0,
  hueShift = 140,
  twinkleIntensity = 0.3,
  rotationSpeed = 0.1,
  repulsionStrength = 2,
  starSpeed = 0.5,
  speed = 1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new Renderer({ alpha: true, depth: false });
    const gl = renderer.gl;
    containerRef.current.appendChild(gl.canvas);
    rendererRef.current = renderer;

    const camera = new Camera(gl, { fov: 45 });
    camera.position.set(0, 0, 15);

    const scene = new Transform();

    // Generate Particles
    const count = 1000 * density;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const randoms = new Float32Array(count);

    for (let i = 0; i < count; i++) {
        // Cylinder-ish
        positions[i * 3] = (Math.random() - 0.5) * 30; // X
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // Y
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // Z
        
        sizes[i] = Math.random() * 2.0 + 0.5;
        randoms[i] = Math.random();
    }

    const geometry = new Geometry(gl, {
        position: { size: 3, data: positions },
        size: { size: 1, data: sizes },
        random: { size: 1, data: randoms },
    });

    const program = new Program(gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
            uTime: { value: 0 },
            uColor: { value: new Color(0.9, 0.9, 0.95) }, // Bluish white stars
            uMouse: { value: new Vec3(0, 0, 0) },
            uRepulsionStrength: { value: repulsionStrength },
            uStarSpeed: { value: starSpeed },
            uTwinkle: { value: twinkleIntensity },
            uSaturation: { value: saturation }
        },
        transparent: true,
        depthTest: false,
    });

    const mesh = new Mesh(gl, { mode: gl.POINTS, geometry, program });
    mesh.setParent(scene);

    // Resize
    function resize() {
        if (!containerRef.current) return;
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    }
    window.addEventListener('resize', resize);
    resize();

    // Mouse
    const mouse = new Vec3(0, 0, 0);
    function updateMouse(e: MouseEvent) {
        if (!mouseInteraction) return;
        // Normalize mouse -1 to 1
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
        
        // Pass to uniform
        program.uniforms.uMouse.value.set(mouse.x, mouse.y, 0);
    }
    if (mouseInteraction) {
        window.addEventListener('mousemove', updateMouse);
    }

    // Loop
    let animationId: number;
    function update(t: number) {
        animationId = requestAnimationFrame(update);
        const time = t * 0.001 * speed;
        program.uniforms.uTime.value = time;
        
        // Slow Rotation
        scene.rotation.y = time * rotationSpeed;
        
        renderer.render({ scene, camera });
    }
    animationId = requestAnimationFrame(update);

    return () => {
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', updateMouse);
        cancelAnimationFrame(animationId);
        containerRef.current?.removeChild(gl.canvas);
    };
  }, [density, rotationSpeed, speed, saturation, hueShift, starSpeed, repulsionStrength, mouseInteraction, twinkleIntensity]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, background: '#0a0a0a' }} />;
};

export default Galaxy;
