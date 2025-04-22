import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('hero-bride.webp')" }}
    >
      {/* שכבת כהות על התמונה */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* תוכן האתר */}
      <div className="relative z-10 text-center px-4">
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

      {/* קישוט לבן תחתון */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-2"></div>
    </section>
  );
};

export default Hero;
