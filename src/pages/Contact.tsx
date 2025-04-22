
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "הודעה נשלחה בהצלחה",
        description: "ניצור איתך קשר בהקדם",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 silk-bg">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6 relative inline-block">
              <span className="relative z-10">צרו איתנו קשר</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-gold/20 -z-0"></span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-foreground/80">
              מעוניינים לקבוע פגישת ייעוץ? יש לכם שאלות? אנחנו כאן בשבילכם
            </p>
          </div>
        </section>
        
        {/* Contact Info and Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Contact Info */}
              <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">פרטי התקשרות</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-turquoise/10 p-3 rounded-full">
                          <Phone className="text-brand-turquoise h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">טלפון</h3>
                          <p>972-1234567+</p>
                          <p className="text-sm text-foreground/70 mt-1">זמינים בשעות הפעילות</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-turquoise/10 p-3 rounded-full">
                          <Mail className="text-brand-turquoise h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">דוא"ל</h3>
                          <p>info@moebride.com</p>
                          <p className="text-sm text-foreground/70 mt-1">נשמח לענות לכל שאלה</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-turquoise/10 p-3 rounded-full">
                          <MapPin className="text-brand-turquoise h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">כתובת</h3>
                          <p>רחוב הרצל 123, תל אביב</p>
                          <p className="text-sm text-foreground/70 mt-1">חניה זמינה בסביבה</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-turquoise/10 p-3 rounded-full">
                          <Clock className="text-brand-turquoise h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">שעות פעילות</h3>
                          <p>ראשון-חמישי: 10:00-19:00</p>
                          <p>שישי: 10:00-14:00</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 mt-8">
                      <Button asChild className="flex-1 bg-brand-turquoise hover:bg-brand-turquoise/90">
                        <a href="tel:+9721234567" className="flex items-center justify-center gap-2">
                          <Phone size={16} />
                          <span>התקשר</span>
                        </a>
                      </Button>
                      <Button asChild className="flex-1 bg-green-500 hover:bg-green-600">
                        <a href="https://wa.me/9721234567" target="_blank" rel="noopener noreferrer" 
                          className="flex items-center justify-center gap-2">
                          <MessageCircle size={16} />
                          <span>וואטסאפ</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Form */}
              <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">השאירו פרטים</h2>
                    <p className="mb-6 text-foreground/80">
                      מלאו את הטופס ונחזור אליכם בהקדם
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block mb-2 font-medium">
                          שם מלא
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-brand-cream/20 border-brand-turquoise/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block mb-2 font-medium">
                          טלפון
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="bg-brand-cream/20 border-brand-turquoise/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block mb-2 font-medium">
                          דוא״ל
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-brand-cream/20 border-brand-turquoise/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block mb-2 font-medium">
                          הודעה
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="bg-brand-cream/20 border-brand-turquoise/20"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "שולח..." : "שליחה"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              {/* Placeholder for Google Maps - would be replaced with actual embed */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-10 w-10 text-brand-turquoise mx-auto mb-4" />
                  <p className="text-xl font-semibold">מפת הגעה</p>
                  <p className="text-foreground/70">רחוב הרצל 123, תל אביב</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
