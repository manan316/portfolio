import React from 'react';
import { useTextScramble } from '../hooks/useTextScramble';

interface DecryptedTextProps {
  text: string;
  className?: string;
  speed?: number;
  initialDelay?: number;
  hoverScramble?: boolean;
  trigger?: boolean;
  as?: React.ElementType;
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  className = '',
  speed = 25,
  initialDelay = 150,
  hoverScramble = true,
  trigger = true,
  as: Component = 'span'
}) => {
  const { displayText, triggerScramble, isScrambling } = useTextScramble(text, {
    speed,
    initialDelay,
    trigger
  });

  return (
    <Component
      className={`${className} ${isScrambling ? 'text-[#00F0FF] select-none transition-colors duration-150' : ''}`}
      onMouseEnter={hoverScramble ? triggerScramble : undefined}
      title={hoverScramble ? 'Hover to re-encrypt/decrypt' : undefined}
    >
      {displayText}
    </Component>
  );
};
