'use client';
import { useEffect, useRef } from 'react';

export default function GenerativeArtBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationId: number;
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight * 0.95;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Создаем слои для разных эффектов
    const layers = {
      brushStrokes: Array.from({ length: 6 }).map(() => ({
        points: Array.from({ length: 30 }).map(() => ({
          x: Math.random() * width,
          y: Math.random() * height
        })),
        color: [
          'rgba(255,0,60,0.15)',
          'rgba(255,255,255,0.10)',
          'rgba(221,0,255,0.12)',
          'rgba(255,80,180,0.11)',
          'rgba(109,40,217,0.12)'
        ][Math.floor(Math.random() * 5)],
        width: 50 + Math.random() * 80,
        speed: 0.2 + Math.random() * 0.3,
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.005,
        pressure: Array.from({ length: 30 }).map(() => 0.3 + Math.random() * 0.7),
        curvePoints: Array.from({ length: 3 }).map(() => ({
          x: Math.random() * width,
          y: Math.random() * height
        }))
      })),
      splatters: Array.from({ length: 30 }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 2 + Math.random() * 4,
        color: 'rgba(255,255,255,0.03)',
        angle: Math.random() * Math.PI * 2,
        speed: 0.05 + Math.random() * 0.1,
        life: 1
      })),
      inkDrops: Array.from({ length: 5 }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 50 + Math.random() * 100,
        color: [
          'rgba(255,0,60,0.15)',
          'rgba(221,0,255,0.12)',
          'rgba(255,80,180,0.10)'
        ][Math.floor(Math.random() * 3)],
        growth: 0.1 + Math.random() * 0.2,
        maxSize: 150 + Math.random() * 100
      }))
    };

    function drawBrushStroke(
      ctx: CanvasRenderingContext2D,
      points: { x: number; y: number }[],
      color: string,
      width: number,
      pressure: number[],
      curvePoints: { x: number; y: number }[]
    ) {
      if (points.length < 2) return;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 0; i < points.length - 3; i += 3) {
        const p0 = points[i];
        const p1 = points[i + 1];
        const p2 = points[i + 2];
        const p3 = points[i + 3];

        ctx.bezierCurveTo(
          p1.x, p1.y,
          p2.x, p2.y,
          p3.x, p3.y
        );
      }

      const gradient = ctx.createLinearGradient(
        points[0].x,
        points[0].y,
        points[points.length - 1].x,
        points[points.length - 1].y
      );
      gradient.addColorStop(0, color);
      gradient.addColorStop(0.5, color.replace('0.15', '0.08'));
      gradient.addColorStop(1, color.replace('0.15', '0.02'));

      ctx.strokeStyle = gradient;
      ctx.lineWidth = width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.filter = 'blur(3px)';
      ctx.stroke();

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const press = pressure[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, width * press * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = color.replace('0.15', '0.03');
        ctx.fill();
      }

      ctx.restore();
    }

    function drawSplatter(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) {
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.filter = 'blur(1px)';
      ctx.fill();
    }

    function drawInkDrop(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, color.replace('0.15', '0.01'));
      ctx.fillStyle = gradient;
      ctx.filter = 'blur(5px)';
      ctx.fill();
      ctx.restore();
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, 'rgba(0,0,0,0.9)');
      gradient.addColorStop(0.5, 'rgba(10,0,20,0.95)');
      gradient.addColorStop(1, 'rgba(20,0,30,0.9)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (const stroke of layers.brushStrokes) {
        stroke.points.shift();
        const lastPoint = stroke.points[stroke.points.length - 1];
        const newX = lastPoint.x + Math.cos(stroke.angle) * stroke.speed;
        const newY = lastPoint.y + Math.sin(stroke.angle) * stroke.speed;
        stroke.points.push({ x: newX, y: newY });
        stroke.pressure.shift();
        stroke.pressure.push(0.3 + Math.random() * 0.7);

        stroke.angle += stroke.rotationSpeed;
        
        if (Math.random() < 0.02) {
          stroke.angle += (Math.random() - 0.5) * 0.2;
        }

        if (newX < -200) stroke.angle = Math.PI - stroke.angle;
        if (newX > width + 200) stroke.angle = Math.PI - stroke.angle;
        if (newY < -200) stroke.angle = -stroke.angle;
        if (newY > height + 200) stroke.angle = -stroke.angle;

        drawBrushStroke(ctx, stroke.points, stroke.color, stroke.width, stroke.pressure, stroke.curvePoints);

        if (Math.random() < 0.05) {
          layers.splatters.push({
            x: newX,
            y: newY,
            size: 2 + Math.random() * 4,
            color: stroke.color.replace('0.15', '0.03'),
            angle: Math.random() * Math.PI * 2,
            speed: 0.05 + Math.random() * 0.1,
            life: 1
          });
        }
      }

      for (let i = layers.splatters.length - 1; i >= 0; i--) {
        const splatter = layers.splatters[i];
        drawSplatter(ctx, splatter.x, splatter.y, splatter.size, splatter.color);
        
        splatter.x += Math.cos(splatter.angle) * splatter.speed;
        splatter.y += Math.sin(splatter.angle) * splatter.speed;
        splatter.life -= 0.01;
        
        if (splatter.life <= 0) {
          layers.splatters.splice(i, 1);
        }
      }

      for (const drop of layers.inkDrops) {
        drawInkDrop(ctx, drop.x, drop.y, drop.size, drop.color);
        drop.size += drop.growth;
        
        if (drop.size >= drop.maxSize) {
          drop.size = 50 + Math.random() * 50;
          drop.x = Math.random() * width;
          drop.y = Math.random() * height;
        }
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