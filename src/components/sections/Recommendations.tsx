import React from 'react';
import { Lightbulb, GraduationCap, Building, HandHeart } from 'lucide-react';
import { motion } from 'framer-motion';

interface RecommendationProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  actions: string[];
  delay: number;
}

function Recommendation({ title, description, icon, actions, delay }: RecommendationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-gradient-to-br from-white to-red-50/30 p-6 rounded-lg shadow-md border border-red-100"
    >
      <div className="flex items-start space-x-4">
        <div className="text-red-500 mt-1">{icon}</div>
        <div>
          <h4 className="font-semibold text-gray-900">{title}</h4>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          <ul className="mt-3 space-y-2">
            {actions.map((action, index) => (
              <li key={index} className="flex items-center text-sm text-gray-700">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2" />
                {action}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function Recommendations() {
  const recommendations = [
    {
      icon: <Lightbulb size={24} />,
      title: "Immigration Policy Reform",
      description: "Strategic immigration policies to address workforce gaps",
      actions: [
        "Streamline skilled worker visa processes",
        "Implement points-based immigration system",
        "Create special visas for critical sectors"
      ],
      delay: 0.1
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Education & Training",
      description: "Enhance workforce capabilities and adaptability",
      actions: [
        "Expand vocational training programs",
        "Subsidize reskilling initiatives",
        "Promote lifelong learning"
      ],
      delay: 0.2
    },
    {
      icon: <Building size={24} />,
      title: "Economic Incentives",
      description: "Support for families and working parents",
      actions: [
        "Increase childcare subsidies",
        "Expand parental leave benefits",
        "Offer housing assistance for families"
      ],
      delay: 0.3
    },
    {
      icon: <HandHeart size={24} />,
      title: "Healthcare Reform",
      description: "Strengthen healthcare system sustainability",
      actions: [
        "Invest in preventive care",
        "Modernize elderly care services",
        "Expand mental health support"
      ],
      delay: 0.4
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-xl p-6 shadow-lg border border-red-100"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Government Recommendations</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((recommendation) => (
          <Recommendation key={recommendation.title} {...recommendation} />
        ))}
      </div>
    </motion.div>
  );
}