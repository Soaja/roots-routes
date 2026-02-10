import React from 'react';
import { motion } from 'framer-motion';

interface PolaroidProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  rotation?: number;
  variant?: 'classic' | 'modern';
}

const Polaroid: React.FC<PolaroidProps> = ({ 
  src, 
  alt, 
  className = "", 
  delay = 0, 
  rotation = 0,
  variant = 'classic'
}) => {
  const isClassic = variant === 'classic';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50, rotate: 0 }}
      animate={{ opacity: 1, scale: 1, y: 0, rotate: rotation }}
      transition={{ 
        duration: 1, 
        delay, 
        type: "spring", 
        stiffness: 80,
        damping: 20
      }}
      whileHover={{ 
        scale: 1.05, 
        rotate: 0,
        zIndex: 50,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      className={`absolute hidden xl:block cursor-pointer transform transition-all duration-500 ${className}`}
    >
      <div 
        className={`relative overflow-hidden ${
          isClassic 
            ? 'bg-white p-3 pb-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]' 
            : 'rounded-2xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] border border-white/20'
        }`}
      >
        <div className={`overflow-hidden ${isClassic ? 'aspect-[4/5]' : 'aspect-[3/4] w-64'}`}>
          <img 
            src={src} 
            alt={alt} 
            className={`w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-110 ${
              isClassic ? '' : 'rounded-xl'
            }`} 
          />
        </div>
        
        {/* Modern variant gloss effect */}
        {!isClassic && (
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
        )}
      </div>
    </motion.div>
  );
};

export default Polaroid;