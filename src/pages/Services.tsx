
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  {
    id: 1,
    title: "עיצוב ותפירה של שמלות כלה",
    description: "אנו מציעים שירות מקיף של עיצוב והתאמה אישית של שמלות כלה. הצוות המקצועי שלנו יעבוד איתך כדי ליצור את שמלת החלומות שלך, תוך שימוש בבדים איכותיים ותשומת לב לכל פרט. השירות כולל פגישות ייעוץ, מדידות, ותיקונים עד שתהיי מרוצה לחלוטין.",
    image: "https://images.unsplash.com/photo-1566145445090-550a9a6e8f2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "שמלות ערב",
    description: "לכל אירוע מיוחד, אנו מציעים קולקציה מגוונת של שמלות ערב אלגנטיות. בין אם את מחפשת משהו קלאסי, מודרני, או ייחודי, נעזור לך למצוא את השמלה המושלמת או ליצור אותה בהתאמה אישית. השירות כולל ייעוץ אישי, מדידות, ואפשרויות לשינויים והתאמות.",
    image: "https://images.unsplash.com/photo-1585241936939-be4099591252?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "איפור מקצועי",
    description: "צוות המאפרים המקצועי שלנו מתמחה באיפור כלות, איפור ערב, ואיפור לאירועים מיוחדים. אנו משתמשים במוצרים באיכות גבוהה ובטכניקות מתקדמות כדי ליצור מראה מושלם שמתאים לאופי שלך ולסגנון האירוע. השירות כולל פגישת ייעוץ, ניסיון איפור, ואיפור ביום האירוע.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    title: "תסרוקות",
    description: "מעצבי השיער המנוסים שלנו יצרו עבורך תסרוקת מושלמת לכל אירוע. בין אם את כלה, מלווה, או אורחת באירוע מיוחד, נעצב את שיערך בהתאמה אישית לפנייך, לשמלתך, ולסגנון האירוע. השירות כולל ייעוץ, ניסיון, ועיצוב שיער ביום האירוע.",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: "תפירת תחפושות לפורים",
    description: "לקראת חג פורים, אנו מציעים שירות תפירה והתאמה אישית של תחפושות איכותיות ומרהיבות. צוות המעצבים והתופרים שלנו יעבוד איתך כדי ליצור תחפושת ייחודית ומרשימה, תוך שימוש בבדים איכותיים ובטכניקות תפירה מתקדמות.",
    image: "https://images.unsplash.com/photo-1523215713844-b8e594de9429?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
];

const Services = () => {
  const isMobile = useIsMobile();

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Header Section */}
        <motion.section 
          className="py-16 hero-section-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4 text-center hero-section-content">
            <motion.h1 
              className="text-4xl font-bold mb-6 relative inline-block text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="relative z-10">השירותים שלנו</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-gold/20 -z-0"></span>
            </motion.h1>
            <motion.p 
              className="max-w-2xl mx-auto text-lg text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              אנו מציעים מגוון רחב של שירותים מקצועיים בהתאמה אישית, משמלות כלה וערב ועד איפור מקצועי ותסרוקות
            </motion.p>
          </div>
        </motion.section>
        
        {/* Services List */}
        <motion.section 
          className="py-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container mx-auto px-4">
            <motion.div className="space-y-20">
              {services.map((service, index) => (
                <motion.div 
                  key={service.id}
                  className={`grid md:grid-cols-2 gap-10 items-center ${
                    index % 2 === 1 ? 'md:rtl' : ''
                  }`}
                  custom={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="rounded-lg overflow-hidden shadow-lg"
                  >
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                  
                  <div className={`${index % 2 === 1 ? 'md:text-right' : 'text-right'}`}>
                    <motion.h2 
                      className="text-3xl font-bold mb-4"
                      initial={{ opacity: 0, x: isMobile ? 0 : (index % 2 === 0 ? 50 : -50) }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {service.title}
                    </motion.h2>
                    <motion.p 
                      className="text-foreground/80 mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {service.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Button asChild className="bg-brand-turquoise hover:bg-brand-turquoise/90 text-white">
                        <Link to="/contact">לפרטים נוספים</Link>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        
        {/* Call to Action */}
        <motion.section 
          className="py-16 bg-brand-cream/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              מעוניינים לשמוע עוד?
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              השאירו פרטים ונחזור אליכם בהקדם, או פנו אלינו ישירות
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button asChild className="bg-brand-gold hover:bg-brand-gold/90 text-white">
                <Link to="/contact">צור קשר</Link>
              </Button>
              <Button asChild variant="outline" className="border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white">
                <a href="tel:+9721234567">התקשר עכשיו</a>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
