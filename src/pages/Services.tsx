import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceList from "@/components/services/ServiceList";
import CallToAction from "@/components/services/CallToAction";
import { services } from "@/data/serviceData";

// Hero component משודרג כאן בתוך הקובץ (אפשר גם לשמור אותו בקובץ נפרד)
const ServiceHero = ({ title, description }: { title: string; description: string }) => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-[#fffaf6] to-gray-50 text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-brand-turquoise/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <h1 className="text-4xl md:text-5xl font-black text-brand-gold mb-4 tracking-tight relative z-10 drop-shadow-md">
        {title}
      </h1>
      <p className="text-base md:text-lg text-foreground/70 max-w-xl mx-auto leading-relaxed z-10 relative">
        {description}
      </p>

      <div className="mt-6 w-24 h-[2px] mx-auto bg-brand-gold/50 rounded-full" />
    </section>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <ServiceHero 
          title="השירותים שלנו"
          description="אנו מציעים מגוון רחב של שירותים מקצועיים בהתאמה אישית – משמלות כלה וערב ועד איפור מקצועי, עיצובי שיער ותחפושות בהתאמה אישית."
        />
        
        {/* Services List */}
        <ServiceList services={services} />
        
        {/* Call to Action */}
        <CallToAction 
          title="מעוניינים לשמוע עוד?"
          description="השאירו פרטים ונחזור אליכם בהקדם, או פנו אלינו ישירות"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
