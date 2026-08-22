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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative max-w-4xl w-full bg-[#0D131F] border border-[#253347] rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#253347] bg-[#06090E]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF]"></span>
            <span className="font-mono text-xs font-bold text-[#F4EFE6] tracking-wider uppercase truncate">
              {title}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8899A6] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Image */}
        <div className="p-4 flex flex-col items-center justify-center bg-[#090D16] max-h-[75vh] overflow-auto">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-[65vh] w-auto max-w-full object-contain rounded border border-[#253347] shadow-lg"
          />
          {caption && (
            <p className="mt-3 font-mono text-xs text-[#94A3B8] text-center max-w-xl">
              {caption}
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-2.5 border-t border-[#253347] bg-[#06090E] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
          <span>VERIFIED ASSET // ARTIFACT ARCHIVE</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-[#1E293B] hover:bg-[#334155] text-[#F4EFE6] transition-colors"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
