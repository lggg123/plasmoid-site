'use client'

import { motion } from 'framer-motion';

export const GlowingSphere = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0.5 }}
      animate={{ 
        scale: [0.9, 1.1, 0.9],
        opacity: [0.5, 0.8, 0.5]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute w-[500px] h-[500px]"
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/10 to-blue-600/10 blur-2xl animate-pulse" />
      </div>
    </motion.div>
  );
};