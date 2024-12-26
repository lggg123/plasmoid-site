'use client'

import { motion } from 'framer-motion';

interface SphereProps {
  size: string;
  position: { top: string; left: string };
  delay: number;
  scale: number[];
  opacity: number[];
}

const Sphere = ({ size, position, delay, scale, opacity }: SphereProps) => (
  <motion.div
    initial={{ scale: scale[0], opacity: opacity[0] }}
    animate={{ 
      scale: scale,
      opacity: opacity
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className={`absolute ${size}`}
    style={position}
  >
    <div className="relative w-full h-full">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/10 to-blue-600/10 blur-2xl animate-pulse" />
    </div>
  </motion.div>
);

export const BackgroundSpheres = () => {
  const spheres = [
    { size: 'w-[300px] h-[300px]', position: { top: '10%', left: '5%' }, delay: 0, scale: [0.8, 1, 0.8], opacity: [0.3, 0.5, 0.3] },
    { size: 'w-[200px] h-[200px]', position: { top: '60%', left: '80%' }, delay: 2, scale: [0.9, 1.1, 0.9], opacity: [0.2, 0.4, 0.2] },
    { size: 'w-[400px] h-[400px]', position: { top: '40%', left: '60%' }, delay: 4, scale: [0.7, 0.9, 0.7], opacity: [0.1, 0.3, 0.1] },
    { size: 'w-[250px] h-[250px]', position: { top: '80%', left: '20%' }, delay: 1, scale: [0.8, 1, 0.8], opacity: [0.2, 0.4, 0.2] },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {spheres.map((sphere, index) => (
        <Sphere key={index} {...sphere} />
      ))}
    </div>
  );
};