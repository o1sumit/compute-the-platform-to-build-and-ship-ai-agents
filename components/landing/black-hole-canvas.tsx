"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number; // 3D coordinates
  y: number;
  z: number;
  speed: number;
  size: number;
  color: string;
  angle: number;
  orbitRadius: number;
}

export function BlackHoleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const centerRef = useRef({ x: 0.5, y: 0.5 });
  const frameRef = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    resize();
    window.addEventListener("resize", resize);

    const isDark = resolvedTheme === "dark";

    // 300 particles for high density visual richness
    const particleCount = 300;
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const orbitRadius = 60 + Math.random() * 320;
      const angle = Math.random() * Math.PI * 2;
      
      // Keplerian speed (faster orbits closer to center)
      const speed = (0.012 + Math.random() * 0.012) * Math.pow(100 / orbitRadius, 0.75);
      const size = 1.0 + Math.random() * 2.0;
      const alpha = 0.5 + Math.random() * 0.5;

      // Peplocked Theme Colors:
      // Coral: rgba(255, 110, 80)
      // Violet: rgba(160, 80, 255)
      // Cyan: rgba(60, 200, 255)
      let color = "";
      const rand = Math.random();
      if (rand < 0.45) {
        color = `rgba(255, 110, 80, ${alpha})`; // Coral
      } else if (rand < 0.8) {
        color = `rgba(160, 80, 255, ${alpha})`; // Violet
      } else {
        color = `rgba(60, 200, 255, ${alpha})`; // Cyan
      }

      particles.push({
        x: 0,
        y: 0,
        z: 0,
        angle,
        orbitRadius,
        speed,
        size,
        color,
      });
    }

    const render = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Soft mouse inertia drift
      centerRef.current.x += (mouseRef.current.x - centerRef.current.x) * 0.05;
      centerRef.current.y += (mouseRef.current.y - centerRef.current.y) * 0.05;

      const cx = w * centerRef.current.x;
      const cy = h * centerRef.current.y;
      
      const singRadius = Math.min(w, h) * 0.08 + 12;

      ctx.clearRect(0, 0, w, h);

      // Tilt angle of the accretion disk projection
      const tilt = 0.24; 

      // Update 3D orbits
      particles.forEach((p) => {
        p.angle += p.speed;
        
        const rawX = Math.cos(p.angle) * p.orbitRadius;
        const rawZ = Math.sin(p.angle) * p.orbitRadius;
        
        p.x = rawX;
        p.y = rawZ * Math.sin(tilt);
        p.z = rawZ * Math.cos(tilt);
      });

      // Sort by depth for correct 3D overlap layering
      particles.sort((a, b) => a.z - b.z);

      // Gravitational lensing function
      const applyLensing = (px: number, py: number, pz: number) => {
        const dx = px;
        const dy = py;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (pz < 0 && dist < singRadius * 1.5) {
          const lensFactor = 1.4 + (singRadius * 0.25) / (dist + 0.1);
          return {
            x: cx + dx * lensFactor,
            y: cy + dy * lensFactor,
            isLensed: true,
          };
        }

        return {
          x: cx + px,
          y: cy + py,
          isLensed: false,
        };
      };

      // 1. Draw background particles (Z < 0)
      particles.forEach((p) => {
        if (p.z >= 0) return;

        const proj = applyLensing(p.x, p.y, p.z);
        
        ctx.beginPath();
        ctx.arc(proj.x, proj.y, p.size * (proj.isLensed ? 1.6 : 1), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      // 2. Draw Event Horizon (Black Hole Singularity Core)
      ctx.beginPath();
      ctx.arc(cx, cy, singRadius, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? "#000000" : "#ffffff";
      ctx.fill();

      // Glowing event horizon outline
      ctx.beginPath();
      ctx.arc(cx, cy, singRadius + 2, 0, Math.PI * 2);
      ctx.strokeStyle = isDark 
        ? "rgba(255, 110, 80, 0.6)" // Coral event outline
        : "rgba(60, 200, 255, 0.6)"; // Cyan event outline
      ctx.lineWidth = 4;
      ctx.stroke();

      // Einstein ring light bend shell
      ctx.beginPath();
      ctx.arc(cx, cy, singRadius * 1.35, 0, Math.PI * 2);
      ctx.strokeStyle = isDark 
        ? "rgba(160, 80, 255, 0.2)" 
        : "rgba(160, 80, 255, 0.18)";
      ctx.lineWidth = 8;
      ctx.stroke();

      // 3. Draw foreground particles (Z >= 0)
      particles.forEach((p) => {
        if (p.z < 0) return;

        const proj = applyLensing(p.x, p.y, p.z);
        
        ctx.beginPath();
        ctx.arc(proj.x, proj.y, p.size * 1.15, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      // 4. Large ambient lens glow
      const glowGrad = ctx.createRadialGradient(cx, cy, singRadius * 0.4, cx, cy, singRadius * 3.5);
      if (isDark) {
        glowGrad.addColorStop(0, "rgba(255, 110, 80, 0.15)");
        glowGrad.addColorStop(0.5, "rgba(160, 80, 255, 0.06)");
        glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      } else {
        glowGrad.addColorStop(0, "rgba(60, 200, 255, 0.16)");
        glowGrad.addColorStop(0.5, "rgba(255, 110, 80, 0.05)");
        glowGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
      }
      ctx.beginPath();
      ctx.arc(cx, cy, singRadius * 4, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();

      frameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, [resolvedTheme]);

  if (!mounted) {
    return <div className="absolute inset-0 bg-background" />;
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 transition-colors duration-500"
      style={{ display: "block" }}
    />
  );
}
