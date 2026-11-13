import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SplashScreen from './components/SplashScreen.jsx';
import BirthdayReveal from './components/BirthdayReveal.jsx';
import Memories from './components/Memories.jsx';
import Letter from './components/Letter.jsx';
import SecretSurprises from './components/SecretSurprises.jsx';
import CakeSection from './components/CakeSection.jsx';
import PhotoMoment from './components/PhotoMoment.jsx';
import GrandFinale from './components/GrandFinale.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';

// Progress dots for navigation
function NavDots({ current, total, sections }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      style={{
        position: 'fixed',
        right: 14,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      {sections.map((s, i) => (
        <motion.button
          key={i}
          onClick={() => {
            document.getElementById(`section-${i}`)?.scrollIntoView({ behavior: 'smooth' });
          }}
          title={s}
          style={{
            width: i === current ? 10 : 7,
            height: i === current ? 10 : 7,
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            background: i === current
              ? 'linear-gradient(135deg, #ec4899, #a78bfa)'
              : 'rgba(255,255,255,0.4)',
            padding: 0,
            transition: 'all 0.3s ease',
            boxShadow: i === current ? '0 0 8px rgba(236,72,153,0.6)' : 'none',
          }}
          animate={{ scale: i === current ? 1.2 : 1 }}
        />
      ))}
    </motion.div>
  );
}

export default function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const sectionNames = [
    '🎂 Birthday',
    '📸 Memories',
    '💌 Letter',
    '✨ Surprises',
    '🎂 Wish',
    '📷 Photo',
    '🎊 Finale',
  ];

  // Track current section via IntersectionObserver
  useEffect(() => {
    if (!splashDone) return;
    const observers = [];
    sectionNames.forEach((_, i) => {
      const el = document.getElementById(`section-${i}`);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setCurrentSection(i);
        },
        { threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [splashDone]);

  if (!splashDone) {
    return (
      <AnimatePresence>
        <SplashScreen onOpen={() => setSplashDone(true)} />
      </AnimatePresence>
    );
  }

  return (
    <>
      <MusicPlayer />
      <NavDots current={currentSection} total={sectionNames.length} sections={sectionNames} />

      {/* Smooth scrolling sections */}
      <div id="section-0"><BirthdayReveal onDiscover={() => {
        document.getElementById('section-1')?.scrollIntoView({ behavior: 'smooth' });
      }} /></div>
      <div id="section-1"><Memories /></div>
      <div id="section-2"><Letter /></div>
      <div id="section-3"><SecretSurprises /></div>
      <div id="section-4"><CakeSection /></div>
      <div id="section-5"><PhotoMoment /></div>
      <div id="section-6"><GrandFinale /></div>
    </>
  );
}
