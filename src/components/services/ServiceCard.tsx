
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

export interface ServiceItemProps {
  id: number;
  title: string;
  description: string;
  image: string;
  index: number;
}

const ServiceCard = ({ id, title, description, image, index }: ServiceItemProps) => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      className={`grid md:grid-cols-2 gap-10 items-center ${
        index % 2 === 1 ? 'md:rtl' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="rounded-lg overflow-hidden shadow-lg"
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto object-cover"
        />
      </motion.div>
      
      <div className={`${index % 2 === 1 ? 'md:text-right' : 'text-right'} p-6 rounded-lg bg-gradient-to-br from-white via-[#fdf7f3] to-gray-50 shadow-md border border-gray-100/50`}>
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, x: isMobile ? 0 : (index % 2 === 0 ? 50 : -50) }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-foreground/80 mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {description}
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
  );
};

export default ServiceCard;
