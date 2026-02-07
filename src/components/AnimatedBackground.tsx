"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export const AnimatedBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let mouse = { x: -1000, y: -1000 };

        // Configuration
        const particleCount = 60; // Slightly fewer particles for cleaner look
        const connectionDistance = 150;
        const mouseDistance = 200;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5; // Slow movement
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Mouse interaction (Repel)
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseDistance) {
                    const angle = Math.atan2(dy, dx);
                    const force = (mouseDistance - distance) / mouseDistance;
                    const repelX = Math.cos(angle) * force * 2; // Repel strength
                    const repelY = Math.sin(angle) * force * 2;

                    this.x -= repelX;
                    this.y -= repelY;
                }
            }

            draw(color: string) {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const drawLines = (particle: Particle, i: number, color: string) => {
            if (!ctx) return;
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = particle.x - p2.x;
                const dy = particle.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    const opacity = 1 - distance / connectionDistance;
                    ctx.strokeStyle = color.replace("OPACITY", opacity.toString());
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Determine colors based on theme (defaulting to dark if undefined or 'system')
            // This is a simple check; for robustness, Next-Themes 'resolvedTheme' is better, 
            // but 'theme' usually updates. 
            // We'll trust the prop passed or check styling.
            // Actually, we can check the computed style of the body to be sure, 
            // or just rely on 'theme' variable which updates.

            const isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);

            // Colors
            const particleColor = isDark ? "rgba(255, 255, 255, 0.5)" : "rgba(24, 24, 27, 0.5)"; // White vs Zinc-900
            const lineColor = isDark ? "rgba(255, 255, 255, OPACITY)" : "rgba(24, 24, 27, OPACITY)";

            particles.forEach((particle, i) => {
                particle.update();
                particle.draw(particleColor);
                drawLines(particle, i, lineColor);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseLeave);

        resize();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]); // Re-run when theme changes

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none -z-10 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500"
        />
    );
};
