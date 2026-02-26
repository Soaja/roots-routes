import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar as CalendarIcon, Users, Clock, Check, X, ChevronDown, Star, ArrowLeft, Plus, Minus, Info, Plane, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
interface ExperiencePageProps {
  onNavigate: (view: string) => void;
}
const ExperiencePage: React.FC<ExperiencePageProps> = ({ onNavigate }) => {
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 1000], [1, 1.1]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.5]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<number>(15);
  const tripDuration = 6;
  const [isRequestFormOpen, setIsRequestFormOpen] = useState(false);
  const daysInMonth = 30;
  const startDayOffset = 6;
  const handleDateClick = (day: number) => {
    setSelectedDate(day);
    setIsCalendarOpen(false);
  };
  const isDateSelected = (day: number) => day === selectedDate;
  const isDateInRange = (day: number) => day > selectedDate && day <= selectedDate + tripDuration;
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsRequestFormOpen(false);
      alert("Availability request sent! We will contact you shortly.");
    }, 500);
  };
  return (
    <div className="bg-[#FDFBF7] min-h-screen text-stone-800 font-sans selection:bg-stone-900 selection:text-white">
      <Navbar onNavigate={onNavigate} />
      {/* 1. CINEMATIC HERO SECTION */}
      <header className="relative h-screen w-full overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0">
          <img src="images/iti1.jpeg" alt="Sicily Coast" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900/60" />
        </motion.div>
        <div className="absolute top-28 left-6 md:left-12 z-50">
          <button
            onClick={() => onNavigate('home')}
            className="group flex items-center gap-3 text-white/90 hover:text-white transition-colors uppercase tracking-[0.2em] text-[10px] font-medium"
          >
            <div className="p-2 rounded-full border border-white/20 group-hover:bg-white group-hover:text-stone-900 transition-all duration-300">
              <ArrowLeft size={14} />
            </div>
            Back to Home
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-20 pb-20 md:pb-32">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl"
            >
              <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
                <div className="flex-grow">
                  <div className="flex items-center gap-4 text-white/80 mb-6">
                    <span className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase text-white font-medium">Signature Series</span>
                    <span className="flex items-center gap-1 text-xs tracking-widest uppercase"><MapPin size={12} /> West Sicily</span>
                  </div>
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-6 leading-[0.9] tracking-tight">
                    Sicilian<br />
                    <span className="italic font-light opacity-90 block md:inline">Sunset Escape</span>
                  </h1>
                </div>
                <div className="md:max-w-xs md:mb-4 border-l border-white/30 pl-6">
                  <p className="text-white/90 text-sm md:text-base font-light leading-relaxed">
                    A curated 7-day journey through Palermo, the Egadi Islands, ancient salt pans, and the Valley of the Temples.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>
      {/* 2. MAIN CONTENT GRID */}
      <main className="container mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-20 relative">
          {/* --- LEFT COLUMN --- */}
          <div>
            {/* Quick Stats Bar */}
            <div className="flex flex-wrap gap-8 md:gap-16 border-b border-stone-200 pb-12 mb-16">
              <StatItem icon={Clock} label="Duration" value="7 Days · 6 Nights" />
              <StatItem icon={CalendarIcon} label="Season" value="May - Oct" />
              <StatItem icon={Users} label="Group" value="Max 12 Guests" />
              <StatItem icon={Star} label="Rating" value="4.9 / 5.0" />
            </div>
            {/* The Experience */}
            <section className="mb-24">
              <span className="text-stone-400 font-sans text-xs tracking-[0.2em] uppercase font-bold block mb-6">The Experience</span>
              <h2 className="text-3xl md:text-5xl font-serif mb-10 text-stone-900 leading-tight">
                Immerse yourself in a land where <span className="italic text-stone-500">time stands still</span> and the sea tells ancient stories.
              </h2>
              <div className="prose prose-stone prose-lg text-stone-600 font-light leading-relaxed space-y-6">
                <p>
                  This isn't just a trip; it's a sensory awakening. From the noble elegance of Palermo to the sacred silence of Agrigento, we have curated a journey that balances historical depth with the pinnacle of modern comfort.
                </p>
                <p>
                  Sail from Trapani to the butterfly-shaped island of Favignana, visiting the ancient Tonnara Florio and diving into the crystal-clear waters of the Egadi archipelago.
                </p>
                <p>
                  Retreat to boutique hotels for exclusive wine tastings, gin pairings, and gourmet experiences that celebrate the authentic "Dolce far niente" of the Sicilian soul.
                </p>
              </div>
            </section>
            {/* Gallery */}
            <section className="mb-24">
              <span className="text-stone-400 font-sans text-xs tracking-[0.2em] uppercase font-bold block mb-8">Visual Journal</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[800px] md:h-[600px]">
                <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-sm">
                  <img src="images/vino1.jpeg" alt="Wine" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] tracking-widest uppercase">Local Flavors</div>
                </div>
                <div className="relative group overflow-hidden rounded-sm">
                  <img src="images/teatro1.jpeg" alt="Favignana" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] tracking-widest uppercase">Crystal Waters</div>
                </div>
                <div className="relative group overflow-hidden rounded-sm">
                  <img src="images/as1.jpeg" alt="Street" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] tracking-widest uppercase">Ancient Streets</div>
                </div>
              </div>
            </section>
            {/* Itinerary */}
            <section className="mb-24">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <span className="text-stone-400 font-sans text-xs tracking-[0.2em] uppercase font-bold block mb-3">Day by Day</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-stone-900">Your Journey</h2>
                </div>
                <button className="hidden md:block text-xs uppercase tracking-widest border-b border-stone-900 pb-1 hover:opacity-60 transition-opacity">Download PDF</button>
              </div>
              <div className="space-y-0">
                <ItineraryItem
                  day={1}
                  title="Arrival in Palermo (Welcome)"
                  description="Your journey begins with a morning check-in in the heart of Palermo. The afternoon is dedicated to a full immersion through the vibrant Mercato del Capo for an authentic street food experience. The evening unfolds with a private Pizza & Gelato Cooking Class with a local chef—hands-on, followed by dinner with everything you've made together."
                />
                <ItineraryItem
                  day={2}
                  title="Palermo — Soul of the Mediterranean Capital"
                  description="A day dedicated to the soul of Palermo. Begin in Monreale to admire the cathedral's breathtaking gold Byzantine mosaics. Continue through Palermo's historic center, including the iconic Teatro Massimo and hidden architectural gems. As evening falls, prepare for an exclusive Gala Dinner at Palazzo Branciforte, accompanied by the rhythm of live Mediterranean music."
                />
                <ItineraryItem
                  day={3}
                  title="Trapani — Western Shore"
                  description="The day starts with a cannolo tasting in Trapani—the real, original Sicilian kind. We then journey toward the surreal landscapes of the Saline di Trapani & Paceco Nature Reserve, with its iconic salt mounds and windmills bathed in coastal light. Dinner features an exclusive wine tasting paired with a refined menu, followed by live music under the Sicilian sky."
                />
                <ItineraryItem
                  day={4}
                  title="Favignana — Boat Tour to the Egadi Islands"
                  description="The morning begins with the raw energy of the Trapani Fish Market—a sensory theater of local rituals and coastal life. We then cruise to Favignana across crystal-clear waters for a guided visit to Tonnara Florio, exploring Sicily's tuna tradition and one of its most iconic industrial landmarks. As the sun sets, we return to the mainland to recharge."
                />
                <ItineraryItem
                  day={5}
                  title="Gibellina — Italy's Contemporary Art Capital"
                  description="We travel inland to Gibellina, a town dramatically reimagined after the 1968 Belice earthquake through one of Europe's most ambitious art-reconstruction projects. Visit Alberto Burri's monumental Grande Cretto and explore the Fondazione Orestiadi and the Museo delle Trame Mediterranee. Late afternoon transfer to Agrigento for evening check-in and rest."
                />
                <ItineraryItem
                  day={6}
                  title="Agrigento — The Valley of Immortality"
                  description="Awaken in Agrigento, Italy's Capital of Culture 2025. Explore the majestic Valley of the Temples in the morning. Enjoy a private lunch at the Giardino della Kolymbethra, set within the archaeological park itself. The afternoon continues with a gin tasting paired with a refined menu inspired by local ingredients and Sicilian traditions. We conclude with a final sunset dinner overlooking the white cliffs of Scala dei Turchi."
                />
                <ItineraryItem
                  day={7}
                  title="Departure — Palermo Airport"
                  description="A leisurely final morning: a relaxed breakfast and time to unwind at the hotel. Before heading to the airport, a final stop along Viale della Vittoria for gelato at Le Cuspidi. Your private transfer to Palermo Airport departs with plenty of time for a stress-free, sun-kissed departure."
                />
              </div>
            </section>
            {/* Inclusions */}
            <section className="mb-24 bg-white p-8 md:p-12 rounded-sm border border-stone-100 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-serif mb-8 text-stone-900">Curated Inclusions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                <InclusionItem text="7 nights in hand-picked boutique hotels" included={true} />
                <InclusionItem text="2 private airport transfers" included={true} />
                <InclusionItem text="2 exclusive wine tastings" included={true} />
                <InclusionItem text="2 curated food tastings" included={true} />
                <InclusionItem text="Cooking class" included={true} />
                <InclusionItem text="5 curated places to visit" included={true} />
                <InclusionItem text="6 lunches / 6 dinners / 7 breakfasts" included={true} />
                <InclusionItem text="1 welcome bag" included={true} />
                <InclusionItem text="Private daily transfers to/from activities" included={true} />
                <InclusionItem text="Private boat transfers to Egadi Islands" included={true} />
                <InclusionItem text="24/7 dedicated coordinator assistance" included={true} />
                <InclusionItem text="Professional photographer" included={true} />
                <InclusionItem text="Flights to/from Sicily" included={false} />
                <InclusionItem text="Personal expenses & travel insurance" included={false} />
              </div>
            </section>
            {/* FAQ */}
            <section className="mb-20">
              <h2 className="text-3xl md:text-4xl font-serif mb-10 text-stone-900">Frequently Asked Questions</h2>
              <div className="divide-y divide-stone-200">
                <FaqItem
                  question="What is the physical rating for this trip?"
                  answer="This trip is rated 'Relaxed'. There is some walking at archaeological sites and coastal areas, but overall it is suitable for anyone in good health."
                />
                <FaqItem
                  question="Do I need to book my own flights?"
                  answer="Yes. Flights are not included. We recommend flying into Palermo Airport (PMO), which is your departure airport on Day 7 as well."
                />
                <FaqItem
                  question="What type of accommodation do we use?"
                  answer="We stay in hand-picked boutique hotels. Every property is personally vetted for character, comfort, and location."
                />
                <FaqItem
                  question="Is a photographer included in the trip?"
                  answer="Yes! A professional photographer is included in the package to capture your journey. The photos are yours to keep."
                />
              </div>
            </section>
          </div>
          {/* --- RIGHT COLUMN: STICKY BOOKING CARD --- */}
          <div className="relative hidden lg:block">
            <div className="sticky top-32 space-y-4 z-20">
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="p-8 bg-white border border-stone-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-sm relative overflow-hidden"
              >
                {/* Price Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-stone-400 text-[10px] tracking-widest uppercase font-bold">Total Price</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-4xl font-serif text-stone-900">€4,000</span>
                      <span className="text-stone-400 font-light text-sm">/ person</span>
                    </div>
                  </div>
                  <div className="bg-stone-900 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-sm">
                    Selling Fast
                  </div>
                </div>
                {/* Date Selection */}
                <div className={`mb-6 relative transition-opacity ${isRequestFormOpen ? 'opacity-50 pointer-events-none' : ''}`}>
                  <span className="text-stone-500 text-xs font-medium mb-2 block">Select Departure</span>
                  <button
                    onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                    className={`w-full border rounded-sm p-3 flex justify-between items-center cursor-pointer hover:border-stone-400 transition-colors bg-white ${isCalendarOpen ? 'border-stone-900 ring-1 ring-stone-900' : 'border-stone-200'}`}
                  >
                    <div className="flex items-center gap-3">
                      <CalendarIcon size={16} className="text-stone-400" />
                      <span className="text-sm font-medium">
                        {selectedDate} Jun — {selectedDate + tripDuration} Jun
                      </span>
                    </div>
                    <ChevronDown size={16} className={`text-stone-400 transition-transform ${isCalendarOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isCalendarOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-0 w-full mt-2 bg-white border border-stone-100 shadow-2xl rounded-sm p-4 z-50"
                      >
                        <div className="flex justify-between items-center mb-4 pb-2 border-b border-stone-100">
                          <button className="p-1 hover:bg-stone-50 rounded-full text-stone-400"><ChevronLeft size={16}/></button>
                          <span className="text-sm font-serif font-medium text-stone-900">June 2024</span>
                          <button className="p-1 hover:bg-stone-50 rounded-full text-stone-400"><ChevronRight size={16}/></button>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center mb-1">
                          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                            <div key={day} className="text-[10px] text-stone-400 uppercase tracking-wider">{day}</div>
                          ))}
                        </div>
                        <div className="grid grid-cols-7 gap-1">
                          {Array.from({ length: startDayOffset }).map((_, i) => (
                            <div key={`empty-${i}`} />
                          ))}
                          {Array.from({ length: daysInMonth }).map((_, i) => {
                            const day = i + 1;
                            const isSelected = isDateSelected(day);
                            const inRange = isDateInRange(day);
                            const isSaturday = (day + startDayOffset - 1) % 7 === 6;
                            return (
                              <button
                                key={day}
                                onClick={() => handleDateClick(day)}
                                className={`
                                  relative h-8 w-full text-xs font-medium rounded-full flex items-center justify-center transition-all
                                  ${isSelected ? 'bg-stone-900 text-white z-10' : ''}
                                  ${inRange && !isSelected ? 'bg-stone-100 text-stone-900' : ''}
                                  ${!isSelected && !inRange ? 'hover:bg-stone-50 text-stone-600' : ''}
                                  ${isSaturday && !isSelected ? 'font-bold text-stone-900 underline decoration-stone-300 underline-offset-2' : ''}
                                `}
                              >
                                {day}
                              </button>
                            );
                          })}
                        </div>
                        <div className="mt-4 text-[10px] text-stone-400 text-center border-t border-stone-100 pt-2">
                          7 Day Trip • Saturday Departures Recommended
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="mt-2 flex gap-2">
                    <span className="text-[10px] bg-green-50 text-green-700 px-2 py-1 rounded-sm border border-green-100">Confirmed</span>
                    <span className="text-[10px] bg-stone-50 text-stone-500 px-2 py-1 rounded-sm border border-stone-100">4 spots left</span>
                  </div>
                </div>
                {/* Summary Lines */}
                {!isRequestFormOpen && (
                  <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3 mb-8 bg-stone-50 p-4 rounded-sm">
                    <div className="flex justify-between text-xs">
                      <span className="text-stone-500">Deposit required</span>
                      <span className="font-medium text-stone-900">€1,000</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-stone-500">Balance due</span>
                      <span className="font-medium text-stone-900">60 days before</span>
                    </div>
                  </motion.div>
                )}
                {/* CTA Buttons or Form */}
                <AnimatePresence mode="wait">
                  {!isRequestFormOpen ? (
                    <motion.div
                      key="buttons"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                      className="flex flex-col gap-3"
                    >
                      <button className="w-full py-4 bg-stone-900 text-white text-xs tracking-[0.2em] uppercase font-bold hover:bg-stone-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                        Buy Now
                      </button>
                      <button
                        onClick={() => setIsRequestFormOpen(true)}
                        className="w-full py-4 bg-transparent border border-stone-200 text-stone-900 text-xs tracking-[0.2em] uppercase font-bold hover:bg-stone-50 transition-colors"
                      >
                        Request Availability
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                      transition={{ duration: 0.4 }}
                      onSubmit={handleFormSubmit}
                      className="flex flex-col gap-4"
                    >
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold ml-1">Full Name</label>
                        <input required type="text" placeholder="John Doe" className="w-full p-3 bg-stone-50 border border-stone-200 text-sm focus:border-stone-900 focus:outline-none transition-colors rounded-sm text-stone-900 placeholder:text-stone-400" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold ml-1">Email Address</label>
                        <input required type="email" placeholder="john@example.com" className="w-full p-3 bg-stone-50 border border-stone-200 text-sm focus:border-stone-900 focus:outline-none transition-colors rounded-sm text-stone-900 placeholder:text-stone-400" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold ml-1">Phone</label>
                          <input required type="tel" placeholder="+39 ..." className="w-full p-3 bg-stone-50 border border-stone-200 text-sm focus:border-stone-900 focus:outline-none transition-colors rounded-sm text-stone-900 placeholder:text-stone-400" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold ml-1">Guests</label>
                          <input required type="number" min="1" max="12" defaultValue="2" className="w-full p-3 bg-stone-50 border border-stone-200 text-sm focus:border-stone-900 focus:outline-none transition-colors rounded-sm text-stone-900" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold ml-1">Message (Optional)</label>
                        <textarea rows={3} placeholder="Any dietary requirements or special requests?" className="w-full p-3 bg-stone-50 border border-stone-200 text-sm focus:border-stone-900 focus:outline-none transition-colors rounded-sm text-stone-900 placeholder:text-stone-400 resize-none" />
                      </div>
                      <div className="flex gap-3 pt-2">
                        <button type="button" onClick={() => setIsRequestFormOpen(false)} className="flex-1 py-3 border border-stone-200 text-stone-500 text-xs tracking-[0.1em] uppercase font-bold hover:bg-stone-50 hover:text-stone-900 transition-colors">
                          Cancel
                        </button>
                        <button type="submit" className="flex-[2] py-3 bg-stone-900 text-white text-xs tracking-[0.1em] uppercase font-bold hover:bg-stone-800 transition-all shadow-md">
                          Send Request
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
                {/* Trust Signals */}
                {!isRequestFormOpen && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-xs text-stone-500">
                      <Check size={14} className="text-green-600" />
                      <span>Free cancellation up to 65 days before</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-stone-500">
                      <Check size={14} className="text-green-600" />
                      <span>No hidden booking fees</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-stone-500">
                      <Info size={14} className="text-stone-400" />
                      <span>Secure payment via Stripe</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
              {/* Find Your Flight Widget */}
              <div className="p-6 bg-white border border-stone-100 rounded-sm shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Plane size={18} className="text-stone-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-500">Getting There</span>
                </div>
                <button className="w-full py-3 border border-stone-200 text-stone-600 text-xs tracking-[0.2em] uppercase font-bold hover:border-stone-900 hover:text-stone-900 transition-colors flex items-center justify-center gap-2 group">
                  Find Flights
                  <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-stone-200 p-4 z-40 flex justify-between items-center shadow-[0_-5px_20px_rgba(0,0,0,0.05)] safe-area-pb">
        <div>
          <span className="text-[10px] text-stone-500 block uppercase tracking-wide">Total Price</span>
          <span className="text-xl font-serif text-stone-900 font-bold">€4,000</span>
        </div>
        <button className="px-6 py-3 bg-stone-900 text-white text-xs tracking-[0.2em] uppercase font-bold rounded-sm">
          Book Now
        </button>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};
// --- SUBCOMPONENTS ---
const StatItem = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex flex-col gap-2">
    <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
      <Icon size={14} /> {label}
    </span>
    <span className="text-lg md:text-xl font-serif text-stone-800">{value}</span>
  </div>
);
const ItineraryItem = ({ day, title, description }: { day: number, title: string, description: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-start justify-between py-6 text-left group">
        <div className="flex gap-6 md:gap-8">
          <span className="font-serif text-2xl text-stone-300 group-hover:text-stone-900 transition-colors duration-300 w-12 shrink-0">
            {day < 10 ? `0${day}` : day}
          </span>
          <div>
            <h3 className="font-serif text-xl text-stone-900 mb-1 group-hover:translate-x-2 transition-transform duration-300">{title}</h3>
            {!isOpen && <p className="text-xs text-stone-400 uppercase tracking-widest line-clamp-1">Click to reveal details</p>}
          </div>
        </div>
        <div className={`mt-2 p-2 rounded-full border transition-all duration-300 ${isOpen ? 'rotate-180 border-stone-900 text-stone-900' : 'border-stone-200 text-stone-400 group-hover:border-stone-400'}`}>
          <ChevronDown size={16} />
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0, marginBottom: isOpen ? 24 : 0 }}
        className="overflow-hidden pl-[4.5rem] md:pl-20 pr-4 md:pr-10"
      >
        <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base border-l border-stone-300 pl-4">
          {description}
        </p>
      </motion.div>
    </div>
  );
};
const InclusionItem = ({ text, included }: { text: string, included: boolean }) => (
  <div className="flex items-start gap-4">
    <div className={`mt-1 min-w-[1.25rem] h-5 rounded-full flex items-center justify-center border ${included ? 'border-green-200 bg-green-50 text-green-700' : 'border-red-100 bg-red-50 text-red-400'}`}>
      {included ? <Check size={10} strokeWidth={3} /> : <X size={10} strokeWidth={3} />}
    </div>
    <span className={`text-sm md:text-base font-light ${!included ? "text-stone-400" : "text-stone-800"}`}>
      {text}
    </span>
  </div>
);
const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-6">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left gap-4 group">
        <span className="text-lg font-serif text-stone-900 group-hover:text-stone-600 transition-colors">{question}</span>
        <span className="text-stone-400 group-hover:text-stone-900 transition-colors">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pt-4 text-stone-600 font-light leading-relaxed max-w-2xl">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};
export default ExperiencePage;
