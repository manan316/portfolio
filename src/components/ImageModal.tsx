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
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-[#1a3055]/75"
      onClick={onClose}
    >
      <div 
        className="woodblock-card woodblock-bar-vermilion relative max-w-4xl w-full bg-[#f5f0e1] border-3 border-[#1a3055] shadow-woodblock-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b-2 border-[#1a3055]/20 bg-[#f5f0e1]">
          <div className="truncate mr-3">
            <span className="font-serif text-sm font-bold text-[#1a3055] truncate block">
              {title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 border-2 border-[#1a3055] bg-[#d4553a] text-[#f5f0e1] flex items-center justify-center hover:opacity-90 transition-opacity"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Image Display */}
        <div className="p-4 bg-[#f5f0e1] max-h-[70vh] flex items-center justify-center overflow-auto">
          <img 
            src={imageUrl} 
            alt={caption || title} 
            className="max-h-[65vh] w-auto max-w-full object-contain border-3 border-[#1a3055] shadow-woodblock" 
          />
        </div>

        {/* Caption */}
        {caption && (
          <div className="px-5 py-3 border-t-2 border-[#1a3055]/20 bg-[#f5f0e1]">
            <p className="font-serif text-xs text-[#1a3055]/90 font-medium">
              {caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
