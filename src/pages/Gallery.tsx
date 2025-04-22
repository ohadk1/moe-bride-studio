import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", name: "הכל" },
  { id: "wedding-dresses", name: "שמלות כלה" },
  { id: "evening-dresses", name: "שמלות ערב" },
  { id: "makeup", name: "איפור" },
  { id: "hairstyles", name: "תסרוקות" },
  { id: "costumes", name: "תחפושות" },
];

const galleryItems = [
  {
    id: 1,
    title: "שמלת כלה קלאסית",
    category: "wedding-dresses",
    image: "https://images.unsplash.com/photo-1566145445090-550a9a6e8f2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "שמלת כלה בוהו",
    category: "wedding-dresses",
    image: "https://images.unsplash.com/photo-1596451190630-186aff535bf2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "שמלת ערב אדומה",
    category: "evening-dresses",
    image: "https://images.unsplash.com/photo-1585241936939-be4099591252?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "שמלת ערב שחורה",
    category: "evening-dresses",
    image: "https://images.unsplash.com/photo-1562137369-1a1a0bc66744?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "איפור כלה טבעי",
    category: "makeup",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "איפור ערב דרמטי",
    category: "makeup",
    image: "https://images.unsplash.com/photo-1571646034647-52e4dfa9d6bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    title: "תסרוקת כלה אסופה",
    category: "hairstyles",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    title: "תסרוקת ערב מורכבת",
    category: "hairstyles",
    image: "https://images.unsplash.com/photo-1495603566227-94cc5d2e821a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    title: "תחפושת מלכת הלבבות",
    category: "costumes",
    image: "https://images.unsplash.com/photo-1523215713844-b8e594de9429?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    title: "תחפושת נסיכה",
    category: "costumes",
    image: "https://images.unsplash.com/photo-1571775300229-7e84bff45eae?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    title: "שמלת כלה וינטג׳",
    category: "wedding-dresses",
    image: "https://images.unsplash.com/photo-1527180718958-5c4199bb9489?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    title: "שמלת ערב כסופה",
    category: "evening-dresses",
    image: "https://images.unsplash.com/photo-1604661237191-73ceaa4a8145?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

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
