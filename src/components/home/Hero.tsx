import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <section className="relative min-h-screen md:min-h-[120vh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-[url('/images/herobride.webp')] bg-no-repeat bg-center bg-cover bg-fixed transform scale-110"
      ></div>
      
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-20 text-center relative z-10">
        <div className={`max-w-3xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Logo with subtle animation */}
          <div className="mb-6 mx-auto w-48 md:w-80 relative">
            <div className="absolute -inset-1 bg-white/10 rounded-full blur-md"></div>
            <img
              src="/logo-light.webp"
              alt="M.O.E bride studio"
              className="w-full h-auto relative z-10 drop-shadow-lg"
            />
          </div>

          {/* Heading with enhanced styling */}
          <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            יצירת שמלת <span className="text-brand-gold">החלומות</span> שלך
          </h1>

          {/* Description with better readability */}
          <p className={`text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-lg leading-relaxed transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            בהתאמה אישית לגופך ולסגנונך האישי – שירות מקצועי, מהיר, עם בדים באיכות הגבוהה ביותר שיהפכו את החתונה שלך לחוויה בלתי נשכחת.
          </p>

          {/* CTA Button with hover effect */}
          <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button className="bg-brand-gold hover:bg-white hover:text-brand-gold text-white text-lg py-6 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 font-bold">
              לתיאום מדידות
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollDown}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white/80 hover:text-white transition-all duration-300 hover:scale-110 animate-bounce cursor-pointer transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>

      {/* Enhanced decorative gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-brand-cream z-0 pointer-events-none"></div>
    </section>
  );
};

export default Hero;