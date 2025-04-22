import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* תמונת רקע מלאה */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero-bride.jpg')" }}></div>

      {/* שכבת כהות מעל התמונה */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* תוכן מעל הרקע */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
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

      {/* קישוט תחתון */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-2"></div>
    </section>
  );
};

export default Hero;
