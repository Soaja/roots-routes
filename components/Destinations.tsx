import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';

interface Destination {
  id: string;
  number: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  colSpan: string;
}

const destinations: Destination[] = [
  {
    id: "palermo",
    number: "01",
    title: "Palermo",
    tag: "Capital of Culture",
    description: "Wander through a golden haze of history. From Arab-Norman mosaics to the vibrant chaos of the Ballarò markets, Palermo is a sensory masterpiece waiting to be explored.",
    image: "https://images.unsplash.com/photo-1555992828-ca4dbe41d294?q=80&w=2832&auto=format&fit=crop", // Warm, golden street vibe
    colSpan: "md:col-span-2"
  },
  {
    id: "catania",
    number: "02",
    title: "Catania",
    tag: "The Black City",
    description: "Built from the very lava that once destroyed it. Discover Baroque elegance carved from dark volcanic stone at the foot of Mount Etna.",
    image: "https://images.unsplash.com/photo-1616016149457-3c58b1a457c6?q=80&w=1500&auto=format&fit=crop", // Darker, dramatic contrast
    colSpan: "md:col-span-1"
  },
  {
    id: "etna",
    number: "03",
    title: "Etna Vineyards",
    tag: "Volcanic Wine Tasting",
    description: "Ascend the slopes of Europe's highest active volcano. Experience a private sommelier tour in ancient vineyards enriched by mineral-heavy soil, tasting wines that tell the story of fire and earth.",
    image: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?q=80&w=2832&auto=format&fit=crop", // Scenic vineyard with view
    colSpan: "md:col-span-3"
  }
];

const Destinations: React.FC = () => {
  return (
    <section className="relative w-full py-32 bg-[#F9F8F6] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-stone-400"></div>
              <span className="text-stone-500 font-sans text-xs tracking-[0.25em] uppercase font-medium">
                The Journey
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 leading-[1.05]"
            >
              Curated locations for the <br />
              <span className="italic font-light text-stone-500">discerning traveler.</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-xs"
          >
            <p className="text-stone-500 text-sm leading-7 font-light border-l border-stone-300 pl-6">
              Our "Sicily Premium" package selects only the most culturally rich and visually stunning destinations. Three stops, infinite memories.
            </p>
          </motion.div>
        </div>

        {/* --- Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.8, ease: "easeOut" }}
              className={`group relative h-[500px] md:h-[600px] rounded-sm overflow-hidden cursor-pointer ${dest.colSpan}`}
            >
              {/* Image Container with Cinematic Zoom */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                />
              </div>
              
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Editorial Numbering (Top Right) */}
              <div className="absolute top-0 right-0 p-8 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                 <span className="text-6xl font-serif text-white/20 font-light">{dest.number}</span>
              </div>

              {/* Tag (Glassmorphism) */}
              <div className="absolute top-8 left-8">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  <span className="text-white text-xs tracking-widest uppercase font-medium">
                    {dest.tag}
                  </span>
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col justify-end h-full pointer-events-none">
                <div className="transform transition-transform duration-700 group-hover:-translate-y-4">
                  {/* Location Pin Icon */}
                  <div className="flex items-center gap-2 mb-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <MapPin className="text-white/80 w-4 h-4" />
                    <span className="text-white/80 text-xs tracking-widest uppercase">Sicily, Italy</span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                    {dest.title}
                  </h3>
                  
                  <div className="overflow-hidden">
                    <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-200">
                      {dest.description}
                    </p>
                  </div>
                </div>

                {/* Circle Arrow Button (Bottom Right) */}
                <div className="absolute bottom-8 right-8 pointer-events-auto">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/30 flex items-center justify-center bg-transparent hover:bg-white hover:text-stone-900 text-white transition-all duration-500 group-hover:scale-110">
                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 group-hover:rotate-45" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Destinations;
