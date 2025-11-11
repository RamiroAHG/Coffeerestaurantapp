import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Plus } from 'lucide-react';
import { MenuItem } from './MainApp';
import { ImageWithFallback } from './figma/ImageWithFallback';

const menuData: MenuItem[] = [
  // Breakfast
  {
    id: 'b1',
    name: 'Gallo Pinto Breakfast',
    description: 'Traditional rice and beans with eggs, cheese, and plantain',
    price: 150,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1734770205674-d117e4ba7926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBwbGF0ZXxlbnwxfHx8fDE3NjI3NzI4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'b2',
    name: 'Continental Breakfast',
    description: 'Croissant, fresh fruit, juice, and coffee',
    price: 120,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1734770205674-d117e4ba7926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBwbGF0ZXxlbnwxfHx8fDE3NjI3NzI4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'b3',
    name: 'Pancake Stack',
    description: 'Fluffy pancakes with maple syrup and butter',
    price: 130,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1734770205674-d117e4ba7926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBwbGF0ZXxlbnwxfHx8fDE3NjI3NzI4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  
  // Coffees
  {
    id: 'c1',
    name: 'Espresso',
    description: 'Rich and bold single shot',
    price: 40,
    category: 'Coffees',
    image: 'https://images.unsplash.com/photo-1645445644664-8f44112f334c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NjI4MzYzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true,
  },
  {
    id: 'c2',
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and foam',
    price: 60,
    category: 'Coffees',
    image: 'https://images.unsplash.com/photo-1645445644664-8f44112f334c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NjI4MzYzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true,
  },
  {
    id: 'c3',
    name: 'Americano',
    description: 'Espresso with hot water',
    price: 50,
    category: 'Coffees',
    image: 'https://images.unsplash.com/photo-1645445644664-8f44112f334c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NjI4MzYzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'c4',
    name: 'Latte',
    description: 'Smooth espresso with steamed milk',
    price: 65,
    category: 'Coffees',
    image: 'https://images.unsplash.com/photo-1645445644664-8f44112f334c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NjI4MzYzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'c5',
    name: 'Mocha',
    description: 'Latte with chocolate syrup',
    price: 70,
    category: 'Coffees',
    image: 'https://images.unsplash.com/photo-1645445644664-8f44112f334c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NjI4MzYzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },

  // Frappes
  {
    id: 'f1',
    name: 'Vanilla Frappe',
    description: 'Iced blended coffee with vanilla',
    price: 80,
    category: 'Frappes',
    image: 'https://images.unsplash.com/photo-1561641377-f7456d23aa9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwYnJldyUyMGNvZmZlZXxlbnwxfHx8fDE3NjI4ODkzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true,
  },
  {
    id: 'f2',
    name: 'Caramel Frappe',
    description: 'Iced blended coffee with caramel',
    price: 85,
    category: 'Frappes',
    image: 'https://images.unsplash.com/photo-1561641377-f7456d23aa9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwYnJldyUyMGNvZmZlZXxlbnwxfHx8fDE3NjI4ODkzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'f3',
    name: 'Mocha Frappe',
    description: 'Chocolate blended iced coffee',
    price: 85,
    category: 'Frappes',
    image: 'https://images.unsplash.com/photo-1561641377-f7456d23aa9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwYnJldyUyMGNvZmZlZXxlbnwxfHx8fDE3NjI4ODkzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },

  // Executive Lunches
  {
    id: 'l1',
    name: 'Grilled Chicken Lunch',
    description: 'Grilled chicken breast with rice, salad, and beans',
    price: 180,
    category: 'Executive Lunches',
    image: 'https://images.unsplash.com/photo-1734770205674-d117e4ba7926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBwbGF0ZXxlbnwxfHx8fDE3NjI3NzI4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'l2',
    name: 'Beef Tips Lunch',
    description: 'Tender beef tips with vegetables and rice',
    price: 200,
    category: 'Executive Lunches',
    image: 'https://images.unsplash.com/photo-1734770205674-d117e4ba7926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBwbGF0ZXxlbnwxfHx8fDE3NjI3NzI4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'l3',
    name: 'Fish Fillet Lunch',
    description: 'Grilled fish with plantains and vegetables',
    price: 190,
    category: 'Executive Lunches',
    image: 'https://images.unsplash.com/photo-1734770205674-d117e4ba7926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBwbGF0ZXxlbnwxfHx8fDE3NjI3NzI4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },

  // Combos
  {
    id: 'combo1',
    name: 'Coffee & Pastry Combo',
    description: 'Any coffee + choice of pastry',
    price: 95,
    category: 'Combos',
    image: 'https://images.unsplash.com/photo-1737700089128-cbbb2dc71631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBhc3RyaWVzfGVufDF8fHx8MTc2Mjg4OTM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'combo2',
    name: 'Lunch Special',
    description: 'Executive lunch + drink + dessert',
    price: 220,
    category: 'Combos',
    image: 'https://images.unsplash.com/photo-1734770205674-d117e4ba7926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBwbGF0ZXxlbnwxfHx8fDE3NjI3NzI4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },

  // Fruit Smoothies
  {
    id: 's1',
    name: 'Strawberry Smoothie',
    description: 'Fresh strawberries blended with yogurt',
    price: 70,
    category: 'Fruit Smoothies',
    image: 'https://images.unsplash.com/photo-1600718374662-0483d2b9da44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMHNtb290aGllfGVufDF8fHx8MTc2Mjc5MzYwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 's2',
    name: 'Mango Smoothie',
    description: 'Tropical mango blend',
    price: 75,
    category: 'Fruit Smoothies',
    image: 'https://images.unsplash.com/photo-1600718374662-0483d2b9da44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMHNtb290aGllfGVufDF8fHx8MTc2Mjc5MzYwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 's3',
    name: 'Green Detox Smoothie',
    description: 'Spinach, pineapple, and banana',
    price: 80,
    category: 'Fruit Smoothies',
    image: 'https://images.unsplash.com/photo-1600718374662-0483d2b9da44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMHNtb290aGllfGVufDF8fHx8MTc2Mjc5MzYwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },

  // Crepes
  {
    id: 'cr1',
    name: 'Nutella Crepe',
    description: 'Thin crepe with Nutella and strawberries',
    price: 90,
    category: 'Crepes',
    image: 'https://images.unsplash.com/photo-1554173601-27120ebd15ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVwZXMlMjBkZXNzZXJ0fGVufDF8fHx8MTc2Mjg4OTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'cr2',
    name: 'Savory Chicken Crepe',
    description: 'Crepe filled with chicken and cheese',
    price: 110,
    category: 'Crepes',
    image: 'https://images.unsplash.com/photo-1554173601-27120ebd15ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVwZXMlMjBkZXNzZXJ0fGVufDF8fHx8MTc2Mjg4OTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },

  // Appetizers
  {
    id: 'a1',
    name: 'Nachos Supreme',
    description: 'Crispy nachos with cheese, jalapeños, and sour cream',
    price: 100,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1734770205674-d117e4ba7926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBwbGF0ZXxlbnwxfHx8fDE3NjI3NzI4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'a2',
    name: 'Chicken Wings',
    description: '6 pieces with choice of sauce',
    price: 120,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1734770205674-d117e4ba7926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBwbGF0ZXxlbnwxfHx8fDE3NjI3NzI4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },

  // Pastries
  {
    id: 'p1',
    name: 'Chocolate Croissant',
    description: 'Buttery croissant with chocolate filling',
    price: 45,
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1737700089128-cbbb2dc71631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBhc3RyaWVzfGVufDF8fHx8MTc2Mjg4OTM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'p2',
    name: 'Cinnamon Roll',
    description: 'Soft cinnamon roll with cream cheese frosting',
    price: 50,
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1737700089128-cbbb2dc71631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBhc3RyaWVzfGVufDF8fHx8MTc2Mjg4OTM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'p3',
    name: 'Blueberry Muffin',
    description: 'Fresh baked muffin with blueberries',
    price: 40,
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1737700089128-cbbb2dc71631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBhc3RyaWVzfGVufDF8fHx8MTc2Mjg4OTM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },

  // Gourmet Cakes
  {
    id: 'gc1',
    name: 'Tres Leches Cake Slice',
    description: 'Traditional three milk cake',
    price: 65,
    category: 'Gourmet Cakes',
    image: 'https://images.unsplash.com/photo-1758979580916-00c83f2e1d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwY2FrZSUyMHNsaWNlfGVufDF8fHx8MTc2Mjg4OTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true,
  },
  {
    id: 'gc2',
    name: 'Red Velvet Slice',
    description: 'Classic red velvet with cream cheese frosting',
    price: 70,
    category: 'Gourmet Cakes',
    image: 'https://images.unsplash.com/photo-1758979580916-00c83f2e1d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwY2FrZSUyMHNsaWNlfGVufDF8fHx8MTc2Mjg4OTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'gc3',
    name: 'Chocolate Fudge Slice',
    description: 'Rich chocolate cake with fudge frosting',
    price: 68,
    category: 'Gourmet Cakes',
    image: 'https://images.unsplash.com/photo-1758979580916-00c83f2e1d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwY2FrZSUyMHNsaWNlfGVufDF8fHx8MTc2Mjg4OTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },

  // Whole Cakes (Special Promotion)
  {
    id: 'wc1',
    name: 'Whole Tres Leches Cake',
    description: 'Full size tres leches cake (8-10 servings) - ON SALE!',
    price: 450,
    category: 'Whole Cakes',
    image: 'https://images.unsplash.com/photo-1758979580916-00c83f2e1d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwY2FrZSUyMHNsaWNlfGVufDF8fHx8MTc2Mjg4OTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'wc2',
    name: 'Whole Chocolate Cake',
    description: 'Full size chocolate fudge cake (8-10 servings) - ON SALE!',
    price: 480,
    category: 'Whole Cakes',
    image: 'https://images.unsplash.com/photo-1758979580916-00c83f2e1d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwY2FrZSUyMHNsaWNlfGVufDF8fHx8MTc2Mjg4OTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },

  // Extras
  {
    id: 'e1',
    name: 'French Fries',
    description: 'Crispy golden fries',
    price: 35,
    category: 'Extras',
    image: 'https://images.unsplash.com/photo-1734770205674-d117e4ba7926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBwbGF0ZXxlbnwxfHx8fDE3NjI3NzI4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'e2',
    name: 'Coca-Cola',
    description: 'Chilled soda',
    price: 25,
    category: 'Extras',
    image: 'https://images.unsplash.com/photo-1734770205674-d117e4ba7926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBwbGF0ZXxlbnwxfHx8fDE3NjI3NzI4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'e3',
    name: 'Fresh Orange Juice',
    description: 'Freshly squeezed orange juice',
    price: 45,
    category: 'Extras',
    image: 'https://images.unsplash.com/photo-1734770205674-d117e4ba7926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBwbGF0ZXxlbnwxfHx8fDE3NjI3NzI4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

const categories = [
  'All',
  'Breakfast',
  'Coffees',
  'Frappes',
  'Executive Lunches',
  'Combos',
  'Fruit Smoothies',
  'Crepes',
  'Appetizers',
  'Pastries',
  'Gourmet Cakes',
  'Whole Cakes',
  'Extras',
];

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export function MenuSection({ onAddToCart }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? menuData
      : menuData.filter(item => item.category === selectedCategory);

  return (
    <div className="px-4 py-6">
      <h2 className="mb-4">Our Menu</h2>

      {/* Promotion Banner */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4 rounded-lg mb-6">
        <p className="text-center">🎉 Special Promotion: Whole Cakes on Sale! 🎂</p>
      </div>

      {/* Category Filter */}
      <div className="mb-6 overflow-x-auto pb-2">
        <div className="flex gap-2 min-w-max">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-4">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden flex gap-4"
          >
            <div className="w-24 h-24 flex-shrink-0">
              <ImageWithFallback
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 py-3 pr-3">
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-base">{item.name}</h3>
                {item.featured && (
                  <Badge variant="secondary" className="ml-2 text-xs">
                    Popular
                  </Badge>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-amber-600">C${item.price}</p>
                <Button size="sm" onClick={() => onAddToCart(item)}>
                  <Plus className="w-4 h-4 mr-1" />
                  Add
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
