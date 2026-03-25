
import React, { useEffect, useRef } from 'react';
import './Ribbons.css';

interface RibbonsProps {
  className?: string;
}

const Ribbons: React.FC<RibbonsProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Three flowing ribbon layers in Inner Spirit palette
    const ribbons = [
      { color: 'rgba(201,173,161,0.38)', width: 110, speed: 0.0006, phase: 0,    amp: 0.22, freq: 1.1  },
      { color: 'rgba(160,160,131,0.26)', width:  75, speed: 0.0009, phase: 2.1,  amp: 0.16, freq: 0.85 },
      { color: 'rgba(77,106,109,0.18)',  width:  55, speed: 0.0007, phase: 4.2,  amp: 0.20, freq: 1.4  },
    ];

    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t++;

      for (const r of ribbons) {
        const pts: [number, number][] = [];
        const n = 90;

        for (let i = 0; i <= n; i++) {
          const x = (i / n) * canvas.width;
          const y =
            canvas.height * 0.5 +
            Math.sin((i / n) * Math.PI * 2 * r.freq + t * r.speed * 100 + r.phase) *
              canvas.height * r.amp +
            Math.sin((i / n) * Math.PI * 2 * r.freq * 2.7 + t * r.speed * 160 + r.phase * 1.4) *
              canvas.height * r.amp * 0.35;
          pts.push([x, y]);
        }

        ctx.beginPath();
        ctx.moveTo(pts[0][0], pts[0][1]);
        for (let i = 1; i < pts.length - 1; i++) {
          const mx = (pts[i][0] + pts[i + 1][0]) / 2;
          const my = (pts[i][1] + pts[i + 1][1]) / 2;
          ctx.quadraticCurveTo(pts[i][0], pts[i][1], mx, my);
        }
        ctx.strokeStyle = r.color;
        ctx.lineWidth = r.width;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className={`ribbons-canvas ${className}`} />;
};

export default Ribbons;
