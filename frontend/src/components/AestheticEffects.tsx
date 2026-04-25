import React, { useEffect, useState } from 'react';

const AestheticEffects = () => {
  const [particles, setParticles] = useState<{ id: number, x: number, y: number, size: number, duration: number, delay: number, emoji: string }[]>([]);

  useEffect(() => {
    const emojis = ['✨', '💄', '💖', '🌸', '💅', '🎀'];
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (20 - 10) + 10,
      duration: Math.random() * (20 - 10) + 10,
      delay: Math.random() * 5,
      emoji: emojis[Math.floor(Math.random() * emojis.length)]
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30 dark:opacity-20">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-float"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.emoji}
        </div>
      ))}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px) rotate(360deg); opacity: 0; }
        }
        .animate-float {
          animation-name: float;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
      `}</style>
    </div>
  );
};

export default AestheticEffects;
