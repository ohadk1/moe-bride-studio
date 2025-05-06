
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CategoryFilter from "@/components/gallery/CategoryFilter";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import ImageLightbox from "@/components/gallery/ImageLightbox";
import GalleryHero from "@/components/gallery/GalleryHero";
import { categories, galleryItems } from "@/data/galleryData";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("wedding-dresses");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <GalleryHero />
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        <GalleryGrid 
          items={filteredItems} 
          onImageClick={openLightbox} 
        />
      </main>
      
      <ImageLightbox 
        image={selectedImage} 
        onClose={closeLightbox} 
      />
      
      <Footer />
    </div>
  );
};

export default Gallery;
