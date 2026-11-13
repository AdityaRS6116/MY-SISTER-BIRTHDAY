import { useMemo } from 'react';
import { motion } from 'framer-motion';

const HEARTS = ['💗', '💕', '💖', '💝', '🌸', '✨', '⭐', '💫'];

export default function FloatingParticles({ count = 25 }) {
  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      emoji: HEARTS[i % HEARTS.length],
      x: Math.random() * 100,
      size: 12 + Math.random() * 20,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * -15,
      opacity: 0.3 + Math.random() * 0.5,
    })), [count]);

  return (
    <div className="particle-layer">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            bottom: '-5%',
            fontSize: p.size,
            opacity: p.opacity,
            willChange: 'transform',
          }}
          animate={{
            y: [0, -window.innerHeight * 1.3],
            x: [0, (Math.random() - 0.5) * 80],
            rotate: [0, Math.random() * 360],
            opacity: [p.opacity, p.opacity * 0.5, 0],
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
