import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import config from '../config.js';

const letterText = config.messages.letterContent;

export default function Letter() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const typingRef = useRef(null);

  const startTyping = () => {
    if (isTyping || displayedText) return;
    setIsTyping(true);
    let i = 0;
    typingRef.current = setInterval(() => {
      setDisplayedText(letterText.slice(0, i + 1));
      i++;
      if (i >= letterText.length) {
        clearInterval(typingRef.current);
        setIsTyping(false);
      }
    }, 18);
  };

  useEffect(() => () => clearInterval(typingRef.current), []);

  return (
    <motion.div
      className="section"
      style={{
        background: 'linear-gradient(160deg, #fdf4ff 0%, #ede9fe 50%, #fce7f3 100%)',
        minHeight: '100dvh',
        paddingTop: 60,
        paddingBottom: 60,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Floating decorations */}
      {['💌', '✉️', '💗', '🌸'].map((e, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: `${15 + i * 20}%`,
            [i % 2 === 0 ? 'left' : 'right']: '3%',
            fontSize: '1.8rem',
            opacity: 0.4,
          }}
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity }}
        >
          {e}
        </motion.div>
      ))}

      <div style={{ textAlign: 'center', zIndex: 10, width: '100%', maxWidth: 480 }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.4rem, 5vw, 2rem)',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #ec4899, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 6,
          }}>
            A LITTLE LETTER FOR YOU
          </h2>
          <p style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(1rem, 3.5vw, 1.3rem)',
            color: '#7c3aed',
            marginBottom: 32,
          }}>
            મારી વહાલી હર્ષિતા માટે...
          </p>
        </motion.div>

        {/* Envelope / Letter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ padding: '0 16px' }}
        >
          {!isOpen ? (
            /* Envelope closed */
            <motion.div
              style={{
                background: 'linear-gradient(135deg, #fce7f3, #ede9fe)',
                borderRadius: 20,
                padding: 40,
                cursor: 'pointer',
                boxShadow: '0 20px 60px rgba(124,58,237,0.2)',
                border: '1px solid rgba(255,255,255,0.8)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onClick={() => { setIsOpen(true); setTimeout(startTyping, 600); }}
              whileTap={{ scale: 0.97 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div style={{ fontSize: '5rem', marginBottom: 20 }}>💌</div>
              <p style={{
                fontFamily: 'var(--font-script)',
                fontSize: '1.3rem',
                color: '#7c3aed',
                marginBottom: 16,
              }}>
                A letter from your brother...
              </p>
              <motion.button
                id="open-letter-btn"
                className="btn-magic"
                style={{ fontSize: '0.95rem', padding: '14px 28px' }}
                whileTap={{ scale: 0.95 }}
              >
                Open Letter 💌
              </motion.button>
            </motion.div>
          ) : (
            /* Letter open */
            <motion.div
              initial={{ rotateX: 90, opacity: 0, scale: 0.8 }}
              animate={{ rotateX: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              style={{
                background: 'linear-gradient(160deg, #fffdf9 0%, #fff9f0 100%)',
                borderRadius: 20,
                padding: '32px 28px',
                boxShadow: '0 24px 70px rgba(124,58,237,0.18), 0 4px 16px rgba(0,0,0,0.06)',
                border: '1px solid rgba(249,168,212,0.3)',
                textAlign: 'left',
                position: 'relative',
              }}
            >
              {/* Decorative top border */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: 6,
                background: 'linear-gradient(90deg, #f9a8d4, #c4b5fd, #f9a8d4)',
                borderRadius: '20px 20px 0 0',
              }} />

              {/* Letter lines decoration */}
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  left: 28, right: 28,
                  top: 48 + i * 32,
                  height: 1,
                  background: 'rgba(196,181,253,0.2)',
                }} />
              ))}

              {/* Letter text */}
              <div style={{
                fontFamily: 'var(--font-script)',
                fontSize: 'clamp(1rem, 3.5vw, 1.15rem)',
                color: '#4a1a5c',
                lineHeight: 2,
                whiteSpace: 'pre-wrap',
                position: 'relative',
                zIndex: 1,
              }}>
                {displayedText}
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    style={{ color: '#ec4899' }}
                  >|</motion.span>
                )}
              </div>

              {!isTyping && displayedText && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  style={{ marginTop: 20, textAlign: 'right' }}
                >
                  <span style={{ fontSize: '1.5rem' }}>❤️</span>
                </motion.div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
