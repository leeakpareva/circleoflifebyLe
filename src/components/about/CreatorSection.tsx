import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, MessageCircle, Brain, Lightbulb } from 'lucide-react';

const reasons = [
  {
    icon: <LineChart className="text-red-500" size={24} />,
    title: "Bringing Data to Life",
    description: "I believe data tells powerful stories. This app takes raw numbers on birth and death rates and transforms them into interactive visuals and case studies that show how these trends affect everything from jobs to healthcare."
  },
  {
    icon: <MessageCircle className="text-red-500" size={24} />,
    title: "Starting Important Conversations",
    description: "Whether you're a student, a policymaker, or just someone curious about the world, this app is here to get you thinking and talking about the challenges and opportunities that come with demographic change."
  },
  {
    icon: <Brain className="text-red-500" size={24} />,
    title: "Empowering You with Knowledge",
    description: "The decisions we make—whether as individuals or as a society—are shaped by what we know. With Cycle of Life, you'll get insights that help you see the bigger picture and how you can be a part of shaping a better future."
  },
  {
    icon: <Lightbulb className="text-red-500" size={24} />,
    title: "Making Complex Ideas Simple",
    description: "I designed this app to be straightforward and easy to use. You don't need a background in economics to explore how population trends impact the UK's economy. This app is for everyone."
  }
];

export function CreatorSection() {
  return (
    <div className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Why I Created the <span className="text-red-600">Cycle of Life App</span>
        </h2>
        
        <div className="mb-12 text-lg text-slate-600 leading-relaxed">
          <p>
            Hi there, I'm Lee, and I'm excited to share the <span className="font-semibold text-red-600">Cycle of Life</span> app 
            with you. This project was born out of a simple yet powerful idea: to help people understand 
            how birth and death—two universal experiences—shape the economy and, ultimately, our lives.
          </p>
          <p className="mt-4">
            I've spent years working on projects that connect data, technology, and real-world problems. 
            With the <span className="font-semibold text-red-600">Cycle of Life</span>, my goal is to give you a tool that breaks down 
            the complex relationship between population trends and economic realities in a way that's 
            simple, engaging, and actionable.
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
      >
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-slate-200"
          >
            <div className="flex items-start space-x-4">
              <div className="mt-1">{reason.icon}</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-slate-600 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-12 text-center max-w-3xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Why I Think You'll Love It</h3>
        <p className="text-lg text-slate-600 leading-relaxed">
          The <span className="font-semibold text-red-600">Cycle of Life</span> is more than just an app; it's a way to connect 
          with the world around us. It's about understanding how life's most personal moments—birth and 
          death—have far-reaching effects on society. My hope is that it gives you a fresh perspective 
          and inspires meaningful conversations.
        </p>
        <p className="mt-6 text-lg text-slate-600">
          Thanks for taking the time to check it out, and I can't wait for you to dive in!
        </p>
        <p className="mt-4 text-xl font-typewriter text-red-600">
          Cheers,<br />Lee
        </p>
      </motion.div>
    </div>
  );
}