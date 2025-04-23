import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen md:min-h-[120vh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-[url('/herobride.webp')] bg-no-repeat bg-center bg-[length:auto_120%] md:bg-cover md:bg-fixed"
        style={{ backgroundAttachment: 'scroll' }}
      ></div>
      <div className="absolute inset-0 bg-black/30 -z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          <div className="mb-6 mx-auto w-48 md:w-80">
            <img
              src="/logo-light.webp"
              alt="M.O.E bride studio"
              className="w-full h-auto"
            />
          </div>

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
      </div>

      {/* Decorative diagonal line */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-2"></div>
    </section>
  );
};

export default Hero;