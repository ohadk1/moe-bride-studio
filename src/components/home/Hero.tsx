
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-16 hero-section-bg">
      {/* The hero-section-bg class from index.css will handle the background image */}
      
      {/* Content on top */}
      <div className="relative z-10 container mx-auto px-4 py-12 hero-section-content">
        <div className="mb-8 mx-auto w-56 md:w-72">
          <img
            src="/herobride.webp"
            alt="M.O.E bride studio"
            className="w-full h-auto drop-shadow-lg"
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
          יצירת שמלת החלומות שלך
        </h1>

        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          בהתאמה אישית לגופך ולסגנונך האישי – שירות מקצועי, מהיר, עם בדים באיכות הגבוהה ביותר.
        </p>

        <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white text-lg py-6 px-8">
          לתיאום מדידות
        </Button>
      </div>
    </section>
  );
};

export default Hero;

