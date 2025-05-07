
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ImageLightboxProps {
  image: string | null;
  onClose: () => void;
  galleryImages?: string[];
}

const ImageLightbox = ({ image, onClose, galleryImages = [] }: ImageLightboxProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!image || galleryImages.length === 0) return;
    const index = galleryImages.findIndex(img => img === image);
    if (index !== -1) {
      setCurrentImageIndex(index);
    }
    
    // Add keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') navigateImage('prev');
      if (e.key === 'ArrowLeft') navigateImage('next');
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [image, galleryImages, onClose]);
  
  if (!image) return null;
  
  const currentImage = galleryImages.length > 0 ? galleryImages[currentImageIndex] : image;
  
  const navigateImage = (direction: 'next' | 'prev') => {
    if (galleryImages.length <= 1) return;
    
    if (direction === 'next') {
      setCurrentImageIndex((prev) => 
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentImageIndex((prev) => 
        prev === 0 ? galleryImages.length - 1 : prev - 1
      );
    }
  };
  
  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex flex-col justify-center items-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Close button */}
      <button 
        className="absolute top-4 right-4 md:top-6 md:right-6 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors z-50"
        onClick={onClose}
        aria-label="סגור"
      >
        <X size={isMobile ? 24 : 28} />
      </button>
      
      {/* Image container */}
      <div 
        className="relative max-w-7xl w-full h-full flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <img 
          src={currentImage} 
          alt="תמונה מוגדלת" 
          className="max-w-full max-h-[85vh] object-contain select-none"
        />
        
        {/* Navigation buttons - only show when there are multiple images */}
        {galleryImages.length > 1 && (
          <>
            <button
              onClick={(e) => { 
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-2 md:left-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
              aria-label="תמונה קודמת"
            >
              <ChevronLeft size={isMobile ? 24 : 32} />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-2 md:right-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
              aria-label="תמונה הבאה"
            >
              <ChevronRight size={isMobile ? 24 : 32} />
            </button>
          </>
        )}
      </div>
      
      {/* Image counter */}
      {galleryImages.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white text-sm">
          {currentImageIndex + 1} / {galleryImages.length}
        </div>
      )}
    </div>
  );
};

export default ImageLightbox;
