"use client";
import { useEffect, useRef } from "react";

export default function ArtisticAnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationId: number;
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight * 0.95;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Brush stroke data (slower, looping)
    const strokes = Array.from({ length: 7 }).map(() => {
      const startX = Math.random() * width;
      const startY = Math.random() * height;
      const angle = Math.random() * Math.PI * 2;
      const length = 400 + Math.random() * 200;
      return {
        startX,
        startY,
        angle,
        length,
        t: 0,
        speed: 0.003 + Math.random() * 0.002, // much slower
        color: [
          "rgba(255,0,60,0.13)",
          "rgba(255,255,255,0.09)",
          "rgba(221,0,255,0.10)",
          "rgba(109,40,217,0.10)",
        ][Math.floor(Math.random() * 4)],
        width: 60 + Math.random() * 60,
        pressure: Array.from({ length: 24 }).map(() => 0.4 + Math.random() * 0.6),
        pathNoise: (Math.random() - 0.5) * 0.5,
      };
    });

    function getStrokePoints(stroke: any) {
      // t: 0..1, interpolate along a curve
      const points = [];
      for (let i = 0; i < 24; i++) {
        const t = (stroke.t + i / 24) % 1;
        const x = stroke.startX + Math.cos(stroke.angle) * stroke.length * t + Math.sin(t * Math.PI * 2) * 30 * stroke.pathNoise;
        const y = stroke.startY + Math.sin(stroke.angle) * stroke.length * t + Math.cos(t * Math.PI * 2) * 30 * stroke.pathNoise;
        points.push({ x, y });
      }
      return points;
    }

    function drawBrushStroke(
      ctx: CanvasRenderingContext2D | null,
      points: { x: number; y: number }[],
      color: string,
      width: number,
      pressure: number[]
    ) {
      if (!ctx || points.length < 2) return;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length - 2; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      ctx.quadraticCurveTo(
        points[points.length - 2].x,
        points[points.length - 2].y,
        points[points.length - 1].x,
        points[points.length - 1].y
      );
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.filter = "blur(2.5px)";
      ctx.stroke();
      // Texture
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const press = pressure[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, width * press * 0.18, 0, Math.PI * 2);
        ctx.fillStyle = color.replace("0.13", "0.04");
        ctx.fill();
      }
      ctx.restore();
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#0a0a0f";
      ctx.fillRect(0, 0, width, height);
      for (const stroke of strokes) {
        stroke.t += stroke.speed;
        if (stroke.t > 1) stroke.t = 0; // loop
        const points = getStrokePoints(stroke);
        drawBrushStroke(ctx, points, stroke.color, stroke.width, stroke.pressure);
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }} />
  );
} 