
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import GalleryPreview from "@/components/home/GalleryPreview";
import CustomerReviews from "@/components/home/CustomerReviews";
import ContactSection from "@/components/home/ContactSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
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
