import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from './Confetti.jsx';
import config from "./config.js";

// Interactive CSS Birthday Cake
function InteractiveCake({ blownOut, onBlow }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <svg viewBox="0 0 240 280" fill="none" xmlns="http://www.w3.org/2000/svg" width="220" height="257">
        {/* Plate shadow */}
        <ellipse cx="120" cy="262" rx="90" ry="12" fill="rgba(167,139,250,0.2)" />

        {/* Bottom tier */}
        <rect x="15" y="175" width="210" height="80" rx="16" fill="url(#cakeB1)" />
        <rect x="15" y="175" width="210" height="20" rx="10" fill="url(#icingB)" />

        {/* Middle tier */}
        <rect x="40" y="120" width="160" height="62" rx="12" fill="url(#cakeB2)" />
        <rect x="40" y="120" width="160" height="16" rx="8" fill="url(#icingM)" />

        {/* Top tier */}
        <rect x="68" y="80" width="104" height="45" rx="10" fill="url(#cakeB3)" />
        <rect x="68" y="80" width="104" height="12" rx="7" fill="white" opacity="0.9" />

        {/* Polka dots - bottom */}
        {[40, 75, 110, 145, 180].map((x, i) => (
          <circle key={i} cx={x} cy={205} r={5}
            fill={i % 2 === 0 ? '#c4b5fd' : '#f9a8d4'} />
        ))}
        {/* Polka dots - middle */}
        {[65, 100, 135, 170].map((x, i) => (
          <circle key={i} cx={x} cy={148} r={4}
            fill={i % 2 === 0 ? '#f9a8d4' : '#a78bfa'} />
        ))}

        {/* Wavy frosting drips - bottom */}
        {[30, 60, 90, 120, 150, 180, 210].map((x, i) => (
          <motion.ellipse
            key={i}
            cx={x} cy={183}
            rx={12} ry={8}
            fill="white" opacity="0.7"
            animate={{ ry: [8, 11, 8] }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
          />
        ))}

        {/* Stars */}
        <text x="22" y="168" fontSize="14">✨</text>
        <text x="195" y="168" fontSize="14">✨</text>
        <text x="40" y="115" fontSize="12">💗</text>
        <text x="178" y="115" fontSize="12">💗</text>

        {/* Candles */}
        {[90, 120, 150].map((x, i) => (
          <g key={i}>
            {/* Candle body */}
            <rect
              x={x - 5} y={42}
              width={10} height={38}
              rx={5}
              fill={['#f9a8d4', '#c4b5fd', '#fbbf24'][i]}
            />
            {/* Candle shine */}
            <rect
              x={x - 2} y={45}
              width={3} height={20}
              rx={2}
              fill="rgba(255,255,255,0.4)"
            />

            {/* Flame or smoke */}
            {!blownOut ? (
              <motion.g
                animate={{
                  scaleY: [1, 1.4, 0.8, 1.3, 1],
                  scaleX: [1, 0.7, 1.2, 0.8, 1],
                }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: 'easeInOut',
                }}
                style={{ transformOrigin: `${x}px 38px` }}
              >
                {/* Outer flame */}
                <ellipse cx={x} cy={32} rx={7} ry={12} fill="#fbbf24" opacity="0.9" />
                {/* Inner flame */}
                <ellipse cx={x} cy={35} rx={4} ry={8} fill="#f97316" opacity="0.85" />
                {/* Core */}
                <ellipse cx={x} cy={38} rx={2} ry={4} fill="white" opacity="0.7" />

                {/* Glow */}
                <motion.ellipse
                  cx={x} cy={32}
                  rx={14} ry={14}
                  fill="#fbbf24" opacity="0.12"
                  animate={{ r: [14, 20, 14] }}
                  transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15 }}
                />
              </motion.g>
            ) : (
              /* Smoke */
              <motion.g>
                {[0, 1, 2].map((s) => (
                  <motion.ellipse
                    key={s}
                    cx={x + (s - 1) * 3}
                    cy={35}
                    rx={3}
                    ry={5}
                    fill="rgba(156,163,175,0.5)"
                    initial={{ y: 0, opacity: 0.6, scaleY: 1 }}
                    animate={{ y: -40, opacity: 0, scaleY: 3 }}
                    transition={{
                      duration: 1.5,
                      delay: s * 0.2,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                  />
                ))}
              </motion.g>
            )}
          </g>
        ))}

        {/* Gradients */}
        <defs>
          <linearGradient id="cakeB1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fce7f3" />
            <stop offset="100%" stopColor="#f9a8d4" />
          </linearGradient>
          <linearGradient id="cakeB2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ede9fe" />
            <stop offset="100%" stopColor="#c4b5fd" />
          </linearGradient>
          <linearGradient id="cakeB3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fdf4ff" />
            <stop offset="100%" stopColor="#e879f9" />
          </linearGradient>
          <linearGradient id="icingB" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="#fce7f3" />
          </linearGradient>
          <linearGradient id="icingM" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="#ede9fe" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function CakeSection() {
  const [wished, setWished] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const handleWish = () => {
    if (wished) return;
    setWished(true);
    setConfetti(true);
    setTimeout(() => setConfetti(false), 4500);
  };

  return (
    <motion.div
      className="section"
      style={{
        background: 'linear-gradient(160deg, #fff0f7 0%, #ede9fe 50%, #fce7f3 100%)',
        minHeight: '100dvh',
        paddingTop: 60,
        paddingBottom: 60,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Confetti active={confetti} />

      {/* Background sparkles */}
      {['✨', '⭐', '💫', '🌟', '✨', '⭐'].map((s, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: `${10 + (i * 15) % 70}%`,
            [i % 2 === 0 ? 'left' : 'right']: `${5 + i * 8}%`,
            fontSize: '1.4rem',
            opacity: 0.5,
          }}
          animate={{ rotate: [0, 360], scale: [1, 1.4, 1] }}
          transition={{ duration: 4 + i, repeat: Infinity }}
        >
          {s}
        </motion.div>
      ))}

      <div style={{ textAlign: 'center', zIndex: 10, width: '100%', maxWidth: 420, padding: '0 20px' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading" style={{ fontSize: 'clamp(1.6rem, 5.5vw, 2.2rem)' }}>
            MAKE YOUR WISH 🎂
          </h2>
          <p className="section-subheading">Close your eyes and wish for something beautiful...</p>
        </motion.div>

        {/* Cake */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 150, damping: 15, delay: 0.2 }}
          style={{ margin: '12px 0 24px' }}
        >
          <InteractiveCake blownOut={wished} onBlow={handleWish} />
        </motion.div>

        {/* Wish button */}
        <AnimatePresence mode="wait">
          {!wished ? (
            <motion.button
              id="wish-btn"
              key="wish-btn"
              className="btn-magic"
              onClick={handleWish}
              exit={{ scale: 0, opacity: 0 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 8px 32px rgba(236,72,153,0.4)',
                  '0 8px 48px rgba(167,139,250,0.7)',
                  '0 8px 32px rgba(236,72,153,0.4)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ fontSize: 'clamp(0.9rem, 3vw, 1rem)', padding: '16px 32px' }}
            >
              MAKE A WISH, HARSHITA! ✨
            </motion.button>
          ) : (
            <motion.div
              key="wish-result"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              style={{
                background: 'rgba(255,255,255,0.8)',
                borderRadius: 20,
                padding: '28px 24px',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(249,168,212,0.5)',
                boxShadow: '0 20px 60px rgba(236,72,153,0.2)',
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 20, -20, 0] }}
                transition={{ duration: 0.8 }}
                style={{ fontSize: '3rem', marginBottom: 12 }}
              >
                🌟
              </motion.div>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.1rem, 4vw, 1.3rem)',
                fontWeight: 600,
                color: '#7c3aed',
                marginBottom: 8,
              }}>
                {config.messages.wishMessage}
              </p>
              <p style={{
                fontFamily: 'var(--font-lora)',
                fontSize: 'clamp(0.95rem, 3vw, 1.1rem)',
                color: '#ec4899',
                fontStyle: 'italic',
              }}>
                {config.messages.wishGujarati}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
