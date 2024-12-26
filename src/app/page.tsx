'use client'

import { motion } from 'framer-motion';
import Header from './components/Header';
import HeaderVideo from './components/HeaderVideo';
import ContractInfo from './components/ContractInfo';
import SocialLinks from './components/SocialLinks';
import Description from './components/Description';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Header />
        
        {/* Hero Section */}
          <HeaderVideo />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative z-20 text-center"
          >
            <h1 className="text-xl font-bold text-white mb-6">$PLSMD</h1>
            <ContractInfo />
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
