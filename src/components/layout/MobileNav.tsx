
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import Logo from '@/components/ui/Logo';

const MobileNav = ({ isScrolled }: { isScrolled: boolean }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the menu when changing routes
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Animation variants
  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2 text-foreground">
              <Menu size={24} />
              <span className="sr-only">תפריט</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80vw] max-w-[350px] py-12 px-6 flex flex-col">
            <SheetHeader className="mb-8 text-right">
              <SheetTitle className="text-2xl font-bold">תפריט</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-6 text-lg">
              <motion.div 
                custom={0}
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
              >
                <Link
                  to="/"
                  className="py-2 border-b border-gray-200 text-foreground block"
                  onClick={() => setOpen(false)}
                >
                  בית
                </Link>
              </motion.div>
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
              >
                <Link
                  to="/services"
                  className="py-2 border-b border-gray-200 text-foreground block"
                  onClick={() => setOpen(false)}
                >
                  שירותים
                </Link>
              </motion.div>
              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
              >
                <Link
                  to="/gallery"
                  className="py-2 border-b border-gray-200 text-foreground block"
                  onClick={() => setOpen(false)}
                >
                  גלריה
                </Link>
              </motion.div>
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
              >
                <Link
                  to="/contact"
                  className="py-2 border-b border-gray-200 text-foreground block"
                  onClick={() => setOpen(false)}
                >
                  צור קשר
                </Link>
              </motion.div>
            </nav>

            <div className="mt-auto flex flex-col gap-3">
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
              >
                <Button
                  asChild
                  className="bg-brand-turquoise hover:bg-brand-turquoise/90 text-white w-full"
                >
                  <a href="tel:053-2484379" className="flex items-center justify-center gap-2">
                    <Phone size={16} />
                    <span>התקשר עכשיו</span>
                  </a>
                </Button>
              </motion.div>
              <motion.div
                custom={5}
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
              >
                <Button
                  asChild
                  className="bg-green-500 hover:bg-green-600 text-white w-full"
                >
                  <a href="https://wa.me/972532484379" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <MessageCircle size={16} />
                    <span>וואטסאפ</span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default MobileNav;
