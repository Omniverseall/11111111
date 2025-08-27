"use client";
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/app/providers';

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg glass hover:bg-white/20 dark:hover:bg-white/10 light:hover:bg-black/5 transition-colors relative w-9 h-9 flex items-center justify-center overflow-hidden"
      aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    >
      <span
        className={`absolute transition-all duration-300 ease-in-out transform ${
          theme === 'dark'
            ? 'opacity-100 rotate-0 scale-100'
            : 'opacity-0 -rotate-90 scale-0'
        }`}
      >
        <Sun className="w-5 h-5 text-themed-foreground" />
      </span>
      <span
        className={`absolute transition-all duration-300 ease-in-out transform ${
          theme === 'light'
            ? 'opacity-100 rotate-0 scale-100'
            : 'opacity-0 rotate-90 scale-0'
        }`}
      >
        <Moon className="w-5 h-5 text-themed-foreground" />
      </span>
    </button>
  );
};
