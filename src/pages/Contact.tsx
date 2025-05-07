import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const whatsappPhone = "972532484379";
      const message = `שם: ${formData.name}%0Aטלפון: ${formData.phone}%0Aאימייל: ${formData.email || 'לא הוזן'}%0Aהודעה: ${formData.message}`;
      window.open(`https://wa.me/${whatsappPhone}?text=${message}`, '_blank');

      toast({
        title: "הודעה נשלחה בהצלחה",
        description: "פרטיך הועברו גם לוואטסאפ",
      });

      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "שגיאה בשלי9 הטופס",
        description: "אנא נסו שנית מאוחר לאחר",
        variant: "destructive",
      });
      console.error("Error sending form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* Header Section */}
        <section className="relative py-24 bg-gradient-to-b from-white via-[#fffaf6] to-gray-50 text-center overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-brand-turquoise/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

          <h1 className="text-4xl md:text-5xl font-black text-brand-gold mb-4 tracking-tight relative z-10 drop-shadow-md">
            צרו איתנו קשר
          </h1>
          <p className="text-base md:text-lg text-foreground/70 max-w-xl mx-auto leading-relaxed z-10 relative">
            מעוניינים לקבע פגישת יעוץ? יש לכם שאלות? אנחנו כאן בשבילכם
          </p>

          <div className="mt-6 w-24 h-[2px] mx-auto bg-brand-gold/50 rounded-full" />
        </section>

        {/* Rest of your contact page remains unchanged */}
        {/* Contact Info and Form */}
        {/* ... */}
        {/* Map Section */}
        {/* ... */}
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
