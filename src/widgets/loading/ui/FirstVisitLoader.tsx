"use client";
import React, { useEffect, useState } from 'react';
import { LoadingScreen } from './LoadingScreen';

export const FirstVisitLoader: React.FC = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;
  return <LoadingScreen onComplete={() => setShow(false)} />;
};