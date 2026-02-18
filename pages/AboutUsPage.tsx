import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Anchor, Compass, Heart, Users, Sparkles } from 'lucide-react';

interface AboutUsPageProps {
  onNavigate: (view: string) => void;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FDFBF7] min-h-screen text-stone-800 font-sans selection:bg-stone-900 selection:text-white overflow-hidden">
      <Navbar onNavigate={onNavigate} />
      
      {/* --- SECTION 1: HERO / THE MANIFESTO --- */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Video/Image Placeholder */}
        <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=3333&auto=format&fit=crop" 
                alt="Cinque Terre Coast" 
                className="w-full h-full object-cover opacity-90 scale-105 filter saturate-[.85] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-stone-900/30" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <span className="block text-white/70 text-xs md:text-sm tracking-[0.4em] uppercase mb-8 font-light">Est. 2024 &bull; Palermo</span>
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white mb-8 leading-[0.95] tracking-tight">
                    We Architect <br/>
                    <span className="italic font-light opacity-80">Memories.</span>
                </h1>
                <p className="max-w-2xl mx-auto text-stone-200 text-lg md:text-xl font-light leading-relaxed">
                    Roots & Routes is not a travel agency. It is a collective of storytellers, 
                    historians, and locals dedicated to the art of slow, soulful exploration.
                </p>
            </motion.div>
        </div>
      </section>


      {/* --- SECTION 2: THE PHILOSOPHY (Split Layout) --- */}
      <section className="py-24 md:py-40 bg-[#FDFBF7]">
        <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
                
                {/* Left: Narrative */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1"
                >
                    <span className="text-stone-400 font-sans text-xs tracking-[0.25em] uppercase font-bold block mb-6">Our Philosophy</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-8 leading-[1.1]">
                        From the <span className="italic text-stone-500">Soil</span> to the <span className="italic text-stone-500">Soul</span>.
                    </h2>
                    <div className="space-y-6 text-stone-600 font-light text-lg leading-relaxed">
                        <p>
                            In a world that rushes, we choose to pause. We believe that to truly know Sicily, one must not just see it, but breathe it. Our name—<strong className="text-stone-900 font-medium">Roots & Routes</strong>—encapsulates this duality.
                        </p>
                        <p>
                            The <strong>Roots</strong> represent the deep history, the ancient Greek temples, the Norman mosaics, and the recipes passed down through generations.
                        </p>
                        <p>
                             The <strong>Routes</strong> are the journeys we craft—winding roads through vineyards, boat trips to hidden caves, and the personal path each traveler takes to discover themselves amidst our landscapes.
                        </p>
                    </div>
                    
                    <div className="mt-12 flex items-center gap-4">
                        <div className="h-px w-12 bg-stone-300"></div>
                        <span className="font-serif italic text-2xl text-stone-400">Giulia R.</span>
                    </div>
                </motion.div>

                {/* Right: Visual Abstract Composition */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex-1 relative w-full aspect-[4/5] md:aspect-square"
                >
                    {/* Main Image */}
                    <img 
                        src="https://images.unsplash.com/photo-1533158307587-828f0a76ef93?q=80&w=1887&auto=format&fit=crop" 
                        alt="Sicilian Details" 
                        className="w-[85%] h-[85%] object-cover absolute top-0 right-0 shadow-2xl z-10"
                    />
                    {/* Secondary Image (Behind) */}
                    <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-stone-200 z-0 overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1528114039593-4366cc08227d?q=80&w=1887&auto=format&fit=crop" 
                            alt="Texture" 
                            className="w-full h-full object-cover opacity-60 grayscale mix-blend-multiply"
                        />
                    </div>
                    {/* Decorative Stamp */}
                    <div className="absolute bottom-10 right-10 z-20 w-24 h-24 bg-stone-900 rounded-full flex items-center justify-center text-white p-2 animate-[spin_10s_linear_infinite]">
                        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                            <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="none" />
                            <text fontSize="13.5" fontWeight="bold">
                                <textPath href="#curve">
                                    EST. 2024 • SICILY • ITALY •
                                </textPath>
                            </text>
                        </svg>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>


      {/* --- SECTION 3: CORE VALUES (Grid) --- */}
      <section className="py-24 bg-white border-y border-stone-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
                <span className="text-stone-400 font-sans text-xs tracking-[0.25em] uppercase font-bold">Our Ethos</span>
                <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mt-4">The Pillars of Our Craft</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <ValueCard 
                    icon={Compass} 
                    title="Slow Travel" 
                    desc="We reject the rushed itinerary. We prioritize immersion over checklists, allowing you to synchronize with the island's rhythm." 
                    delay={0.1}
                />
                <ValueCard 
                    icon={Anchor} 
                    title="Authenticity" 
                    desc="No tourist traps. Only hidden family trattorias, private estates, and genuine interactions with the people who call this land home." 
                    delay={0.2}
                />
                <ValueCard 
                    icon={Sparkles} 
                    title="Curated Luxury" 
                    desc="Luxury is not just golden taps. It is privacy, exclusivity, and the seamless orchestration of your comfort by our concierge." 
                    delay={0.3}
                />
                <ValueCard 
                    icon={Heart} 
                    title="Sustainability" 
                    desc="We honor our roots by protecting them. We partner with eco-conscious stays and support local artisans to preserve heritage." 
                    delay={0.4}
                />
            </div>
          </div>
      </section>


      {/* --- SECTION 4: THE TEAM (Curator Profile) --- */}
      <section className="py-24 md:py-40 bg-[#FDFBF7] relative overflow-hidden">
        {/* Background Graphic */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-stone-100 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-6xl mx-auto bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] p-8 md:p-16 flex flex-col md:flex-row gap-12 md:gap-20 items-center">
                
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                    <div className="relative aspect-[3/4] overflow-hidden group">
                        <img 
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" 
                            alt="Giulia Romano Founder" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%]"
                        />
                        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2">
                            <span className="block text-stone-900 font-serif text-lg">Giulia Romano</span>
                            <span className="block text-stone-500 text-xs tracking-widest uppercase">Founder & Head Curator</span>
                        </div>
                    </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2">
                    <span className="text-stone-400 font-sans text-xs tracking-[0.25em] uppercase font-bold block mb-6">Meet the Team</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-8">
                        "I wanted to show the world the Sicily I grew up in."
                    </h2>
                    <p className="text-stone-600 font-light text-lg leading-relaxed mb-8">
                        Born in Palermo and raised between the salt pans of Marsala and the streets of Rome, Giulia founded Roots&Routes to bridge the gap between luxury travel and authentic local living.
                    </p>
                    <p className="text-stone-600 font-light text-lg leading-relaxed mb-12">
                        With a background in Art History and a decade of experience in high-end hospitality, she personally vets every villa, vineyard, and vessel in our collection.
                    </p>

                    <div className="flex gap-8">
                        <div>
                            <span className="block text-3xl font-serif text-stone-900">10+</span>
                            <span className="text-xs text-stone-400 uppercase tracking-wider">Years Experience</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-serif text-stone-900">500+</span>
                            <span className="text-xs text-stone-400 uppercase tracking-wider">Happy Travelers</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

// Helper Component for Values
const ValueCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        className="flex flex-col items-center text-center group"
    >
        <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center mb-6 text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-500">
            <Icon size={28} strokeWidth={1} />
        </div>
        <h3 className="text-xl font-serif text-stone-900 mb-4">{title}</h3>
        <p className="text-stone-500 font-light text-sm leading-relaxed max-w-xs mx-auto">
            {desc}
        </p>
    </motion.div>
);

export default AboutUsPage;