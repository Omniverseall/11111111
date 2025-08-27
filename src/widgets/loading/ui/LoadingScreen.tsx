"use client";
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useTheme } from '@/app/providers';
import { Logo } from '@/shared/ui/Logo';

const palettes = {
  dark: {
    bgFrom: '#000000',
    bgTo: '#111111',
    textFrom: '#00ff88',
    textBlue: '#3b82f6',
    textVia: '#ffeb3b',
    textTo: '#00ff88',
  },
  light: {
    bgFrom: '#f8f8f8',
    bgTo: '#ffffff',
    textFrom: '#00ff88',
    textBlue: '#3b82f6',
    textVia: '#ffeb3b',
    textTo: '#00ff88',
  },
};

interface LoadingScreenProps {
  onComplete: () => void;
}

const container: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.25, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: 'easeInOut' } },
};

const letterVariants: Variants = {
  initial: { y: 28, opacity: 0, scale: 0.98, rotateX: -8, filter: 'blur(3px)' },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring' as const,
      stiffness: 160,
      damping: 16,
      mass: 0.8,
      duration: 0.5,
      delay: i * 0.05,
    },
  }),
};

const letters = 'EDOLINE'.split('');

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const { theme } = useTheme();
  const pal = theme === 'dark' ? palettes.dark : palettes.light;
  const [isVisible, setIsVisible] = useState(true);
  const [isFlashing] = useState(false);

  const SHOW_MS = 800;
  const EXIT_MS = 300;

  useEffect(() => {
    const el = document.getElementById('preload-overlay');
    if (el) el.remove();

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, EXIT_MS);
    }, SHOW_MS);

    return () => clearTimeout(hideTimer);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          variants={container}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ backgroundImage: `linear-gradient(135deg, ${pal.bgFrom}, ${pal.bgTo})` }}
        >
          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: 0.05, duration: 0.3 } }}
              className="mb-6 flex justify-center"
            >
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={
                  isFlashing
                    ? { scale: [1, 1.2, 1], opacity: [1, 0.5, 1], transition: { duration: 1, repeat: 2 } }
                    : { scale: 1.5, opacity: 1 }
                }
              >
                <Logo className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40" width={160} height={160} />
              </motion.div>
            </motion.div>

            {!isFlashing && (
              <div className="flex items-center justify-center overflow-hidden select-none">
                {letters.map((ch, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 3.2, delay: i * 0.08, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                    style={{ marginInline: '0.06em' }}
                  >
                    <motion.span
                      custom={i}
                      variants={letterVariants}
                      initial="initial"
                      animate="animate"
                      className="font-display font-bold tracking-tight leading-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
                      style={{
                        backgroundImage: `linear-gradient(90deg, ${pal.textFrom}, ${pal.textBlue}, ${pal.textVia}, ${pal.textTo})`,
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                      }}
                    >
                      {ch}
                    </motion.span>
                  </motion.span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};