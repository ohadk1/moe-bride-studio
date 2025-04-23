import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-[url('/herobride.webp')] bg-cover bg-center bg-fixed flex flex-col justify-between"
      role="region"
      aria-label="Hero section"
    >
      {/* Logo at the top center */}
      <div className="pt-8 flex justify-center z-10">
        <img
          src="/logo-white.webp"
          alt="M.O.E bride studio"
          className="w-48 md:w-64 h-auto"
        />
      </div>

      {/* Content lower in the viewport */}
      <div className="container mx-auto px-4 pb-24 text-center z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
          יצירת שמלת החלומות שלך
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
          בהתאמה אישית לגופך ולסגנונך האישי – שירות מקצועי, מהיר, עם בדים באיכות הגבוהה ביותר.
        </p>
        <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white text-lg py-6 px-8">
          לתיאום מדידות
        </Button>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" aria-hidden="true"></div>
    </section>
  );
};

export default Hero;
