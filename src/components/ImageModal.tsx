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
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-[#0a0a0a]/90"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-[#fafaf8] border border-[#0a0a0a] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#0a0a0a]/15 bg-[#fafaf8]">
          <div className="truncate mr-3 font-mono text-[11px] tracking-[0.2em] uppercase text-[#0a0a0a] font-medium">
            {title}
          </div>

          <button
            onClick={onClose}
            className="p-1 text-[#71717a] hover:text-[#0a0a0a] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="p-4 bg-[#0a0a0a] max-h-[75vh] flex items-center justify-center overflow-auto">
          <img 
            src={imageUrl} 
            alt={caption || title} 
            className="max-h-[70vh] w-auto max-w-full object-contain" 
          />
        </div>

        {/* Caption */}
        {caption && (
          <div className="px-6 py-3 border-t border-[#0a0a0a]/15 bg-[#fafaf8]">
            <p className="font-mono text-xs text-[#71717a] tracking-[0.1em] uppercase">
              {caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
