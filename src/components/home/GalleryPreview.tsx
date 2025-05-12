
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";

const categories = [{
  id: 1,
  title: "שמלות כלה",
  image: "/lovable-uploads/1c377703-a495-4717-b73e-58ef86f9692d.png",
  link: "/gallery?category=wedding-dresses"
}, {
  id: 2,
  title: "שמלות ערב",
  image: "/lovable-uploads/c949ffb8-9ab4-4de3-bbb5-5f473d254d18.png", 
  link: "/gallery?category=evening-dresses"
}, {
  id: 4,
  title: "תסרוקות",
  image: "/images/tisrokot.webp",
  link: "/gallery?category=hairstyles"
}, {
  id: 5,
  title: "איפור",
  image: "/lovable-uploads/40c87bce-0e79-4f88-a52f-88c0bef358fe.png",
  link: "/gallery?category=makeup"
}, {
  id: 6,
  title: "תחפושות לפורים",
  image: "/images/purim.webp",
  link: "/gallery?category=costumes"
}];

const GalleryPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  return <section ref={sectionRef} id="gallery-section" className="py-20 md:py-28 bg-gradient-to-b from-white via-[#fdf7f3] to-gray-50 relative overflow-hidden">
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
          {categories.map((category, index) => <Link key={category.id} to={category.link} className="group block relative rounded-lg overflow-hidden shadow-md h-64 animate-fade-in opacity-0" style={{
          animationDelay: `${0.1 * index}s`
        }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img src={category.image} alt={category.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" style={{
            objectPosition: "center 30%"
          }} />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-white text-xl font-semibold mb-1">{category.title}</h3>
                <span className="inline-block text-white/80 text-sm">לגלריה המלאה</span>
              </div>
            </Link>)}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-brand-gold hover:bg-brand-gold/90 text-white">
            <Link to="/gallery">לגלריה המלאה</Link>
          </Button>
        </div>
      </div>
    </section>;
};

export default GalleryPreview;
