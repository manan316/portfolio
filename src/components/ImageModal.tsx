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
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50">
          <div className="truncate mr-3">
            <span className="text-xs font-bold text-slate-900 truncate block">
              {title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="p-3 bg-slate-100/60 max-h-[70vh] flex items-center justify-center overflow-auto">
          <img 
            src={imageUrl} 
            alt={caption || title} 
            className="max-h-[65vh] w-auto max-w-full rounded-xl object-contain shadow-sm border border-slate-200/80" 
          />
        </div>

        {/* Caption */}
        {caption && (
          <div className="px-5 py-3 border-t border-slate-200 bg-white">
            <p className="text-xs text-slate-700 font-medium">
              {caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
