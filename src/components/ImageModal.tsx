import React, { useEffect } from 'react';
import { X } from 'lucide-react';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-[#18181A] border border-[#2E2E35] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#2E2E35] bg-[#121214]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E06D3B] beacon-pulse shadow-[0_0_6px_#E06D3B]"></span>
            <span className="font-mono text-xs font-bold text-[#FAF5EE] tracking-wider uppercase truncate max-w-md sm:max-w-xl">
              {title}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A8A29E] hover:text-white hover:bg-white/10 hover:rotate-90 transition-all duration-200"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Image */}
        <div className="p-4 sm:p-6 flex flex-col items-center justify-center bg-[#141416] max-h-[75vh] overflow-auto">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg border border-[#2E2E35] shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
          />
          {caption && (
            <p className="mt-3.5 font-mono text-xs text-[#D6D0C5] text-center max-w-xl leading-relaxed bg-[#18181A]/90 p-2.5 rounded-lg border border-white/5">
              {caption}
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-[#2E2E35] bg-[#121214] flex items-center justify-between text-[11px] font-mono text-[#A8A29E]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]"></span>
            <span>VERIFIED ASSET // ARTIFACT ARCHIVE</span>
          </span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg bg-[#2E2E35] hover:bg-[#E06D3B] text-[#FAF5EE] hover:text-white transition-all hover:scale-105 font-bold interactive-btn"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
