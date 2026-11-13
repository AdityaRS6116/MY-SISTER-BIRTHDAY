import { useRef } from 'react';
import { motion } from 'framer-motion';
import FloatingParticles from './FloatingParticles.jsx';
import config from '../config.js';

// Animated Birthday Cake SVG
function BirthdayCakeSVG() {
  return (
    <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" width="180" height="198">
      {/* Plate */}
      <ellipse cx="100" cy="195" rx="85" ry="14" fill="#f3e8ff" opacity="0.5" />
      {/* Bottom tier */}
      <rect x="20" y="145" width="160" height="52" rx="12" fill="url(#cakeGrad1)" />
      <rect x="20" y="145" width="160" height="14" rx="8" fill="url(#icingGrad)" />
      {/* Middle tier */}
      <rect x="38" y="100" width="124" height="50" rx="10" fill="url(#cakeGrad2)" />
      <rect x="38" y="100" width="124" height="12" rx="7" fill="url(#icingGrad2)" />
      {/* Top tier */}
      <rect x="58" y="68" width="84" height="38" rx="8" fill="url(#cakeGrad3)" />
      <rect x="58" y="68" width="84" height="10" rx="6" fill="#fce7f3" />
      {/* Decorations - dots */}
      {[40, 70, 100, 130, 160].map((x, i) => (
        <circle key={i} cx={x} cy="162" r="4" fill={i % 2 === 0 ? '#c4b5fd' : '#f9a8d4'} />
      ))}
      {[55, 85, 115, 145].map((x, i) => (
        <circle key={i} cx={x} cy="117" r="3.5" fill={i % 2 === 0 ? '#f9a8d4' : '#a78bfa'} />
      ))}
      {/* Candles */}
      {[80, 100, 120].map((x, i) => (
        <g key={i}>
          <rect x={x - 4} y="38" width="8" height="30" rx="4" fill={['#f9a8d4', '#c4b5fd', '#fbbf24'][i]} />
          {/* Flame */}
          <motion.g
            animate={{ scaleY: [1, 1.3, 0.9, 1.2, 1], scaleX: [1, 0.8, 1.1, 0.9, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
            style={{ transformOrigin: `${x}px 35px` }}
          >
            <ellipse cx={x} cy="32" rx="5" ry="8" fill="#fbbf24" opacity="0.9" />
            <ellipse cx={x} cy="34" rx="3" ry="5" fill="#f97316" opacity="0.8" />
            <ellipse cx={x} cy="36" rx="1.5" ry="3" fill="white" opacity="0.6" />
          </motion.g>
          {/* Glow */}
          <motion.ellipse
            cx={x} cy="32" rx="10" ry="10"
            fill="#fbbf24" opacity="0.15"
            animate={{ r: [10, 14, 10] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
          />
        </g>
      ))}
      {/* Stars */}
      {[30, 170, 100].map((x, i) => (
        <motion.text
          key={i}
          x={x} y={[85, 130, 50][i]}
          fontSize="12" textAnchor="middle"
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.7 }}
          style={{ transformOrigin: `${x}px ${[85, 130, 50][i]}px` }}
        >
          ✨
        </motion.text>
      ))}
      {/* Gradients */}
      <defs>
        <linearGradient id="cakeGrad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fce7f3" />
          <stop offset="100%" stopColor="#f9a8d4" />
        </linearGradient>
        <linearGradient id="cakeGrad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ede9fe" />
          <stop offset="100%" stopColor="#c4b5fd" />
        </linearGradient>
        <linearGradient id="cakeGrad3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdf4ff" />
          <stop offset="100%" stopColor="#e879f9" opacity="0.6" />
        </linearGradient>
        <linearGradient id="icingGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="#fce7f3" />
        </linearGradient>
        <linearGradient id="icingGrad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="#ede9fe" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function BirthdayReveal({ onDiscover }) {
  const balloons = ['🎈', '🎀', '🎊', '🎉', '🎈', '🎀'];

  return (
    <motion.div
      className="section"
      style={{
        background: 'linear-gradient(160deg, #fff0f7 0%, #f3e8ff 60%, #fff5ff 100%)',
        minHeight: '100dvh',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <FloatingParticles count={22} />

      {/* Floating Balloons */}
      {balloons.map((b, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: '-5%',
            left: `${10 + i * 15}%`,
            fontSize: '2.4rem',
            userSelect: 'none',
          }}
          animate={{
            y: [0, 30, 0],
            rotate: [0, (i % 2 === 0 ? 15 : -15), 0],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        >
          {b}
        </motion.div>
      ))}

      <div style={{ textAlign: 'center', zIndex: 10, maxWidth: 440, width: '100%', padding: '0 20px' }}>
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 150, damping: 12, delay: 0.2 }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 7vw, 2.8rem)',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #ec4899, #a78bfa, #ec4899)',
              backgroundSize: '200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            {config.messages.birthdayHeading}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-lora)',
            fontSize: 'clamp(0.95rem, 3vw, 1.1rem)',
            color: '#7c3aed',
            fontStyle: 'italic',
            marginBottom: 20,
            lineHeight: 1.5,
          }}
        >
          {config.messages.birthdayGujarati}
        </motion.p>

        {/* Cake */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{ margin: '12px 0 16px' }}
        >
          <BirthdayCakeSVG />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          style={{
            fontSize: 'clamp(0.9rem, 3vw, 1rem)',
            color: '#9d4edd',
            lineHeight: 1.7,
            marginBottom: 36,
            maxWidth: 340,
            margin: '0 auto 36px',
          }}
        >
          {config.messages.birthdayMessage}
        </motion.p>

        {/* Discover Button */}
        <motion.button
          id="discover-btn"
          className="btn-magic btn-lavender"
          onClick={onDiscover}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          whileTap={{ scale: 0.95 }}
          style={{ fontSize: 'clamp(0.9rem, 3vw, 1rem)', padding: '16px 32px' }}
        >
          DISCOVER YOUR SURPRISES ✨
        </motion.button>
      </div>
    </motion.div>
  );
}
