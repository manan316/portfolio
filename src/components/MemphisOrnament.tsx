import React from 'react';

type OrnamentColor = 'coral' | 'honey' | 'electric-blue' | 'bubblegum' | 'mint' | 'grape' | 'black';

const colorMap: Record<OrnamentColor, string> = {
  coral: '#ff6b6b',
  honey: '#feca57',
  'electric-blue': '#48dbfb',
  bubblegum: '#ff9ff3',
  mint: '#1dd1a1',
  grape: '#5f27cd',
  black: '#000000',
};

interface OrnamentProps {
  color?: OrnamentColor;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const MemphisCircle: React.FC<OrnamentProps> = ({
  color = 'bubblegum',
  size = 36,
  className = '',
  style,
}) => (
  <div
    className={`rounded-full border-3 border-black ${className}`}
    style={{
      width: size,
      height: size,
      backgroundColor: colorMap[color],
      ...style,
    }}
  />
);

export const MemphisTriangle: React.FC<OrnamentProps> = ({
  color = 'honey',
  size = 36,
  className = '',
  style,
}) => {
  const c = colorMap[color];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={`drop-shadow-[2px_2px_0_#000000] ${className}`}
      style={style}
    >
      <polygon
        points="20,4 36,36 4,36"
        fill={c}
        stroke="#000000"
        strokeWidth="3"
        strokeLinejoin="miter"
      />
    </svg>
  );
};

export const MemphisWave: React.FC<OrnamentProps> = ({
  color = 'electric-blue',
  size = 48,
  className = '',
  style,
}) => {
  const c = colorMap[color];
  return (
    <svg
      width={size}
      height={Math.round(size * 0.45)}
      viewBox="0 0 60 26"
      className={className}
      style={style}
    >
      <path
        d="M 2 13 C 8 2, 14 2, 20 13 C 26 24, 32 24, 38 13 C 44 2, 50 2, 58 13"
        fill="none"
        stroke="#000000"
        strokeWidth="7"
        strokeLinecap="square"
      />
      <path
        d="M 2 13 C 8 2, 14 2, 20 13 C 26 24, 32 24, 38 13 C 44 2, 50 2, 58 13"
        fill="none"
        stroke={c}
        strokeWidth="4"
        strokeLinecap="square"
      />
    </svg>
  );
};

export const MemphisZigzag: React.FC<OrnamentProps> = ({
  color = 'coral',
  size = 48,
  className = '',
  style,
}) => {
  const c = colorMap[color];
  return (
    <svg
      width={size}
      height={Math.round(size * 0.4)}
      viewBox="0 0 64 24"
      className={className}
      style={style}
    >
      <polyline
        points="2,12 12,2 22,22 32,2 42,22 52,2 62,12"
        fill="none"
        stroke="#000000"
        strokeWidth="6"
        strokeLinejoin="miter"
      />
      <polyline
        points="2,12 12,2 22,22 32,2 42,22 52,2 62,12"
        fill="none"
        stroke={c}
        strokeWidth="3.5"
        strokeLinejoin="miter"
      />
    </svg>
  );
};

export const MemphisZigzagDivider: React.FC<{
  color?: 'coral' | 'honey' | 'blue' | 'mint';
  className?: string;
}> = ({ color = 'coral', className = '' }) => {
  return (
    <div
      className={`memphis-zigzag zigzag-${color} my-8 sm:my-12 ${className}`}
      aria-hidden="true"
    />
  );
};

export const MemphisCardOrnaments: React.FC<{
  variant?: 1 | 2 | 3 | 4;
}> = ({ variant = 1 }) => {
  if (variant === 1) {
    return (
      <div className="pointer-events-none overflow-visible select-none" aria-hidden="true">
        <MemphisCircle
          color="bubblegum"
          size={30}
          className="ornament ornament-1 -top-3 -right-3"
        />
        <MemphisTriangle
          color="honey"
          size={32}
          className="ornament ornament-2 -bottom-3 -left-3"
        />
        <MemphisWave
          color="electric-blue"
          size={44}
          className="ornament ornament-3 top-2 -left-4"
        />
      </div>
    );
  }

  if (variant === 2) {
    return (
      <div className="pointer-events-none overflow-visible select-none" aria-hidden="true">
        <MemphisZigzag
          color="coral"
          size={46}
          className="ornament ornament-1 -top-3 right-6"
        />
        <MemphisCircle
          color="mint"
          size={28}
          className="ornament ornament-2 -bottom-3 -right-2"
        />
        <MemphisTriangle
          color="electric-blue"
          size={30}
          className="ornament ornament-3 -top-2 -left-3"
        />
      </div>
    );
  }

  if (variant === 3) {
    return (
      <div className="pointer-events-none overflow-visible select-none" aria-hidden="true">
        <MemphisTriangle
          color="coral"
          size={34}
          className="ornament ornament-1 -top-3 -right-2"
        />
        <MemphisWave
          color="honey"
          size={42}
          className="ornament ornament-2 -bottom-2 right-6"
        />
        <MemphisCircle
          color="bubblegum"
          size={26}
          className="ornament ornament-3 -bottom-3 -left-3"
        />
      </div>
    );
  }

  return (
    <div className="pointer-events-none overflow-visible select-none" aria-hidden="true">
      <MemphisWave
        color="mint"
        size={46}
        className="ornament ornament-1 -top-2 left-6"
      />
      <MemphisCircle
        color="honey"
        size={32}
        className="ornament ornament-2 -top-3 -right-3"
      />
      <MemphisZigzag
        color="electric-blue"
        size={42}
        className="ornament ornament-3 -bottom-3 -right-2"
      />
      <MemphisTriangle
        color="bubblegum"
        size={28}
        className="ornament ornament-4 -bottom-3 left-4"
      />
    </div>
  );
};
