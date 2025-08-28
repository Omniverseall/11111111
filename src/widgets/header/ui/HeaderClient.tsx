"use client";
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher';
import { Logo } from '@/shared/ui/Logo';
import Link from 'next/link';

export const HeaderClient: React.FC<{ navLinks: { label: string; href: string }[] }> = ({ navLinks }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
          ${isScrolled || isMenuOpen ? 'bg-themed-surface/80 backdrop-blur-xl border-b border-themed-border' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="#" aria-label="EdoLine Home" className="flex items-center space-x-3">
              <Logo />
              <span className="text-2xl font-bold text-themed-foreground">EdoLine</span>
            </Link>
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-themed-muted hover:text-themed-foreground transition-colors text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-2">
              <ThemeSwitcher />
              <LanguageSwitcher />
              <button
                className="lg:hidden p-2 rounded-md text-themed-muted hover:text-themed-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden bg-themed-surface border-t border-themed-border">
            <nav className="flex flex-col p-4 space-y-1">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-themed-muted hover:text-themed-foreground hover:bg-white/5 light:hover:bg-black/5 transition-colors py-3 px-3 rounded-md text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};