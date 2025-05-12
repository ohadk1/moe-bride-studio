
import { GalleryCategory } from "./types";

export const categories: GalleryCategory[] = [
  {
    id: "wedding-dresses",
    name: "שמלות כלה",
    icon: "/images/icons/wedding-dress.svg",
  },
  {
    id: "evening-dresses",
    name: "שמלות ערב",
    icon: "/images/icons/evening-dress.svg",
  },
  {
    id: "makeup",
    name: "איפור",
    icon: "/images/icons/makeup.svg",
  },
  {
    id: "hairstyles",
    name: "תסרוקות",
    icon: "/images/icons/hairstyle.svg",
  },
  {
    id: "purim",
    name: "פורים",
    icon: "/images/icons/costume.svg",
  },
];

// Add a type definition for the category
export type CategoryId = "wedding-dresses" | "evening-dresses" | "makeup" | "hairstyles" | "purim";
