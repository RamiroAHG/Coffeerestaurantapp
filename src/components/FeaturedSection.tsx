import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { MenuItem } from './MainApp';
import { ImageWithFallback } from './figma/ImageWithFallback';

const featuredItems: MenuItem[] = [
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
    id: 'f1',
    name: 'Vanilla Frappe',
    description: 'Iced blended coffee with vanilla',
    price: 80,
    category: 'Frappes',
    image: 'https://images.unsplash.com/photo-1561641377-f7456d23aa9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwYnJldyUyMGNvZmZlZXxlbnwxfHx8fDE3NjI4ODkzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true,
  },
  {
    id: 'gc1',
    name: 'Tres Leches Cake Slice',
    description: 'Traditional three milk cake',
    price: 65,
    category: 'Gourmet Cakes',
    image: 'https://images.unsplash.com/photo-1758979580916-00c83f2e1d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwY2FrZSUyMHNsaWNlfGVufDF8fHx8MTc2Mjg4OTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true,
  },
];

interface FeaturedSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export function FeaturedSection({ onAddToCart }: FeaturedSectionProps) {
  return (
    <div className="px-4 py-6">
      <h2 className="mb-4">Featured Items</h2>
      <p className="text-gray-600 mb-6">
        Customer favorites and our most popular items
      </p>

      <div className="space-y-4">
        {featuredItems.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <ImageWithFallback
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-3 right-3">
                Popular
              </Badge>
            </div>
            <div className="p-4">
              <h3 className="mb-1">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              <div className="flex items-center justify-between">
                <p className="text-amber-600">C${item.price}</p>
                <Button onClick={() => onAddToCart(item)}>
                  <Plus className="w-4 h-4 mr-1" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
