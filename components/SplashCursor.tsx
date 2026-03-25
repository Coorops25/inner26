
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  hue: number;
}

const SplashCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let mouseX = -999;
    let mouseY = -999;
    let raf = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Inner Spirit brand hues: almond-silk, dry-sage, blue-slate, grey-olive
    const hues = [18, 80, 185, 75];

    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - mouseX;
      const dy = e.clientY - mouseY;
      mouseX = e.clientX;
      mouseY = e.clientY;
      const speed = Math.sqrt(dx * dx + dy * dy);
      if (speed < 3) return;

      const count = Math.min(4, Math.floor(speed / 8) + 1);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 8,
          y: e.clientY + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 - 0.8,
          life: 1,
          size: 2.5 + Math.random() * 3,
          hue: hues[Math.floor(Math.random() * hues.length)] + (Math.random() - 0.5) * 20,
        });
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles = particles.filter(p => p.life > 0.02);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04;
        p.vx *= 0.97;
        p.life -= 0.028;
        const alpha = p.life * 0.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 28%, 60%, ${alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default SplashCursor;
