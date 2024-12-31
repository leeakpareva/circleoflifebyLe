import { Variants } from 'framer-motion';

export const cardHoverVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.1), 0 8px 10px -6px rgba(220, 38, 38, 0.05)",
    transition: { duration: 0.2 }
  }
};