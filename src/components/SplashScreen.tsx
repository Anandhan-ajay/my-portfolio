import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // The splash screen animation ends at 3.2s + 0.9s = 4.1s
    // We add a little extra time before removing it from the DOM
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="splash-container">
      <div className="glow-radial"></div>
      <div className="glow-blob one"></div>
      <div className="glow-blob two"></div>

      <div className="stage-splash">
        <div className="ring-splash outer"></div>
        <div className="ring-splash inner"></div>

        <svg viewBox="0 0 200 200" aria-hidden="true">
          <defs>
            <linearGradient id="triGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="hsl(280, 95%, 65%)" />
              <stop offset="50%"  stopColor="hsl(330, 90%, 60%)" />
              <stop offset="100%" stopColor="hsl(190, 95%, 55%)" />
            </linearGradient>
          </defs>
          {/* Hexagon */}
          <polygon className="hex-stroke" points="100,15 170,55 170,145 100,185 30,145 30,55" />
          <polygon className="hex-fill"   points="100,15 170,55 170,145 100,185 30,145 30,55" />
          {/* Triangle inside */}
          <polygon className="tri-stroke" points="100,30 178,168 22,168" />
          <polygon className="tri-fill"   points="100,30 178,168 22,168" />
        </svg>

        <div className="ak-splash">AK</div>
      </div>

      <div className="reveal-splash">
        <h1>Anandhan K</h1>
        <p>Software Engineer</p>
        <div className="bar-splash"><span></span></div>
      </div>
    </div>
  );
};

export default SplashScreen;
