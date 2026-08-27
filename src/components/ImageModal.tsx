import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

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
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-[#0F121E]/95 border border-[#00F0FF]/40 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_30px_rgba(0,240,255,0.25)] animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#08090D]/90">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] beacon-pulse shadow-[0_0_8px_#00FF9D]"></span>
            <span className="font-mono text-xs font-bold text-[#F1F5F9] tracking-wider uppercase truncate max-w-md sm:max-w-xl">
              {title}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-[#94A3B8] hover:text-[#00F0FF] hover:bg-white/[0.08] hover:rotate-90 transition-all duration-200"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Image */}
        <div className="p-4 sm:p-6 flex flex-col items-center justify-center bg-[#08090D]/95 max-h-[75vh] overflow-auto">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-[65vh] w-auto max-w-full object-contain rounded-2xl border border-white/[0.08] shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
          />
          {caption && (
            <p className="mt-3.5 font-mono text-xs text-[#CBD5E1] text-center max-w-xl leading-relaxed glass-inset p-3 rounded-xl border border-white/[0.08]">
              {caption}
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-white/[0.08] bg-[#08090D]/90 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
          <span className="flex items-center gap-1.5 text-[#00FF9D]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VERIFIED ASSET // CRYPTOGRAPHIC ARTIFACT ARCHIVE</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#38BDF8] text-[#08090D] hover:from-[#38BDF8] hover:to-[#00FF9D] transition-all hover:scale-105 font-bold interactive-btn shadow-md"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
