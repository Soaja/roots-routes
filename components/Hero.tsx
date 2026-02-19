import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Polaroid from './Polaroid';
import Counter from './Counter';

interface HeroProps {
  onNavigate?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden flex items-center justify-center bg-stone-900">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <img 
          src="/images/hero1.webp" 
          alt="Sicily Coastline Cefalu" 
          className="w-full h-full object-cover scale-105"
        />
        {/* Sophisticated Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-transparent to-stone-900/90" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* --- LEFT SIDE: THE ROOTS (Classic Polaroids) --- */}
      {/* 1. Ancient Culture/History */}
      <Polaroid 
        variant="classic"
        src="https://images.unsplash.com/photo-1555992828-ca4dbe41d294?q=80&w=1500&auto=format&fit=crop"
        alt="Sicilian Streets"
        className="top-[15%] left-[5%] w-56"
        rotation={-8}
        delay={0.4}
      />
      
      {/* 2. Authentic People/Food */}
      <Polaroid 
        variant="classic"
        src="https://images.unsplash.com/photo-1621253457805-a337580662d7?q=80&w=1500&auto=format&fit=crop"
        alt="Sicilian Market Tradition"
        className="bottom-[20%] left-[10%] w-60"
        rotation={6}
        delay={0.6}
      />

      {/* --- RIGHT SIDE: THE ROUTES/EXPERIENCE (Modern Cards) --- */}
      {/* 1. Luxury/Relaxation */}
      <Polaroid 
        variant="modern"
        src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1500&auto=format&fit=crop"
        alt="Wine Tasting Experience"
        className="top-[18%] right-[5%] w-64"
        rotation={6}
        delay={0.5}
      />
      
      {/* 2. Adventure/Sea */}
      <Polaroid 
        variant="modern"
        src="https://images.unsplash.com/photo-1467809623567-9366d0932a76?q=80&w=1500&auto=format&fit=crop"
        alt="Private Boat Tour"
        className="bottom-[18%] right-[12%] w-72"
        rotation={-4}
        delay={0.7}
      />

      {/* Center Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center h-full pt-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          <span className="text-xs md:text-sm font-sans font-medium tracking-[0.3em] text-stone-300 uppercase mb-6 border border-stone-400/30 px-4 py-1.5 rounded-full backdrop-blur-sm">
            Est. 2024 &bull; Sicily
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] text-white mb-8 tracking-tight drop-shadow-2xl">
            <span className="italic block text-4xl md:text-6xl lg:text-7xl text-stone-200 mb-2 font-light">
              Where heritage meets horizon
            </span>
            Roots & Routes
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <p className="text-lg md:text-xl text-stone-200/90 mb-12 font-light max-w-xl mx-auto leading-relaxed drop-shadow-lg">
              Curating the finest Sicilian journeys. From the deep roots of ancient history to the open routes of modern luxury.
            </p>
          </motion.div>

          {/* Modern CTA Button */}
          <motion.button
            onClick={onNavigate}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-white text-stone-900 rounded-sm overflow-hidden transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)]"
          >
            <span className="relative z-10 text-lg font-medium tracking-wide">Start Your Journey</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>

        {/* Floating Stats - Minimalist Modern Style */}
        <div className="absolute bottom-10 left-0 right-0 w-full px-6">
          <div className="max-w-4xl mx-auto border-t border-white/10 pt-8 flex justify-between md:justify-center md:gap-32 items-center">
            <Counter value="98%" label="Client Satisfaction" delay={1.2} />
            <div className="hidden md:block w-px h-12 bg-white/10"></div>
            <Counter value="45" label="Curated Experiences" delay={1.4} />
            <div className="hidden md:block w-px h-12 bg-white/10"></div>
            <Counter value="24/7" label="Concierge Support" delay={1.6} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
