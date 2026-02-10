import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full min-h-screen flex flex-col justify-between bg-stone-900 overflow-hidden text-white">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
            <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2940&auto=format&fit=crop"
                alt="Sicily Coastline Road"
                className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-900/80 to-stone-900/95"></div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32 md:pt-48 flex-grow flex flex-col justify-between">
            
            {/* 1. TOP CTA SECTION */}
            <div className="text-center max-w-5xl mx-auto mb-32 md:mb-48">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-sans font-medium mb-8 tracking-tight leading-[1.1]"
                >
                    Find the perfect trip for you and discover extraordinary adventures with us!
                </motion.h2>
                
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-stone-300 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Embark on a journey of sun-drenched exploration as we guide you towards unforgettable experiences across Sicily.
                </motion.p>
                
                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="bg-white text-stone-900 pl-8 pr-2 py-2 rounded-full font-medium text-lg flex items-center gap-4 mx-auto group hover:bg-stone-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                    Show More
                    <span className="bg-stone-900 text-white rounded-full p-3 transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight size={20} />
                    </span>
                </motion.button>
            </div>

            {/* 2. FOOTER COLUMNS */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24 border-t border-white/10 pt-16">
                
                {/* Brand Description */}
                <div className="md:col-span-5 pr-10">
                    <h3 className="text-2xl font-serif text-white mb-6 tracking-wide">ROOTS&ROUTES</h3>
                    <p className="text-stone-400 font-light text-sm leading-7 max-w-sm">
                        Your gateway to the extraordinary beauty, ancient culture, exhilarating adventures and landscapes of this Sicilian Island.
                    </p>
                </div>
                
                {/* Navigation */}
                <div className="md:col-span-2">
                    <h4 className="text-white font-medium mb-6">Navigation</h4>
                    <ul className="space-y-4 text-stone-400 font-light text-sm">
                        <li><a href="#" className="hover:text-white transition-colors duration-300 block hover:translate-x-1">Home</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-300 block hover:translate-x-1">Experiences</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-300 block hover:translate-x-1">Journal</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-300 block hover:translate-x-1">Contact Us</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div className="md:col-span-2">
                    <h4 className="text-white font-medium mb-6">Social</h4>
                    <ul className="space-y-4 text-stone-400 font-light text-sm">
                        <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"><Instagram size={16} className="group-hover:text-pink-500 transition-colors"/> Instagram</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"><Twitter size={16} className="group-hover:text-blue-400 transition-colors"/> X (Twitter)</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"><Facebook size={16} className="group-hover:text-blue-600 transition-colors"/> Facebook</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="md:col-span-3">
                    <h4 className="text-white font-medium mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-stone-400 font-light text-sm">
                        <li><a href="mailto:hello@rootsandroutes.com" className="hover:text-white transition-colors border-b border-stone-700 hover:border-white pb-1">hello@rootsandroutes.com</a></li>
                        <li>(+39) 091-XXX-X422</li>
                        <li className="leading-6">138 Vittorio Emanuele, 12,<br/>Palermo, Sicily, Italia</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* 3. BOTTOM BRANDING & COPYRIGHT */}
        <div className="relative z-10 w-full overflow-hidden flex flex-col items-center justify-end">
             {/* Huge Text - Scaled to fill width */}
            <motion.h1 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-[12.5vw] md:text-[12.8vw] leading-[0.8] font-bold text-white text-center tracking-tighter w-full select-none opacity-20 pointer-events-none mix-blend-overlay pb-2 md:pb-4"
            >
                ROOTS&ROUTES
            </motion.h1>

             {/* Copyright Bar */}
            <div className="w-full border-t border-white/5 relative z-20 bg-gradient-to-t from-stone-900/80 to-transparent">
                <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-stone-500 uppercase tracking-widest font-medium">
                    <div className="flex gap-8 mb-4 md:mb-0">
                        <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-stone-300 transition-colors">Terms & Conditions</a>
                    </div>
                    <div>
                        ©Roots&Routes 2024. All Rights Reserved
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
