
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
import Logo from '@/components/ui/Logo';

const MobileNav = ({ isScrolled }: { isScrolled: boolean }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the menu when changing routes
  useEffect(() => {
    setOpen(false);
  }, [location]);

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
              <Link
                to="/"
                className="py-2 border-b border-gray-200 text-foreground"
                onClick={() => setOpen(false)}
              >
                בית
              </Link>
              <Link
                to="/services"
                className="py-2 border-b border-gray-200 text-foreground"
                onClick={() => setOpen(false)}
              >
                שירותים
              </Link>
              <Link
                to="/gallery"
                className="py-2 border-b border-gray-200 text-foreground"
                onClick={() => setOpen(false)}
              >
                גלריה
              </Link>
              <Link
                to="/contact"
                className="py-2 border-b border-gray-200 text-foreground"
                onClick={() => setOpen(false)}
              >
                צור קשר
              </Link>
            </nav>

            <div className="mt-auto flex flex-col gap-3">
              <Button
                asChild
                className="bg-brand-turquoise hover:bg-brand-turquoise/90 text-white w-full"
              >
                <a href="tel:053-2484379" className="flex items-center justify-center gap-2">
                  <Phone size={16} />
                  <span>התקשר עכשיו</span>
                </a>
              </Button>
              <Button
                asChild
                className="bg-green-500 hover:bg-green-600 text-white w-full"
              >
                <a href="https://wa.me/972532484379" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <MessageCircle size={16} />
                  <span>וואטסאפ</span>
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Sticky Mobile CTA Buttons */}
      <div className="fixed bottom-4 left-4 flex flex-col gap-2 md:hidden z-50">
        <Button
          asChild
          size="icon"
          className="bg-brand-turquoise hover:bg-brand-turquoise/90 text-white rounded-full shadow-lg h-12 w-12"
        >
          <a href="tel:053-2484379" aria-label="התקשר עכשיו">
            <Phone size={20} />
          </a>
        </Button>
        <Button
          asChild
          size="icon"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg h-12 w-12"
        >
          <a href="https://wa.me/972532484379" target="_blank" rel="noopener noreferrer" aria-label="שלח הודעת וואטסאפ">
            <MessageCircle size={20} />
          </a>
        </Button>
      </div>
    </>
  );
};

export default MobileNav;
