import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from './Confetti.jsx';
import FloatingParticles from './FloatingParticles.jsx';
import config from '../config.js';

export default function SplashScreen({ onOpen }) {
  const [phase, setPhase] = useState('idle'); // idle | shaking | opening | done
  const [confetti, setConfetti] = useState(false);

  const handleOpen = () => {
    if (phase !== 'idle') return;
    setPhase('shaking');
    setTimeout(() => {
      setPhase('opening');
      setConfetti(true);
      setTimeout(() => {
        onOpen();
      }, 1800);
    }, 800);
  };

  return (
    <motion.div
      className="section"
      style={{
        background: 'linear-gradient(160deg, #fff0f7 0%, #f3e8ff 50%, #fdf4ff 100%)',
        minHeight: '100dvh',
        position: 'relative',
      }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
    >
      <FloatingParticles count={20} />
      <Confetti active={confetti} />

      {/* Decorative stars */}
      {['⭐', '✨', '💫', '🌟', '⭐', '✨'].map((s, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: `${10 + (i * 15) % 60}%`,
            left: i % 2 === 0 ? `${5 + i * 8}%` : undefined,
            right: i % 2 !== 0 ? `${5 + i * 8}%` : undefined,
            fontSize: '1.4rem',
            opacity: 0.6,
          }}
          animate={{ rotate: [0, 360], scale: [1, 1.3, 1] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
        >
          {s}
        </motion.div>
      ))}

      <div style={{ textAlign: 'center', zIndex: 10, maxWidth: 420, width: '100%', padding: '0 20px' }}>
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1
            className="script"
            style={{
              fontSize: 'clamp(2.2rem, 8vw, 3.2rem)',
              background: 'linear-gradient(135deg, #ec4899, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 8,
              lineHeight: 1.2,
            }}
          >
            {config.messages.welcomeHeading}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-lora)',
            fontSize: 'clamp(1rem, 3.5vw, 1.2rem)',
            color: '#7c3aed',
            fontStyle: 'italic',
            marginBottom: 8,
          }}
        >
          {config.messages.welcomeGujarati}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{
            fontSize: 'clamp(0.9rem, 3vw, 1rem)',
            color: '#9d4edd',
            marginBottom: 48,
            lineHeight: 1.6,
          }}
        >
          {config.messages.welcomeSub}
        </motion.p>

        {/* Gift Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 15 }}
          style={{ marginBottom: 40 }}
        >
          <AnimatePresence mode="wait">
            {phase === 'idle' && (
              <motion.div
                key="box-idle"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                style={{ fontSize: '8rem', cursor: 'pointer', display: 'inline-block', userSelect: 'none' }}
                onClick={handleOpen}
              >
                🎁
              </motion.div>
            )}
            {phase === 'shaking' && (
              <motion.div
                key="box-shake"
                animate={{ rotate: [-15, 15, -15, 15, -10, 10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 0.8 }}
                style={{ fontSize: '8rem', display: 'inline-block' }}
              >
                🎁
              </motion.div>
            )}
            {phase === 'opening' && (
              <motion.div
                key="box-open"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.5, 0], opacity: [1, 1, 0] }}
                transition={{ duration: 1.2 }}
                style={{ fontSize: '8rem', display: 'inline-block' }}
              >
                🎊
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            id="open-surprise-btn"
            className="btn-magic"
            onClick={handleOpen}
            disabled={phase !== 'idle'}
            whileTap={{ scale: 0.95 }}
            animate={phase === 'idle' ? {
              boxShadow: [
                '0 8px 32px rgba(236,72,153,0.4)',
                '0 8px 48px rgba(167,139,250,0.6)',
                '0 8px 32px rgba(236,72,153,0.4)',
              ]
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', padding: '18px 36px' }}
          >
            OPEN YOUR MAGICAL SURPRISE 🎁
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
