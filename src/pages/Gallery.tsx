import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "wedding-dresses", name: "שמלות כלה" },
  { id: "evening-dresses", name: "שמלות ערב" },
  { id: "makeup", name: "איפור" },
  { id: "hairstyles", name: "תסרוקות" },
  { id: "costumes", name: "תחפושות" },
];

const galleryItems = [

  {
    id: 1,
    title: "שמלת ערב אדומה",
    category: "evening-dresses",
    image: "https://images.unsplash.com/photo-1585241936939-be4099591252?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "שמלת ערב שחורה",
    category: "evening-dresses",
    image: "https://images.unsplash.com/photo-1562137369-1a1a0bc66744?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "איפור כלה טבעי",
    category: "makeup",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "איפור ערב דרמטי",
    category: "makeup",
    image: "https://images.unsplash.com/photo-1571646034647-52e4dfa9d6bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "תסרוקת כלה אסופה",
    category: "hairstyles",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "תסרוקת ערב מורכבת",
    category: "hairstyles",
    image: "https://images.unsplash.com/photo-1495603566227-94cc5d2e821a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    title: "תחפושת מלכת הלבבות",
    category: "costumes",
    image: "https://images.unsplash.com/photo-1523215713844-b8e594de9429?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    title: "תחפושת נסיכה",
    category: "costumes",
    image: "https://images.unsplash.com/photo-1571775300229-7e84bff45eae?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    title: "שמלת כלה בעיצוב ייחודי",
    category: "wedding-dresses",
    image: "/lovable-uploads/4615d0db-4bf9-4804-9da1-d8c7c6c9aac8.png",
  },
  {
    id: 10,
    title: "שמלת ערב כסופה",
    category: "evening-dresses",
    image: "https://images.unsplash.com/photo-1604661237191-73ceaa4a8145?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  // Added new wedding dress images
  {
    id: 11,
    title: "שמלת כלה בעיצוב אישי",
    category: "wedding-dresses",
    image: "/lovable-uploads/0f90daf0-f02c-4cd5-9e73-41ee1a0e57dd.png",
  },
  {
    id: 12,
    title: "שמלת כלה רומנטית",
    category: "wedding-dresses",
    image: "/lovable-uploads/2adacba5-51d2-4f52-9150-1d5be2a20685.png",
  },
  {
    id: 13,
    title: "שמלת כלה אלגנטית",
    category: "wedding-dresses",
    image: "/lovable-uploads/61849ff2-7345-43bf-a21d-3565fb2f06a1.png",
  },
  {
    id: 14,
    title: "שמלת כלה מעוצבת",
    category: "wedding-dresses",
    image: "/lovable-uploads/7cda7a00-bcae-4652-859f-a94f6bb81199.png",
  },
  {
    id: 15,
    title: "שמלת כלה בדוגמת תחרה",
    category: "wedding-dresses",
    image: "/lovable-uploads/31495b65-4689-455e-b99f-310b49d57468.png",
  },
  {
    id: 16,
    title: "שמלת כלה בהתאמה אישית",
    category: "wedding-dresses",
    image: "/lovable-uploads/4f31db20-e2ad-4c92-98df-219faeedf6e5.png",
  },
  {
    id: 17,
    title: "שמלת כלה מיוחדת",
    category: "wedding-dresses",
    image: "/lovable-uploads/f290079c-cfb2-4441-92ec-ca14c520d141.png",
  },
  {
    id: 18,
    title: "שמלת כלה נשפכת",
    category: "wedding-dresses",
    image: "/lovable-uploads/124a57e6-caef-45ca-8193-b47a99322c60.png",
  },
  {
    id: 19,
    title: "שמלת כלה בעיצוב אומנותי",
    category: "wedding-dresses",
    image: "/lovable-uploads/c2962ce8-f42f-4536-9e5b-4374cd3218b8.png",
  },
  {
    id: 20,
    title: "שמלת כלה פרימיום",
    category: "wedding-dresses",
    image: "/lovable-uploads/b67acf0a-21a4-4a4f-929b-8f30f567ccf5.png",
  },
  {
    id: 21,
    title: "שמלת כלה חלומית",
    category: "wedding-dresses",
    image: "/lovable-uploads/e2d34bb3-b27b-4422-869e-f7145212d654.png",
  },
  {
    id: 22,
    title: "שמלת כלה מודרנית",
    category: "wedding-dresses",
    image: "/lovable-uploads/0ecd6976-9315-49c2-a439-8e925f2a7747.png",
  },
  {
    id: 23,
    title: "שמלת כלה בסגנון בוהו-שיק",
    category: "wedding-dresses",
    image: "/lovable-uploads/ccefe65e-54c0-440a-acd1-34f9f149f5ae.png",
  },
  {
    id: 24,
    title: "שמלת כלה עם פרפרים",
    category: "wedding-dresses",
    image: "/lovable-uploads/97c08227-7048-4b76-b984-09046f22413a.png",
  },
  {
    id: 25,
    title: "שמלת כלה עם חצאית נשפכת",
    category: "wedding-dresses",
    image: "/lovable-uploads/900a45c8-2d5f-47cf-ad0a-8280a77a1969.png",
  },
  {
    id: 26,
    title: "שמלת כלה בגזרה ייחודית",
    category: "wedding-dresses",
    image: "/lovable-uploads/a09b7530-2e85-43e2-a234-da1b77263dbc.png",
  },
  {
    id: 27,
    title: "שמלת כלה פרימיום משודרגת",
    category: "wedding-dresses",
    image: "/lovable-uploads/63cc3486-be56-47e5-9334-eb517d05d85b.png",
  },
  {
    id: 28,
    title: "שמלת כלה אוורירית",
    category: "wedding-dresses",
    image: "/lovable-uploads/8b77f7c2-7b96-44bd-a854-bfef7a082067.png",
  },
  {
    id: 29,
    title: "שמלת כלה קסומה",
    category: "wedding-dresses",
    image: "/lovable-uploads/0f196409-9a42-4b72-949b-7f6f38995e30.png",
  },
 
];

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
        {/* Header Section */}
        <section className="py-16 hero-section-bg">
          <div className="container mx-auto px-4 text-center hero-section-content">
            <h1 className="text-4xl font-bold mb-6 relative inline-block text-white">
              <span className="relative z-10">הגלריה שלנו</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-gold/20 -z-0"></span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-white/90">
              צפו בתמונות מהעבודות האחרונות שלנו - שמלות כלה וערב, איפור, תסרוקות ותחפושות
            </p>
          </div>
        </section>
        
        {/* Categories Filter */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={activeCategory === category.id 
                    ? "bg-brand-turquoise hover:bg-brand-turquoise/90" 
                    : "border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise/10"
                  }
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Gallery Grid */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <div 
                  key={item.id}
                  className="animate-fade-in opacity-0 group"
                  style={{ animationDelay: `${0.1 * (index % 4)}s` }}
                >
                  <div 
                    className="overflow-hidden rounded-lg shadow-md cursor-pointer h-64 relative"
                    onClick={() => openLightbox(item.image)}
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
      </main>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white text-4xl"
            onClick={closeLightbox}
            aria-label="סגור"
          >
            ×
          </button>
          <div className="relative max-w-5xl max-h-[80vh]" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="תמונה מוגדלת" 
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Gallery;
