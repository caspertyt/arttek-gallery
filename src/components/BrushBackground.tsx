"use client";
import { useEffect, useRef } from "react";

const BrushBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    let brush = {
      x: width / 2,
      y: height / 2,
      angle: 0,
      radius: 2,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    };

    const random = (min: number, max: number) => Math.random() * (max - min) + min;

    const drawBrush = () => {
      const dx = Math.cos(brush.angle) * 10;
      const dy = Math.sin(brush.angle) * 10;

      brush.x += dx + random(-5, 5);
      brush.y += dy + random(-5, 5);
      brush.angle += random(-0.2, 0.2);
      brush.radius = random(2, 10);
      brush.color = `hsl(${Math.random() * 360}, 100%, 70%)`;

      ctx.beginPath();
      ctx.arc(brush.x, brush.y, brush.radius, 0, Math.PI * 2);
      ctx.fillStyle = brush.color;
      ctx.fill();

      if (
        brush.x < 0 ||
        brush.x > width ||
        brush.y < 0 ||
        brush.y > height
      ) {
        brush.x = width / 2;
        brush.y = height / 2;
      }
    };

    let animationId: number;
    const animate = () => {
      drawBrush();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default BrushBackground; 