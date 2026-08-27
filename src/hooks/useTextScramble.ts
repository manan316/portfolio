import { useState, useEffect, useRef, useCallback } from 'react';

const CYBER_CHARS = '01!#%&*?<>~█▓▒░ABCDEF0123456789';

interface UseTextScrambleOptions {
  speed?: number;
  initialDelay?: number;
  chars?: string;
  trigger?: boolean;
}

export const useTextScramble = (
  finalText: string,
  options: UseTextScrambleOptions = {}
) => {
  const {
    speed = 30,
    initialDelay = 100,
    chars = CYBER_CHARS,
    trigger = true
  } = options;

  // Initialize with scrambled ciphertext
  const [displayText, setDisplayText] = useState(() => {
    return finalText
      .split('')
      .map(char => (char === ' ' || char === '\n' ? char : chars[Math.floor(Math.random() * chars.length)]))
      .join('');
  });
  const [isScrambling, setIsScrambling] = useState(false);
  const frameRef = useRef<number | null>(null);

  const scramble = useCallback(() => {
    let iteration = 0;
    setIsScrambling(true);

    if (frameRef.current) clearInterval(frameRef.current);

    const interval = window.setInterval(() => {
      setDisplayText(() => {
        return finalText
          .split('')
          .map((char, index) => {
            if (char === ' ' || char === '\n') return char;
            if (index < iteration) {
              return finalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
      });

      if (iteration >= finalText.length) {
        setIsScrambling(false);
        clearInterval(interval);
      }

      iteration += 1 / 2.5;
    }, speed);

    frameRef.current = interval;
  }, [finalText, speed, chars]);

  useEffect(() => {
    if (trigger) {
      const timeout = setTimeout(scramble, initialDelay);
      return () => {
        clearTimeout(timeout);
        if (frameRef.current) clearInterval(frameRef.current);
      };
    }
  }, [trigger, initialDelay, scramble]);

  return { displayText, isScrambling, triggerScramble: scramble };
};
