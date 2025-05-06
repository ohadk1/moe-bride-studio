
import React from "react";

interface ImageLightboxProps {
  image: string | null;
  onClose: () => void;
}

const ImageLightbox = ({ image, onClose }: ImageLightboxProps) => {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 text-white text-4xl"
        onClick={onClose}
        aria-label="סגור"
      >
        ×
      </button>
      <div className="relative max-w-5xl max-h-[80vh]" onClick={e => e.stopPropagation()}>
        <img 
          src={image} 
          alt="תמונה מוגדלת" 
          className="max-w-full max-h-[80vh] object-contain"
        />
      </div>
    </div>
  );
};

export default ImageLightbox;
