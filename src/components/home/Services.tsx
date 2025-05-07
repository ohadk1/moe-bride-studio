import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shirt, UserCircle, Sparkles, Scissors, Smile, Coat } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "עיצוב ותפירת שמלות כלה",
    description: "עיצוב וייצור שמלות המותאמות בדיוק למידות ולטעם האישי שלך, מהחומרים הטובים ביותר.",
    icon: <Shirt size={40} />,
    gradient: "bg-gradient-to-br from-pink-50 via-white to-rose-50",
  },
  {
    id: 2,
    title: "שמלות ערב",
    description: "קולקציה מגוונת של שמלות ערב אלגנטיות לכל אירוע, עם אפשרויות לשינויים והתאמות.",
    icon: <Coat size={40} />,
    gradient: "bg-gradient-to-br from-purple-50 via-white to-indigo-50",
  },
  {
    id: 3,
    title: "איפור מקצועי",
    description: "איפור מקצועי לכלות, אירועים, וקונספטים מיוחדים ע״י מאפרות בעלות ניסיון רב.",
    icon: <Sparkles size={40} />,
    gradient: "bg-gradient-to-br from-orange-50 via-white to-amber-50",
  },
  {
    id: 4,
    title: "תסרוקות מעוצבות",
    description: "תסרוקות מורכבות ועיצובי שיער ייחודיים המותאמים לסגנון האישי שלך ולאירוע.",
    icon: <Scissors size={40} />,
    gradient: "bg-gradient-to-br from-blue-50 via-white to-sky-50",
  },
  {
    id: 5,
    title: "תפירת תחפושות לפורים",
    description: "תחפושות מרהיבות ואיכותיות לפורים בהתאמה אישית, לכל גיל ולכל רעיון.",
    icon: <Smile size={40} />,
    gradient: "bg-gradient-to-br from-green-50 via-white to-emerald-50",
  },
  {
    id: 6,
    title: "שדרוגים ושינויים",
    description: "שירות שדרוג ושינוי שמלות קיימות, התאמת מידות וסגנון לצרכים המשתנים שלך.",
    icon: <UserCircle size={40} />,
    gradient: "bg-gradient-to-br from-yellow-50 via-white to-amber-50",
  },
];

const Services = () => {
  const isMobile = useIsMobile();

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-[#fdf7f3] to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-brand-turquoise/10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 relative inline-block text-brand-gold tracking-tight">
            <span className="relative z-10 drop-shadow-md">השירותים שלנו</span>
            <span className="absolute bottom-1 left-1 w-full h-4 bg-brand-gold/20 -z-0 rounded-xl"></span>
          </h2>
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            יצירת שמלת החלומות שלך בהתאמה אישית לגופך ולסגנונך האישי – שירות מקצועי, מהיר, עם בדים באיכות הגבוהה ביותר.
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`${service.gradient} rounded-3xl shadow-lg hover:shadow-xl p-6 flex flex-col h-full border border-gray-100/50 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden`}
            >
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-turquoise/5 rounded-full" />
              <div className="absolute bottom-0 left-0 w-40 h-1 bg-gradient-to-r from-transparent via-brand-turquoise/20 to-transparent" />
              
              <div className="w-20 h-20 mx-auto mb-5 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-brand-turquoise shadow-sm border border-gray-100/60 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-center text-brand-turquoise mb-3 group-hover:text-brand-turquoise/90">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-center text-base leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              
              <Button
                variant="outline"
                className="w-full mt-auto border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white hover:border-transparent rounded-xl py-5 px-4 text-base shadow-sm transition-all duration-300 hover:shadow-md group-hover:scale-[1.02]"
                asChild
              >
                <Link to={`/services`}>פרטים נוספים</Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-brand-gold hover:bg-brand-gold/90 text-white px-6 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              asChild
            >
              <Link to="/services">לדף השירותים המלא</Link>
            </Button>
            <Button
              variant="outline"
              className="border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white px-6 py-6 text-lg rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              asChild
            >
              <Link to="/contact">יצירת קשר</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
