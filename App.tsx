import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Destinations from './components/Destinations';
import FeaturedExperience from './components/FeaturedExperience';
import Footer from './components/Footer';
import ExperiencePage from './pages/ExperiencePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';

type ViewState = 'home' | 'experience' | 'about' | 'contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const navigateTo = (view: string) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Type assertion to ensure string matches ViewState
    if (view === 'home' || view === 'experience' || view === 'about' || view === 'contact') {
      setCurrentView(view as ViewState);
    }
  };

  if (currentView === 'experience') {
    return <ExperiencePage onNavigate={navigateTo} />;
  }

  if (currentView === 'about') {
    return <AboutUsPage onNavigate={navigateTo} />;
  }

  if (currentView === 'contact') {
    return <ContactPage onNavigate={navigateTo} />;
  }

  return (
    <div className="font-sans text-stone-800 bg-stone-900 min-h-screen">
      <Navbar onNavigate={navigateTo} />
      <main>
        <Hero onNavigate={() => navigateTo('experience')} />
        <AboutUs />
        <Destinations />
        <FeaturedExperience onNavigate={() => navigateTo('experience')} />
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;