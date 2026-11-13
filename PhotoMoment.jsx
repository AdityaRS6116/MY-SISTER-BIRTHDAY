import { useState } from 'react';
import { motion } from 'framer-motion';
import config from "./config.js";

export default function PhotoMoment() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Uses the dedicated cinematic photo — different from the gallery photos above
  const photo = config.cinematicPhoto;

  return (
    <motion.div
      className="section"
      style={{
        background: 'linear-gradient(160deg, #2d1052 0%, #4a1a7a 50%, #1a0a2e 100%)',
        minHeight: '100dvh',
        paddingTop: 60,
        paddingBottom: 60,
        position: 'relative',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Background stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: 2 + Math.random() * 3,
            height: 2 + Math.random() * 3,
            borderRadius: '50%',
            background: ['#f9a8d4', '#c4b5fd', 'white', '#fbbf24'][i % 4],
            opacity: 0.3 + Math.random() * 0.6,
          }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
          transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
        />
      ))}

      {/* Floating petals */}
      {['🌸', '💗', '🌺', '✨', '💫'].map((e, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: `${10 + i * 18}%`,
            [i % 2 === 0 ? 'left' : 'right']: '4%',
            fontSize: '1.6rem',
            opacity: 0.5,
          }}
          animate={{ y: [0, -20, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity }}
        >
          {e}
        </motion.div>
      ))}

      <div style={{ textAlign: 'center', zIndex: 10, width: '100%', maxWidth: 420, padding: '0 20px' }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.3rem, 5vw, 1.8rem)',
            fontWeight: 700,
            color: 'white',
            letterSpacing: '0.05em',
            marginBottom: 8,
          }}>
            {config.messages.photoMomentHeading}
          </h2>
          <p style={{
            fontFamily: 'var(--font-lora)',
            fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
            color: '#c4b5fd',
            fontStyle: 'italic',
            marginBottom: 32,
          }}>
            {config.messages.photoMomentGujarati}
          </p>
        </motion.div>

        {/* Cinematic photo frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.3 }}
          style={{ padding: '0 8px' }}
        >
          {/* Outer glow frame */}
          <motion.div
            animate={{
              boxShadow: [
                '0 0 40px rgba(249,168,212,0.3), 0 0 80px rgba(196,181,253,0.2)',
                '0 0 60px rgba(249,168,212,0.5), 0 0 100px rgba(196,181,253,0.35)',
                '0 0 40px rgba(249,168,212,0.3), 0 0 80px rgba(196,181,253,0.2)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              borderRadius: 20,
              padding: 4,
              background: 'linear-gradient(135deg, #f9a8d4, #c4b5fd, #f9a8d4)',
            }}
          >
            <div style={{
              borderRadius: 17,
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #fce7f3, #ede9fe)',
              aspectRatio: '3/4',
              maxWidth: 320,
              margin: '0 auto',
            }}>
              {!error ? (
                <img
                  src={photo.src}
                  alt="A special moment"
                  onLoad={() => setLoaded(true)}
                  onError={() => setError(true)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: loaded ? 'block' : 'none',
                  }}
                />
              ) : null}
              {(!loaded || error) && (
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 12,
                  padding: 32,
                }}>
                  <span style={{ fontSize: '4rem' }}>📸</span>
                  <p style={{
                    fontFamily: 'var(--font-script)',
                    fontSize: '1.1rem',
                    color: '#7c3aed',
                    textAlign: 'center',
                  }}>
                    Our beautiful memory
                  </p>
                  <p style={{
                    fontSize: '0.75rem',
                    color: '#c084fc',
                    textAlign: 'center',
                  }}>
                    Add your photo to /public/photos/
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ marginTop: 28 }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ fontSize: '2rem', marginBottom: 8 }}
          >
            ❤️
          </motion.div>
          <p style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(1.1rem, 4vw, 1.3rem)',
            color: '#f9a8d4',
            lineHeight: 1.5,
          }}>
            {photo.caption}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
