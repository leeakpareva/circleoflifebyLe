import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Skull, Baby, Clock } from 'lucide-react';
import { Tooltip } from '../shared/Tooltip';
import { AnimatedCounter } from './AnimatedCounter';

export function LiveDeathDashboard() {
  const [deathCount, setDeathCount] = useState(0);
  const [birthCount, setBirthCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  // UK average deaths per day: ~1,700 (or ~1.18 per minute)
  // UK average births per day: ~2,000 (or ~1.39 per minute)
  useEffect(() => {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const minutesSinceStartOfDay = Math.floor((Date.now() - startOfDay.getTime()) / 60000);
    
    const initialDeaths = Math.floor(minutesSinceStartOfDay * 1.18);
    const initialBirths = Math.floor(minutesSinceStartOfDay * 1.39);
    
    setDeathCount(initialDeaths);
    setBirthCount(initialBirths);

    const interval = setInterval(() => {
      setCurrentTime(new Date());
      setDeathCount(prev => prev + 1);
      setBirthCount(prev => prev + 1);
    }, 51000); // Update roughly every 51 seconds for deaths

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-red-900/30 backdrop-blur-sm rounded-xl p-6 mt-8 max-w-3xl mx-auto"
    >
      <div className="flex items-center justify-center mb-4">
        <Clock size={24} className="text-red-200 mr-2" />
        <h3 className="font-typewriter text-xl text-red-200">
          Live Statistics for {currentTime.toLocaleDateString()}
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Tooltip content="Estimated deaths today based on average UK mortality rate">
          <div className="bg-red-800/30 rounded-lg p-4 text-center">
            <div className="flex justify-center mb-2">
              <Skull size={28} className="text-red-200" />
            </div>
            <div className="font-typewriter text-2xl text-white mb-1">
              <AnimatedCounter value={deathCount} direction="left" />
            </div>
            <div className="text-red-200 text-sm">Deaths Today</div>
          </div>
        </Tooltip>

        <Tooltip content="Estimated births today based on average UK birth rate">
          <div className="bg-red-800/30 rounded-lg p-4 text-center">
            <div className="flex justify-center mb-2">
              <Baby size={28} className="text-red-200" />
            </div>
            <div className="font-typewriter text-2xl text-white mb-1">
              <AnimatedCounter value={birthCount} direction="right" />
            </div>
            <div className="text-red-200 text-sm">Births Today</div>
          </div>
        </Tooltip>
      </div>
    </motion.div>
  );
}