'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

const cards = [
  {
    title: "1. Download Phantom Wallet",
    description: "Install the Phantom wallet extension from the Chrome Web Store",
    image: "/phantom_r.jpeg",
    link: "https://phantom.app/"
  },
  {
    title: "2. Buy SOL",
    description: "Purchase SOL from your preferred exchange and send it to your Phantom wallet",
    image: "/solana-logo.png",
    link: "https://phantom.app/buy/solana"
  },
  {
    title: "3. Trade on Pump.fun",
    description: "Visit Pump.fun, connect your wallet, and swap SOL for $PLSMD",
    image: "/pumpfun.png",
    link: "https://pump.fun"
  }
];

const HowToBuy = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          How to Buy
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.a
              key={index}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-purple-900/30 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20 
                        hover:border-white/40 transition-all duration-300 
                        flex flex-col items-center text-center space-y-4"
            >
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white">{card.title}</h3>
              <p className="text-gray-300">{card.description}</p>
              <div className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;