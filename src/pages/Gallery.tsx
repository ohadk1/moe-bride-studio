import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CategoryFilter from "@/components/gallery/CategoryFilter";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import ImageLightbox from "@/components/gallery/ImageLightbox";
import { categories, galleryItems } from "@/data/galleryData";
import { toast } from "@/components/ui/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

// Hero מעוצב
const GalleryHero = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-[#fffaf6] to-gray-50 text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-brand-turquoise/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <h1 className="text-4xl md:text-5xl font-black text-brand-gold mb-4 tracking-tight relative z-10 drop-shadow-md">
        הגלריה שלנו
      </h1>
      <p className="text-base md:text-lg text-foreground/70 max-w-xl mx-auto leading-relaxed z-10 relative">
        צפו בתמונות מהעבודות האחרונות שלנו – שמלות כלה וערב, איפור, תסרוקות ותחפושות
      </p>

      <div className="mt-6 w-24 h-[2px] mx-auto bg-brand-gold/50 rounded-full" />
    </section>
  );
};

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
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("category", category);
    window.history.pushState({}, "", `${location.pathname}?${newSearchParams.toString()}`);
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
        <GalleryGrid items={filteredItems} onImageClick={openLightbox} />
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
