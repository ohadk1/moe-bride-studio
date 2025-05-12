
import { categories } from "./categories";
import { weddingDressItems } from "./weddingDresses";
import { eveningDressItems } from "./eveningDresses";
import { makeupItems } from "./makeup";
import { hairstyleItems, purimItems } from "./other";
import type { GalleryItem, GalleryCategory } from "./types";

// Combine all gallery items
const galleryItems: GalleryItem[] = [
  ...weddingDressItems,
  ...eveningDressItems,
  ...makeupItems,
  ...hairstyleItems,
  ...purimItems,
];

export { 
  categories, 
  galleryItems,
  weddingDressItems,
  eveningDressItems,
  makeupItems,
  hairstyleItems,
  purimItems
};

export type { GalleryItem, GalleryCategory };
