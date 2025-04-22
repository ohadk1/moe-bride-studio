
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 hero-section-bg">
          <div className="container mx-auto px-4 text-center hero-section-content">
            <h1 className="text-4xl font-bold mb-6 relative inline-block text-white">
              <span className="relative z-10">השירותים שלנו</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-gold/20 -z-0"></span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-white/90">
              אנו מציעים מגוון רחב של שירותים מקצועיים בהתאמה אישית, משמלות כלה וערב ועד איפור מקצועי ותסרוקות
            </p>
          </div>
        </section>
        
        {/* Services List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  className={`grid md:grid-cols-2 gap-10 items-center ${
                    index % 2 === 1 ? 'md:rtl' : ''
                  }`}
                >
                  <div className={`animate-fade-in opacity-0`} style={{ animationDelay: '0.2s' }}>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'md:text-right' : 'text-right'} animate-fade-in opacity-0`} 
                    style={{ animationDelay: '0.4s' }}>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Button asChild className="bg-brand-turquoise hover:bg-brand-turquoise/90 text-white">
                      <Link to="/contact">לפרטים נוספים</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-brand-cream/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">מעוניינים לשמוע עוד?</h2>
            <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8">
              השאירו פרטים ונחזור אליכם בהקדם, או פנו אלינו ישירות
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-brand-gold hover:bg-brand-gold/90 text-white">
                <Link to="/contact">צור קשר</Link>
              </Button>
              <Button asChild variant="outline" className="border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white">
                <a href="tel:+9721234567">התקשר עכשיו</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
