import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Confetti from './Confetti.jsx';
import config from "./config.js";

// Final floating hearts full screen
function FinalHearts() {
  const items = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    emoji: ['💗', '💕', '💖', '💝', '✨', '⭐', '💫', '🌸'][i % 8],
    x: Math.random() * 100,
    size: 1 + Math.random() * 2.5,
    duration: 6 + Math.random() * 10,
    delay: Math.random() * -15,
  }));

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
      {items.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            bottom: '-5%',
            fontSize: `${p.size}rem`,
          }}
          animate={{
            y: [0, -window.innerHeight * 1.5],
            opacity: [0.8, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {p.emoji}
        </motion.div>
      ))}
    </div>
  );
}

export default function GrandFinale() {
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setConfetti(true);
      setTimeout(() => setConfetti(false), 5000);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const lines = [
    { text: config.messages.finaleHeading, delay: 0.2, style: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 700, color: '#f9a8d4', letterSpacing: '0.03em' } },
    { text: '', delay: 0.5 },
    { text: config.messages.finaleMessage, delay: 0.8, style: { fontFamily: 'var(--font-lora)', fontSize: 'clamp(1rem, 3.5vw, 1.2rem)', color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', lineHeight: 1.6 } },
    { text: '', delay: 1.0 },
    { text: config.messages.finaleGujarati, delay: 1.2, style: { fontFamily: 'var(--font-lora)', fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', color: '#c4b5fd', fontStyle: 'italic', lineHeight: 1.6 } },
  ];

  return (
    <motion.div
      className="section"
      style={{
        background: 'linear-gradient(160deg, #1a0a2e 0%, #2d1052 40%, #4a1a7a 100%)',
        minHeight: '100dvh',
        paddingTop: 60,
        paddingBottom: 60,
        position: 'relative',
        overflow: 'hidden',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        setTimeout(() => {
          setConfetti(true);
          setTimeout(() => setConfetti(false), 5000);
        }, 500);
      }}
    >
      <Confetti active={confetti} />
      <FinalHearts />

      {/* Glowing orbs */}
      {[
        { x: '10%', y: '20%', color: 'rgba(249,168,212,0.15)', size: 200 },
        { x: '80%', y: '70%', color: 'rgba(196,181,253,0.12)', size: 250 },
        { x: '50%', y: '50%', color: 'rgba(167,139,250,0.08)', size: 300 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            background: orb.color,
            filter: 'blur(60px)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div style={{ textAlign: 'center', zIndex: 10, width: '100%', maxWidth: 440, padding: '0 24px' }}>
        {/* Crown emoji */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
          animate={{ y: [0, -10, 0] }}
          style={{ fontSize: '4rem', marginBottom: 20 }}
        >
          👑
        </motion.div>

        {/* Text lines */}
        {lines.map((line, i) =>
          line.text ? (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: line.delay, duration: 0.8 }}
              style={{ marginBottom: 16, ...line.style }}
            >
              {line.text}
            </motion.p>
          ) : (
            <div key={i} style={{ marginBottom: 8 }} />
          )
        )}

        {/* Final birthday message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.6, type: 'spring', stiffness: 150 }}
          style={{ margin: '32px 0' }}
        >
          <motion.h2
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.4rem, 5.5vw, 2.2rem)',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #f9a8d4, #c4b5fd, #f9a8d4, #fbbf24)',
              backgroundSize: '300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.3,
            }}
          >
            {config.messages.finaleBirthday}
          </motion.h2>
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 0.8 }}
          style={{
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(249,168,212,0.3)',
            borderRadius: 20,
            padding: '28px 24px',
            marginTop: 8,
          }}
        >
          <p style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(1.1rem, 4vw, 1.4rem)',
            color: '#f9a8d4',
            marginBottom: 8,
          }}>
            {config.messages.finaleSignature}
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1rem, 3.5vw, 1.2rem)',
            fontWeight: 600,
            color: 'white',
            marginBottom: 8,
          }}>
            {config.messages.finaleFrom}
          </p>
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ fontSize: '2rem' }}
          >
            ❤️
          </motion.div>
        </motion.div>

        {/* Brother's signature */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.4 }}
          style={{
            marginTop: 32,
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(1rem, 4vw, 1.3rem)',
            color: 'rgba(196,181,253,0.7)',
            fontStyle: 'italic',
          }}
        >
          — {config.brotherSignature}
        </motion.p>
      </div>
    </motion.div>
  );
}
