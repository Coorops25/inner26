
import React, { useEffect, useRef } from 'react';
import './VariableProximity.css';

interface VariableProximityProps {
  text: string;
  className?: string;
  radius?: number;
  minWeight?: number;
  maxWeight?: number;
}

/**
 * Renders text where each character's font-weight responds to mouse proximity.
 * Works best with variable fonts that support the wght axis (e.g. Cormorant Garamond, Inter).
 */
const VariableProximity: React.FC<VariableProximityProps> = ({
  text,
  className = '',
  radius = 160,
  minWeight = 300,
  maxWeight = 700,
}) => {
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    // Bypass React re-renders: update DOM directly via RAF
    const update = () => {
      for (const el of charRefs.current) {
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const d = Math.sqrt((mouseRef.current.x - cx) ** 2 + (mouseRef.current.y - cy) ** 2);
        const n = Math.max(0, 1 - d / radius);
        const w = Math.round(minWeight + n * n * (maxWeight - minWeight));
        el.style.fontWeight = String(w);
      }
      rafRef.current = requestAnimationFrame(update);
    };
    rafRef.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [radius, minWeight, maxWeight]);

  return (
    <span className={`variable-proximity ${className}`}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          ref={el => { charRefs.current[i] = el; }}
          className="vp-char"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default VariableProximity;
