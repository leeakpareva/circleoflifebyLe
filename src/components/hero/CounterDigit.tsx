import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CounterDigitProps {
  digit: string;
  direction: 'left' | 'right';
}

export function CounterDigit({ digit, direction }: CounterDigitProps) {
  return (
    <div className="relative inline-block w-[1ch] overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={digit}
          initial={{ y: direction === 'left' ? -30 : 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: direction === 'left' ? 30 : -30, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}