import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Polaroid from './Polaroid';

const AboutUs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax movements for elements
  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yPolaroidLeft = useTransform(scrollYProgress, [0, 1], [0, -150]); // Moves faster up
  const yPolaroidRight = useTransform(scrollYProgress, [0, 1], [50, -50]); // Moves slower
  
  // Opacity fade for elegance
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative w-full py-32 md:py-48 bg-[#FDFBF7] overflow-hidden">
      {/* Background Texture for Paper Feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
      
      {/* Subtle Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Editorial Badge */}
        <div className="flex justify-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <span className="text-stone-900 font-sans text-sm md:text-base tracking-[0.5em] uppercase font-bold">
              The Origin
            </span>
            <div className="w-px h-16 bg-gradient-to-b from-stone-900 to-transparent opacity-50"></div>
          </motion.div>
        </div>

        {/* Main Content Wrapper */}
        <div className="max-w-4xl mx-auto text-center relative z-20">
          
          {/* Main Headline - Editorial Style */}
          <motion.div style={{ y: yText, opacity }}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.15] text-stone-900 mb-12 tracking-tight">
              A love letter to the <br />
              <span className="italic font-light text-stone-500 relative inline-block">
                Mediterranean
                {/* Decorative underline */}
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-stone-300 scale-x-0 animate-[grow_1s_ease-out_forwards]"></span>
              </span>
              &nbsp;soul.
            </h2>

            <div className="flex flex-col items-center gap-8">
              <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto antialiased">
                It began with a single journey to the sun-drenched coasts of Sicily. Enchanted by the ancient landscapes and the warmth of its people, we realized this wasn't just a destination—it was a <strong className="font-medium text-stone-800">feeling</strong> we had to share with the world.
              </p>

              {/* Signature Block */}
              <div className="mt-8 opacity-80 rotate-[-2deg]">
                 <span className="font-serif italic text-3xl md:text-4xl text-stone-800">Roots & Routes</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Refined Stats Section */}
        <div className="mt-32 border-t border-stone-200/60 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
            <StatBox value="98%" label="Client Happiness" delay={0.2} />
            <StatBox value="30+" label="Hidden Locations" delay={0.3} />
            <StatBox value="2024" label="Year Established" delay={0.4} />
          </div>
        </div>
      </div>

      {/* --- Parallax Floating Polaroids --- */}
      
      {/* Left Group */}
      <motion.div style={{ y: yPolaroidLeft }} className="absolute top-0 left-0 w-full h-full pointer-events-none xl:pointer-events-auto">
        <Polaroid 
          variant="classic"
          src="https://images.unsplash.com/photo-1596716075908-16cb60df38c5?q=80&w=1500&auto=format&fit=crop" // Vineyard
          alt="Sicilian Vineyard"
          className="top-[15%] left-[-2%] xl:left-[5%] w-48 xl:w-64 -rotate-6 grayscale-[10%] hover:grayscale-0 transition-all duration-700 shadow-2xl z-10"
          delay={0.2}
        />
        <Polaroid 
          variant="classic"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1500&auto=format&fit=crop" // Pasta
          alt="Authentic Pasta"
          className="bottom-[10%] left-[2%] xl:left-[8%] w-40 xl:w-56 rotate-3 grayscale-[10%] hover:grayscale-0 transition-all duration-700 shadow-xl"
          delay={0.4}
        />
      </motion.div>

      {/* Right Group */}
      <motion.div style={{ y: yPolaroidRight }} className="absolute top-0 left-0 w-full h-full pointer-events-none xl:pointer-events-auto">
         <Polaroid 
          variant="classic"
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1500&auto=format&fit=crop" // Dining
          alt="Al Fresco Dining"
          className="top-[20%] right-[-2%] xl:right-[5%] w-52 xl:w-60 rotate-6 grayscale-[10%] hover:grayscale-0 transition-all duration-700 shadow-2xl z-10"
          delay={0.3}
        />
        <Polaroid 
          variant="classic"
          src="https://images.unsplash.com/photo-1498522271744-cdd43b9545e8?q=80&w=1500&auto=format&fit=crop" // Street
          alt="Taormina Streets"
          className="bottom-[15%] right-[5%] xl:right-[12%] w-44 xl:w-52 -rotate-3 grayscale-[10%] hover:grayscale-0 transition-all duration-700 shadow-xl"
          delay={0.5}
        />
      </motion.div>

    </section>
  );
};

const StatBox = ({ value, label, delay }: { value: string; label: string; delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8, ease: "easeOut" }}
    className="text-center group cursor-default"
  >
    <div className="text-4xl md:text-5xl font-serif text-stone-800 mb-3 group-hover:scale-110 transition-transform duration-500 ease-out">{value}</div>
    <div className="flex flex-col items-center gap-2">
      <div className="h-px w-0 group-hover:w-8 bg-stone-400 transition-all duration-500"></div>
      <div className="text-[10px] md:text-xs font-sans text-stone-400 uppercase tracking-[0.2em]">{label}</div>
    </div>
  </motion.div>
);

export default AboutUs;