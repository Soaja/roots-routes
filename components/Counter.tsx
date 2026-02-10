import React from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
  value: string;
  label: string;
  delay?: number;
}

const Counter: React.FC<CounterProps> = ({ value, label, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="text-center px-4"
    >
      <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">
        {value}
      </div>
      <div className="text-xs md:text-sm text-stone-300 font-light tracking-wide uppercase">
        {label}
      </div>
    </motion.div>
  );
};

export default Counter;
