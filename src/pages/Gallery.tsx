
import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CategoryFilter from "@/components/gallery/CategoryFilter";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import ImageLightbox from "@/components/gallery/ImageLightbox";
import GalleryHero from "@/components/gallery/GalleryHero";
import { categories, galleryItems } from "@/data/galleryData";
import { toast } from "@/components/ui/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const Gallery = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const categoryParam = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState(categoryParam || "wedding-dresses");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const isMobile = useIsMobile();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Update active category when URL query parameter changes
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
      // Only show toast on category change, not initial load
      if (selectedImage === null) {
        toast({
          title: `קטגוריה: ${categories.find(c => c.id === categoryParam)?.name || categoryParam}`,
          duration: 2000,
        });
      }
    }
  }, [categoryParam]);

  const filteredItems = galleryItems.filter(item => item.category === activeCategory);
  const galleryImages = filteredItems.map(item => item.image);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const handleCategoryChange = (category: string) => {
    // Update URL with the selected category
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("category", category);
    window.history.pushState({}, "", `${location.pathname}?${newSearchParams.toString()}`);
    
    // Update state
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <GalleryHero />
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          onCategoryChange={handleCategoryChange} 
        />
        <GalleryGrid 
          items={filteredItems} 
          onImageClick={openLightbox} 
        />
      </main>
      
      <ImageLightbox 
        image={selectedImage} 
        onClose={closeLightbox}
        galleryImages={galleryImages}
      />
      
      <Footer />
    </div>
  );
};

export default Gallery;
