import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import config from '../config.js';

const CARD_COLORS = [
  {
    bg: 'linear-gradient(135deg, #fce7f3, #f9a8d4)',
    accent: '#ec4899',
    glow: 'rgba(236,72,153,0.3)',
  },
  {
    bg: 'linear-gradient(135deg, #ede9fe, #c4b5fd)',
    accent: '#7c3aed',
    glow: 'rgba(124,58,237,0.3)',
  },
  {
    bg: 'linear-gradient(135deg, #fdf4ff, #e879f9)',
    accent: '#a21caf',
    glow: 'rgba(162,28,175,0.3)',
  },
];

function SurpriseCard({ surprise, index }) {
  const [opened, setOpened] = useState(false);
  const colors = CARD_COLORS[index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.15, duration: 0.6, type: 'spring', stiffness: 100 }}
      style={{ width: '100%', maxWidth: 360 }}
    >
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="closed"
            exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpened(true)}
            style={{
              background: colors.bg,
              borderRadius: 24,
              padding: '36px 28px',
              cursor: 'pointer',
              boxShadow: `0 20px 50px ${colors.glow}, 0 4px 16px rgba(0,0,0,0.06)`,
              border: '1px solid rgba(255,255,255,0.7)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              userSelect: 'none',
            }}
            whileTap={{ scale: 0.96 }}
            whileHover={{ y: -4 }}
          >
            {/* Shimmer effect */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)',
                borderRadius: 'inherit',
              }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
            />

            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ fontSize: '3.5rem', marginBottom: 16 }}
            >
              {surprise.icon}
            </motion.div>

            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.1rem, 4vw, 1.3rem)',
              fontWeight: 700,
              color: colors.accent,
              marginBottom: 10,
            }}>
              {surprise.title}
            </h3>

            <p style={{
              fontFamily: 'var(--font-script)',
              fontSize: '1rem',
              color: '#6b21a8',
              marginBottom: 20,
            }}>
              {surprise.preview}
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255,255,255,0.6)',
              padding: '10px 22px',
              borderRadius: 50,
              color: colors.accent,
              fontWeight: 600,
              fontSize: '0.9rem',
            }}>
              Tap to reveal ✨
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="opened"
            initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 150 }}
            style={{
              background: 'rgba(255,255,255,0.95)',
              borderRadius: 24,
              padding: '36px 28px',
              boxShadow: `0 24px 60px ${colors.glow}, 0 4px 20px rgba(0,0,0,0.08)`,
              border: `2px solid ${colors.accent}30`,
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, 20, -20, 0] }}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={{ fontSize: '3rem', marginBottom: 16 }}
            >
              {surprise.icon}
            </motion.div>

            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1rem, 3.5vw, 1.2rem)',
              fontWeight: 700,
              color: colors.accent,
              marginBottom: 16,
            }}>
              {surprise.title}
            </h3>

            <p style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(1rem, 3.5vw, 1.1rem)',
              color: '#4a1a5c',
              lineHeight: 1.7,
              whiteSpace: 'pre-line',
            }}>
              {surprise.message}
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ marginTop: 20, fontSize: '1.5rem' }}
            >
              {'💗'.repeat(3)}
            </motion.div>

            <button
              onClick={() => setOpened(false)}
              style={{
                marginTop: 16,
                background: 'none',
                border: `1px solid ${colors.accent}40`,
                borderRadius: 20,
                padding: '8px 20px',
                color: colors.accent,
                fontSize: '0.8rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Close ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function SecretSurprises() {
  return (
    <motion.div
      className="section"
      style={{
        background: 'linear-gradient(160deg, #ede9fe 0%, #fce7f3 50%, #fdf4ff 100%)',
        minHeight: '100dvh',
        paddingTop: 60,
        paddingBottom: 60,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div style={{ textAlign: 'center', zIndex: 10, width: '100%', maxWidth: 440 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading" style={{ fontSize: 'clamp(1.6rem, 5.5vw, 2.2rem)' }}>
            THREE SURPRISES FOR YOU ✨
          </h2>
          <p className="section-subheading">
            Tap each card to reveal your secret...
          </p>
        </motion.div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
          padding: '8px 16px',
        }}>
          {config.messages.surprises.map((surprise, i) => (
            <SurpriseCard key={i} surprise={surprise} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
