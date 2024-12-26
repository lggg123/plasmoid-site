'use client'

import { motion } from 'framer-motion';
import Header from './components/Header';
import HeaderVideo from './components/HeaderVideo';
import ContractInfo from './components/ContractInfo';
import SocialLinks from './components/SocialLinks';
import Description from './components/Description';
import Footer from './components/Footer';
import Image from 'next/image';
import { GlowingSphere } from './components/GlowingSphere';

export default function Home() {
  return (
    <div className="bg-gradient-to-b min-h-screen">
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10"
      >
        <Header />
        
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-screen">
          <div className="absolute inset-0 flex items-center justify-center">
            <GlowingSphere />
          </div>
          <div className="flex flex-col items-center justify-center gap-8" >
              <HeaderVideo />
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-center"
              >
                <h1 className="text-xl font-bold text-white mb-6">$PLSMD</h1>
                <ContractInfo />
              </motion.div>
          </div>
        </section>
        {/* Exchange Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex justify-center my-8"
        >
          <Image
            src="/pumpfun.png"
            alt="Pump.fun Exchange"
            width={200}
            height={80}
            className="rounded-lg"
          />
        </motion.div>

        {/* Features Grid */}
        <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-teal-900/20 p-8 rounded-2xl backdrop-blur-sm"
          >
            <SocialLinks />
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-teal-900/20 p-8 rounded-2xl backdrop-blur-sm"
          >
            <Description />
          </motion.div>
        <Footer />
      </motion.main>
    </div>
  );
}
