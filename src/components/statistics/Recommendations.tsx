import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Lightbulb, Heart } from 'lucide-react';

const recommendations = {
  government: [
    {
      icon: <Users size={20} />,
      title: "Immigration Policy",
      actions: [
        "Streamline skilled worker visas",
        "Create special healthcare worker programs",
        "Implement regional migration incentives"
      ]
    },
    {
      icon: <Building2 size={20} />,
      title: "Infrastructure",
      actions: [
        "Increase care home funding",
        "Expand healthcare facilities",
        "Modernize education facilities"
      ]
    }
  ],
  civilian: [
    {
      icon: <Lightbulb size={20} />,
      title: "Career Development",
      actions: [
        "Pursue healthcare qualifications",
        "Consider care work opportunities",
        "Engage in lifelong learning"
      ]
    },
    {
      icon: <Heart size={20} />,
      title: "Community Support",
      actions: [
        "Volunteer in care homes",
        "Support local families",
        "Join community programs"
      ]
    }
  ]
};

export function Recommendations() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <h3 className="text-xl font-semibold text-slate-900">Government Actions</h3>
        {recommendations.government.map((rec, index) => (
          <motion.div
            key={rec.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-slate-200"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="text-red-500">{rec.icon}</div>
              <h4 className="font-semibold text-slate-900">{rec.title}</h4>
            </div>
            <ul className="space-y-2">
              {rec.actions.map((action) => (
                <li key={action} className="flex items-center text-slate-600">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2" />
                  {action}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <h3 className="text-xl font-semibold text-slate-900">Civilian Actions</h3>
        {recommendations.civilian.map((rec, index) => (
          <motion.div
            key={rec.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-slate-200"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="text-red-500">{rec.icon}</div>
              <h4 className="font-semibold text-slate-900">{rec.title}</h4>
            </div>
            <ul className="space-y-2">
              {rec.actions.map((action) => (
                <li key={action} className="flex items-center text-slate-600">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2" />
                  {action}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}