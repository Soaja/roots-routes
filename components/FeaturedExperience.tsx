import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Sun, BarChart3, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface FeaturedExperienceProps {
    onNavigate?: () => void;
}

const FeaturedExperience: React.FC<FeaturedExperienceProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full py-32 md:py-40 bg-white overflow-hidden border-t border-stone-100">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-stone-400 font-sans text-xs tracking-[0.3em] uppercase font-medium block mb-4">
              Featured Experience
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-[1.1]">
              Book Your Sicily <br/>
              <span className="italic text-stone-500">Premium Experience</span> Today.
            </h2>
          </motion.div>

          {/* Navigation Controls (Visual only for this single featured item, adds premium feel) */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <button className="p-4 rounded-full border border-stone-200 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 group">
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button className="p-4 rounded-full border border-stone-200 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 group">
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </motion.div>
        </div>

        {/* Main Content Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-center">
          
          {/* Left: Image Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full h-[500px] md:h-[650px] overflow-hidden rounded-sm group"
          >
            <img 
              src="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=2867&auto=format&fit=crop" 
              alt="Manarola Coastline Sunset" 
              className="w-full h-full object-cover transition-transform duration-[2s] ease-in-out group-hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </motion.div>

          {/* Right: Details Area */}
          <div className="py-12 lg:py-0">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6">
                The Sicilian Sunset Escape
              </h3>
              
              <p className="text-stone-500 text-base md:text-lg leading-relaxed mb-10 font-light border-l border-stone-200 pl-6">
                Indulge in authentic local cuisine, explore ancient Greek temples, sail along the coastline, and uncover the rich history and flavors of Sicily. A curated journey for the senses.
              </p>

              {/* Tags / Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 mb-12">
                <SpecItem icon={Sun} label="7 Days" />
                <SpecItem icon={Calendar} label="May - Oct" />
                <SpecItem icon={BarChart3} label="Moderate" />
                <SpecItem icon={MapPin} label="Catania Airport" />
                <SpecItem icon={Users} label="Small Group" />
              </div>

              {/* Price & CTA */}
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-stone-100 pt-10">
                <div>
                  <span className="text-stone-400 text-xs tracking-widest uppercase mb-2 block">Starting Price</span>
                  <div className="text-4xl font-serif text-stone-900">
                    €2,499
                  </div>
                </div>

                <motion.button 
                  onClick={onNavigate}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 bg-stone-900 text-white text-sm tracking-[0.2em] uppercase font-medium hover:bg-stone-800 transition-colors flex items-center gap-4 w-full md:w-auto justify-center group"
                >
                  Show More
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for the specs icons
const SpecItem = ({ icon: Icon, label }: { icon: any, label: string }) => (
  <div className="flex items-center gap-3 text-stone-600">
    <div className="p-2 bg-stone-50 rounded-full text-stone-900">
      <Icon size={18} strokeWidth={1.5} />
    </div>
    <span className="text-sm font-medium tracking-wide">{label}</span>
  </div>
);

export default FeaturedExperience;