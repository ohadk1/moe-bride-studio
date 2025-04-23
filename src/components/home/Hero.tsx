import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen bg-fixed bg-center bg-cover bg-no-repeat flex items-end justify-center" 
      style={{ backgroundImage: "url('/herobride.webp')" }}>
      
      {/* Overlay כהה */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* תוכן */}
      <div className="relative z-10 text-center mb-16 px-4 max-w-2xl">
        {/* לוגו מעל */}
        <img 
          src="/logo-white.webp" 
          alt="M.O.E bride studio" 
          className="mx-auto mb-6 w-40 md:w-52 lg:w-60" 
        />

        {/* כותרת */}
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          יצירת שמלת החלומות שלך
        </h1>

        {/* תיאור */}
        <p className="text-white/90 text-lg md:text-xl mb-6 drop-shadow-sm">
          בהתאמה אישית לגופך ולסגנונך האישי – שירות מקצועי, מהיר, עם בדים באיכות הגבוהה ביותר.
        </p>

        {/* כפתור */}
        <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white text-lg py-6 px-8">
          לתיאום מדידות
        </Button>
      </div>
    </section>
  );
};

export default Hero;
