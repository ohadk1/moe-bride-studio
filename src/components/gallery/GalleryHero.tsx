
import React from "react";

const GalleryHero = () => {
  return (
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
  );
};

export default GalleryHero;
