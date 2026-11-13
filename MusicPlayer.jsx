import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import config from '../config.js';

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [hasMusic] = useState(!!config.musicSrc);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!hasMusic) return;
    audioRef.current = new Audio(config.musicSrc);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
    return () => {
      audioRef.current?.pause();
    };
  }, [hasMusic]);

  const toggle = () => {
    if (!hasMusic || !audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  if (!hasMusic) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      style={{
        position: 'fixed',
        bottom: 24,
        right: 20,
        zIndex: 1000,
      }}
    >
      <motion.button
        id="music-toggle-btn"
        onClick={toggle}
        whileTap={{ scale: 0.9 }}
        animate={playing ? {
          boxShadow: [
            '0 0 20px rgba(236,72,153,0.5)',
            '0 0 40px rgba(167,139,250,0.7)',
            '0 0 20px rgba(236,72,153,0.5)',
          ],
        } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          width: 52,
          height: 52,
          borderRadius: '50%',
          border: 'none',
          background: 'linear-gradient(135deg, #ec4899, #a78bfa)',
          color: 'white',
          fontSize: '1.4rem',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(236,72,153,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label={playing ? 'Pause music' : 'Play music'}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={playing ? 'pause' : 'play'}
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            {playing ? '🎵' : '🔇'}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      {/* Pulsing rings when playing */}
      {playing && (
        <>
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                border: '2px solid rgba(236,72,153,0.5)',
              }}
              animate={{ scale: [1, 1.5 + i * 0.3], opacity: [0.6, 0] }}
              transition={{ duration: 1.5, delay: i * 0.4, repeat: Infinity }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
}
