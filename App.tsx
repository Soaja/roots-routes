import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Destinations from './components/Destinations';
import FeaturedExperience from './components/FeaturedExperience';
import Footer from './components/Footer';
import ExperiencePage from './pages/ExperiencePage';

type ViewState = 'home' | 'experience';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const navigateTo = (view: ViewState) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setCurrentView(view);
  };

  if (currentView === 'experience') {
    return <ExperiencePage onBack={() => navigateTo('home')} />;
  }

  return (
    <div className="font-sans text-stone-800 bg-stone-900 min-h-screen">
      <Navbar />
      <main>
        <Hero onNavigate={() => navigateTo('experience')} />
        <AboutUs />
        <Destinations />
        <FeaturedExperience onNavigate={() => navigateTo('experience')} />
      </main>
      <Footer />
    </div>
  );
};

export default App;