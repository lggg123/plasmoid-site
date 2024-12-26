'use client'

import { useEffect, useState } from 'react';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
}

interface Star {
  id: number;
  top: string;
  left: string;
  delay: string;
  size: string;
}

export function AnimatedBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 150 }, (_, index) => ({
        id: index,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        size: Math.random() < 0.3 ? 'w-1.5 h-1.5' : 'w-1 h-1'
      }));
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-black" />
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full bg-white animate-twinkle ${star.size}`}
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}