import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "שמלות כלה",
    image: "/images/bridegallery.webp",
    link: "/gallery?category=wedding-dresses",
  },
  {
    id: 2,
    title: "שמלות ערב",
    image: "https://images.unsplash.com/photo-1585241936939-be4099591252?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "/gallery?category=evening-dresses",
  },
  {
    id: 3,
    title: "איפור כלה",
    image: "/images/ipur.webp",
    link: "/gallery?category=makeup",
  },
  {
    id: 4,
    title: "תסרוקות",
    image: "/images/tisrokot.webp",
    link: "/gallery?category=hairstyles",
  },
  {
    id: 5,
    title: "איפור ערב",
    image: "https://images.unsplash.com/photo-1571646034647-52e4dfa9d6bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "/gallery?category=evening-makeup",
  },
  {
    id: 6,
    title: "תחפושות לפורים",
    image: "/images/purim.webp",
    link: "/gallery?category=costumes",
  },
];

const GalleryPreview = () => {
  return (
    <section className="py-20 bg-brand-cream/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 relative inline-block">
            <span className="relative z-10">הגלריה שלנו</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-gold/20 -z-0"></span>
          </h2>
          <p className="text-lg text-foreground/80">
            צפו בעבודות שלנו - שמלות כלה וערב, איפור, תסרוקות ותחפושות
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.id} 
              to={category.link}
              className="group block relative rounded-lg overflow-hidden shadow-md h-64 animate-fade-in opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ objectPosition: "center 30%" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-white text-xl font-semibold mb-1">{category.title}</h3>
                <span className="inline-block text-white/80 text-sm">לגלריה המלאה</span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-brand-gold hover:bg-brand-gold/90 text-white">
            <Link to="/gallery">לגלריה המלאה</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
