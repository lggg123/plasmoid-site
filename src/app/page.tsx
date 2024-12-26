'use client'

import { motion } from 'framer-motion';
import Header from './components/Header';
import HeaderVideo from './components/HeaderVideo';
import ContractInfo from './components/ContractInfo';
import SocialLinks from './components/SocialLinks';
import Description from './components/Description';
import Footer from './components/Footer';
import { GlowingSphere } from './components/GlowingSphere';
import { BackgroundSpheres } from './components/BackgroundSphere';
import HowToBuy from './components/HowToBuy';

export default function Home() {
  return (
    <div className="bg-gradient-to-b min-h-screen">
      <BackgroundSpheres />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10"
      >
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-screen py-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <GlowingSphere />
          </div>
          
          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            {/* Left Column - Video and Contract */}
            <div className="space-y-8">
              <h1 className="text-xl font-bold text-white text-center mb-2">$PLSMD</h1>
              <HeaderVideo />
              <ContractInfo />
            </div>
            
            {/* Right Column - Description */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-teal-900/20 p-8 rounded-2xl backdrop-blur-sm"
            >
              <SocialLinks />
              <Description />
            </motion.div>
          </div>
        </section>
        {/* Features Grid */}
        <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-teal-900/20 p-8 rounded-2xl backdrop-blur-sm"
        >
            
        </motion.div>

        {/** How To Buy Section */}
        <HowToBuy />
        {/* Footer */}
        <Footer />
      </motion.main>
    </div>
  );
}
