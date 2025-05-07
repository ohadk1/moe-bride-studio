
import { motion } from "framer-motion";

interface ServiceHeroProps {
  title: string;
  description: string;
}

const ServiceHero = ({ title, description }: ServiceHeroProps) => {
  return (
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
          <span className="relative z-10">{title}</span>
          <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-gold/20 -z-0"></span>
        </motion.h1>
        <motion.p 
          className="max-w-2xl mx-auto text-lg text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ServiceHero;
