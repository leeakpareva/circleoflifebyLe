import React from 'react';
import { motion } from 'framer-motion';
import { FooterLinks } from '../footer/FooterLinks';
import { FooterSubscribe } from '../footer/FooterSubscribe';

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.0 }}
      className="bg-white border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Cycle of Life</h2>
            <p className="text-slate-600 text-sm">
              Exploring the economic impact of demographic changes in the UK through data-driven insights.
            </p>
          </div>
          <FooterLinks />
          <FooterSubscribe />
        </div>
        <div className="mt-8 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-600 text-sm">
              Data sourced from Office for National Statistics (ONS)
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-sm text-slate-500">
                © {new Date().getFullYear()} Cycle of Life. All rights reserved.
              </p>
              <p className="text-sm text-slate-500">
                Designed + developed by Lee Akpareva, MA, MBA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}