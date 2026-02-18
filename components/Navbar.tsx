import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Itinerary', href: '#' },
];

interface NavbarProps {
  onNavigate?: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (onNavigate) {
      if (label === 'Home') onNavigate('home');
      if (label === 'About Us') onNavigate('about');
      if (label === 'Itinerary') onNavigate('experience');
      if (label === 'Contact') onNavigate('contact');
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled 
            ? 'bg-stone-900/80 backdrop-blur-md py-4 border-b border-white/5' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo - Serif & Elegant */}
          <a href="#" onClick={(e) => handleNavClick('Home', e)} className="relative z-50 group">
            <span className="text-2xl md:text-3xl font-serif text-white tracking-tight leading-none group-hover:opacity-80 transition-opacity">
              Roots&Routes
            </span>
          </a>

          {/* Desktop Menu - Centered, Small Text, Wide Tracking */}
          <div className="hidden md:flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(item.label, e)}
                className="text-[11px] uppercase tracking-[0.25em] font-medium text-white/80 hover:text-white transition-colors relative group py-2"
              >
                {item.label}
                {/* Subtle dot indicator instead of underline */}
                <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* Right Actions - Contact Button */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.button 
              onClick={(e) => handleNavClick('Contact', e as any)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                group flex items-center gap-2 px-6 py-2.5 rounded-sm border transition-all duration-500
                ${scrolled 
                  ? 'border-white/20 bg-white/5 hover:bg-white hover:text-stone-900 text-white' 
                  : 'border-white/30 bg-transparent hover:bg-white hover:text-stone-900 text-white'
                }
              `}
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Contact</span>
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white z-50 p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Cinematic Entrance */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#0c0c0c] z-40 flex flex-col justify-between py-12 px-6"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>

            <div className="mt-24 flex flex-col items-center space-y-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.label, e)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                  className="text-4xl md:text-5xl font-serif text-white/90 hover:text-white transition-colors tracking-tight"
                >
                  <span className="italic font-light text-white/40 mr-4 text-2xl">0{i + 1}</span>
                  {item.label}
                </motion.a>
              ))}
              
              {/* Manual Contact Link for Mobile */}
              <motion.a
                  href="#"
                  onClick={(e) => handleNavClick('Contact', e)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + NAV_ITEMS.length * 0.1, duration: 0.8 }}
                  className="text-4xl md:text-5xl font-serif text-white/90 hover:text-white transition-colors tracking-tight"
                >
                  <span className="italic font-light text-white/40 mr-4 text-2xl">0{NAV_ITEMS.length + 1}</span>
                  Contact
              </motion.a>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4">Roots & Routes &bull; Sicily</p>
              <div className="flex justify-center gap-6">
                <span className="w-px h-12 bg-white/10"></span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;