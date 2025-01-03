'use client'

import { motion } from 'framer-motion';

const Description = () => (
    <div className="bg-purple-700/30 backdrop-blur-sm text-white text-center p-4 rounded-2xl border-2 border-white mx-8 mt-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-extrabold tracking-wider mb-6
          bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text
          drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]
          hover:scale-105 transition-transform duration-300
          font-sans"
    >
      Introducing Plasmoid Coin: The Meme Coin of the Unknown
    </motion.h1>
      <p className="mt-4">
        What are those mysterious plasmoid orbs appearing in the sky? Are they a cosmic phenomenon, a glimpse into another dimension, or something entirely beyond our understanding?
      </p>
      <p className="mt-4">
        The world is asking questions, and Plasmoid Coin is here to ignite the conversation!
      </p>
      <p className="mt-4">
        Plasmoid Coin isn’t just a meme coin – it’s a movement to raise awareness about these enigmatic phenomena while embracing the power of community-driven cryptocurrency.
      </p>
      <p className="mt-4">
        Together, we’re diving into the mysteries of the universe and riding the wave of curiosity into uncharted territories.
      </p>
      <p className="mt-4">
        Are you transcendentally ready to open a portal with us and take Plasmoid Coin all the way into outer space???
      </p>
      <p className="mt-4">
        Join the mission. Embrace the mystery. Be part of the adventure. Plasmoid Coin launches this Saturday—don’t miss your chance to go interstellar!
      </p>
    </div>
  );
  
  export default Description;  