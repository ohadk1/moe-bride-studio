import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();

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
    <section className="relative min-h-screen md:min-h-[120vh] flex items-center justify-center pt-16 overflow-hidden bg-black">

      {/* Hero Image - במקום background-image */}
      <img
        src="/images/herobride.webp"
        alt="שמלת כלה"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover object-[25%_top] md:object-center z-0"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* שכבת הצללה */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10"></div>

      {/* תוכן */}
      <div className="container mx-auto px-4 py-12 md:py-20 text-center relative z-20">
        <div className={`max-w-3xl mx-auto transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>

          <div className="mb-6 mx-auto w-48 md:w-80 relative">
            <div className="absolute -inset-1 bg-white/10 rounded-full blur-md"></div>
            <img
              src="/logo-light.webp"
              alt="M.O.E bride studio"
              width={320}
              height={180}
              loading="lazy"
              decoding="async"
              className="w-full h-auto relative z-10 drop-shadow-lg"
            />
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            יצירת שמלת <span className="text-brand-gold">החלומות</span> שלך
          </h1>

          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
            בהתאמה אישית לגופך ולסגנונך האישי – שירות מקצועי, מהיר, עם בדים באיכות הגבוהה ביותר שיהפכו את החתונה שלך לחוויה בלתי נשכחת.
          </p>

          <Button className="bg-brand-gold hover:bg-white hover:text-brand-gold text-white text-lg py-6 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 font-bold">
            <a href="tel:053-2484379">לתיאום מדידות</a>
          </Button>
        </div>
      </div>

      {/* חץ גלילה */}
      <button
        onClick={scrollDown}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white/80 hover:text-white transition-transform duration-300 hover:scale-110 animate-bounce ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        aria-label="גלול למטה"
      >
        <ChevronDown size={32} />
      </button>

      {/* דהייה לקרם */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-brand-cream z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
