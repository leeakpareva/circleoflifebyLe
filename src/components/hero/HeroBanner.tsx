import React from 'react';
import { motion } from 'framer-motion';
import { LiveDeathDashboard } from './LiveDeathDashboard';
import { HeroSlider } from './HeroSlider';

export function HeroBanner() {
  return (
    <div className="relative bg-gradient-to-r from-red-600 to-red-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <HeroSlider />
          <LiveDeathDashboard />
        </motion.div>
      </div>
    </div>
  );
}