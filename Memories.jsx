import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import config from "./config.js";

// Placeholder component shown when no photo is provided
function PhotoPlaceholder({ caption }) {
  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '3/4',
        background: 'linear-gradient(135deg, #fce7f3, #ede9fe)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        gap: 12,
      }}
    >
      <span style={{ fontSize: '3rem' }}>📸</span>
      <p style={{
        fontFamily: 'var(--font-script)',
        fontSize: '0.95rem',
        color: '#9d4edd',
        textAlign: 'center',
        padding: '0 16px',
      }}>
        Your photo will appear here
      </p>
      <p style={{
        fontSize: '0.75rem',
        color: '#c084fc',
        textAlign: 'center',
        padding: '0 12px',
      }}>
        Place your photo in /public/photos/ folder
      </p>
    </div>
  );
}

// Polaroid card for each photo
function PolaroidCard({ photo, index }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const rotations = [-3, 2, -2, 3, -1, 2];
  const rotation = rotations[index % rotations.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: rotation - 5 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.15, duration: 0.7, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.03, rotate: 0, zIndex: 10 }}
      style={{
        background: 'white',
        borderRadius: 8,
        padding: '14px 14px 56px',
        boxShadow: '0 20px 60px rgba(124,58,237,0.18), 0 4px 16px rgba(0,0,0,0.08)',
        width: '100%',
        maxWidth: 280,
        position: 'relative',
        cursor: 'default',
        userSelect: 'none',
      }}
    >
      {/* Photo */}
      <div style={{
        width: '100%',
        aspectRatio: '3/4',
        overflow: 'hidden',
        borderRadius: 4,
        background: 'linear-gradient(135deg, #fce7f3, #ede9fe)',
        position: 'relative',
      }}>
        {!error ? (
          <img
            src={photo.src}
            alt={photo.caption}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: loaded ? 'block' : 'none',
              borderRadius: 4,
            }}
          />
        ) : null}
        {(!loaded || error) && <PhotoPlaceholder caption={photo.caption} />}
      </div>

      {/* Caption */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 14px' }}>
        <p style={{
          fontFamily: 'var(--font-script)',
          fontSize: '1rem',
          color: '#7c3aed',
          textAlign: 'center',
          lineHeight: 1.3,
        }}>
          {photo.caption}
        </p>
        {photo.subcaption && (
          <p style={{
            fontSize: '0.7rem',
            color: '#c084fc',
            textAlign: 'center',
            marginTop: 2,
          }}>
            {photo.subcaption}
          </p>
        )}
      </div>

      {/* Sticker */}
      <div style={{
        position: 'absolute',
        top: -10,
        right: -8,
        fontSize: '1.6rem',
        transform: 'rotate(15deg)',
        userSelect: 'none',
      }}>
        {['💗', '🌸', '✨', '💕'][index % 4]}
      </div>

      {/* Heart sticker */}
      <div style={{
        position: 'absolute',
        top: -10,
        left: 10,
        fontSize: '1.2rem',
        transform: 'rotate(-10deg)',
      }}>
        {['🌟', '💖', '🎀', '💫'][index % 4]}
      </div>
    </motion.div>
  );
}

export default function Memories() {
  return (
    <motion.div
      className="section"
      style={{
        background: 'linear-gradient(160deg, #fff5ff 0%, #fce7f3 40%, #ede9fe 100%)',
        minHeight: '100dvh',
        paddingTop: 60,
        paddingBottom: 60,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Background decorative elements */}
      {['💗', '🌸', '💕', '✨', '💫', '🎀'].map((e, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: `${10 + (i * 18) % 80}%`,
            left: i % 2 === 0 ? '2%' : undefined,
            right: i % 2 !== 0 ? '2%' : undefined,
            fontSize: '1.6rem',
            opacity: 0.3,
            userSelect: 'none',
          }}
          animate={{ y: [0, -15, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
        >
          {e}
        </motion.div>
      ))}

      <div style={{ textAlign: 'center', zIndex: 10, width: '100%', maxWidth: 600 }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading" style={{ fontSize: 'clamp(1.8rem, 6vw, 2.6rem)' }}>
            {config.messages.memoriesHeading}
          </h2>
          <p className="section-subheading">
            {config.messages.memoriesGujarati}
          </p>
          <p style={{
            fontSize: 'clamp(0.85rem, 3vw, 0.95rem)',
            color: '#9d4edd',
            marginBottom: 40,
            lineHeight: 1.6,
            fontStyle: 'italic',
            fontFamily: 'var(--font-lora)',
          }}>
            "{config.messages.memoriesEnglish}"
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 40,
          padding: '0 16px',
        }}>
          {config.photos.map((photo, i) => (
            <PolaroidCard key={i} photo={photo} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: 40,
            fontSize: '0.8rem',
            color: '#c084fc',
            fontFamily: 'var(--font-script)',
            fontSize: '1rem',
          }}
        >
          Every photo tells our story 💗
        </motion.p>
      </div>
    </motion.div>
  );
}
