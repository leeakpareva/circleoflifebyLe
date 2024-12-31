import React from 'react';
import { Heart, Home, Users, Puzzle } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImpactPoint } from '../shared/ImpactPoint';

export function SocialImpact() {
  const impacts = [
    {
      icon: <Heart size={24} />,
      title: "Healthcare Strain",
      value: "+28% demand increase",
      description: "Growing pressure on healthcare services due to aging population",
      delay: 0.1
    },
    {
      icon: <Home size={24} />,
      title: "Housing Market",
      value: "-15% young buyers",
      description: "Reduced first-time homebuyers affecting housing dynamics",
      delay: 0.2
    },
    {
      icon: <Users size={24} />,
      title: "Community Structure",
      value: "2.1:1 ratio",
      description: "Shifting balance between working-age and retired populations",
      delay: 0.3
    },
    {
      icon: <Puzzle size={24} />,
      title: "Social Services",
      value: "43% increase",
      description: "Rising demand for elderly care and support services",
      delay: 0.4
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-xl p-6 shadow-lg border border-red-100"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Social Impact</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {impacts.map((impact) => (
          <ImpactPoint key={impact.title} {...impact} />
        ))}
      </div>
    </motion.div>
  );
}