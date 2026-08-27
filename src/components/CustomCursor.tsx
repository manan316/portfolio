import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const ringPosition = useRef({ x: -100, y: -100 });
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // Only enable custom cursor on fine pointer devices (desktop/mouse)
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable / interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = !!target.closest(
          'a, button, input, textarea, select, [role="button"], .interactive-btn, .tactical-glass-card, [tabindex="0"]'
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

    // Smooth lerp animation for outer trailing reticle
    const animateRing = () => {
      ringPosition.current.x += (mousePosition.x - ringPosition.current.x) * 0.18;
      ringPosition.current.y += (mousePosition.y - ringPosition.current.y) * 0.18;

      const ringEl = document.getElementById('cyber-cursor-ring');
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
      
      {/* Outer Trailing Cyber Reticle Ring */}
      <div
        id="cyber-cursor-ring"
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-[width,height,border-color,background-color] duration-200 ease-out flex items-center justify-center ${
          isHovered
            ? 'w-11 h-11 border-2 border-[#00FF9D] bg-[#00FF9D]/10 shadow-[0_0_20px_rgba(0,255,157,0.5),inset_0_0_10px_rgba(0,255,157,0.2)]'
            : isClicked
            ? 'w-6 h-6 border-2 border-[#00F0FF] bg-[#00F0FF]/25 shadow-[0_0_25px_rgba(0,240,255,0.7)]'
            : 'w-8 h-8 border border-[#00F0FF]/60 bg-transparent shadow-[0_0_12px_rgba(0,240,255,0.3)]'
        }`}
        style={{ willChange: 'transform' }}
      >
        {/* Holographic Tactical Reticle Crosshairs when hovered */}
        {isHovered && (
          <>
            <span className="absolute w-1.5 h-0.5 bg-[#00FF9D] -top-1 left-1/2 -translate-x-1/2"></span>
            <span className="absolute w-1.5 h-0.5 bg-[#00FF9D] -bottom-1 left-1/2 -translate-x-1/2"></span>
            <span className="absolute w-0.5 h-1.5 bg-[#00FF9D] -left-1 top-1/2 -translate-y-1/2"></span>
            <span className="absolute w-0.5 h-1.5 bg-[#00FF9D] -right-1 top-1/2 -translate-y-1/2"></span>
          </>
        )}
      </div>

      {/* Center Precise Laser Dot */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-transform duration-75 ${
          isHovered
            ? 'w-1.5 h-1.5 bg-[#00FF9D] shadow-[0_0_10px_#00FF9D]'
            : isClicked
            ? 'w-2 h-2 bg-[#00F0FF] scale-125 shadow-[0_0_15px_#00F0FF]'
            : 'w-1.5 h-1.5 bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]'
        }`}
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) translate(-50%, -50%)`,
          willChange: 'transform'
        }}
      />

    </div>
  );
};
