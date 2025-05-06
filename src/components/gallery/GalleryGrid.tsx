
import React from "react";

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
                className="overflow-hidden rounded-lg shadow-md cursor-pointer h-64 relative"
                onClick={() => onImageClick(item.image)}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <h3 className="text-white font-medium">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
