"use client";
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useTheme } from '@/app/providers';

const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#3b82f6"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
    {...props}
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);

const palettes = {
  dark: {
    bgFrom: '#0B0D10',
    bgTo: '#111315',
    textFrom: '#16a34a',
    textBlue: '#3b82f6',
    textVia: '#e0c341',
    textTo: '#16a34a',
  },
  light: {
    bgFrom: '#FFFFFF',
    bgTo: '#F6F7F8',
    textFrom: '#166534',
    textBlue: '#3b82f6',
    textVia: '#e0c341',
    textTo: '#166534',
  },
};

interface LoadingScreenProps {
  onComplete: () => void;
}

const container: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.25, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.45, ease: 'easeInOut' } },
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
  const [isFlashing, setIsFlashing] = useState(true);

  const SHOW_MS = 1600;
  const FLASH_MS = 1000;
  const EXIT_MS = 450;

  useEffect(() => {
    const el = document.getElementById('preload-overlay');
    if (el) el.remove();

    const flashTimer = setTimeout(() => {
      setIsFlashing(false);
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, EXIT_MS);
      }, SHOW_MS);
      return () => clearTimeout(hideTimer);
    }, FLASH_MS);
    return () => clearTimeout(flashTimer);
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
                <Logo />
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