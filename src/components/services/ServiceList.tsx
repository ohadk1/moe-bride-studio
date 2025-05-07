
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
      className="py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
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
