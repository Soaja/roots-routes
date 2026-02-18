import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Mail, MapPin, Phone, MessageSquare, Instagram, Twitter, Facebook, Sparkles } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (view: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-stone-900 min-h-screen text-white font-sans selection:bg-white selection:text-stone-900">
      <Navbar onNavigate={onNavigate} />

      {/* Background Texture for depth */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="relative pt-32 md:pt-48 pb-20 container mx-auto px-6 md:px-12 z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* --- LEFT COLUMN: Editorial & Info --- */}
            <div className="lg:w-5/12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-stone-400 font-sans text-xs tracking-[0.3em] uppercase font-bold block mb-6">
                        Get in Touch
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1]">
                        Let's plan your <br />
                        <span className="italic text-stone-400">escape.</span>
                    </h1>
                    <div className="h-px w-20 bg-stone-700 my-10"></div>
                    <p className="text-stone-300 font-light text-lg leading-relaxed mb-12 max-w-md">
                        We are here to help you curate the perfect Sicilian itinerary. 
                        Whether it's a private boat tour or a week-long culinary retreat, 
                        our team is ready to assist.
                    </p>
                </motion.div>

                {/* Contact Details Grid */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                >
                    <ContactItem icon={Mail} title="Email Us" content="hello@rootsandroutes.com" />
                    <ContactItem icon={Phone} title="Call Us" content="+39 091 882 1422" />
                    <ContactItem icon={MapPin} title="Visit Us" content="Palermo, Sicily" />
                    <ContactItem icon={MessageSquare} title="Live Chat" content="Available 9am - 6pm" />
                </motion.div>

                {/* Social Proof / Image */}
                <motion.div 
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 0.5, duration: 1 }}
                     className="relative h-64 w-full rounded-sm overflow-hidden hidden lg:block group"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1551161242-b5af797b7233?q=80&w=1600&auto=format&fit=crop" 
                        alt="Sicily Dark Aesthetics" 
                        className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                        <p className="text-xs uppercase tracking-widest text-white/80">Follow our journey</p>
                        <div className="flex gap-4 mt-3">
                            <Instagram size={18} className="text-white hover:text-stone-300 cursor-pointer transition-colors" />
                            <Twitter size={18} className="text-white hover:text-stone-300 cursor-pointer transition-colors" />
                            <Facebook size={18} className="text-white hover:text-stone-300 cursor-pointer transition-colors" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* --- RIGHT COLUMN: High Contrast Form --- */}
            <div className="lg:w-7/12">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="bg-stone-800/30 p-8 md:p-12 border border-white/5 backdrop-blur-sm rounded-sm"
                >
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-stone-400 font-bold ml-1">Your Name</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                                        className="w-full bg-transparent border-b border-stone-600 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-white transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-stone-400 font-bold ml-1">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        value={formState.phone}
                                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                                        className="w-full bg-transparent border-b border-stone-600 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-white transition-colors"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-stone-400 font-bold ml-1">Email Address</label>
                                <input 
                                    type="email" 
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                                    className="w-full bg-transparent border-b border-stone-600 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-white transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-stone-400 font-bold ml-1">Message</label>
                                <textarea 
                                    rows={4}
                                    required
                                    value={formState.message}
                                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                                    className="w-full bg-transparent border-b border-stone-600 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-white transition-colors resize-none"
                                    placeholder="Tell us about your dream trip..."
                                />
                            </div>

                            <div className="pt-6">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="group w-full md:w-auto px-10 py-4 bg-white text-stone-900 text-sm font-bold uppercase tracking-[0.2em] hover:bg-stone-200 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                    {!isSubmitting && <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                                <ArrowRight size={32} className="text-stone-900 -rotate-45" />
                            </div>
                            <h3 className="text-3xl font-serif text-white mb-4">Message Sent</h3>
                            <p className="text-stone-400 max-w-sm mx-auto">
                                Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
                            </p>
                            <button 
                                onClick={() => { setIsSubmitted(false); setFormState({name:'', email:'', phone:'', message:''}) }}
                                className="mt-8 text-xs uppercase tracking-widest text-white border-b border-white pb-1 hover:text-stone-300 hover:border-stone-300 transition-colors"
                            >
                                Send another message
                            </button>
                        </motion.div>
                    )}
                </motion.div>

                {/* Custom Itinerary Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-6 p-6 md:p-8 border border-white/5 bg-stone-800/20 backdrop-blur-sm rounded-sm"
                >
                    <div className="flex items-start gap-5">
                        <div className="p-3 bg-stone-800 rounded-full text-stone-300 shrink-0">
                            <Sparkles size={20} strokeWidth={1.5} />
                        </div>
                        <div>
                            <h4 className="text-white font-serif text-xl mb-2">Want a different itinerary?</h4>
                            <p className="text-stone-400 text-sm font-light leading-relaxed">
                                Looking for something truly unique? We specialize in bespoke travel. 
                                Simply write your specific requests and dream destinations in the form above, and we will craft a custom itinerary just for you.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

const ContactItem = ({ icon: Icon, title, content }: { icon: any, title: string, content: string }) => (
    <div className="flex items-start gap-4">
        <div className="mt-1 p-2 bg-stone-800 rounded-full text-stone-300">
            <Icon size={16} />
        </div>
        <div>
            <h4 className="text-xs uppercase tracking-widest text-stone-500 font-bold mb-1">{title}</h4>
            <p className="text-white font-medium text-lg">{content}</p>
        </div>
    </div>
);

export default ContactPage;