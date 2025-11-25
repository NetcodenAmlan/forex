import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const HeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      length: number;
      speed: number;
      width: number;
      color: string;
      alpha: number;
      pulse: number;
      pulseSpeed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height + height; // Start below screen
        this.length = Math.random() * 300 + 100; // Variable length
        this.speed = Math.random() * 0.5 + 0.1; // Slow, soothing speed
        this.width = Math.random() * 1.5 + 0.1; // Thin, sleek lines
        
        // Apple-style palette: Teal, Cyan, and White
        const colors = [
          '20, 184, 166', // Teal 500
          '45, 212, 191', // Teal 400
          '255, 255, 255' // White
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.2 + 0.05; // Low opacity for subtlety
        this.pulse = 0;
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
      }

      update() {
        this.y -= this.speed;
        this.pulse += this.pulseSpeed;

        // Reset if off top of screen
        if (this.y + this.length < 0) {
          this.y = height + Math.random() * 200;
          this.x = Math.random() * width;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        
        // Gradient for "Energy Trail" look
        const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.length);
        
        // Soothing pulse effect
        const currentAlpha = this.alpha + Math.sin(this.pulse) * 0.05;
        const clampedAlpha = Math.max(0, Math.min(1, currentAlpha));

        gradient.addColorStop(0, `rgba(${this.color}, 0)`);
        gradient.addColorStop(0.5, `rgba(${this.color}, ${clampedAlpha})`);
        gradient.addColorStop(1, `rgba(${this.color}, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.width;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.stroke();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((width * height) / 8000); // Density based on screen area
      for (let i = 0; i < particleCount; i++) {
        const p = new Particle();
        p.y = Math.random() * height; // Distribute vertically initially
        particles.push(p);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Atmospheric Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#020408] to-[#050A10]" />
        
        {/* Living Aurora Blobs - The "Soothing" Element */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-900/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[60%] bg-indigo-900/10 rounded-full blur-[150px] animate-pulse-slow delay-1000" />
        
        {/* The Quantum Data Canvas */}
        <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full mix-blend-screen opacity-80"
        />
        
        {/* Vignette for Cinematic Focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60" />
    </div>
  );
};