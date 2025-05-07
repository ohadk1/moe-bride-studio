
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceList from "@/components/services/ServiceList";
import CallToAction from "@/components/services/CallToAction";
import { services } from "@/data/serviceData";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <ServiceHero 
          title="השירותים שלנו"
          description="אנו מציעים מגוון רחב של שירותים מקצועיים בהתאמה אישית, משמלות כלה וערב ועד איפור מקצועי ותסרוקות"
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
