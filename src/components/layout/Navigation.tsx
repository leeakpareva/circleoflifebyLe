import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Info, Menu, X, HelpCircle, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../search/SearchBar';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { 
      to: '/', 
      icon: <Home size={18} />, 
      label: 'Home'
    },
    { 
      to: '/about', 
      icon: <Info size={18} />, 
      label: 'About'
    },
    { 
      to: '/faq', 
      icon: <HelpCircle size={18} />, 
      label: 'FAQ'
    },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-slate-900 flex items-center">
              Cycle of Life
              <Circle size={8} className="ml-1 text-red-500 fill-current" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <SearchBar />
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center space-x-2 text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200"
        >
          <div className="px-4 py-2 space-y-1">
            <div className="p-2">
              <SearchBar />
            </div>
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center space-x-2 p-3 text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}