import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Tooltip } from '../shared/Tooltip';

export function ProjectLead() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-16 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden"
    >
      <div className="p-8">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Lee Akpareva, MBA, MA</h3>
            <p className="text-lg text-indigo-600 mt-1">Programme Director | Python Developer | Blockchain Expert</p>
          </div>
          <div className="flex space-x-4">
            <Tooltip content="Connect on LinkedIn">
              <a 
                href="https://www.linkedin.com/in/leslie-akpareva-mba-ma-56a888182/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </Tooltip>
            <Tooltip content="View GitHub Profile">
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
                <Github size={20} />
              </a>
            </Tooltip>
            <Tooltip content="Send Email">
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
                <Mail size={20} />
              </a>
            </Tooltip>
          </div>
        </div>
        
        <p className="mt-6 text-slate-600 leading-relaxed">
          Lee Akpareva is a highly accomplished Programme Director and Python Developer with over 16 years of experience 
          in delivering complex transformation projects across diverse sectors including finance, digital, energy, 
          logistics, and travel. Known for a unique blend of strategic vision and technical expertise, Lee excels in 
          aligning technology initiatives with business objectives to drive growth and innovation.
        </p>
      </div>
    </motion.div>
  );
}