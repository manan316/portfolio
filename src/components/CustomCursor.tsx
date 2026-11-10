import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const ringPosition = useRef({ x: -100, y: -100 });
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = !!target.closest(
          'a, button, input, textarea, select, [role="button"], .memphis-btn, .memphis-card, [tabindex="0"]'
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const animateRing = () => {
      ringPosition.current.x += (mousePosition.x - ringPosition.current.x) * 0.22;
      ringPosition.current.y += (mousePosition.y - ringPosition.current.y) * 0.22;

      const ringEl = document.getElementById('memphis-cursor-ring');
      if (ringEl) {
        ringEl.style.transform = `translate3d(${ringPosition.current.x}px, ${ringPosition.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(animateRing);
    };

    requestRef.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [mousePosition.x, mousePosition.y, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none hidden md:block">
      
      {/* Outer Trailing Memphis Geometric Ring */}
      <div
        id="memphis-cursor-ring"
        className={`fixed top-0 left-0 pointer-events-none transition-[width,height,background-color,border-radius] duration-150 ease-out border-3 border-black ${
          isHovered
            ? 'w-10 h-10 bg-[#ff6b6b] rounded-none rotate-12 shadow-[3px_3px_0_#000000]'
            : isClicked
            ? 'w-5 h-5 bg-[#1dd1a1] rounded-full scale-90'
            : 'w-7 h-7 bg-[#feca57] rounded-full shadow-[2px_2px_0_#000000]'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Center Precise Black Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none"
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) translate(-50%, -50%)`,
          willChange: 'transform'
        }}
      />

    </div>
  );
};
