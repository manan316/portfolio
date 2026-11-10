import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { MemphisCircle, MemphisTriangle } from './MemphisOrnament';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  caption?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  caption
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-white border-4 border-black shadow-[10px_10px_0_#000000] select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b-4 border-black bg-[#feca57]">
          <div className="flex items-center gap-2.5 truncate mr-3">
            <span className="w-3.5 h-3.5 rounded-full bg-[#ff6b6b] border-2 border-black inline-block shrink-0"></span>
            <span className="font-sans font-black text-sm uppercase tracking-wider text-black truncate">
              {title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 bg-white border-2 border-black shadow-[2px_2px_0_#000000] hover:bg-[#ff6b6b] hover:text-white transition-colors duration-150"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Image */}
        <div className="p-4 sm:p-6 flex flex-col items-center justify-center bg-[#fdf6e3] max-h-[75vh] overflow-auto">
          <div className="border-4 border-black bg-black p-1 shadow-[4px_4px_0_#000000]">
            <img
              src={imageUrl}
              alt={title}
              className="max-h-[60vh] w-auto max-w-full object-contain"
            />
          </div>

          {caption && (
            <div className="mt-4 p-3 bg-white border-3 border-black shadow-[3px_3px_0_#000000] max-w-xl text-center">
              <p className="font-sans font-bold text-xs sm:text-sm text-black">
                {caption}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-2.5 bg-[#48dbfb] border-t-3 border-black flex items-center justify-between font-mono text-[11px] font-bold text-black px-4">
          <span>MEMPHIS LIGHTBOX // 1981</span>
          <span>PRESS [ESC] TO DISMISS</span>
        </div>

      </div>
    </div>
  );
};
