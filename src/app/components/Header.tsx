import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => (
  <header className="flex items-center justify-start gap-4 p-6 relative z-10">
    <Image
      src="/Plasmoid_Logo.png"
      alt="Plasmoid Logo"
      width={180}
      height={180}
      priority
      className="object-contain"
    />
    <motion.h1 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-6xl font-extrabold tracking-wider
        bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 text-transparent bg-clip-text
        drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]
        hover:scale-105 transition-transform duration-300
        animate-pulse-slow"
    >
      PLASMOID
    </motion.h1>
  </header>
);

export default Header;