'use client'

import { useEffect, useState } from 'react';

interface Star {
  id: number;
  top: string;
  left: string;
  delay: string;
  size: string;
}

interface ShootingStar {
    id: number;
    top: string;
    left: string;
    delay: string;
}

export function AnimatedBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

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

      const newShootingStars = Array.from({ length: 5 }, (_, index) => ({
        id: index,
        top: `${Math.random() * 50}%`,
        left: `${Math.random() * 70}%`,
        delay: `${Math.random() * 10}s`
      }));
      setShootingStars(newShootingStars);
    };
    generateStars();
    const interval = setInterval(generateStars, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-black" />
      
      {/* Static stars */}
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

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
            key={star.id}
            className="absolute"
            style={{
                top: star.top,
                left: star.left,
                animationDelay: star.delay,
            }}
        >
            <div className="w-1 h-12 bg-gradient-to-t from-white to-transparent opacity-70 animate-shooting-star rotate-45" />
        </div>
      ))}
    </div>
  );
}