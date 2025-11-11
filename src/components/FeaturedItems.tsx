import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FeaturedItems() {
  const featuredItems = [
    {
      id: 1,
      name: "Signature Espresso",
      description: "Rich, bold, and perfectly extracted from our premium beans",
      price: "$3.50",
      image: "https://images.unsplash.com/photo-1646990378613-36e90fcf40cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NTg4MjcxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      badge: "Popular"
    },
    {
      id: 2,
      name: "Artisan Cappuccino",
      description: "Creamy steamed milk with beautiful latte art, a true masterpiece",
      price: "$4.25",
      image: "https://images.unsplash.com/photo-1582552765888-d55c63a7f851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwbGF0dGUlMjBhcnR8ZW58MXx8fHwxNzU4ODI3MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      badge: "Chef's Choice"
    },
    {
      id: 3,
      name: "Iced Coffee Delight",
      description: "Refreshing cold brew with a hint of vanilla and cream",
      price: "$4.75",
      image: "https://images.unsplash.com/photo-1684439670717-b1147a7e7534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwY29mZmVlJTIwZHJpbmt8ZW58MXx8fHwxNzU4ODExODMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      badge: "Summer Special"
    }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl mb-3 text-amber-700">Featured Beverages</h2>
          <p className="text-muted-foreground">
            Discover our most beloved coffee creations
          </p>
        </div>

        <div className="space-y-4">
          {featuredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="flex">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute -top-1 -right-1 bg-amber-600 hover:bg-amber-600 text-xs px-1.5 py-0.5">
                    {item.badge}
                  </Badge>
                </div>
                <CardHeader className="flex-1 p-4">
                  <div className="flex justify-between items-start mb-1">
                    <CardTitle className="text-base leading-tight">{item.name}</CardTitle>
                    <span className="font-semibold text-amber-600 ml-2">{item.price}</span>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}