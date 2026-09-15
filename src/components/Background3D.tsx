import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  color: string;
}

export const Background3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouseX = e.touches[0].clientX;
        targetMouseY = e.touches[0].clientY;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Generate 3D particle nodes
    const particleCount = Math.min(65, Math.floor(width / 25));
    const particles: Particle[] = [];
    const colors = ["#2dd4bf", "#38bdf8", "#818cf8", "#34d399"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.2,
        y: (Math.random() - 0.5) * height * 1.2,
        z: Math.random() * 800 + 200,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        vz: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const fov = 450;

    const render = () => {
      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const tiltX = ((mouseY - height / 2) / height) * 0.35;
      const tiltY = ((mouseX - width / 2) / width) * 0.35;

      ctx.clearRect(0, 0, width, height);

      // Render projected 3D nodes
      const projectedNodes: { px: number; py: number; scale: number; p: Particle }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Boundary bounce
        if (p.x < -width * 0.7 || p.x > width * 0.7) p.vx *= -1;
        if (p.y < -height * 0.7 || p.y > height * 0.7) p.vy *= -1;
        if (p.z < 150 || p.z > 1000) p.vz *= -1;

        // 3D rotation projection based on mouse tilt
        const rotY_x = p.x * Math.cos(tiltY) + p.z * Math.sin(tiltY);
        const rotY_z = -p.x * Math.sin(tiltY) + p.z * Math.cos(tiltY);

        const rotX_y = p.y * Math.cos(tiltX) - rotY_z * Math.sin(tiltX);
        const rotX_z = p.y * Math.sin(tiltX) + rotY_z * Math.cos(tiltX);

        if (rotX_z <= 20) continue;

        const scale = fov / (fov + rotX_z);
        const px = rotY_x * scale + width / 2;
        const py = rotX_y * scale + height / 2;

        projectedNodes.push({ px, py, scale, p });
      }

      // Draw 3D connection lines
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const a = projectedNodes[i];
          const b = projectedNodes[j];
          const dx = a.px - b.px;
          const dy = a.py - b.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 130 * ((a.scale + b.scale) / 2);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.22 * ((a.scale + b.scale) / 2);
            ctx.beginPath();
            ctx.moveTo(a.px, a.py);
            ctx.lineTo(b.px, b.py);
            ctx.strokeStyle = `rgba(45, 212, 191, ${alpha})`;
            ctx.lineWidth = Math.max(0.6, 1.2 * a.scale);
            ctx.stroke();
          }
        }
      }

      // Draw particles with glow
      for (let i = 0; i < projectedNodes.length; i++) {
        const { px, py, scale, p } = projectedNodes[i];
        const r = p.radius * scale * 1.4;

        // Glow ring
        ctx.beginPath();
        ctx.arc(px, py, Math.max(0.5, r * 2.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45, 212, 191, ${0.1 * scale})`;
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(px, py, Math.max(0.8, r), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8 * scale;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 3D Cyber grid effect background */}
      <div className="absolute inset-0 bg-[#070b14]" />
      <div className="absolute inset-0 cyber-grid opacity-60" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Interactive 3D Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default Background3D;
