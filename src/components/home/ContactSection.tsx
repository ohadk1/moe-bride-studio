
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
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
    
    // Send form data to WhatsApp
    try {
      const whatsappPhone = "972532484379";
      const message = `שם: ${formData.name}%0Aטלפון: ${formData.phone}%0Aאימייל: ${formData.email || 'לא הוזן'}%0Aהודעה: ${formData.message}`;
      
      // Open WhatsApp in a new tab
      window.open(`https://wa.me/${whatsappPhone}?text=${message}`, '_blank');
      
      toast({
        title: "הודעה נשלחה בהצלחה",
        description: "פרטיך הועברו גם לוואטסאפ",
      });
      
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "שגיאה בשליחת הטופס",
        description: "אנא נסו שנית מאוחר יותר",
        variant: "destructive",
      });
      console.error("Error sending form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 hero-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-brand-turquoise text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">צרו איתנו קשר</h2>
              <p className="mb-8">
                מעוניינים לקבוע פגישת ייעוץ? יש לכם שאלות? השאירו פרטים ונחזור אליכם בהקדם
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">שעות פעילות</h3>
                  <p>ראשון-חמישי: 9:00-19:00</p>
                  <p>שישי-שבת: סגור</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">כתובת</h3>
                  <p>דימונה</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">טלפון</h3>
                  <p>053-2484379 / 050-9608031</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">דוא"ל</h3>
                  <p>Moran.beauty90@gmail.com</p>
                </div>
              </div>
              
              <Button asChild className="bg-green-500 hover:bg-green-600 mt-8 w-full">
                <a href="https://wa.me/972532484379" target="_blank" rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2">
                  <MessageCircle size={18} />
                  <span>לפניה מהירה בוואטסאפ</span>
                </a>
              </Button>
            </div>
            
            <div className="p-8 md:p-12">
              <h3 className="text-xl font-bold mb-6">השאירו פרטים</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="שם מלא"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-brand-cream/20 border-brand-turquoise/20"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="טלפון"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-brand-cream/20 border-brand-turquoise/20"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="דוא״ל"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-brand-cream/20 border-brand-turquoise/20"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="הודעה"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
