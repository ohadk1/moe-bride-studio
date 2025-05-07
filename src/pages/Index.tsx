
import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import GalleryPreview from "@/components/home/GalleryPreview";
import CustomerReviews from "@/components/home/CustomerReviews";
import ContactSection from "@/components/home/ContactSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if there's a hash in the URL
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
    
    // Welcome toast removed as requested
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <GalleryPreview />
      <CustomerReviews />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
