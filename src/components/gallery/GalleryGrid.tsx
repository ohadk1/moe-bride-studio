
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  onImageClick: (image: string) => void;
}

const GalleryGrid = ({ items, onImageClick }: GalleryGridProps) => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div 
              key={item.id}
              className="animate-fade-in opacity-0 group"
              style={{ animationDelay: `${0.1 * (index % 4)}s` }}
            >
              <div 
                className="overflow-hidden rounded-lg shadow-md cursor-pointer relative"
                onClick={() => onImageClick(item.image)}
              >
                <AspectRatio ratio={3/4} className="bg-gray-100">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.category} 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>
            </div>
          ))}
        </div>
        
        {items.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl text-gray-500">אין תמונות בקטגוריה זו</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
