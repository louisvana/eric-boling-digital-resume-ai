
import React from 'react';
import ResumeHeader from './components/ResumeHeader';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Brands from './components/Brands';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import MustHaves from './components/MustHaves';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Featured from './components/Featured';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-accent/30 selection:text-white pb-20 relative">
      <ResumeHeader />
      <Hero />
      <Summary />
      <Brands />
      <Education />
      <Experience />
      <Featured />
      <Skills />
      <MustHaves />
      <Footer />
      <ChatBot />
      <ScrollToTop />
    </div>
  );
}

export default App;
