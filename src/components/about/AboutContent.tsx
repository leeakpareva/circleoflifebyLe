import React from 'react';
import { motion } from 'framer-motion';

export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mt-12 bg-white rounded-lg shadow-sm border border-slate-200 p-6"
    >
      <p className="text-slate-600 leading-relaxed">
        "Cycle of Life" is a thought-provoking app designed to shed light on the complex interplay between birth and death rates in the United Kingdom and their economic implications. By presenting data and insights in an engaging and accessible format, the app aims to spark meaningful conversations around the socioeconomic impact of reproduction and mortality trends.
      </p>
      <p className="text-slate-600 leading-relaxed mt-4">
        The app provides users with dynamic visualizations and case studies that illustrate how changes in birth and death rates influence labor markets, healthcare costs, social welfare systems, and overall economic growth. It also examines demographic shifts, such as aging populations, fertility trends, and migration, offering a holistic view of the population's impact on the UK economy.
      </p>
      <p className="text-slate-600 leading-relaxed mt-4">
        "Cycle of Life" serves as both an educational tool and a conversation starter, encouraging users to consider how policy, cultural attitudes, and personal choices intersect with the broader economic fabric. With an emphasis on fostering awareness and dialogue, this app aims to inspire collective reflection and potential solutions for balancing the challenges and opportunities presented by life and death.
      </p>
    </motion.div>
  );
}