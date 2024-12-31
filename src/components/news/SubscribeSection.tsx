import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Tooltip } from '../shared/Tooltip';

export function SubscribeSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-8 md:p-12 shadow-xl"
    >
      <div className="max-w-3xl mx-auto text-center">
        <Tooltip content="Stay updated with our newsletter">
          <Mail className="w-12 h-12 text-white mx-auto mb-6" />
        </Tooltip>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Join Our Community
        </h3>
        <p className="text-indigo-100 mb-8">
          Subscribe to receive updates, insights, and opportunities to contribute to demographic solutions.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
          <Tooltip content="Enter your email to subscribe">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg text-slate-900 w-full md:w-96"
              required
            />
          </Tooltip>
          <Tooltip content="Click to join our community">
            <button
              type="submit"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Subscribe
            </button>
          </Tooltip>
        </form>
      </div>
    </motion.section>
  );
}