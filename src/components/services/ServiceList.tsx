
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

// Service data type
export interface ServiceData {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ServiceListProps {
  services: ServiceData[];
}

const ServiceList = ({ services }: ServiceListProps) => {
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
    <motion.section 
      className="py-16 bg-gradient-to-b from-white via-[#fdf7f3] to-gray-50 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute top-0 left-0 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-brand-turquoise/10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="space-y-20">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServiceList;
