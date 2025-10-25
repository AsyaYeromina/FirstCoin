import React, { useState, useEffect } from 'react';
import './WelcomeScreen.scss';

const WelcomeScreen = ({ onAnimationEnd }) => {
  const [show, setShow] = useState(true);
  const [animateLogo, setAnimateLogo] = useState(false);
  const [animateTitle, setAnimateTitle] = useState(false);

  useEffect(() => {
    // Start animations after component mounts
    setAnimateLogo(true);
    setAnimateTitle(true);

    const timer = setTimeout(() => {
      setShow(false);
      if (onAnimationEnd) {
        onAnimationEnd();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  if (!show) {
    return null; // Don't render if not showing
  }

  return (
    <div className="welcome-screen">
      <img
        src="/icons/pwa-512x512.png"
        alt="FirstCoin Logo"
        className={`welcome-logo ${animateLogo ? 'animate' : ''}`}
        width="150"
        height="150"
      />
      <h1 className={`welcome-title ${animateTitle ? 'animate' : ''}`}>FirstCoin</h1>
    </div>
  );
};

export default WelcomeScreen;
